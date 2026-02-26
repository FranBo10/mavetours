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
import { Destino, fetchDestinoBySlug } from "../../src/api/tipos";
import NavigationHeader from "../../src/components/NavigationHeader";

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
                <NavigationHeader />
                <View style={styles.center}>
                    <ActivityIndicator size="large" color={theme.colors.primary} />
                </View>
            </View>
        );
    }

    if (error || !destino) {
        return (
            <View style={styles.container}>
                <NavigationHeader />
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
            <NavigationHeader />
            <ScrollView contentContainerStyle={styles.content}>
                <Pressable onPress={() => router.push("/destinos" as any)} style={styles.backBtn}>
                    <Text style={styles.backBtnText}>← Volver</Text>
                </Pressable>

                <View style={styles.headerContainer}>
                    <Text style={styles.detailTitle}>{destino.nombre}</Text>
                    {destino.descripcionCorta ? (
                        <Text style={styles.detailDesc}>{destino.descripcionCorta}</Text>
                    ) : null}
                </View>

                <Text style={styles.sectionTitle}>Circuitos en {destino.nombre}</Text>

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

    btnRetry: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
    },
    btnText: { color: theme.colors.white, fontWeight: "bold" },
});
