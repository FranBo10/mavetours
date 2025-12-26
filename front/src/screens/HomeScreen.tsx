// src/screens/HomeScreen.tsx
import React, { useEffect, useRef, useState } from "react";
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
import NavigationHeader from "../components/NavigationHeader";
import { theme } from "../theme/theme";
import { fetchTours, type Tour } from "../api/tours";

function formatPrice(precio: number) {
  if (!precio) return "Free Tour";
  return `${(precio / 100).toFixed(2)} €`;
}

const COLLAPSED_H = 60;
const EXPANDED_H = 160;

function TourCard({ tour, isLoggedIn }: { tour: Tour; isLoggedIn: boolean }) {
  const [expanded, setExpanded] = useState(false);

  // 0 = cerrado, 1 = abierto
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: expanded ? 1 : 0,
      duration: 320,
      easing: Easing.bezier(0.48, -0.02, 0.41, 1.15),
      useNativeDriver: false, // height no soporta native driver
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

  const goMoreInfo = (e: any) => {
    e?.stopPropagation?.();
    router.push({ pathname: "/tour/[id]", params: { id: String(tour.id) } });
  };

  const goBook = (e: any) => {
    e?.stopPropagation?.();
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    router.push({
      pathname: "/tour/[id]/book",
      params: { id: String(tour.id) },
    });
  };

  return (
    <Pressable
      onPress={() => setExpanded((v) => !v)}
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.95 }]}
    >
      <ImageBackground
        source={{ uri: tour.imagen }}
        style={styles.cardImage}
        resizeMode="cover"
      >
        <View style={styles.cardOverlay} />

        {/* Footer animado */}
        <Animated.View style={[styles.cardBottom, { height: footerHeight }]}>
          <Text style={styles.cardTitle}>{tour.titulo}</Text>

          {/* Contenido oculto animado */}
          <Animated.View
            pointerEvents={expanded ? "auto" : "none"}
            style={{
              opacity: fadeIn,
              transform: [{ translateY: slideUp }],
            }}
          >
            <Text style={styles.cardPrice}>
              Price:{" "}
              <Text style={styles.cardPriceValue}>{formatPrice(tour.precio)}</Text>
            </Text>

            <View style={styles.cardButtonsRow}>
              {/* More information (secondary) */}
              <Pressable
                onPress={goMoreInfo}
                style={({ pressed }) => [
                  styles.btnBase,
                  styles.btnSecondary,
                  pressed && styles.btnPressed,
                ]}
              >
                <Text style={styles.btnText}>More information</Text>
              </Pressable>

              {/* Book now (primary) */}
              <Pressable
                onPress={goBook}
                style={({ pressed }) => [
                  styles.btnBase,
                  styles.btnPrimary,
                  pressed && styles.btnPressed,
                ]}
              >
                <Text style={styles.btnText}>Book now</Text>
              </Pressable>
            </View>

            <Text style={styles.tapHint}>Tap again to hide</Text>
          </Animated.View>

          {!expanded && (
            <Text style={styles.tapHint}>Tap to see price & actions</Text>
          )}
        </Animated.View>
      </ImageBackground>
    </Pressable>
  );
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const numColumns = width >= 700 ? 2 : 1;

  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours()
      .then((res: Tour[]) => {
        console.log("TOURS OK:", res.length);
        setTours(res);
      })
      .catch((e: unknown) => {
        if (e instanceof Error) console.log("TOURS ERROR:", e.message);
        else console.log("TOURS ERROR:", String(e));
        console.log("TOURS ERROR FULL:", e);
      })
      .finally(() => setLoading(false));
  }, []);

  const visibleTours = tours.filter((t) => t.isEstado);

  // 🔐 luego lo conectarás con tu AuthContext real
  const isLoggedIn = false;

  return (
    <View style={styles.container}>

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
        <Text style={styles.serviciosTitle}>Enjoy the experience</Text>

        <FlatList
          data={visibleTours}
          key={numColumns}
          numColumns={numColumns}
          contentContainerStyle={styles.cardsContainer}
          columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={[styles.cardWrapper, numColumns > 1 && { flex: 1 }]}>
              <TourCard tour={item} isLoggedIn={isLoggedIn} />
            </View>
          )}
          ListEmptyComponent={
            !loading ? (
              <Text style={{ textAlign: "center", marginTop: 40 }}>
                No tours available
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
    gap: 10,
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 6,
  },

  // Botones (equivalente a .btn-primary / .btn-secondary)
  btnBase: {
    minHeight: 36,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 2,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  btnPrimary: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primaryDark ?? theme.colors.primary,
  },

  btnSecondary: {
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.secondaryDark ?? theme.colors.secondary,
  },

  btnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  btnText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.main,
    fontWeight: "700",
  },

  tapHint: {
    color: theme.colors.grayDark,
    textAlign: "center",
    marginTop: 8,
    fontSize: 12,
  },
});
