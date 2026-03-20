import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ImageBackground
} from "react-native";
import { Link } from "expo-router";
import { theme } from "../theme/theme";
import { Tour } from "../api/tours";

export default function TourCard({ tour }: { tour: Tour }) {
    return (
        <Link href={`/tour/${tour.id}`} asChild>
            <Pressable style={styles.tourCard}>
                <ImageBackground
                    source={{ uri: tour.imagen }}
                    style={styles.tourImage}
                    imageStyle={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                >
                    <View style={styles.tourOverlay} />
                    <View style={styles.priceTag}>
                        <Text style={styles.priceText}>
                            {tour.precio > 0 ? `${(tour.precio).toFixed(2)} €` : "Gratis"}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.tourContent}>
                    <Text style={styles.tourTitle} numberOfLines={2}>{tour.titulo}</Text>
                    {tour.descripcionCorta ? (
                        <Text style={styles.tourDesc} numberOfLines={2}>{tour.descripcionCorta}</Text>
                    ) : null}

                    <View style={styles.footer}>
                        <Text style={styles.detailLink}>Ver detalles ›</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    tourCard: {
        width: 280, // Fixed width for carousel
        backgroundColor: theme.colors.white,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
        marginRight: 16,
        marginBottom: 10,
    },
    tourImage: {
        height: 160,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    tourOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    tourContent: {
        padding: 12,
    },
    tourTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 4,
        color: theme.colors.black,
        height: 44, // Fixed height for alignment
    },
    tourDesc: {
        fontSize: 12,
        color: theme.colors.grayDark,
        marginBottom: 8,
        height: 32,
    },

    priceTag: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 0, // Corner
        margin: 10,
    },
    priceText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 4,
    },
    detailLink: {
        color: theme.colors.primary,
        fontWeight: '700',
        fontSize: 14,
    }
});
