import React, { useEffect, useRef, useState } from "react";
import i18n from "../../../src/i18n";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    FlatList,
    Pressable,
    Animated,
    Easing,
    useWindowDimensions,
    ActivityIndicator,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { theme } from "../../../src/theme/theme";
import { fetchToursByCity, type Tour, getTourTitle } from "../../../src/api/tours";
import { useLanguage } from "../../../src/context/LanguageContext";
import { useAuth } from "../../../src/context/AuthContext";

function formatPrice(precio: number) {
    if (!precio) return i18n.t("free");
    return `${(precio / 100).toFixed(2)} €`;
}

const COLLAPSED_H = 60;
const EXPANDED_H = 240;

function TourCard({
    tour,
    isLoggedIn,
    expanded,
    onToggle,
}: {
    tour: Tour;
    isLoggedIn: boolean;
    expanded: boolean;
    onToggle: () => void;
}) {
    const { locale } = useLanguage();
    const anim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(anim, {
            toValue: expanded ? 1 : 0,
            duration: 500,
            easing: Easing.bezier(0.48, -0.02, 0.41, 1.15),
            useNativeDriver: false,
        }).start();
    }, [expanded, anim]);

    const footerHeight = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [COLLAPSED_H, EXPANDED_H],
    });

    const fadeIn = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const slideUp = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [12, 0],
    });

    const goMoreInfo = () => {
        router.push({ pathname: "/tour/[id]", params: { id: String(tour.id) } });
    };

    const goFreeTour = () => {
        router.push({ pathname: "/tour/[id]/book", params: { id: String(tour.id) } });
    };

    const goAudioguide = () => {
        router.push({ pathname: "/audioguide/[id]", params: { id: String(tour.id) } });
    };

    const goLogin = () => {
        router.push("/login");
    };

    return (
        <Pressable
            onPress={onToggle}
            style={({ pressed }) => [styles.card, pressed && { opacity: 0.95 }]}
        >
            <ImageBackground
                source={{ uri: tour.imagen }}
                style={styles.cardImage}
                resizeMode="cover"
            >
                <View style={styles.cardOverlay} />

                <Animated.View style={[styles.cardBottom, { height: footerHeight }]}>
                    <Text style={styles.cardTitle}>{getTourTitle(tour, locale)}</Text>

                    <Animated.View
                        pointerEvents={expanded ? "auto" : "none"}
                        style={{
                            opacity: fadeIn,
                            transform: [{ translateY: slideUp }],
                        }}
                    >
                        <Text style={styles.cardPrice}>
                            {i18n.t("price")}{" "}
                            <Text style={styles.cardPriceValue}>{formatPrice(tour.precio)}</Text>
                        </Text>

                        <View style={styles.cardButtonsRow}>
                            <Pressable
                                onPress={goMoreInfo}
                                style={({ pressed }) => [
                                    styles.btnBase,
                                    styles.btnSecondary,
                                    pressed && styles.btnPressed,
                                    { width: "100%" },
                                ]}
                            >
                                <Text style={styles.btnText}>{i18n.t("info")}</Text>
                            </Pressable>

                            {isLoggedIn ? (
                                <>
                                    <Pressable
                                        onPress={goFreeTour}
                                        style={({ pressed }) => [
                                            styles.btnBase,
                                            styles.btnPrimary,
                                            pressed && styles.btnPressed,
                                            { flex: 1, minWidth: "45%" },
                                        ]}
                                    >
                                        <Text style={styles.btnText}>{i18n.t("freetour")}</Text>
                                    </Pressable>
                                    <Pressable
                                        onPress={goAudioguide}
                                        style={({ pressed }) => [
                                            styles.btnBase,
                                            styles.btnWarning,
                                            pressed && styles.btnPressed,
                                            { flex: 1, minWidth: "45%" },
                                        ]}
                                    >
                                        <Text style={styles.btnText}>{i18n.t("audioguide")}</Text>
                                    </Pressable>
                                </>
                            ) : (
                                <>
                                    <Pressable
                                        onPress={goLogin}
                                        style={({ pressed }) => [
                                            styles.btnBase,
                                            styles.btnPrimary,
                                            pressed && styles.btnPressed,
                                            { flex: 1, minWidth: "45%" },
                                        ]}
                                    >
                                        <Text style={styles.btnText}>{i18n.t("freetour")}</Text>
                                    </Pressable>
                                    <Pressable
                                        onPress={goLogin}
                                        style={({ pressed }) => [
                                            styles.btnBase,
                                            styles.btnWarning,
                                            pressed && styles.btnPressed,
                                            { flex: 1, minWidth: "45%" },
                                        ]}
                                    >
                                        <Text style={styles.btnText}>{i18n.t("audioguide")}</Text>
                                    </Pressable>
                                </>
                            )}
                        </View>

                        <Text style={styles.tapHint}>{i18n.t("tap_to_hide")}</Text>
                    </Animated.View>

                    {!expanded && (
                        <Text style={styles.tapHint}>{i18n.t("tap_to_see")}</Text>
                    )}
                </Animated.View>
            </ImageBackground>
        </Pressable>
    );
}

export default function ToursByCiudadScreen() {
    const { width } = useWindowDimensions();
    const numColumns = width >= 700 ? 2 : 1;
    const { isAuthenticated } = useAuth();
    const { locale } = useLanguage();
    const { ciudadId, ciudadNombre } = useLocalSearchParams<{
        ciudadId: string;
        ciudadNombre?: string;
    }>();

    const [tours, setTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedCardId, setExpandedCardId] = useState<string | number | null>(null);

    useEffect(() => {
        if (!ciudadId) return;
        let mounted = true;
        setLoading(true);
        fetchToursByCity(Number(ciudadId))
            .then((res: Tour[]) => {
                if (mounted) {
                    setTours(res);
                    setLoading(false);
                }
            })
            .catch((e: any) => {
                if (mounted) {
                    setError(e.message || "Error");
                    setLoading(false);
                }
            });
        return () => {
            mounted = false;
        };
    }, [ciudadId]);

    const visibleTours = tours.filter((t) => t.isEstado);

    const handleToggleCard = (id: string | number) => {
        setExpandedCardId((prev) => (prev === id ? null : id));
    };

    const title = ciudadNombre
        ? `${i18n.t("tours_in")} ${ciudadNombre}`
        : i18n.t("tours");

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
                        <Text style={styles.btnRetryText}>{i18n.t("back")}</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container} key={locale}>

            <View style={styles.headerBar}>
                <Pressable onPress={() => router.back()} style={styles.backBtn}>
                    <Text style={styles.backBtnText}>← {i18n.t("back")}</Text>
                </Pressable>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>

            <FlatList
                data={visibleTours}
                key={numColumns}
                numColumns={numColumns}
                contentContainerStyle={styles.cardsContainer}
                columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={[styles.cardWrapper, numColumns > 1 && { flex: 1 }]}>
                        <TourCard
                            tour={item}
                            isLoggedIn={isAuthenticated}
                            expanded={expandedCardId === item.id}
                            onToggle={() => handleToggleCard(item.id)}
                        />
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>{i18n.t("no_tours")}</Text>
                }
            />
        </View>
    );
}

/* ================== STYLES ================== */

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

    headerBar: {
        paddingTop: 80,
        paddingHorizontal: theme.spacing.md,
        paddingBottom: 10,
    },
    backBtn: { marginBottom: 10, alignSelf: "flex-start" },
    backBtnText: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: "600",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "900",
        color: theme.colors.black,
        textTransform: "uppercase",
    },

    emptyText: {
        textAlign: "center",
        marginTop: 40,
        color: theme.colors.grayDark,
        fontStyle: "italic",
    },

    cardsContainer: {
        paddingHorizontal: theme.spacing.lg,
        paddingBottom: theme.spacing.xl,
        paddingTop: 10,
    },
    columnWrapper: { gap: 16 },
    cardWrapper: { marginBottom: 16 },

    card: {
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: theme.colors.white,
        ...theme.shadow.soft,
    },
    cardImage: { height: 240, width: "100%", justifyContent: "flex-end" },
    cardOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0)",
    },

    cardBottom: {
        backgroundColor: theme.colors.grayDarken,
        paddingVertical: 10,
        paddingHorizontal: 12,
        overflow: "hidden",
    },
    cardTitle: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSize.h3,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 8,
    },

    cardPrice: {
        color: theme.colors.white,
        textAlign: "center",
        marginBottom: 10,
    },
    cardPriceValue: { color: theme.colors.secondary, fontWeight: "800" },

    cardButtonsRow: {
        flexDirection: "row",
        gap: 8,
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: 12,
    },

    btnBase: {
        minHeight: 48,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderWidth: 0,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        marginBottom: 8,
    },
    btnPrimary: { backgroundColor: theme.colors.primary },
    btnSecondary: { backgroundColor: theme.colors.secondary },
    btnWarning: { backgroundColor: theme.colors.warning },
    btnPressed: { opacity: 0.85, transform: [{ scale: 0.98 }] },
    btnText: {
        color: theme.colors.white,
        fontSize: 14,
        fontWeight: "800",
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },

    tapHint: {
        color: theme.colors.grayDark,
        textAlign: "center",
        marginTop: 2,
        fontSize: 12,
    },

    btnRetry: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
    },
    btnRetryText: { color: theme.colors.white, fontWeight: "bold" },
});
