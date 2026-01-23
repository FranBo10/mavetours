import React, { useEffect, useState } from "react";
import {
  View, Text, StyleSheet, FlatList, Pressable, Image,
  ImageBackground, ActivityIndicator
} from "react-native";
import { router } from "expo-router";
import { theme } from "../../src/theme/theme";
import { fetchBlogCategories, type BlogCategory } from "../../src/api/blog";
import i18n from "../../src/i18n";
import { useLanguage } from "../../src/context/LanguageContext";

export default function BlogCategoriesScreen() {
  const { locale } = useLanguage();
  const [items, setItems] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogCategories();
        setItems(data);
      } catch (e: any) {
        setError(e?.message ?? "Error loading categories");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>

      {/* HERO */}
      <ImageBackground
        source={require("../../assets/images/blog/fondo.jpg")}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.heroOverlay} />
      </ImageBackground>

      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.h1}>{i18n.t("blog_title")}</Text>
            <Text style={styles.subtitle}>{i18n.t("choose_category")}</Text>
          </View>

          <Pressable
            style={[styles.btn, styles.btnPrimary]}
            onPress={() => router.push("/")}
          >
            <Text style={styles.btnText}>{i18n.t("go_back")}</Text>
          </Pressable>
        </View>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      ) : error ? (
        <View style={styles.center}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{ padding: theme.spacing.lg, gap: 12 }}
          data={items}
          keyExtractor={(x) => String(x.id)}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push({ pathname: "/blog/[categoryId]", params: { categoryId: String(item.id) } } as any)}
              style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }]}
            >
              <Image source={{ uri: item.imagen }} style={styles.cardImg} />
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <Text style={styles.cardHint}>{i18n.t("open_category")} →</Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },

  hero: { height: 230, width: "100%" },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  header: { paddingHorizontal: theme.spacing.lg, paddingTop: theme.spacing.lg, gap: 6 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12
  },
  h1: { fontSize: 26, fontWeight: "900", color: theme.colors.black },
  subtitle: { color: theme.colors.grayDark },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  error: { color: theme.colors.danger ?? "crimson" },

  btn: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 6,
  },
  btnPrimary: { backgroundColor: theme.colors.primary },
  btnText: { color: theme.colors.white, fontWeight: "800" },

  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 2,
  },
  cardImg: { height: 140, width: "100%" },
  cardBody: { padding: 14, gap: 6 },
  cardTitle: { fontSize: 16, fontWeight: "900", color: theme.colors.black },
  cardHint: { color: theme.colors.grayDark },
});
