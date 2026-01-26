// src/screens/AccountScreen.tsx
import React, { useMemo, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  TextInput,
  ActivityIndicator,
  Alert,
  Modal,
  FlatList,
} from "react-native";
import { router } from "expo-router";
import CountryPicker, { type Country } from 'react-native-country-picker-modal';

import { useAuth } from "../context/AuthContext";
import { theme } from "../theme/theme";
import { API_BASE_URL } from "../config/env";
import { updateUser, type UpdateUserPayload } from "../api/me";
import i18n from "../i18n";
import { useLanguage } from "../context/LanguageContext";

// Habilitar animación simple en Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Lista de avatares disponibles (según el backend/assets)
const AVAILABLE_AVATARS = Array.from({ length: 24 }, (_, i) => `avatar_${i + 1}`);

export default function AccountScreen() {
  const { user, isAuthenticated, signOut, refreshUser } = useAuth();
  const { locale } = useLanguage();

  // Estado del acordeón
  const [personalOpen, setPersonalOpen] = useState(false);

  // Estado del formulario
  const [formData, setFormData] = useState<UpdateUserPayload>({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    pais: "",
    avatar: "avatar_default",
  });

  // Estado de UI
  const [saving, setSaving] = useState(false);
  const [modalAvatarVisible, setModalAvatarVisible] = useState(false);

  // Country Picker
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  // Sincronizar formulario con usuario actual
  useEffect(() => {
    if (user) {
      setFormData({
        nombre: user.nombre || "",
        apellidos: user.apellidos || "",
        email: user.email || "",
        telefono: user.telefono || "",
        pais: user.pais || "",
        avatar: user.avatar || "avatar_default",
      });
    }
  }, [user]);

  // URL del avatar principal
  const avatarUri = useMemo(() => {
    if (!isAuthenticated || !user?.avatar) return null;
    return `${API_BASE_URL}/uploads/images/avatars/${user.avatar}.jpg`;
  }, [isAuthenticated, user?.avatar]);

  // URL del avatar seleccionado en el formulario (preview)
  const selectedAvatarUri = useMemo(() => {
    const av = formData.avatar || "avatar_default";
    return `${API_BASE_URL}/uploads/images/avatars/${av}.jpg`;
  }, [formData.avatar]);

  const goLogin = () => router.push("/login");
  const goReservas = () => router.push("/reservas");

  const handleLogout = async () => {
    await signOut();
    router.replace("/");
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    try {
      const payload: UpdateUserPayload = { ...formData };
      const res = await updateUser(user.id, payload);
      if (res.success) {
        await refreshUser();
        Alert.alert(i18n.t("success"), i18n.t("success_update"));
        setPersonalOpen(false);
      } else {
        Alert.alert(i18n.t("error"), res.error || i18n.t("error_update"));
      }
    } catch (e: any) {
      Alert.alert(i18n.t("error"), e.message || i18n.t("error_generic"));
    } finally {
      setSaving(false);
    }
  };

  const onSelectCountry = (country: Country) => {
    // Guardamos el nombre del país (o country.name), según lo que espera el backend.
    // El backend espera String.
    setFormData(p => ({ ...p, pais: country.name as string }));
    setCountryPickerVisible(false);
  };

  if (!user) {
    return (
      <View style={[styles.container, styles.center]} key={locale}>
        <Text style={styles.errorText}>
          {i18n.t("login_required")}
        </Text>
        <Pressable style={styles.btnPrimary} onPress={goLogin}>
          <Text style={styles.btnPrimaryText}>{i18n.t("log_in")}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container} key={locale}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        {/* Título */}
        <Text style={styles.tituloCuenta}>{i18n.t("my_account").toUpperCase()}</Text>

        {/* Tarjeta Superior (Resumen) */}
        <View style={styles.cuentaContainer}>
          <View style={styles.cuentaElementos}>
            <View style={styles.cuentaImagen}>
              {avatarUri ? (
                <Image source={{ uri: avatarUri }} style={styles.avatarImg} />
              ) : (
                <View style={styles.avatarFallback}>
                  <Text style={styles.avatarFallbackText}>
                    {(user.nombre || user.email || "U").slice(0, 1).toUpperCase()}
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.cuentaDetalles}>
              <Text style={styles.detalleLinea}>
                {(user.nombre ?? "").toUpperCase()} {(user.apellidos ?? "").toUpperCase()}
              </Text>
              {!!user.telefono && (
                <Text style={styles.detalleLinea}>{i18n.t("phone")}: {user.telefono}</Text>
              )}
              <Text style={styles.detalleLinea}>{i18n.t("email")}: {user.email}</Text>
            </View>
          </View>
        </View>

        {/* Acordeón: Personal Details */}
        <View style={styles.datosPersoContainer}>
          <Pressable
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setPersonalOpen((v) => !v);
            }}
            style={[styles.datosPersoElementos, personalOpen && styles.datosPersoElementosActive]}
          >
            <Text style={styles.datosPersoTitle}>{i18n.t("personal_details")}</Text>
            <Text style={[styles.chevron, personalOpen && styles.chevronOpen]}>
              ▼
            </Text>
          </Pressable>

          {personalOpen && (
            <View style={styles.persoFormContainer}>
              <View style={styles.row}>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                  <Text style={styles.label}>{i18n.t("name")}</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.nombre}
                    onChangeText={(t) => setFormData(p => ({ ...p, nombre: t }))}
                  />
                </View>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                  <Text style={styles.label}>{i18n.t("surname")}</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.apellidos}
                    onChangeText={(t) => setFormData(p => ({ ...p, apellidos: t }))}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>{i18n.t("email")}</Text>
                <TextInput
                  style={[styles.input, { backgroundColor: "#f0f0f0", color: "#888" }]}
                  value={formData.email}
                  editable={false}
                />
              </View>

              <View style={styles.row}>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                  <Text style={styles.label}>{i18n.t("phone")}</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.telefono}
                    onChangeText={(t) => setFormData(p => ({ ...p, telefono: t }))}
                    keyboardType="phone-pad"
                  />
                </View>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                  <Text style={styles.label}>{i18n.t("country")}</Text>
                  <Pressable
                    style={[styles.input, { justifyContent: 'center' }]}
                    onPress={() => setCountryPickerVisible(true)}
                  >
                    <Text style={{ color: formData.pais ? theme.colors.black : '#999' }}>
                      {formData.pais || i18n.t("select_country")}
                    </Text>
                  </Pressable>

                </View>
              </View>

              {/* Selector de Avatar */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>{i18n.t("avatar")}</Text>
                <Pressable
                  style={styles.avatarSelector}
                  onPress={() => setModalAvatarVisible(true)}
                >
                  <Image source={{ uri: selectedAvatarUri }} style={styles.avatarPreview} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.avatarSelectorText}>{i18n.t("choose_avatar")}</Text>
                  </View>
                  <Text style={styles.chevron}>▼</Text>
                </Pressable>
              </View>

              <Pressable
                style={[styles.btnPrimary, { marginTop: 10 }]}
                onPress={handleSave}
                disabled={saving}
              >
                {saving ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.btnPrimaryText}>{i18n.t("validate_changes")}</Text>
                )}
              </Pressable>

              <View style={styles.separator} />

              <Pressable style={styles.btnTertiary} onPress={goReservas}>
                <Text style={styles.btnTertiaryText}>{i18n.t("my_bookings")}</Text>
              </Pressable>

              <Pressable style={styles.btnDanger} onPress={handleLogout}>
                <Text style={styles.btnDangerText}>{i18n.t("log_out")}</Text>
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Modal de Selección de Avatar */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAvatarVisible}
        onRequestClose={() => setModalAvatarVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{i18n.t("select_avatar")}</Text>
            <FlatList
              data={AVAILABLE_AVATARS}
              numColumns={3}
              keyExtractor={(item) => item}
              columnWrapperStyle={{ gap: 10 }}
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item }) => {
                const isSelected = formData.avatar === item;
                return (
                  <Pressable
                    style={[styles.avatarOption, isSelected && styles.avatarOptionSelected]}
                    onPress={() => {
                      setFormData(p => ({ ...p, avatar: item }));
                      setModalAvatarVisible(false);
                    }}
                  >
                    <Image
                      source={{ uri: `${API_BASE_URL}/uploads/images/avatars/${item}.jpg` }}
                      style={styles.avatarGridImg}
                    />
                  </Pressable>
                );
              }}
            />
            <Pressable
              style={styles.btnSecondary}
              onPress={() => setModalAvatarVisible(false)}
            >
              <Text style={styles.btnText}>{i18n.t("cancel")}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Country Picker - Moved to root to avoid layout issues */}
      {countryPickerVisible && (
        <CountryPicker
          visible={countryPickerVisible}
          onClose={() => setCountryPickerVisible(false)}
          onSelect={onSelectCountry}
          countryCode="ES"
          withFilter
          withFlag
          withCountryNameButton={false}
          withAlphaFilter={false}
          withCallingCode={false}
          translation={(locale === 'es' ? 'spa' : locale === 'fr' ? 'fra' : 'common') as 'spa' | 'fra' | 'common'}
          containerButtonStyle={{ display: 'none' }} // Ensure no button is rendered
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },
  center: { justifyContent: "center", alignItems: "center", padding: 20 },
  mainContainer: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 28 },

  tituloCuenta: {
    fontSize: 24, textAlign: "center", marginBottom: 12, fontWeight: "900",
    color: theme.colors.primary,
    textShadowColor: "rgba(0,0,0,0.35)", textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 1,
  },

  cuentaContainer: {
    width: "100%", backgroundColor: theme.colors.white, borderRadius: 12, padding: 14, marginBottom: 14,
    shadowColor: "#000", shadowOpacity: 0.18, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 4,
  },
  cuentaElementos: { flexDirection: "row", gap: 12, alignItems: "center" },
  cuentaImagen: { justifyContent: "center", alignItems: "center" },
  avatarImg: { width: 84, height: 84, borderRadius: 42 },
  avatarFallback: {
    width: 84, height: 84, borderRadius: 42, backgroundColor: theme.colors.grayDark,
    justifyContent: "center", alignItems: "center",
  },
  avatarFallbackText: { color: theme.colors.white, fontWeight: "900", fontSize: 22 },
  cuentaDetalles: { flex: 1 },
  detalleLinea: { fontSize: 16, color: theme.colors.grayDarken, marginBottom: 4, fontWeight: "600" },

  datosPersoContainer: {
    width: "100%", backgroundColor: theme.colors.white, borderRadius: 12,
    shadowColor: "#000", shadowOpacity: 0.18, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 4, overflow: "hidden",
  },
  datosPersoElementos: { height: 55, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  datosPersoElementosActive: { backgroundColor: "rgba(0,0,0,0.03)" },
  datosPersoTitle: { fontSize: 16, color: theme.colors.grayDarken, fontWeight: "700" },
  chevron: { fontSize: 14, color: theme.colors.primary },
  chevronOpen: { transform: [{ rotate: "180deg" }] },

  persoFormContainer: {
    paddingHorizontal: 16, paddingBottom: 16, paddingTop: 6,
    borderTopWidth: 1, borderTopColor: "rgba(0,0,0,0.06)", gap: 12,
  },
  row: { flexDirection: "row", gap: 10 },
  inputGroup: { gap: 4, marginBottom: 4 },
  label: { fontSize: 14, color: theme.colors.grayDark, fontWeight: "600" },
  input: {
    backgroundColor: "#F9F9F9", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10,
    fontSize: 16, borderWidth: 1, borderColor: "#EEE", color: theme.colors.black,
  },

  avatarSelector: {
    flexDirection: "row", alignItems: "center", backgroundColor: "#F9F9F9",
    borderRadius: 8, padding: 8, borderWidth: 1, borderColor: "#EEE", gap: 10,
  },
  avatarPreview: { width: 50, height: 50, borderRadius: 25 },
  avatarSelectorText: { fontSize: 14, color: theme.colors.grayDarken },

  separator: { height: 1, backgroundColor: "#EEE", marginVertical: 8 },

  btnPrimary: { backgroundColor: theme.colors.primary, paddingVertical: 12, paddingHorizontal: 18, borderRadius: 10, alignItems: 'center' },
  btnPrimaryText: { color: theme.colors.white, fontWeight: "900", fontSize: 16 },
  btnSecondary: { backgroundColor: theme.colors.grayDark, paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  btnText: { color: theme.colors.white, fontWeight: "700" },
  btnTertiary: { backgroundColor: theme.colors.tertiary, paddingVertical: 12, paddingHorizontal: 14, borderRadius: 10, alignItems: "center" },
  btnTertiaryText: { color: theme.colors.white, fontWeight: "900" },
  btnDanger: { backgroundColor: "#E74C3C", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 10, alignItems: "center" },
  btnDangerText: { color: theme.colors.white, fontWeight: "900" },

  errorText: { color: "#b91c1c", textAlign: "center", marginBottom: 14, fontSize: 16, fontWeight: "700" },

  // Modal styles
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", padding: 20 },
  modalContent: {
    width: "100%", maxHeight: "80%", backgroundColor: "white", borderRadius: 16, padding: 20,
    elevation: 5,
  },
  modalTitle: { fontSize: 20, fontWeight: "800", textAlign: "center", marginBottom: 20, color: theme.colors.primary },
  avatarOption: {
    flex: 1, aspectRatio: 1, margin: 4, borderRadius: 8, borderWidth: 2, borderColor: "transparent",
    overflow: "hidden", alignItems: 'center', justifyContent: 'center'
  },
  avatarOptionSelected: { borderColor: theme.colors.secondary },
  avatarGridImg: { width: "100%", height: "100%", resizeMode: "cover" },
});
