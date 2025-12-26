// app/account.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { theme } from "../src/theme/theme";
import { useAuth } from "../src/context/AuthContext";
import { getMeApi, updateMeApi } from "../src/api/account";

import { API_BASE_URL } from "../src/config/env";

type EditableUser = {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  pais: string;
  avatar: string;
};

const AVATAR_COUNT = 24;

// Ajusta a tu backend real (mismo sitio donde sirves uploads)
// const API_BASE_URL = "http://localhost:8000";
const avatarUrl = (avatarName: string) =>
  `${API_BASE_URL}/uploads/images/avatars/${avatarName}.jpg`;

export default function AccountScreen() {
  const { user, refreshUser, isAuthenticated, isLoading: authLoading } = useAuth();

  const avatars = useMemo(
    () => Array.from({ length: AVATAR_COUNT }, (_, i) => `avatar_${i + 1}`),
    []
  );

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [expandedForm, setExpandedForm] = useState(false);

  const [form, setForm] = useState<EditableUser>({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    pais: "",
    avatar: avatars[0],
  });

  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  // Carga datos reales desde /me (o tu endpoint equivalente)
  useEffect(() => {
    const boot = async () => {
      if (!isAuthenticated) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const me = await getMeApi(); // { success, data }
        const u = me?.data;

        if (!u) throw new Error("No se pudo cargar el usuario");

        const avatar = (u.avatar as string) || avatars[0];

        setForm({
          nombre: u.nombre ?? "",
          apellidos: u.apellidos ?? "",
          email: u.email ?? "",
          telefono: u.telefono ?? "",
          pais: u.pais ?? "",
          avatar,
        });

        setSelectedAvatar(avatar);
      } catch (e: any) {
        Alert.alert("Error", e?.message ?? "Error cargando cuenta");
      } finally {
        setLoading(false);
      }
    };

    boot();
  }, [isAuthenticated, avatars]);

  const setField = (k: keyof EditableUser, v: string) => {
    setForm((prev) => ({ ...prev, [k]: v }));
  };

  const onPickAvatar = (a: string) => {
    setSelectedAvatar(a);
    setForm((prev) => ({ ...prev, avatar: a }));
  };

  const onSave = async () => {
    try {
      setSaving(true);

      // Payload mínimo para actualizar
      const payload = {
        nombre: form.nombre.trim(),
        apellidos: form.apellidos.trim(),
        email: form.email.trim(),
        telefono: form.telefono.trim(),
        pais: form.pais,
        avatar: form.avatar,
      };

      const res = await updateMeApi(payload);

      if (!res?.success) {
        throw new Error(res?.error ?? "No se pudo guardar");
      }

      await refreshUser(); // refresca contexto auth
      Alert.alert("OK", "Tu cuenta se ha modificado correctamente");
      setExpandedForm(false);
    } catch (e: any) {
      Alert.alert("Error", e?.message ?? "Error guardando cambios");
    } finally {
      setSaving(false);
    }
  };

  if (authLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!isAuthenticated) {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>My Account</Text>
          <Text style={styles.infoText}>
            Debes iniciar sesión para ver tu cuenta.
          </Text>
        </View>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  const fullName =
    `${form.nombre ?? ""} ${form.apellidos ?? ""}`.trim().toUpperCase();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>My Account</Text>

      {/* Card superior: avatar + datos */}
      <View style={styles.accountCard}>
        <View style={styles.row}>
          <View style={styles.avatarWrap}>
            <Image
              source={{ uri: avatarUrl(selectedAvatar) }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.details}>
            <Text style={styles.name}>{fullName || "USER"}</Text>
            <Text style={styles.detailLine}>Phone: {form.telefono || "-"}</Text>
            <Text style={styles.detailLine}>E-mail: {form.email || "-"}</Text>
          </View>
        </View>
      </View>

      {/* Sección desplegable: Personal Details */}
      <Pressable
        onPress={() => setExpandedForm((v) => !v)}
        style={({ pressed }) => [styles.toggleRow, pressed && { opacity: 0.9 }]}
      >
        <Text style={styles.toggleText}>Personal Details</Text>
        <Text style={styles.toggleIcon}>{expandedForm ? "−" : "+"}</Text>
      </Pressable>

      {expandedForm ? (
        <View style={styles.formCard}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            value={form.nombre}
            onChangeText={(v) => setField("nombre", v)}
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#9ca3af"
          />

          <Text style={styles.label}>Apellidos</Text>
          <TextInput
            value={form.apellidos}
            onChangeText={(v) => setField("apellidos", v)}
            style={styles.input}
            placeholder="Apellidos"
            placeholderTextColor="#9ca3af"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            value={form.email}
            onChangeText={(v) => setField("email", v)}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#9ca3af"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            value={form.telefono}
            onChangeText={(v) => setField("telefono", v)}
            style={styles.input}
            placeholder="Teléfono"
            placeholderTextColor="#9ca3af"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>País</Text>
          <TextInput
            value={form.pais}
            onChangeText={(v) => setField("pais", v)}
            style={styles.input}
            placeholder="País"
            placeholderTextColor="#9ca3af"
          />

          <Text style={[styles.label, { marginTop: 14 }]}>
            Choose your preferred avatar
          </Text>

          {/* Selector de avatar (grid) */}
          <View style={styles.avatarsGrid}>
            {avatars.map((a) => {
              const isSelected = a === selectedAvatar;
              return (
                <Pressable
                  key={a}
                  onPress={() => onPickAvatar(a)}
                  style={({ pressed }) => [
                    styles.avatarOption,
                    isSelected && styles.avatarOptionSelected,
                    pressed && { opacity: 0.9 },
                  ]}
                >
                  <Image source={{ uri: avatarUrl(user.avatar) }} style={styles.avatar} />
                </Pressable>
              );
            })}
          </View>

          <Pressable
            onPress={onSave}
            disabled={saving}
            style={({ pressed }) => [
              styles.btnPrimary,
              pressed && { opacity: 0.9 },
              saving && { opacity: 0.6 },
            ]}
          >
            {saving ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.btnPrimaryText}>Validate changes</Text>
            )}
          </Pressable>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },
  content: { padding: 16, paddingBottom: 30 },

  center: { flex: 1, justifyContent: "center", alignItems: "center" },

  pageTitle: {
    textAlign: "center",
    fontSize: theme.typography.fontSize.h2,
    fontWeight: "800",
    marginBottom: 12,
    color: theme.colors.black,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    ...theme.shadow.soft,
  },

  title: { fontSize: 20, fontWeight: "800", textAlign: "center" },
  infoText: { marginTop: 10, textAlign: "center", color: "#374151" },

  accountCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    ...theme.shadow.soft,
  },

  row: { flexDirection: "row", gap: 12, alignItems: "center" },

  avatarWrap: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  avatar: { width: "100%", height: "100%" },

  details: { flex: 1 },
  name: { fontWeight: "900", fontSize: 16, marginBottom: 6 },
  detailLine: { color: "#374151", marginBottom: 2 },

  toggleRow: {
    marginTop: 14,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...theme.shadow.soft,
  },
  toggleText: { fontWeight: "900", fontSize: 14 },
  toggleIcon: { fontSize: 18, fontWeight: "900" },

  formCard: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    ...theme.shadow.soft,
  },

  label: { fontWeight: "800", color: "#111827", marginTop: 10, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    color: "#111827",
  },

  avatarsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 8,
  },
  avatarOption: {
    width: 64,
    height: 64,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "#f3f4f6",
  },
  avatarOptionSelected: {
    borderColor: theme.colors.primary,
  },
  avatarMini: { width: "100%", height: "100%" },

  btnPrimary: {
    marginTop: 16,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  btnPrimaryText: { color: "#fff", fontWeight: "900" },
});
