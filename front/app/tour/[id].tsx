// app/tour/[id].tsx
import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Pressable,
  ScrollView,
  Linking,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useAuth } from "../../src/context/AuthContext";
import { theme } from "../../src/theme/theme";
import { fetchTourById, type Tour, getTourTitle, getTourDescription, getTourShortDescription } from "../../src/api/tours";
import i18n from "../../src/i18n";
import { useLanguage } from "../../src/context/LanguageContext";

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function formatPrice(precio: number) {
  if (!precio) return i18n.t('free');
  return `${(precio / 100).toFixed(2)} €`;
}

function safeOpenUrl(url?: string | null) {
  if (!url) return;
  Linking.openURL(url).catch(() => { });
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value?: string | number | null }) {
  if (value === null || value === undefined || value === "") return null;
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{String(value)}</Text>
      </View>
    </View>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View>{children}</View>
    </View>
  );
}

export default function TourScreen() {
  const { isAuthenticated } = useAuth();
  const { locale } = useLanguage();
  const params = useLocalSearchParams<{ id?: string }>();
  const id = useMemo(() => Number(params.id), [params.id]);
  const router = useRouter();

  // Helper for user snippet compatibility
  const isLoggedIn = isAuthenticated;

  const goLogin = () => router.push("/login");

  const goFreeTour = () => {
    if (tour?.id) {
      router.push({ pathname: "/tour/[id]/book", params: { id: String(tour.id) } });
    }
  };

  const goAudioguide = () => {
    if (tour?.id) {
      router.push({ pathname: "/audioguide/[id]", params: { id: String(tour.id) } });
    }
  };

  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const stripHtml = (s?: string | null) =>
    (s ?? "")
      .replace(/&nbsp;/g, " ")
      .replace(/<[^>]*>/g, "")
      .trim();

  const scrollRef = useRef<ScrollView>(null);

  const handleToggleDescription = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (expanded) {
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        if (!id || Number.isNaN(id)) throw new Error("Invalid tour id");

        const found = await fetchTourById(id);
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
        <Text style={styles.loadingText}>{i18n.t('loading_tour')}</Text>
      </View>
    );
  }

  if (error || !tour) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorTitle}>{i18n.t('oops')}</Text>
        <Text style={styles.errorText}>{error ?? i18n.t('tour_not_available')}</Text>

        <Link href="/" asChild>
          <Pressable style={[styles.btn, styles.btnPrimary]}>
            <Text style={styles.btnText}>{i18n.t('go_back_home')}</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  const hasMaps = Boolean(tour.mapaComienzo || tour.mapaFinal);

  return (
    <View style={styles.container}>
      {/* HERO */}
      <ImageBackground source={{ uri: tour.imagen }} style={styles.hero} resizeMode="cover">
        <View style={styles.heroOverlay} />

        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>{getTourTitle(tour, locale)}</Text>

          <View style={{ flexDirection: "row", gap: 10, marginTop: 4 }}>
            {isLoggedIn ? (
              <>
                {/* FREETOUR */}
                <Pressable
                  onPress={goFreeTour}
                  style={({ pressed }) => [
                    styles.btnBase,
                    styles.btnPrimary,
                    pressed && styles.btnPressed,
                    { flex: 1 }
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
                    { flex: 1 }
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
                    { flex: 1 }
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
                    { flex: 1 }
                  ]}
                >
                  <Text style={styles.btnText}>{i18n.t("audioguide")}</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </ImageBackground>

      <ScrollView ref={scrollRef} contentContainerStyle={styles.content}>
        {/* DESCRIPTION */}
        <Section title={i18n.t('description')}>
          <Text style={styles.paragraph}>
            {stripHtml(getTourShortDescription(tour, locale)) || "We’ll add the short description here when the API provides it."}
          </Text>

          {expanded && getTourDescription(tour, locale) ? (
            <>
              <View style={styles.divider} />
              <Text style={styles.paragraph}>{stripHtml(getTourDescription(tour, locale))}</Text>
            </>
          ) : null}

          <Pressable onPress={handleToggleDescription} style={{ alignSelf: 'flex-start', marginTop: 8 }}>
            <Text style={{ color: theme.colors.primary, fontWeight: '700', textDecorationLine: 'underline' }}>
              {expanded ? i18n.t('hide_description') : i18n.t('see_full_description')}
            </Text>
          </Pressable>
        </Section>

        {/* PRICES */}
        <Section title={i18n.t('prices_freetour')}>
          <Text style={styles.paragraph}>
            {i18n.t('free_tours_desc')}
          </Text>
        </Section>

        {/* DETAILS */}
        <Section title={i18n.t('details')}>
          <InfoRow icon="⏱️" label={i18n.t('duration')} value={tour.duracion} />
          <InfoRow icon="🕒" label={i18n.t('start_time')} value={tour.horaInicio} />
          <InfoRow icon="🕕" label={i18n.t('end_time')} value={tour.horaFin} />
          <InfoRow icon="🎯" label={i18n.t('range')} value={tour.rango} />
          <InfoRow icon="🎟️" label={i18n.t('stock')} value={tour.stock} />

          <View style={styles.divider} />

          <InfoRow icon="💬" label={i18n.t('language_label')} value={i18n.t('guide_language_value')} />
          <InfoRow icon="✅" label={i18n.t('included')} value={i18n.t('guide_language_value')} />
          <InfoRow icon="🚫" label={i18n.t('not_included')} value={i18n.t('tips')} />
          <InfoRow icon="🗓️" label={i18n.t('when_to_book')} value={i18n.t('up_to_30_min')} />
          <InfoRow icon="♿" label={i18n.t('accessibility')} value={i18n.t('not_wheelchair')} />
          <InfoRow icon="🐾" label={i18n.t('pets')} value={i18n.t('allowed')} />
        </Section>

        {/* CANCELATIONS */}
        <Section title={i18n.t('cancelations')}>
          <Text style={styles.paragraph}>
            {i18n.t('cancelation_desc')}
          </Text>
        </Section>

        {/* MEETING POINT */}
        <Section title={i18n.t('meeting_point')}>
          <InfoRow icon="📍" label={i18n.t('first_meeting_point')} value={tour.comienzo} />
          {tour.mapaComienzo ? (
            <Pressable style={styles.mapBtn} onPress={() => safeOpenUrl(tour.mapaComienzo)}>
              <Text style={styles.mapBtnText}>{i18n.t('open_first_map')}</Text>
            </Pressable>
          ) : null}

          <View style={styles.divider} />

          <InfoRow icon="📍" label={i18n.t('second_meeting_point')} value={tour.final} />
          {tour.mapaFinal ? (
            <Pressable style={styles.mapBtn} onPress={() => safeOpenUrl(tour.mapaFinal)}>
              <Text style={styles.mapBtnText}>{i18n.t('open_second_map')}</Text>
            </Pressable>
          ) : null}

          {!hasMaps ? <Text style={[styles.paragraph, { marginTop: 6 }]}>{i18n.t('map_not_available')}</Text> : null}
        </Section>

        {/* ACTIONS */}
        <View style={{ gap: 10, marginTop: 10 }}>
          {isAuthenticated ? (
            <>
              {/* FREETOUR Button */}
              <Link
                href={{ pathname: "/tour/[id]/book", params: { id: String(tour.id) } }}
                asChild
              >
                <Pressable style={[styles.btnWide, styles.btnPrimary]}>
                  <Text style={styles.btnText}>{i18n.t('freetour')}</Text>
                </Pressable>
              </Link>

              {/* AUDIOGUIDE Button */}
              <Link
                href={{ pathname: "/audioguide/[id]", params: { id: String(tour.id) } }}
                asChild
              >
                <Pressable style={[styles.btnWide, styles.btnWarning]}>
                  <Text style={styles.btnText}>{i18n.t('audioguide')}</Text>
                </Pressable>
              </Link>
            </>
          ) : (
            <>
              {/* Book Now -> Login */}
              <Link href="/login" asChild>
                <Pressable style={[styles.btnWide, styles.btnPrimary]}>
                  <Text style={styles.btnText}>{i18n.t('freetour')}</Text>
                </Pressable>
              </Link>

              {/* Navigate -> Login */}
              <Link href="/login" asChild>
                <Pressable style={[styles.btnWide, styles.btnWarning]}>
                  <Text style={styles.btnText}>{i18n.t('audioguide')}</Text>
                </Pressable>
              </Link>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },

  center: { justifyContent: "center", alignItems: "center", padding: 20 },
  loadingText: { marginTop: 12, color: theme.colors.grayDark },
  errorTitle: { fontSize: 22, fontWeight: "800", marginBottom: 6 },
  errorText: { textAlign: "center", color: theme.colors.grayDark, marginBottom: 16 },

  hero: { height: 320, width: "100%", justifyContent: "flex-end" },
  heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.45)" },
  heroContent: { paddingHorizontal: theme.spacing.lg, paddingBottom: theme.spacing.md, gap: 6 },
  heroTitle: {
    color: theme.colors.white,
    fontSize: 28,
    fontWeight: "900",
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  heroPrice: { color: theme.colors.secondary, fontSize: 16, fontWeight: "800" },

  content: { paddingHorizontal: theme.spacing.sm, paddingVertical: theme.spacing.lg, paddingBottom: 30 },

  section: { marginBottom: 14 },
  sectionTitle: {
    fontSize: theme.typography.fontSize.h3,
    fontWeight: "900",
    color: theme.colors.black,
    marginBottom: 10,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  paragraph: { fontSize: theme.typography.fontSize.medium, color: theme.colors.grayDarken, lineHeight: 22 },

  divider: { height: 1, backgroundColor: "rgba(0,0,0,0.08)", marginVertical: 12 },

  infoRow: { flexDirection: "row", gap: 10, paddingVertical: 8, alignItems: "flex-start" },
  infoIcon: { fontSize: 18, marginTop: 1 },
  infoLabel: { fontSize: 12, fontWeight: "800", color: theme.colors.grayDark, textTransform: "uppercase" },
  infoValue: { fontSize: 14, fontWeight: "700", color: theme.colors.black, marginTop: 2 },

  priceBadge: {
    marginTop: 10,
    alignSelf: "flex-start",
    backgroundColor: "rgba(0,0,0,0.06)",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  priceBadgeText: { fontWeight: "900", color: theme.colors.black },

  mapBtn: {
    marginTop: 8,
    backgroundColor: "rgba(0,0,0,0.06)",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  mapBtnText: { fontWeight: "800", color: theme.colors.black },

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

  btnPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  btn: { paddingVertical: 12, paddingHorizontal: 14, borderRadius: 10, alignSelf: "flex-start", marginTop: 6 },
  btnWide: { paddingVertical: 14, borderRadius: 12, alignItems: "center" },
  btnPrimary: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primaryDark ?? theme.colors.primary,
  },
  btnText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.main,
    fontWeight: "700",
  },
  /* New Warning Button Style */
  btnWarning: {
    backgroundColor: theme.colors.warning,
    borderColor: theme.colors.warningDark ?? theme.colors.warning,
  },

  btnSecondary: {
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.secondaryDark ?? theme.colors.secondary,
  },
});
