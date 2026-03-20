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
import { Destino, fetchDestinoBySlug } from "../../src/api/destinos";
import { Circuito } from "../../src/api/circuitos";

export default function DestinoDetailScreen() {
    const router = useRouter();
    const { slug } = useLocalSearchParams<{ slug: string }>();

    const [destino, setDestino] = useState<Destino | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;
        let mounted = true;
        setLoading(true);
        fetchDestinoBySlug(slug)
            .then(data => {
                if (mounted) {
                    setDestino(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (mounted) {
                    setError(err.message || "Error al cargar destino");
                    setLoading(false);
                }
            });
        return () => { mounted = false; };
    }, [slug]);

    if (loading) {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <ActivityIndicator size="large" color={theme.colors.primary} />
                </View>
            </View>
        );
    }

    if (error || !destino) {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.errorText}>{error || "Destino no encontrado"}</Text>
                    <Pressable style={styles.btnRetry} onPress={() => router.replace("/destinos" as any)}>
                        <Text style={styles.btnText}>Volver a Destinos</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Pressable onPress={() => router.push("/destinos" as any)} style={styles.backBtn}>
                    <Text style={styles.backBtnText}>← {i18n.t("back")}</Text>
                </Pressable>

                <View style={styles.headerContainer}>
                    <Text style={styles.detailTitle}>{destino.titulo}</Text>
                    {destino.descripcionCorta ? (
                        <Text style={styles.detailDesc}>{destino.descripcionCorta}</Text>
                    ) : null}
                </View>

                {/* Action Buttons */}
                <View style={styles.actionButtons}>
                    <Link
                        href={{
                            pathname: "/ciudades/[destinoId]" as any,
                            params: {
                                destinoId: String(destino.id),
                                destinoNombre: destino.titulo,
                            },
                        }}
                        asChild
                    >
                        <Pressable style={[styles.actionBtn, styles.actionBtnPrimary]}>
                            <Text style={styles.actionBtnText}>{i18n.t("see_tours")}</Text>
                        </Pressable>
                    </Link>
                </View>

                <Text style={styles.sectionTitle}>{i18n.t("circuits")} {i18n.t("cities_in").toLowerCase().includes("en") ? "en" : "à"} {destino.titulo}</Text>

                <View style={styles.grid}>
                    {destino.circuitos && destino.circuitos.length > 0 ? (
                        destino.circuitos.map((circuito) => (
                            <Link key={circuito.id} href={`/circuito/${circuito.slug}` as any} asChild>
                                <Pressable style={styles.card}>
                                    <ImageBackground
                                        source={{ uri: circuito.imagenCover }}
                                        style={styles.cardImage}
                                        imageStyle={{ borderRadius: 16 }}
                                    >
                                        <View style={styles.overlay} />
                                        <View style={styles.cardContent}>
                                            <Text style={styles.cardTitle}>{circuito.titulo}</Text>
                                            <View style={styles.badges}>
                                                {circuito.duracionDias ? (
                                                    <View style={styles.badge}>
                                                        <Text style={styles.badgeText}>{circuito.duracionDias} Días</Text>
                                                    </View>
                                                ) : null}
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </Pressable>
                            </Link>
                        ))
                    ) : (
                        <Text style={styles.emptyText}>No hay circuitos disponibles en este momento.</Text>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.grayLight },
    center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    errorText: { color: theme.colors.danger, fontSize: 16, textAlign: "center", marginBottom: 20 },

    content: {
        paddingTop: 80,
        paddingHorizontal: theme.spacing.md,
        paddingBottom: 40,
    },

    backBtn: { marginBottom: 16, alignSelf: 'flex-start' },
    backBtnText: { color: theme.colors.primary, fontSize: 16, fontWeight: '600' },

    headerContainer: { marginBottom: 20 },
    detailTitle: {
        fontSize: 32,
        fontWeight: "900",
        color: theme.colors.black,
        marginBottom: 10,
        textTransform: "uppercase",
    },
    detailDesc: {
        fontSize: 16,
        color: theme.colors.grayDarken,
        lineHeight: 24,
    },

    sectionTitle: {
        fontSize: 22,
        fontWeight: "700",
        marginTop: 10,
        marginBottom: 16,
        color: theme.colors.black,
    },

    grid: { gap: 20 },
    emptyText: { fontStyle: 'italic', color: theme.colors.grayDark },

    card: {
        height: 220,
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
        backgroundColor: "rgba(0,0,0,0.35)",
        borderRadius: 16,
    },
    cardContent: {
        padding: 16,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: "800",
        color: theme.colors.white,
        textShadowColor: "rgba(0,0,0,0.5)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
        marginBottom: 8,
    },
    badges: { flexDirection: 'row', gap: 8 },
    badge: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    badgeText: { color: theme.colors.white, fontWeight: "bold", fontSize: 12 },

    actionButtons: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    actionBtn: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    actionBtnPrimary: {
        backgroundColor: theme.colors.primary,
    },
    actionBtnText: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    btnRetry: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
    },
    btnText: { color: theme.colors.white, fontWeight: "bold" },
});
