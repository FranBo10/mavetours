import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Easing,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { theme } from "../theme/theme";
// Si ya tienes AuthContext, cámbialo por useAuth()
/* import { useAuth } from "../context/AuthContext"; */

type Lang = "en" | "fr" | "es";

export default function NavigationHeader() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  // 🔐 Sustituye esto por tu AuthContext real cuando lo tengas
  const isLoggedIn = false;
  const user = null as null | { nombre?: string; avatar?: string; roles?: string[] };

  const isAdminOrGuia = useMemo(() => {
    const roles = user?.roles ?? [];
    return roles.includes("ROLE_ADMIN") || roles.includes("ROLE_GUIA");
  }, [user?.roles]);

  // Drawer state
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Animación lateral
  const drawerW = Math.min(340, Math.max(280, Math.floor(width * 0.82)));
  const x = useRef(new Animated.Value(drawerW)).current; // 0 visible, drawerW oculto
  const overlay = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(x, {
        toValue: open ? 0 : drawerW,
        duration: 280,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(overlay, {
        toValue: open ? 1 : 0,
        duration: 220,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (!open) setLangOpen(false);
    });
  }, [open, drawerW, x, overlay]);

  const close = () => setOpen(false);

  const go = (path: string) => {
    close();
    router.push(path as any);
  };

  const setLang = (lang: Lang) => {
    // Aquí puedes guardar idioma en Zustand/Context/AsyncStorage
    // Por ahora solo cierro el submenú
    setLangOpen(false);
  };

  return (
    <View style={[styles.headerWrap, { paddingTop: insets.top }]}>
      {/* Header fijo */}
      <View style={styles.header}>
        <Text style={styles.brand}>Mave</Text>

        <Pressable
          onPress={() => setOpen((v) => !v)}
          hitSlop={12}
          style={({ pressed }) => [styles.iconBtn, pressed && { opacity: 0.85 }]}
        >
          <Text style={styles.iconBtnText}>{open ? "✕" : "☰"}</Text>
        </Pressable>
      </View>

      {/* Overlay + Drawer */}
      {/** OJO: lo renderizo siempre para que la animación sea fluida */}
      <Animated.View
        pointerEvents={open ? "auto" : "none"}
        style={[
          styles.overlay,
          {
            opacity: overlay,
          },
        ]}
      >
        {/* cerrar al tocar fuera */}
        <Pressable style={StyleSheet.absoluteFill} onPress={close} />
      </Animated.View>

      <Animated.View
        pointerEvents={open ? "auto" : "none"}
        style={[
          styles.drawer,
          { width: drawerW, paddingTop: insets.top + 12, transform: [{ translateX: x }] },
        ]}
      >
        {/* Perfil */}
        {isLoggedIn ? (
          <>
            <View style={styles.profileRow}>
              <View style={styles.avatarWrap}>
                {/* Si tienes URL real: <Image source={{ uri: ... }} /> */}
                {user?.avatar ? (
                  <Image
                    source={{ uri: user.avatar }}
                    style={styles.avatar}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.avatarFallback}>
                    <Text style={styles.avatarFallbackText}>
                      {(user?.nombre?.[0] ?? "U").toUpperCase()}
                    </Text>
                  </View>
                )}
              </View>

              <View style={styles.profileName}>
                <Text style={styles.profileNameText}>{user?.nombre ?? "Usuario"}</Text>
              </View>
            </View>

            <View style={styles.separator} />
          </>
        ) : null}

        {/* Items */}
        <MenuItem title="Home" icon="🏠" onPress={() => go("/")} />
        {isLoggedIn && isAdminOrGuia ? (
          <>
            <MenuItem title="Admin" icon="👤" onPress={() => go("/admin")} />
            <MenuItem title="Calendar" icon="🚩" onPress={() => go("/calendar")} />
          </>
        ) : null}

        <MenuItem title="Blog" icon="📚" onPress={() => go("/blog")} />
        <MenuItem title="Contact" icon="💬" onPress={() => go("/contact")} />

        {/* Idioma con dropdown */}
        <Pressable
          onPress={() => setLangOpen((v) => !v)}
          style={({ pressed }) => [styles.item, pressed && { opacity: 0.9 }]}
        >
          <View style={styles.itemLeft}>
            <Text style={styles.itemIcon}>🌐</Text>
            <Text style={styles.itemTitle}>Language</Text>
          </View>
          <Text style={styles.chevron}>{langOpen ? "▲" : "▼"}</Text>
        </Pressable>

        {langOpen ? (
          <View style={styles.langBox}>
            <LangItem label="English" flag="🇬🇧" onPress={() => setLang("en")} />
            <LangItem label="Français" flag="🇫🇷" onPress={() => setLang("fr")} />
            <LangItem label="Español" flag="🇪🇸" onPress={() => setLang("es")} />
          </View>
        ) : null}

        <View style={styles.separator} />

        {/* Auth items */}
        {isLoggedIn ? (
          <>
            <MenuItem title="My Account" icon="🧾" onPress={() => go("/account")} />
            <MenuItem title="My Bookings" icon="📋" onPress={() => go("/bookings")} />
            <MenuItem title="Log out" icon="🚪" danger onPress={() => go("/logout")} />
          </>
        ) : (
          <>
            <MenuItem title="Log in" icon="👤" onPress={() => go("/login")} />
            <MenuItem title="Registration" icon="📝" onPress={() => go("/register")} />
          </>
        )}
      </Animated.View>
    </View>
  );
}

/* ---------- small components ---------- */

function MenuItem({
  title,
  icon,
  onPress,
  danger,
}: {
  title: string;
  icon: string;
  onPress: () => void;
  danger?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.item, pressed && { opacity: 0.9 }]}
    >
      <View style={styles.itemLeft}>
        <Text style={styles.itemIcon}>{icon}</Text>
        <Text style={[styles.itemTitle, danger && { color: theme.colors.danger ?? "#e74c3c" }]}>
          {title}
        </Text>
      </View>
      <Text style={styles.itemArrow}>›</Text>
    </Pressable>
  );
}

function LangItem({
  label,
  flag,
  onPress,
}: {
  label: string;
  flag: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.langItem, pressed && { opacity: 0.9 }]}>
      <Text style={styles.langFlag}>{flag}</Text>
      <Text style={styles.langLabel}>{label}</Text>
    </Pressable>
  );
}

/* ---------- styles ---------- */

const styles = StyleSheet.create({
  headerWrap: {
    width: "100%",
    backgroundColor: theme.colors.grayDarken,
    zIndex: 50,
  },

  header: {
    height: 52,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  brand: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.h3,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  iconBtn: {
    minHeight: 38,
    minWidth: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  iconBtnText: { color: theme.colors.white, fontSize: 20, fontWeight: "900" },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
    zIndex: 60,
  },

  drawer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.white,
    zIndex: 70,
    paddingHorizontal: 14,
    paddingBottom: 18,
    borderLeftWidth: 1,
    borderLeftColor: "rgba(0,0,0,0.06)",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
  },
  avatarWrap: { width: 44, height: 44, borderRadius: 22, overflow: "hidden" },
  avatar: { width: 44, height: 44 },
  avatarFallback: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarFallbackText: { color: theme.colors.white, fontWeight: "900" },
  profileName: { flex: 1 },
  profileNameText: { fontSize: theme.typography.fontSize.main, fontWeight: "800" },

  separator: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.08)",
    marginVertical: 10,
  },

  item: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  itemIcon: { fontSize: 18 },
  itemTitle: { fontSize: theme.typography.fontSize.main, fontWeight: "700" },
  itemArrow: { fontSize: 18, color: "rgba(0,0,0,0.35)" },

  chevron: { color: "rgba(0,0,0,0.55)", fontWeight: "900" },

  langBox: {
    marginTop: 6,
    marginBottom: 2,
    backgroundColor: "rgba(0,0,0,0.03)",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  langItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  langFlag: { fontSize: 18 },
  langLabel: { fontSize: theme.typography.fontSize.main, fontWeight: "700" },
});
