import React, { useEffect, useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    Image,
    Pressable,
    Dimensions,
    Linking,
} from "react-native";
import { Audio } from "expo-av";
import { router } from "expo-router";
import { theme } from "../theme/theme";
import { fetchParadasByTourId, type Parada } from "../api/paradas";
import { fetchTourById, getTourTitle, type Tour } from "../api/tours";
import { API_BASE_URL } from "../config/env";
import i18n from "../i18n";
import { useLanguage } from "../context/LanguageContext";

// Helper to strip HTML tags
const stripHtml = (html: string | null) => (html ? html.replace(/<[^>]*>/g, "").trim() : "");

// Helper to get content based on locale
const getLocaleContent = (parada: Parada, locale: string) => {
    if (locale === 'fr' && parada.contenidoFr) return parada.contenidoFr;
    if (locale === 'es' && parada.contenidoEs) return parada.contenidoEs;
    return parada.contenido; // Default/English
};

function StopCard({ parada, index, handlePlayAudio, handleRestartAudio, playingId, isPlaying, audioLoading }: {
    parada: Parada;
    index: number;
    handlePlayAudio: (p: Parada) => void;
    handleRestartAudio: () => void;
    playingId: number | null;
    isPlaying: boolean;
    audioLoading: boolean;
}) {
    const [expandedDesc, setExpandedDesc] = useState(false);
    const { locale } = useLanguage();

    // Get localized content
    const content = getLocaleContent(parada, locale);
    // console.log("DEBUG PARADA:", parada.id, parada.titulo);

    // Full description
    const fullDesc = stripHtml(content);

    const toggleDescription = () => setExpandedDesc(!expandedDesc);
    const openMap = () => {
        if (parada.mapa) {
            Linking.openURL(parada.mapa).catch(err => console.error("Error opening map", err));
        }
    };

    return (
        <View style={styles.card}>
            {parada.imagen && (
                <Image source={{ uri: parada.imagen }} style={styles.cardImage} />
            )}

            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <View style={styles.numberBadge}>
                        <Text style={styles.numberText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.cardTitle}>{parada.titulo}</Text>
                </View>

                {/* Audio Controls */}
                {playingId === parada.id ? (
                    <View style={styles.controlsRow}>
                        {/* Play/Pause Button */}
                        <Pressable
                            style={[styles.controlBtn, styles.playBtnActive]}
                            onPress={() => handlePlayAudio(parada)}
                        >
                            {audioLoading ? (
                                <ActivityIndicator color={theme.colors.white} size="small" />
                            ) : (
                                <Text style={styles.playBtnText}>
                                    {isPlaying ? i18n.t("pause_audio") : i18n.t("resume")}
                                </Text>
                            )}
                        </Pressable>

                        {/* Restart Button */}
                        <Pressable
                            style={[styles.controlBtn, styles.restartBtn]}
                            onPress={handleRestartAudio}
                            disabled={audioLoading}
                        >
                            <Text style={styles.playBtnText}>⏮ {i18n.t("restart")}</Text>
                        </Pressable>
                    </View>
                ) : (
                    /* Initial Play Button */
                    <Pressable
                        style={styles.playBtn}
                        onPress={() => handlePlayAudio(parada)}
                    >
                        <Text style={styles.playBtnText}>▶ {i18n.t("listen")}</Text>
                    </Pressable>
                )}

                {/* Description Logic: 3 lines truncation */}
                <Text
                    style={styles.description}
                    numberOfLines={expandedDesc ? undefined : 3}
                    ellipsizeMode="tail"
                >
                    {fullDesc}
                </Text>

                <Pressable onPress={toggleDescription} style={styles.toggleBtn}>
                    <Text style={styles.toggleBtnText}>
                        {expandedDesc ? i18n.t("hide_description") : i18n.t("see_full_description")}
                    </Text>
                </Pressable>

                {/* Map Button (replacing iframe for now) */}
                {parada.mapa ? (
                    <Pressable onPress={openMap} style={styles.mapBtn}>
                        <Text style={styles.mapBtnText}>📍 {i18n.t("open_map")}</Text>
                    </Pressable>
                ) : null}

            </View>
        </View>
    );
}

export default function AudioguideScreen({ tourId }: { tourId: number }) {
    const { locale } = useLanguage();
    const [paradas, setParadas] = useState<Parada[]>([]);
    const [tour, setTour] = useState<Tour | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Audio State
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [playingId, setPlayingId] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioLoading, setAudioLoading] = useState(false);

    useEffect(() => {
        let mounted = true;

        if (!tourId || Number.isNaN(tourId)) {
            setError("Invalid Tour ID");
            setLoading(false);
            return;
        }

        (async () => {
            try {
                const [paradasData, tourData] = await Promise.all([
                    fetchParadasByTourId(tourId),
                    fetchTourById(tourId)
                ]);

                if (mounted) {
                    setParadas(paradasData);
                    setTour(tourData);
                    setLoading(false);
                }
            } catch (e: any) {
                if (mounted) {
                    setError(e.message || "Error loading tour data");
                    setLoading(false);
                }
            }
        })();

        return () => {
            mounted = false;
            if (sound) sound.unloadAsync();
        };
    }, [tourId]);

    const handleRestartAudio = async () => {
        if (sound) {
            try {
                await sound.setPositionAsync(0);
                await sound.playAsync();
                setIsPlaying(true);
            } catch (error) {
                console.error("Error upgrading audio:", error);
            }
        }
    };

    const handlePlayAudio = async (parada: Parada) => {
        try {
            if (playingId === parada.id) {
                if (!sound) return;
                if (isPlaying) {
                    await sound.pauseAsync();
                    setIsPlaying(false);
                } else {
                    await sound.playAsync();
                    setIsPlaying(true);
                }
                return;
            }

            if (sound) {
                await sound.unloadAsync();
                setSound(null);
                setPlayingId(null);
                setIsPlaying(false);
            }

            setAudioLoading(true);
            setPlayingId(parada.id);

            // Use the locale from the component context instead of system locale
            // const locale = Localization.getLocales()[0]?.languageCode ?? 'en';

            // 1. Try to get static audio URL based on locale
            let audioUrl = parada.audioUrl; // Default (English)
            if (locale === 'es') audioUrl = parada.audioUrlEs;
            if (locale === 'fr') audioUrl = parada.audioUrlFr;

            // 2. Fallback to dynamic generation if static file is missing (e.g. not generated yet)
            if (!audioUrl) {
                console.log("Audio file not found, falling back to dynamic generation...");
                audioUrl = `${API_BASE_URL}/text-to-speech/${locale}?id=${parada.id}`;
            } else {
                console.log("Playing static audio:", audioUrl);
            }

            await Audio.setAudioModeAsync({
                playsInSilentModeIOS: true,
                staysActiveInBackground: false,
                shouldDuckAndroid: true,
            });

            const { sound: newSound } = await Audio.Sound.createAsync(
                { uri: audioUrl },
                { shouldPlay: true }
            );

            setSound(newSound);
            setIsPlaying(true);
            setAudioLoading(false);

            newSound.setOnPlaybackStatusUpdate((status) => {
                if (status.isLoaded && status.didJustFinish) {
                    setPlayingId(null);
                    setIsPlaying(false);
                    newSound.unloadAsync();
                    setSound(null);
                }
            });

        } catch (e) {
            console.error(e);
            setAudioLoading(false);
            setPlayingId(null);
            alert("Error playing audio.");
        }
    };

    if (loading) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={[styles.container, styles.center]}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={styles.h1} numberOfLines={2} ellipsizeMode="tail">
                            {tour ? getTourTitle(tour, locale) : i18n.t("audioguide")}
                        </Text>
                        <Text style={styles.subtitle}>{i18n.t("audioguide")}</Text>
                    </View>

                    <Pressable
                        style={[styles.btn, styles.btnPrimary]}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.btnText}>{i18n.t("go_back")}</Text>
                    </Pressable>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {paradas.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>{i18n.t("no_stops")}</Text>
                        <Pressable style={styles.goBackBtn} onPress={() => router.back()}>
                            <Text style={styles.goBackBtnText}>{i18n.t("go_back")}</Text>
                        </Pressable>
                    </View>
                ) : (
                    paradas.map((parada, index) => (
                        <StopCard
                            key={parada.id}
                            parada={parada}
                            index={index}
                            handlePlayAudio={handlePlayAudio}
                            handleRestartAudio={handleRestartAudio}
                            playingId={playingId}
                            isPlaying={isPlaying}
                            audioLoading={audioLoading}
                        />
                    ))
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.grayLight },
    center: { justifyContent: "center", alignItems: "center", flex: 1 },

    // Header (Blog Style)
    header: {
        paddingHorizontal: 16,
        paddingTop: 50, // SafeArea
        paddingBottom: 15,
        backgroundColor: theme.colors.white,
        ...theme.shadow.soft
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
    },
    h1: { fontSize: 22, fontWeight: "900", color: theme.colors.black },
    subtitle: { color: theme.colors.grayDark, fontSize: 14, marginTop: 2 },

    btn: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 10,
    },
    btnPrimary: { backgroundColor: theme.colors.primary },
    btnText: { color: theme.colors.white, fontWeight: "800", fontSize: 14 },

    scrollContent: { padding: 16 },
    errorText: { color: theme.colors.danger, fontSize: 16 },

    emptyContainer: { alignItems: "center", marginTop: 40, gap: 16 },
    emptyText: { textAlign: "center", color: theme.colors.grayDark, fontSize: 16 },

    goBackBtn: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        ...theme.shadow.soft,
    },
    goBackBtnText: {
        color: theme.colors.white,
        fontWeight: "bold",
        fontSize: 16,
    },

    card: {
        backgroundColor: theme.colors.white,
        borderRadius: 16,
        marginBottom: 20,
        overflow: "hidden",
        ...theme.shadow.medium,
    },
    cardImage: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    cardContent: {
        padding: 16,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        gap: 10,
    },
    numberBadge: {
        backgroundColor: theme.colors.primary,
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    numberText: {
        color: theme.colors.white,
        fontWeight: "bold",
        fontSize: 14,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: theme.colors.black,
        flex: 1,
    },
    playBtn: {
        backgroundColor: theme.colors.primary, // Using primary for Play per template, or secondary? Template uses primary. HomeScreen used secondary. Let's use Primary.
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
    },
    controlsRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 12,
    },
    controlBtn: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    restartBtn: {
        backgroundColor: theme.colors.secondary,
        // Or specific color for restart
    },
    playBtnActive: {
        backgroundColor: theme.colors.primaryDark,
    },
    playBtnText: {
        color: theme.colors.white,
        fontWeight: "bold",
        fontSize: 16,
    },
    description: {
        fontSize: 15,
        color: theme.colors.grayDarker,
        lineHeight: 22,
        marginBottom: 8,
    },
    toggleBtn: {
        paddingVertical: 6,
        alignSelf: "flex-start",
    },
    toggleBtnText: {
        color: theme.colors.primary,
        fontWeight: "700",
        fontSize: 14,
        textDecorationLine: "underline",
    },
    mapBtn: {
        marginTop: 12,
        backgroundColor: theme.colors.grayLight,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
    },
    mapBtnText: {
        fontWeight: "700",
        color: theme.colors.black,
    }
});
