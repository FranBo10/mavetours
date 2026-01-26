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
} from "react-native";
import { router } from "expo-router";
import { theme } from "../theme/theme";
import { fetchTours, type Tour, getTourTitle } from "../api/tours";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";

function formatPrice(precio: number) {
  if (!precio) return i18n.t("free");
  return `${(precio / 100).toFixed(2)} €`;
}

const COLLAPSED_H = 60;
const EXPANDED_H = 240; // Maximize to cover full card image (height: 240)

function TourCard({
  tour,
  isLoggedIn,
  expanded,
  onToggle,
}: {
  tour: Tour;
  isLoggedIn: boolean;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { locale } = useLanguage();

  // 0 = closed, 1 = open
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

  const goMoreInfo = () => {
    router.push({ pathname: "/tour/[id]", params: { id: String(tour.id) } });
  };

  const goFreeTour = () => {
    router.push({ pathname: "/tour/[id]/book", params: { id: String(tour.id) } });
  };

  const goAudioguide = () => {
    router.push({ pathname: "/audioguide/[id]", params: { id: String(tour.id) } });
  };

  const goLogin = () => {
    router.push("/login");
  };

  return (
    <Pressable
      onPress={onToggle}
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.95 }]}
    >
      <ImageBackground
        source={{ uri: tour.imagen }}
        style={styles.cardImage}
        resizeMode="cover"
      >
        <View style={styles.cardOverlay} />

        {/* Animated Footer */}
        <Animated.View style={[styles.cardBottom, { height: footerHeight }]}>
          <Text style={styles.cardTitle}>{getTourTitle(tour, locale)}</Text>

          {/* Hidden Content */}
          <Animated.View
            pointerEvents={expanded ? "auto" : "none"}
            style={{
              opacity: fadeIn,
              transform: [{ translateY: slideUp }],
            }}
          >
            <Text style={styles.cardPrice}>
              {i18n.t("price")}{" "}
              <Text style={styles.cardPriceValue}>{formatPrice(tour.precio)}</Text>
            </Text>

            <View style={styles.cardButtonsRow}>
              {/* INFO (Always visible, full width) */}
              <Pressable
                onPress={goMoreInfo}
                style={({ pressed }) => [
                  styles.btnBase,
                  styles.btnSecondary,
                  pressed && styles.btnPressed,
                  { width: "100%" }
                ]}
              >
                <Text style={styles.btnText}>{i18n.t("info")}</Text>
              </Pressable>

              {isLoggedIn ? (
                <>
                  {/* FREETOUR */}
                  <Pressable
                    onPress={goFreeTour}
                    style={({ pressed }) => [
                      styles.btnBase,
                      styles.btnPrimary,
                      pressed && styles.btnPressed,
                      { flex: 1, minWidth: "45%" }
                    ]}
                  >
                    <Text style={styles.btnText}>{i18n.t("freetour")}</Text>
                  </Pressable>

                  {/* AUDIOGUIDE */}
                  <Pressable
                    onPress={goAudioguide}
                    style={({ pressed }) => [
                      styles.btnBase,
                      styles.btnWarning,
                      pressed && styles.btnPressed,
                      { flex: 1, minWidth: "45%" }
                    ]}
                  >
                    <Text style={styles.btnText}>{i18n.t("audioguide")}</Text>
                  </Pressable>
                </>
              ) : (
                <>
                  {/* Book now -> Login */}
                  <Pressable
                    onPress={goLogin}
                    style={({ pressed }) => [
                      styles.btnBase,
                      styles.btnPrimary,
                      pressed && styles.btnPressed,
                      { flex: 1, minWidth: "45%" }
                    ]}
                  >
                    <Text style={styles.btnText}>{i18n.t("freetour")}</Text>
                  </Pressable>

                  {/* Navigate -> Login */}
                  <Pressable
                    onPress={goLogin}
                    style={({ pressed }) => [
                      styles.btnBase,
                      styles.btnWarning,
                      pressed && styles.btnPressed,
                      { flex: 1, minWidth: "45%" }
                    ]}
                  >
                    <Text style={styles.btnText}>{i18n.t("audioguide")}</Text>
                  </Pressable>
                </>
              )}
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
  const { isAuthenticated } = useAuth();
  const { locale } = useLanguage();

  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCardId, setExpandedCardId] = useState<string | number | null>(null);

  useEffect(() => {
    fetchTours()
      .then((res: Tour[]) => {
        setTours(res);
      })
      .catch((e: unknown) => {
        console.log("TOURS ERROR:", e);
      })
      .finally(() => setLoading(false));
  }, []);

  const visibleTours = tours.filter((t) => t.isEstado);

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
      >
        <View style={styles.heroOverlay} />
      </ImageBackground>

      {/* SERVICIOS */}
      <View style={styles.servicios}>
        <Text style={styles.serviciosTitle}>{i18n.t("enjoy")}</Text>

        <FlatList
          data={visibleTours}
          key={numColumns}
          numColumns={numColumns}
          contentContainerStyle={styles.cardsContainer}
          columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={[styles.cardWrapper, numColumns > 1 && { flex: 1 }]}>
              <TourCard
                tour={item}
                isLoggedIn={isAuthenticated}
                expanded={expandedCardId === item.id}
                onToggle={() => handleToggleCard(item.id)}
              />
            </View>
          )}
          ListEmptyComponent={
            !loading ? (
              <Text style={{ textAlign: "center", marginTop: 40 }}>
                {i18n.t("no_tours")}
              </Text>
            ) : null
          }
        />
      </View>
    </View>
  );
}

/* ================== STYLES ================== */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },

  hero: { height: 230, width: "100%" },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  servicios: {
    backgroundColor: theme.colors.grayLight,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  serviciosTitle: {
    textAlign: "center",
    fontSize: theme.typography.fontSize.h2,
    color: theme.colors.black,
    marginBottom: theme.spacing.lg,
  },

  cardsContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  columnWrapper: { gap: 16 },
  cardWrapper: { marginBottom: 16 },

  card: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: theme.colors.white,
    ...theme.shadow.soft,
  },
  cardImage: { height: 240, width: "100%", justifyContent: "flex-end" },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0)",
  },

  cardBottom: {
    backgroundColor: theme.colors.grayDarken,
    paddingVertical: 10,
    paddingHorizontal: 12,
    overflow: "hidden",
  },
  cardTitle: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.h3,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },

  cardPrice: {
    color: theme.colors.white,
    textAlign: "center",
    marginBottom: 10,
  },
  cardPriceValue: { color: theme.colors.secondary, fontWeight: "800" },

  cardButtonsRow: {
    flexDirection: "row",
    gap: 8, // reduced gap slightly to fit better if needed, flexWrap takes care
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 12,
  },

  // Button Base
  btnBase: {
    minHeight: 48, // Taller buttons
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    marginBottom: 8, // Added margin bottom for wrapped items
  },

  btnPrimary: {
    backgroundColor: theme.colors.primary,
  },

  btnSecondary: {
    backgroundColor: theme.colors.secondary,
  },

  btnWarning: {
    backgroundColor: theme.colors.warning,
  },

  btnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  btnText: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  tapHint: {
    color: theme.colors.grayDark,
    textAlign: "center",
    marginTop: 2,
    fontSize: 12,
  },
});
