import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Pressable, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { theme } from '../../../src/theme/theme';
import { fetchGuiaEvent, closeGuiaEvent, GuiaEvent, GuiaReserva } from '../../../src/api/guia';

export default function EventDetailScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [event, setEvent] = useState<GuiaEvent | null>(null);
    const [loading, setLoading] = useState(true);
    const [checkedReservations, setCheckedReservations] = useState<Record<number, boolean>>({});
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (id) {
            loadEvent(parseInt(id as string));
        }
    }, [id]);

    const loadEvent = async (eventId: number) => {
        try {
            setLoading(true);
            const data = await fetchGuiaEvent(eventId);
            setEvent(data);

            // Initialize checks
            const initialChecks: Record<number, boolean> = {};
            data.reservas.forEach(r => initialChecks[r.id] = false);
            // Ideally we'd load existing attendance status if the API provided it per user
            setCheckedReservations(initialChecks);
        } catch (e) {
            Alert.alert("Error", "No se pudo cargar el evento.");
            router.back();
        } finally {
            setLoading(false);
        }
    };

    const toggleCheck = (resId: number) => {
        // Read only if closed?? The prompt says "show info... name, Total Asistentes"
        // But also implies "eliminate cash".
        // If validated, we should probably lock it, yes.
        if (event?.cerrado) return;

        setCheckedReservations(prev => ({
            ...prev,
            [resId]: !prev[resId]
        }));
    };

    const calculateTotalPax = () => {
        if (!event) return 0;
        let total = 0;
        event.reservas.forEach(r => {
            if (checkedReservations[r.id]) {
                total += r.cantidadAsistentes;
            }
        });
        return total;
    };

    const calculateTotalPossible = () => {
        return event?.reservas.reduce((acc, r) => acc + r.cantidadAsistentes, 0) || 0;
    }


    const handleSave = async () => {
        if (!event) return;

        const pax = calculateTotalPax();

        try {
            setSubmitting(true);
            // No cash anymore
            const res = await closeGuiaEvent(event.id, {
                cantidad_asistentes: pax
            });

            if (res.success) {
                Alert.alert(
                    "Éxito",
                    "Evento validado correctamente.",
                    [{ text: "OK", onPress: () => router.back() }] // Go back to calendar
                );
            } else {
                Alert.alert("Error", res.error || "No se pudo guardar.");
            }
        } catch (e: any) {
            Alert.alert("Error", e?.response?.data?.error || "Error de conexión");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return <View style={[styles.container, styles.center]}><ActivityIndicator size="large" color={theme.colors.primary} /></View>;
    }

    if (!event) return null;

    const isClosed = event.cerrado;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.backBtn}>
                    <Text style={styles.backText}>‹ Volver</Text>
                </Pressable>
                <Text style={styles.headerTitle} numberOfLines={1}>{event.title}</Text>
                <View style={{ width: 60 }} />
            </View>

            <View style={styles.content}>
                <Text style={styles.dateInfo}>{event.start} | {event.startTime} - {event.endTime}</Text>
                {isClosed && <Text style={styles.closedBadge}>VALIDADO</Text>}

                <Text style={styles.sectionTitle}>Lista de Asistentes</Text>

                <FlatList
                    data={event.reservas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        const checked = !!checkedReservations[item.id];
                        return (
                            <Pressable
                                style={[styles.row, isClosed && styles.disabledRow]}
                                onPress={() => toggleCheck(item.id)}
                                disabled={isClosed}
                            >
                                <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                                    {checked && <Text style={styles.checkMark}>✓</Text>}
                                </View>
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <Text style={styles.userName}>{item.usuario}</Text>
                                    <Text style={styles.userDetails}>{item.cantidadAsistentes} pax | {item.email}</Text>
                                    <Text style={styles.userDetails}>{item.telefono}</Text>
                                </View>
                            </Pressable>
                        );
                    }}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            </View>

            <View style={styles.footer}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Total Asistentes:</Text>
                    <Text style={styles.summaryValue}>
                        {isClosed ? '---' : `${calculateTotalPax()} / ${calculateTotalPossible()}`}
                    </Text>
                </View>

                {!isClosed ? (
                    <Pressable
                        style={[styles.btnSave, submitting && styles.disabled]}
                        onPress={handleSave}
                        disabled={submitting}
                    >
                        {submitting ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Validar Asistencia</Text>}
                    </Pressable>
                ) : (
                    <Text style={styles.infoText}>Evento validado.</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9f9f9', paddingTop: 40 },
    center: { justifyContent: 'center', alignItems: 'center' },

    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#eee', backgroundColor: '#fff' },
    backBtn: { padding: 5 },
    backText: { fontSize: 16, color: theme.colors.primary, fontWeight: 'bold' },
    headerTitle: { fontSize: 18, fontWeight: 'bold', flex: 1, textAlign: 'center' },

    content: { flex: 1, padding: 15 },

    dateInfo: { textAlign: 'center', fontSize: 16, color: '#666', marginBottom: 10 },
    closedBadge: {
        backgroundColor: '#e0e0e0', color: '#555', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 4,
        alignSelf: 'center', fontSize: 12, fontWeight: 'bold', marginBottom: 15
    },

    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: theme.colors.black },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2
    },
    disabledRow: { opacity: 0.7 },

    checkbox: {
        width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: theme.colors.grayDark,
        justifyContent: 'center', alignItems: 'center', marginRight: 10
    },
    checkboxChecked: { borderColor: theme.colors.primary, backgroundColor: theme.colors.primary },
    checkMark: { color: '#fff', fontWeight: 'bold', fontSize: 14 },

    userName: { fontSize: 16, fontWeight: '600', color: '#333' },
    userDetails: { fontSize: 14, color: '#666' },

    footer: {
        padding: 20, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#eee',
        position: 'absolute', bottom: 0, left: 0, right: 0
    },
    summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    summaryLabel: { fontSize: 18, fontWeight: 'bold' },
    summaryValue: { fontSize: 18, fontWeight: 'bold', color: theme.colors.primary },

    btnSave: {
        backgroundColor: theme.colors.success || '#28a745',
        padding: 15, borderRadius: 10, alignItems: 'center'
    },
    btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    disabled: { opacity: 0.5 },
    infoText: { textAlign: 'center', color: '#999', fontStyle: 'italic' }
});
