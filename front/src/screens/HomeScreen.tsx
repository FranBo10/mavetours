// src/screens/HomeScreen.tsx
import React, { useEffect, useRef, useState } from "react";
import i18n from "../i18n";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Pressable,
  Animated,
  Easing,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { theme } from "../theme/theme";
import { Destino, fetchDestinos } from "../api/destinos";
import { useLanguage } from "../context/LanguageContext";

const COLLAPSED_H = 50;
const EXPANDED_H = 140; // Ajustado para destinos

function DestinoCard({
  destino,
  expanded,
  onToggle,
}: {
  destino: Destino;
  expanded: boolean;
  onToggle: () => void;
}) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: expanded ? 1 : 0,
      duration: 500,
      easing: Easing.bezier(0.48, -0.02, 0.41, 1.15),
      useNativeDriver: false,
    }).start();
  }, [expanded, anim]);

  const footerHeight = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLLAPSED_H, EXPANDED_H],
  });

  const fadeIn = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const slideUp = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [12, 0],
  });

  const goCircuitos = () => {
    router.push({ pathname: "/destinos/[slug]" as any, params: { slug: destino.slug } });
  };

  const goTours = () => {
    router.push({
      pathname: "/ciudades/[destinoId]" as any,
      params: { destinoId: String(destino.id), destinoNombre: destino.titulo },
    });
  };

  return (
    <Pressable
      onPress={onToggle}
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.95 }]}
    >
      <ImageBackground
        source={{ uri: destino.imagen }}
        style={styles.cardImage}
        resizeMode="cover"
      >
        <View style={styles.cardOverlay} />

        {/* Animated Footer */}
        <Animated.View style={[styles.cardBottom, { height: footerHeight }]}>
          <Text style={styles.cardTitle}>{destino.titulo}</Text>

          {/* Hidden Content */}
          <Animated.View
            pointerEvents={expanded ? "auto" : "none"}
            style={{
              opacity: fadeIn,
              transform: [{ translateY: slideUp }],
            }}
          >
            <View style={styles.cardButtonsRow}>
              <Pressable
                onPress={goCircuitos}
                style={({ pressed }) => [
                  styles.btnBase,
                  styles.btnSecondary,
                  pressed && styles.btnPressed,
                  { flex: 1 },
                ]}
              >
                <Text style={styles.btnText}>{i18n.t("circuits")}</Text>
              </Pressable>
              <Pressable
                onPress={goTours}
                style={({ pressed }) => [
                  styles.btnBase,
                  styles.btnPrimary,
                  pressed && styles.btnPressed,
                  { flex: 1 },
                ]}
              >
                <Text style={styles.btnText}>{i18n.t("tours")}</Text>
              </Pressable>
            </View>

            <Text style={styles.tapHint}>{i18n.t("tap_to_hide")}</Text>
          </Animated.View>

          {!expanded && (
            <Text style={styles.tapHint}>{i18n.t("tap_to_see")}</Text>
          )}
        </Animated.View>
      </ImageBackground>
    </Pressable>
  );
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const numColumns = width >= 700 ? 2 : 1;
  const { locale } = useLanguage();

  const [destinos, setDestinos] = useState<Destino[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCardId, setExpandedCardId] = useState<string | number | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchDestinos()
      .then((res: Destino[]) => {
        setDestinos(res);
      })
      .catch((e: unknown) => {
        console.log("DESTINOS ERROR:", e);
      })
      .finally(() => setLoading(false));
  }, []);

  const visibleDestinos = destinos.filter((d) => d.isActive);

  const handleToggleCard = (id: string | number) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <View style={styles.container} key={locale}>
      {/* HERO */}
      <ImageBackground
        source={require("../../assets/images/mave.jpg")}
        style={styles.hero}
        resizeMode="cover"
      />

      {/* CONTENIDO */}
      <View style={styles.mainContent}>
        <Text style={styles.sectionTitle}>{i18n.t("destinations")}</Text>

        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </View>
        ) : (
          <FlatList
            data={visibleDestinos}
            key={numColumns}
            numColumns={numColumns}
            contentContainerStyle={styles.cardsContainer}
            columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <View style={[styles.cardWrapper, numColumns > 1 && { flex: 1 }]}>
                <DestinoCard
                  destino={item}
                  expanded={expandedCardId === item.id}
                  onToggle={() => handleToggleCard(item.id)}
                />
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>{i18n.t("no_destinations")}</Text>
            }
          />
        )}
      </View>
    </View>
  );
}

/* ================== STYLES ================== */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },
  hero: { height: 180, width: "100%" },

  mainContent: {
    flex: 1,
    paddingTop: theme.spacing.sm,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
    color: theme.colors.black,
    marginBottom: theme.spacing.sm,
    textTransform: "uppercase",
  },

  cardsContainer: {
    paddingHorizontal: theme.spacing.sm,
    paddingBottom: 40,
  },
  columnWrapper: { gap: 16 },
  cardWrapper: { marginBottom: 16 },

  card: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: theme.colors.white,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardImage: { height: 175, width: "100%", justifyContent: "flex-end" },
  cardOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.1)" },

  cardBottom: {
    backgroundColor: "rgba(30, 30, 30, 0.9)", // Fondo oscuro semitransparente
    paddingVertical: 12,
    paddingHorizontal: 15,
    overflow: "hidden",
  },
  cardTitle: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    textTransform: "uppercase",
  },
  cardDescription: {
    color: theme.colors.white,
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    opacity: 0.9,
  },

  cardButtonsRow: {
    marginTop: 15,
    flexDirection: "row",
    gap: 10,
  },

  btnBase: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPrimary: { backgroundColor: theme.colors.primary },
  btnSecondary: { backgroundColor: theme.colors.secondary },
  btnPressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
  btnText: {
    color: theme.colors.white,
    fontWeight: "800",
    textTransform: "uppercase",
  },

  tapHint: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 8,
    fontSize: 11,
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { textAlign: "center", marginTop: 40, color: theme.colors.grayDark },
});