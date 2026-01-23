// src/components/NavigationHeader.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { theme } from "../theme/theme";
import { useAuth } from "../context/AuthContext";
import { API_BASE_URL } from "../config/env";

type Locale = "es" | "en" | "fr";

function avatarUrl(avatar?: string | null) {
  if (!avatar) return null;
  // Ajusta según cómo guardes avatar en DB
  const hasExt = /\.[a-zA-Z0-9]+$/.test(avatar);
  const file = hasExt ? avatar : `${avatar}.jpg`;
  return `${API_BASE_URL}/uploads/images/avatars/${file}`;
}

export default function NavigationHeader() {
  const insets = useSafeAreaInsets();

  // ✅ AUTH REAL
  const { isAuthenticated, user, isLoading, signOut } = useAuth();

  const isAdminOrGuia = useMemo(() => {
    const roles = user?.roles ?? [];
    return roles.includes("ROLE_ADMIN") || roles.includes("ROLE_GUIA");
  }, [user?.roles]);

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Animación: menú entra desde la izquierda (tipo panel)
  const anim = useRef(new Animated.Value(0)).current; // 0 cerrado, 1 abierto

  useEffect(() => {
    Animated.timing(anim, {
      toValue: open ? 1 : 0,
      duration: 260,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      if (!open) setLangOpen(false);
    });
  }, [open, anim]);

  const panelTranslateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-320, 0],
  });

  const overlayOpacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const closeMenu = () => setOpen(false);

  const go = (path: string) => {
    closeMenu();
    router.push(path as any);
  };

  const setLang = (_lang: Locale) => {
    // TODO: guardar idioma en AsyncStorage/Context
    setLangOpen(false);
    closeMenu();
  };

  const handleLogout = async () => {
    closeMenu();
    await signOut();
    router.replace("/"); // o "/login"
  };

  const avatar = useMemo(() => avatarUrl(user?.avatar ?? null), [user?.avatar]);

  return (
    <View pointerEvents="box-none" style={[styles.navigation, { paddingTop: insets.top }]}>
      {/* BAR */}
      <View style={styles.navBar}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>
            Mave <Text style={styles.logoNombre}>Tours</Text>
          </Text>
        </View>

        {!open ? (
          <Pressable
            style={({ pressed }) => [styles.menuBtn, pressed && { opacity: 0.85 }]}
            onPress={() => setOpen(true)}
            hitSlop={12}
          >
            <Text style={styles.menuIcon}>☰</Text>
          </Pressable>
        ) : (
          <Pressable
            style={({ pressed }) => [styles.closeBtn, pressed && { opacity: 0.85 }]}
            onPress={() => setOpen(false)}
            hitSlop={12}
          >
            <Text style={styles.closeIcon}>✕</Text>
          </Pressable>
        )}
      </View>

      {/* OVERLAY */}
      <Animated.View
        pointerEvents={open ? "auto" : "none"}
        style={[styles.overlay, { opacity: overlayOpacity }]}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={closeMenu} />
      </Animated.View>

      {/* PANEL */}
      <Animated.View
        pointerEvents={open ? "auto" : "none"}
        style={[
          styles.menuMobile,
          {
            top: styles.navBar.height!,
            transform: [{ translateX: panelTranslateX }],
          },
        ]}
      >
        <View style={styles.menuItems}>
          {/* PERFIL */}
          {isAuthenticated ? (
            <>
              <View style={styles.item}>
                <View style={styles.profile}>
                  <View style={styles.image}>
                    {avatar ? (
                      <Image source={{ uri: avatar }} style={styles.avatar} />
                    ) : (
                      <View style={styles.avatarFallback}>
                        <Text style={styles.avatarFallbackText}>
                          {(user?.nombre?.[0] ?? user?.email?.[0] ?? "U").toUpperCase()}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View style={styles.name}>
                    <Text style={styles.nameText}>{user?.nombre ?? "Usuario"}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.itemSeparator} />
            </>
          ) : null}

          <MenuRow title="Home" icon="🏠" onPress={() => go("/")} />

          {isAuthenticated && isAdminOrGuia ? (
            <>
              <MenuRow title="Admin" icon="👤" onPress={() => go("/admin")} />
              <MenuRow title="Calendar" icon="🚩" onPress={() => go("/calendar")} />
            </>
          ) : null}

          <MenuRow title="Blog" icon="📚" onPress={() => go("/blog")} />
          <MenuRow title="Contact" icon="💬" onPress={() => go("/contact")} />

          {/* Language toggle */}
          <Pressable
            style={({ pressed }) => [styles.item, pressed && { opacity: 0.9 }]}
            onPress={() => setLangOpen((v) => !v)}
          >
            <View style={styles.row}>
              <Text style={styles.icon}>🌐</Text>
              <Text style={styles.title}>Language</Text>
            </View>
            <Text style={styles.chevron}>{langOpen ? "▲" : "▼"}</Text>
          </Pressable>

          {langOpen ? (
            <View style={styles.languageDropdown}>
              <LangRow flag="🇬🇧" label="English" onPress={() => setLang("en")} />
              <LangRow flag="🇫🇷" label="Français" onPress={() => setLang("fr")} />
              <LangRow flag="🇪🇸" label="Español" onPress={() => setLang("es")} />
            </View>
          ) : null}

          {/* AUTH LINKS */}
          {isLoading ? (
            <View style={[styles.item, { justifyContent: "flex-start", gap: 10 }]}>
              <ActivityIndicator color="#fff" />
              <Text style={[styles.title, { textTransform: "none", letterSpacing: 0 }]}>
                Cargando sesión…
              </Text>
            </View>
          ) : isAuthenticated ? (
            <>
              <MenuRow title="My Account" icon="🧾" onPress={() => go("/account")} />
              <MenuRow title="My Bookings" icon="📋" onPress={() => go("/bookings")} />
              <MenuRow title="Log Out" icon="🚪" danger onPress={handleLogout} />
            </>
          ) : (
            <>
              <MenuRow title="Log in" icon="👤" onPress={() => go("/login")} />
              <MenuRow title="Registration" icon="📝" onPress={() => go("/register")} />
            </>
          )}
        </View>
      </Animated.View>
    </View>
  );
}

/* ---------- UI rows ---------- */

function MenuRow({
  title,
  icon,
  onPress,
  danger,
}: {
  title: string;
  icon: string;
  onPress: () => void | Promise<void>;
  danger?: boolean;
}) {
  return (
    <Pressable style={({ pressed }) => [styles.item, pressed && { opacity: 0.9 }]} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={[styles.title, danger && { color: theme.colors.danger ?? "#e74c3c" }]}>
          {title}
        </Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}

function LangRow({
  flag,
  label,
  onPress,
}: {
  flag: string;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={({ pressed }) => [styles.langItem, pressed && { opacity: 0.9 }]} onPress={onPress}>
      <Text style={styles.langFlag}>{flag}</Text>
      <Text style={styles.langLabel}>{label}</Text>
    </Pressable>
  );
}

/* ---------- styles ---------- */

const styles = StyleSheet.create({
  navigation: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
  },

  navBar: {
    height: 50,
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  logo: { flex: 1 },
  logoText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 2,
    textTransform: "uppercase",
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  logoNombre: { color: theme.colors.white, fontWeight: "900" },

  menuBtn: {
    height: 42,
    minWidth: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
  },
  closeBtn: {
    height: 42,
    minWidth: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
  },
  menuIcon: { color: theme.colors.white, fontSize: 22, fontWeight: "900" },
  closeIcon: { color: theme.colors.white, fontSize: 20, fontWeight: "900" },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  menuMobile: {
    position: "absolute",
    left: 0,
    width: 320,
    minHeight: 380,
    backgroundColor: theme.colors.primary,
    borderBottomRightRadius: 20,
    paddingVertical: 10,
    zIndex: 9999,
  },

  menuItems: { paddingHorizontal: 10 },

  item: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  icon: { fontSize: 18, color: theme.colors.white },
  title: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  arrow: { color: "rgba(255,255,255,0.75)", fontSize: 18, fontWeight: "900" },

  itemSeparator: {
    height: 1,
    width: "92%",
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.35)",
    marginVertical: 10,
  },

  profile: { flexDirection: "row", alignItems: "center", gap: 10 },
  image: { width: 50, height: 50, borderRadius: 25, overflow: "hidden" },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  avatarFallback: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarFallbackText: { color: theme.colors.white, fontWeight: "900" },
  name: { justifyContent: "center" },
  nameText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "900",
    textTransform: "uppercase",
  },

  chevron: { color: "rgba(255,255,255,0.85)", fontWeight: "900" },

  languageDropdown: {
    marginTop: 6,
    marginBottom: 8,
    marginHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.15)",
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  langItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  langFlag: { fontSize: 18 },
  langLabel: { color: theme.colors.white, fontSize: 14, fontWeight: "800" },
});
