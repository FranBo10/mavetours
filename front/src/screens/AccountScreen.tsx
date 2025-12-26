// src/screens/AccountScreen.tsx
import React, { useMemo, useState } from "react";
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
} from "react-native";
import { router } from "expo-router";

import NavigationHeader from "../components/NavigationHeader";
import { useAuth } from "../context/AuthContext";
import { theme } from "../theme/theme";

// Habilitar animación simple en Android (opcional, pero queda muy bien)
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function AccountScreen() {
  const { user, isAuthenticated, signOut } = useAuth();

  // “datos personales” tipo cuenta.js (collapsed/expanded)
  const [personalOpen, setPersonalOpen] = useState(false);

  const avatarUri = useMemo(() => {
    if (!isAuthenticated || !user?.avatar) return null;

    // Ajusta ruta si tu API sirve avatares en otro path
    // (en Symfony: /uploads/images/avatars/{avatar}.jpg)
    return `http://localhost:8000/uploads/images/avatars/${user.avatar}.jpg`;
  }, [isAuthenticated, user?.avatar]);

  const goLogin = () => router.push("/login");
  const goReservas = () => router.push("/reservas"); // app/(tabs)/reservas.tsx
  const handleLogout = async () => {
    await signOut();
    router.replace("/"); // vuelve a Home
  };

  if (!user) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>
          Debes iniciar sesión para acceder a tu cuenta.
        </Text>

        <Pressable style={styles.btnPrimary} onPress={goLogin}>
          <Text style={styles.btnPrimaryText}>Iniciar sesión</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.mainContainer}>
        {/* Título */}
        <Text style={styles.tituloCuenta}>MY ACCOUNT</Text>

        {/* cuenta-container */}
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
                <Text style={styles.detalleLinea}>Phone: {user.telefono}</Text>
              )}
              <Text style={styles.detalleLinea}>E-mail: {user.email}</Text>
            </View>
          </View>
        </View>

        {/* datos_perso-container */}
        <View style={styles.datosPersoContainer}>
          <Pressable
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setPersonalOpen((v) => !v);
            }}
            style={[styles.datosPersoElementos, personalOpen && styles.datosPersoElementosActive]}
          >
            <Text style={styles.datosPersoTitle}>Personal Details</Text>
            <Text style={[styles.chevron, personalOpen && styles.chevronOpen]}>
              ▼
            </Text>
          </Pressable>

          {personalOpen && (
            <View style={styles.persoFormContainer}>
              {/* Aquí luego meteremos tu formulario real (API + inputs). */}
              <Text style={styles.formHint}>
                Aquí irá el formulario (nombre, apellidos, email, teléfono, país, avatar…)
              </Text>

              <Pressable style={styles.btnTertiary} onPress={goReservas}>
                <Text style={styles.btnTertiaryText}>My Bookings</Text>
              </Pressable>

              <Pressable style={styles.btnDanger} onPress={handleLogout}>
                <Text style={styles.btnDangerText}>Log out</Text>
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

/* ================== STYLES (inspirado en cuenta.css) ================== */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },

  center: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
  },

  // titulo__cuenta
  tituloCuenta: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "900",
    color: theme.colors.primary,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },

  // cuenta-container
  cuentaContainer: {
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  cuentaElementos: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },

  cuentaImagen: { justifyContent: "center", alignItems: "center" },

  avatarImg: {
    width: 84,
    height: 84,
    borderRadius: 42,
  },

  avatarFallback: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: theme.colors.grayDark,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarFallbackText: { color: theme.colors.white, fontWeight: "900", fontSize: 22 },

  cuentaDetalles: { flex: 1 },

  detalleLinea: {
    fontSize: 16,
    color: theme.colors.grayDarken,
    marginBottom: 4,
    fontWeight: "600",
  },

  // datos_perso-container
  datosPersoContainer: {
    width: "100%",
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    overflow: "hidden",
  },

  datosPersoElementos: {
    height: 55,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  datosPersoElementosActive: {
    // un toque visual al abrir
    backgroundColor: "rgba(0,0,0,0.03)",
  },

  datosPersoTitle: {
    fontSize: 16,
    color: theme.colors.grayDarken,
    fontWeight: "700",
  },

  chevron: {
    fontSize: 14,
    color: theme.colors.primary,
    transform: [{ rotate: "0deg" }],
  },
  chevronOpen: {
    transform: [{ rotate: "180deg" }],
  },

  // perso_form-container
  persoFormContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.06)",
    gap: 10,
  },

  formHint: {
    color: theme.colors.grayDark,
    fontSize: 14,
    lineHeight: 20,
  },

  // Botones (simulando btn-primary / btn-tertiary / btn-danger)
  btnPrimary: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  btnPrimaryText: { color: theme.colors.white, fontWeight: "900" },

  btnTertiary: {
    backgroundColor: theme.colors.tertiary,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  btnTertiaryText: { color: theme.colors.white, fontWeight: "900" },

  btnDanger: {
    backgroundColor: "#E74C3C",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  btnDangerText: { color: theme.colors.white, fontWeight: "900" },

  errorText: {
    color: "#b91c1c",
    textAlign: "center",
    marginBottom: 14,
    fontSize: 16,
    fontWeight: "700",
  },
});
