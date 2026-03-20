import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    Pressable,
    ImageBackground,
    FlatList,
    Image
} from "react-native";
import { Link, useRouter, useLocalSearchParams } from "expo-router";
import { theme } from "../../src/theme/theme";
import i18n from "../../src/i18n";
import { Circuito, fetchCircuitoBySlug } from "../../src/api/circuitos";
import { Tour, fetchToursByCity } from "../../src/api/tours";
import TourCard from "../../src/components/TourCard";

export default function CircuitoDetailScreen() {
    const router = useRouter();
    const { slug } = useLocalSearchParams<{ slug: string }>();

    const [circuito, setCircuito] = useState<Circuito | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Recommended Tours
    const [recommendedTours, setRecommendedTours] = useState<Tour[]>([]);

    useEffect(() => {
        if (!slug) return;
        let mounted = true;
        setLoading(true);

        const load = async () => {
            try {
                const data = await fetchCircuitoBySlug(slug);
                if (!mounted) return;
                setCircuito(data);

                // Fetch recommended tours based on cities
                const cities = new Set<number>();
                data.dias.forEach(d => {
                    if (d.ciudad?.id) cities.add(d.ciudad.id);
                });

                if (cities.size > 0) {
                    const cityIds = Array.from(cities);
                    // Limit to first 3 cities to avoid too many requests
                    const toursPromises = cityIds.slice(0, 3).map(id => fetchToursByCity(id));
                    const toursResults = await Promise.all(toursPromises);

                    // Flatten and dedup
                    const allTours = toursResults.flat();
                    const uniqueTours = Array.from(new Map(allTours.map(item => [item.id, item])).values());

                    if (mounted) setRecommendedTours(uniqueTours);
                }

            } catch (err: any) {
                if (mounted) setError(err.message || "Error al cargar circuito");
            } finally {
                if (mounted) setLoading(false);
            }
        };

        load();

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

    if (error || !circuito) {
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.errorText}>{error || "Circuito no encontrado"}</Text>
                    <Pressable style={styles.btnRetry} onPress={() => router.back()}>
                        <Text style={styles.btnText}>Volver</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Pressable onPress={() => router.back()} style={styles.backBtn}>
                    <Text style={styles.backBtnText}>← Volver</Text>
                </Pressable>

                {/* Hero Section */}
                <ImageBackground
                    source={{ uri: circuito.imagenCover }}
                    style={styles.heroImage}
                    imageStyle={{ borderRadius: 16 }}
                >
                    <View style={styles.heroOverlay} />
                    <View style={styles.heroContent}>
                        <Text style={styles.heroTitle}>{circuito.titulo}</Text>
                        <Text style={styles.heroSubtitle}>{circuito.duracionDias} Días</Text>
                    </View>
                </ImageBackground>

                {/* Description */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Descripción</Text>
                    <Text style={styles.descriptionText}>
                        {circuito.descripcionLarga || circuito.resumenCard}
                    </Text>
                </View>

                {/* Itinerary */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Itinerario</Text>
                    <View style={styles.timeline}>
                        {circuito.dias.map((dia, index) => (
                            <View key={dia.id} style={styles.timelineItem}>
                                <View style={styles.timelineLeft}>
                                    <View style={styles.timelineCircle}>
                                        <Text style={styles.dayNumber}>{dia.diaNumero}</Text>
                                    </View>
                                    {index < circuito.dias.length - 1 && <View style={styles.timelineLine} />}
                                </View>
                                <View style={styles.timelineContent}>
                                    <Text style={styles.dayTitle}>Día {dia.diaNumero}: {dia.titulo}</Text>
                                    <View style={styles.dayLocation}>
                                        <Text style={styles.locationText}>
                                            📍 {dia.ciudad?.nombre}{dia.pais ? `, ${dia.pais.nombre}` : ''}
                                        </Text>
                                    </View>
                                    <Text style={styles.dayDesc}>{dia.descripcion}</Text>
                                    {dia.transporte && (
                                        <Text style={styles.transportText}>🚌 {dia.transporte}</Text>
                                    )}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Recommended Tours Carousel */}
                {recommendedTours.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Experiencias Recomendadas</Text>
                        <FlatList
                            data={recommendedTours}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TourCard tour={item} />
                            )}
                            contentContainerStyle={{ paddingVertical: 10 }}
                        />
                    </View>
                )}

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

    heroImage: {
        height: 250,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    heroOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 16,
    },
    heroContent: {
        padding: 20,
    },
    heroTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowRadius: 5,
    },
    heroSubtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 5,
    },

    section: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: theme.colors.black,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.grayLight,
        paddingBottom: 10,
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 24,
        color: theme.colors.grayDarken,
    },

    /* Timeline */
    timeline: {
        paddingLeft: 10,
    },
    timelineItem: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    timelineLeft: {
        alignItems: 'center',
        marginRight: 15,
        width: 30,
    },
    timelineCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    dayNumber: {
        color: 'white',
        fontWeight: 'bold',
    },
    timelineLine: {
        flex: 1,
        width: 2,
        backgroundColor: theme.colors.grayLight,
        marginTop: 5,
        marginBottom: -25, // Connect to next
    },
    timelineContent: {
        flex: 1,
        paddingBottom: 10,
    },
    dayTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.black,
        marginBottom: 5,
    },
    dayLocation: {
        marginBottom: 8,
    },
    locationText: {
        fontSize: 14,
        color: theme.colors.primary,
        fontWeight: '600',
    },
    dayDesc: {
        fontSize: 15,
        color: theme.colors.grayDarken,
        lineHeight: 22,
        marginBottom: 8,
    },
    transportText: {
        fontSize: 14,
        color: theme.colors.grayDark,
        fontStyle: 'italic',
    },

    btnRetry: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
    },
    btnText: { color: theme.colors.white, fontWeight: "bold" },
});
