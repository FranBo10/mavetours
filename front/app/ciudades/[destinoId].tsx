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
import { Link, useRouter, useLocalSearchParams } from "expo-router";
import { theme } from "../../src/theme/theme";
import i18n from "../../src/i18n";
import { Ciudad, fetchCiudadesByDestino } from "../../src/api/ciudades";
import { useLanguage } from "../../src/context/LanguageContext";

export default function CiudadesByDestinoScreen() {
    const router = useRouter();
    const { locale } = useLanguage();
    const { destinoId, destinoNombre } = useLocalSearchParams<{
        destinoId: string;
        destinoNombre?: string;
    }>();

    const [ciudades, setCiudades] = useState<Ciudad[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!destinoId) return;
        let mounted = true;
        setLoading(true);
        fetchCiudadesByDestino(Number(destinoId))
            .then((data) => {
                if (mounted) {
                    setCiudades(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (mounted) {
                    setError(err.message || "Error");
                    setLoading(false);
                }
            });
        return () => {
            mounted = false;
        };
    }, [destinoId]);

    const title = destinoNombre
        ? `${i18n.t("cities_in")} ${destinoNombre}`
        : i18n.t("cities");

    if (loading) {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <ActivityIndicator size="large" color={theme.colors.primary} />
                    <Text style={styles.loadingText}>{i18n.t("loading")}</Text>
                </View>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.errorText}>{error}</Text>
                    <Pressable
                        style={styles.btnRetry}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.btnText}>{i18n.t("back")}</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Pressable
                    onPress={() => router.back()}
                    style={styles.backBtn}
                >
                    <Text style={styles.backBtnText}>← {i18n.t("back")}</Text>
                </Pressable>

                <Text style={styles.headerTitle}>{title}</Text>

                {ciudades.length === 0 ? (
                    <Text style={styles.emptyText}>{i18n.t("no_cities")}</Text>
                ) : (
                    <View style={styles.grid}>
                        {ciudades.map((ciudad) => (
                            <Link
                                key={ciudad.id}
                                href={{
                                    pathname: "/ciudades/tours/[ciudadId]" as any,
                                    params: {
                                        ciudadId: String(ciudad.id),
                                        ciudadNombre: ciudad.nombre,
                                    },
                                }}
                                asChild
                            >
                                <Pressable
                                    style={({ pressed }) => [
                                        styles.card,
                                        pressed && { opacity: 0.95 },
                                    ]}
                                >
                                    {ciudad.imagen ? (
                                        <ImageBackground
                                            source={{ uri: ciudad.imagen }}
                                            style={styles.cardImage}
                                            imageStyle={{ borderRadius: 16 }}
                                        >
                                            <View style={styles.overlay} />
                                            <View style={styles.cardContent}>
                                                <Text style={styles.cardTitle}>{ciudad.nombre}</Text>
                                                <Text style={styles.cardPais}>
                                                    {ciudad.pais || ""}
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    ) : (
                                        <View style={[styles.cardImage, styles.cardNoImage]}>
                                            <View style={styles.cardContent}>
                                                <Text style={[styles.cardTitle, { color: theme.colors.black }]}>
                                                    {ciudad.nombre}
                                                </Text>
                                                <Text style={[styles.cardPais, { color: theme.colors.grayDark }]}>
                                                    {ciudad.pais || ""}
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                </Pressable>
                            </Link>
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.grayLight },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    loadingText: { marginTop: 10, color: theme.colors.grayDark },
    errorText: {
        color: theme.colors.danger,
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },

    content: {
        paddingTop: 80,
        paddingHorizontal: theme.spacing.md,
        paddingBottom: 40,
    },

    backBtn: { marginBottom: 16, alignSelf: "flex-start" },
    backBtnText: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: "600",
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: "900",
        color: theme.colors.black,
        marginBottom: 20,
        textTransform: "uppercase",
    },

    grid: { gap: 20 },
    emptyText: {
        fontStyle: "italic",
        color: theme.colors.grayDark,
        textAlign: "center",
        marginTop: 30,
    },

    card: {
        height: 180,
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
    cardNoImage: {
        backgroundColor: theme.colors.grayLight,
        borderRadius: 16,
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
        fontSize: 22,
        fontWeight: "900",
        color: theme.colors.white,
        textShadowColor: "rgba(0,0,0,0.5)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
        textTransform: "uppercase",
    },
    cardPais: {
        fontSize: 14,
        fontWeight: "600",
        color: theme.colors.white,
        opacity: 0.85,
        marginTop: 2,
    },

    btnRetry: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
    },
    btnText: { color: theme.colors.white, fontWeight: "bold" },
});
