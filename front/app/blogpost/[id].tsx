// app/blogpost/[id].tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Pressable,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
// import RenderHTML from "react-native-render-html";
import { theme } from "../../src/theme/theme";
import { fetchBlogPostById } from "../../src/api/blog";
import i18n from "../../src/i18n";
import { useLanguage } from "../../src/context/LanguageContext";

type Locale = "es" | "en" | "fr";

type BlogPost = Awaited<ReturnType<typeof fetchBlogPostById>>;

type BlogTag = { id: number; titulo: string };


function pickLongDescription(post: BlogPost, locale: Locale) {
  if (locale === "es") return post.descripcionLargaEs ?? post.descripcionLarga ?? "";
  if (locale === "fr") return post.descripcionLargaFr ?? post.descripcionLarga ?? "";
  return post.descripcionLarga ?? ""; // en
}

function formatDate(input?: string | null) {
  if (!input) return "";
  // input: "YYYY-mm-dd HH:ii" (según tu controller)
  const safe = input.replace(" ", "T") + ":00";
  const d = new Date(safe);
  if (Number.isNaN(d.getTime())) return input;
  return d.toLocaleDateString();
}

export default function BlogPostScreen() {
  const { locale } = useLanguage();
  const params = useLocalSearchParams<{ id?: string; locale?: string }>();
  const id = useMemo(() => Number(params.id), [params.id]);



  const { width } = useWindowDimensions();

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        if (!id || Number.isNaN(id)) throw new Error("Invalid post id");

        const data = await fetchBlogPostById(id);

        if (!data.estado) throw new Error("Post not available");

        if (mounted) setPost(data);
      } catch (e: any) {
        if (mounted) setError(e?.message ?? "Error loading post");
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
        <Text style={styles.loadingText}>Loading post...</Text>
      </View>
    );
  }

  if (error || !post) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorTitle}>Oops</Text>
        <Text style={styles.errorText}>{error ?? "Post not available"}</Text>

        <Pressable
          style={[styles.btn, styles.btnPrimary]}
          onPress={() => router.back()}>
          <Text style={styles.btnText}>{i18n.t("go_back")}</Text>
        </Pressable>
      </View>
    );
  }

  //   const html = pickLongDescription(post, locale);
  const fecha = formatDate(post.fechaRegistro);

  return (
    <View style={styles.container}>

      {/* HERO */}
      <ImageBackground source={{ uri: post.imagen }} style={styles.hero} resizeMode="cover">

        <View style={styles.heroOverlay} />

        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>{post.titulo}</Text>

          {!!fecha && <Text style={styles.heroMeta}>{fecha}</Text>}

          {!!post.descripcionCorta && (
            <Text style={styles.heroExcerpt} numberOfLines={3}>
              {post.descripcionCorta}
            </Text>
          )}

          {/* Tags */}
          {post.etiquetas?.length ? (
            <View style={styles.tagsRow}>
              {post.etiquetas.slice(0, 5).map((t: BlogTag) => (
                <View key={t.id} style={styles.tag}>
                  <Text style={styles.tagText}>{t.titulo}</Text>
                </View>
              ))}
            </View>
          ) : null}
        </View>
      </ImageBackground>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Post</Text>

        {/* {html ? (
          <RenderHTML
            contentWidth={width - theme.spacing.lg * 2}
            source={{ html }}
            baseStyle={styles.htmlBase as any}
            tagsStyles={{
              p: { marginTop: 0, marginBottom: 10, lineHeight: 22 },
              h1: { fontSize: 22, fontWeight: "800", marginBottom: 10 },
              h2: { fontSize: 20, fontWeight: "800", marginBottom: 10 },
              h3: { fontSize: 18, fontWeight: "800", marginBottom: 10 },
              h4: { fontSize: 16, fontWeight: "800", marginBottom: 10 },
              li: { marginBottom: 8, lineHeight: 22 },
              strong: { fontWeight: "900" },
              a: { textDecorationLine: "underline" },
            }}
          />
        ) : (
          <Text style={styles.paragraph}>
            We’ll add the full content here when the API provides it.
          </Text>
        )} */}

        <View style={{ height: 20 }} />
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

  hero: { height: 420, width: "100%", justifyContent: "flex-end" },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  heroContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    gap: 10,
  },
  heroTitle: {
    color: theme.colors.white,
    fontSize: 26,
    fontWeight: "900",
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  heroMeta: { color: "rgba(255,255,255,0.85)", fontWeight: "800" },
  heroExcerpt: { color: "rgba(255,255,255,0.9)", lineHeight: 20 },

  tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tag: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  tagText: { color: theme.colors.white, fontWeight: "800", fontSize: 12 },

  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.h3,
    fontWeight: "900",
    color: theme.colors.black,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: theme.typography.fontSize.main,
    color: theme.colors.grayDarken,
    lineHeight: 22,
  },

  // estilos base para HTML
  htmlBase: {
    color: theme.colors.grayDarken,
    fontSize: theme.typography.fontSize.main,
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
