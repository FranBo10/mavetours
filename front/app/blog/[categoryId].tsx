import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Image, ActivityIndicator } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { theme } from "../../src/theme/theme";
import { fetchBlogsByCategory, type BlogPost } from "../../src/api/blog";
import i18n from "../../src/i18n";
import { useLanguage } from "../../src/context/LanguageContext";

export default function BlogCategoryScreen() {
  const { locale } = useLanguage();
  const params = useLocalSearchParams<{ categoryId?: string }>();
  const categoryId = useMemo(() => Number(params.categoryId), [params.categoryId]);

  const [title, setTitle] = useState<string>("Blog");
  const [items, setItems] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);

        if (!categoryId || Number.isNaN(categoryId)) throw new Error("Invalid category id");

        const { categoria, blogs } = await fetchBlogsByCategory(categoryId);
        setTitle(categoria?.titulo ?? "Blog");
        // si quieres solo activos:
        setItems(blogs.filter((b) => b.estado));
      } catch (e: any) {
        setError(e?.message ?? "Error loading posts");
      } finally {
        setLoading(false);
      }
    })();
  }, [categoryId]);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.h1}>{title}</Text>
            <Text style={styles.subtitle}>{i18n.t("latest_posts")}</Text>
          </View>

          <Pressable
            style={[styles.btn, styles.btnPrimary]}
            onPress={() => router.back()}
          >
            <Text style={styles.btnText}>{i18n.t("go_back")}</Text>
          </Pressable>
        </View>
      </View>


      {loading ? (
        <View style={styles.center}><ActivityIndicator size="large" /></View>
      ) : error ? (
        <View style={styles.center}><Text style={styles.error}>{error}</Text></View>
      ) : (
        <FlatList
          contentContainerStyle={{ padding: theme.spacing.lg, gap: 12 }}
          data={items}
          keyExtractor={(x) => String(x.id)}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push({ pathname: "/blogpost/[id]", params: { id: String(item.id) } } as any)}
              style={({ pressed }) => [styles.postCard, pressed && { opacity: 0.9 }]}
            >
              <Image source={{ uri: item.imagen }} style={styles.postImg} />
              <View style={styles.postBody}>
                <Text style={styles.postTitle}>{item.titulo}</Text>
                {!!item.descripcionCorta && (
                  <Text numberOfLines={3} style={styles.postExcerpt}>{item.descripcionCorta}</Text>
                )}
                <View style={styles.tagsRow}>
                  {item.etiquetas?.slice(0, 3).map((t) => (
                    <View key={t.id} style={styles.tag}><Text style={styles.tagText}>{t.titulo}</Text></View>
                  ))}
                </View>
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
  header: { paddingHorizontal: theme.spacing.lg, paddingTop: theme.spacing.lg, gap: 6 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12
  },
  h1: { fontSize: 22, fontWeight: "900", color: theme.colors.black },
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

  postCard: { backgroundColor: theme.colors.white, borderRadius: 16, overflow: "hidden", elevation: 2 },
  postImg: { height: 160, width: "100%" },
  postBody: { padding: 14, gap: 8 },
  postTitle: { fontSize: 16, fontWeight: "900", color: theme.colors.black },
  postExcerpt: { color: theme.colors.grayDarken, lineHeight: 20 },
  tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tag: { backgroundColor: "rgba(0,0,0,0.06)", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  tagText: { fontSize: 12, fontWeight: "800", color: theme.colors.grayDark },
});
