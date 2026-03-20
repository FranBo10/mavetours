import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    Pressable,
    ImageBackground,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { theme } from "../../src/theme/theme";
import i18n from "../../src/i18n";
import { Destino, fetchDestinos } from "../../src/api/destinos";

export default function DestinosIndexScreen() {
    const [destinos, setDestinos] = useState<Destino[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;
        fetchDestinos()
            .then(data => {
                if (mounted) {
                    setDestinos(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (mounted) {
                    setError(err.message || "Error al cargar continentes");
                    setLoading(false);
                }
            });
        return () => { mounted = false; };
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <ActivityIndicator size="large" color={theme.colors.primary} />
                    <Text style={styles.loadingText}>{i18n.t("loading") || "Cargando..."}</Text>
                </View>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.headerTitle}>Destinos</Text>
                <Text style={styles.headerSubtitle}>
                    Explora nuestros circuitos por el mundo
                </Text>

                <View style={styles.grid}>
                    {destinos.map((c) => (
                        <Link key={c.id} href={`/destinos/${c.slug}` as any} asChild>
                            <Pressable style={({ pressed }) => [styles.card, pressed && { opacity: 0.95 }]}>
                                <ImageBackground
                                    source={{ uri: c.imagen }}
                                    style={styles.cardImage}
                                    imageStyle={{ borderRadius: 16 }}
                                >
                                    <View style={styles.overlay} />
                                    <View style={styles.cardContent}>
                                        <Text style={styles.cardTitle}>{c.titulo}</Text>
                                        {c.descripcionCorta ? (
                                            <Text style={styles.cardSubtitle} numberOfLines={2}>
                                                {c.descripcionCorta}
                                            </Text>
                                        ) : null}
                                    </View>
                                </ImageBackground>
                            </Pressable>
                        </Link>
                    ))}
                </View>
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.grayLight },
    center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    loadingText: { marginTop: 10, color: theme.colors.grayDark },
    errorText: { color: theme.colors.danger, fontSize: 16, textAlign: "center" },

    content: {
        paddingTop: 80,
        paddingHorizontal: theme.spacing.md,
        paddingBottom: 40,
    },

    headerTitle: {
        fontSize: 32,
        fontWeight: "900",
        color: theme.colors.black,
        marginBottom: 4,
        textAlign: "center",
        textTransform: "uppercase",
    },
    headerSubtitle: {
        fontSize: 16,
        color: theme.colors.grayDark,
        textAlign: "center",
        marginBottom: 30,
    },

    grid: { gap: 20 },

    card: {
        height: 200,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
        backgroundColor: theme.colors.white,
    },
    cardImage: {
        flex: 1,
        justifyContent: "flex-end",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 16,
    },
    cardContent: {
        padding: 16,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "900",
        color: theme.colors.white,
        textShadowColor: "rgba(0,0,0,0.5)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
        textTransform: "uppercase",
    },
    cardSubtitle: {
        fontSize: 14,
        fontWeight: "600",
        color: theme.colors.white,
        opacity: 0.9,
    },
});
