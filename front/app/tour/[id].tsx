// app/tour/[id].tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import NavigationHeader from "../../src/components/NavigationHeader";
import { theme } from "../../src/theme/theme";
import { fetchTourById, type Tour } from "../../src/api/client";

function formatPrice(precio: number) {
  if (!precio) return "Free Tour";
  return `${(precio / 100).toFixed(2)} €`;
}

export default function TourScreen() {
  const params = useLocalSearchParams<{ id?: string }>();
  const id = useMemo(() => Number(params.id), [params.id]);

  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔐 luego lo conectarás con tu AuthContext real
  const isLoggedIn = false;

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        if (!id || Number.isNaN(id)) {
          throw new Error("Invalid tour id");
        }

        const found = await fetchTourById(id);

        // Si quieres evitar mostrar tours desactivados
        if (!found.isEstado) throw new Error("Tour not available");

        if (mounted) setTour(found);
      } catch (e: any) {
        if (mounted) setError(e?.message ?? "Error loading tour");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading tour...</Text>
      </View>
    );
  }

  if (error || !tour) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorTitle}>Oops</Text>
        <Text style={styles.errorText}>{error ?? "Tour not available"}</Text>

        <Link href="/" asChild>
          <Pressable style={[styles.btn, styles.btnPrimary]}>
            <Text style={styles.btnText}>Go back Home</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* HERO */}
      <ImageBackground
        source={{ uri: tour.imagen }}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.heroOverlay} />

        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>{tour.titulo}</Text>
          <Text style={styles.heroPrice}>{formatPrice(tour.precio)}</Text>

          <Link
            href={
              isLoggedIn
                ? { pathname: "/tour/[id]/book", params: { id: String(tour.id) } }
                : "/login"
            }
            asChild
          >
            <Pressable style={[styles.btn, styles.btnPrimary]}>
              <Text style={styles.btnText}>Book now</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>About this tour</Text>

        <Text style={styles.paragraph}>
          {tour.descripcionCorta ??
            "We’ll add the short description here when the API provides it."}
        </Text>

        {tour.descripcionLarga ? (
          <>
            <Text style={[styles.sectionTitle, { marginTop: 18 }]}>Details</Text>
            <Text style={styles.paragraph}>{tour.descripcionLarga}</Text>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },

  center: { justifyContent: "center", alignItems: "center", padding: 20 },
  loadingText: { marginTop: 12, color: theme.colors.grayDark },
  errorTitle: { fontSize: 22, fontWeight: "800", marginBottom: 6 },
  errorText: {
    textAlign: "center",
    color: theme.colors.grayDark,
    marginBottom: 16,
  },

  hero: { height: 420, width: "100%", justifyContent: "flex-end" },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  heroContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    gap: 10,
  },
  heroTitle: {
    color: theme.colors.white,
    fontSize: 28,
    fontWeight: "900",
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  heroPrice: {
    color: theme.colors.secondary,
    fontSize: 16,
    fontWeight: "800",
  },

  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.h3,
    fontWeight: "800",
    color: theme.colors.black,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: theme.typography.fontSize.main,
    color: theme.colors.grayDarken,
    lineHeight: 22,
  },

  btn: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 6,
  },
  btnPrimary: { backgroundColor: theme.colors.primary },
  btnText: { color: theme.colors.white, fontWeight: "800" },
});
