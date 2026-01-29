import React, { useEffect, useState, useMemo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Modal,
    Pressable,
    TextInput,
    Alert,
    ScrollView,
    Platform
} from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { useRouter } from 'expo-router';
import { theme } from '../../src/theme/theme';
import { useAuth } from '../../src/context/AuthContext';
import { fetchGuiaEvents, closeGuiaEvent, GuiaEvent, GuiaReserva } from '../../src/api/guia';
import i18n from '../../src/i18n';

// Extend locale config for calendar if needed (defaults to EN, but we can set ES)
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['es'] = {
    monthNames: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
    today: 'Hoy'
};
LocaleConfig.defaultLocale = 'es';

export default function GuideCalendarScreen() {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    const [events, setEvents] = useState<GuiaEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [markedDates, setMarkedDates] = useState<any>({});

    // Modal State
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [dayEvents, setDayEvents] = useState<GuiaEvent[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        try {
            setLoading(true);
            const data = await fetchGuiaEvents();
            setEvents(data);

            const markers: any = {};
            data.forEach(evt => {
                if (!markers[evt.start]) {
                    markers[evt.start] = { dots: [] };
                }
                markers[evt.start].dots.push({
                    key: evt.id,
                    color: evt.color || theme.colors.primary,
                });
            });
            setMarkedDates(markers);
        } catch (e) {
            console.error(e);
            Alert.alert("Error", "No se pudieron cargar los eventos del calendario.");
        } finally {
            setLoading(false);
        }
    };

    const onDayPress = (day: DateData) => {
        const dateStr = day.dateString;
        const evts = events.filter(e => e.start === dateStr);

        if (evts.length === 0) return;

        if (evts.length === 1) {
            // Go directly if only one
            router.push(`/guia/event/${evts[0].id}`);
        } else {
            // Show list modal
            setSelectedDate(dateStr);
            setDayEvents(evts);
            setModalVisible(true);
        }
    };

    const goToEvent = (evt: GuiaEvent) => {
        setModalVisible(false);
        router.push(`/guia/event/${evt.id}`);
    };

    const renderEventItem = ({ item }: { item: GuiaEvent }) => (
        <Pressable style={styles.eventItem} onPress={() => goToEvent(item)}>
            <View style={[styles.eventColorBar, { backgroundColor: item.color || theme.colors.primary }]} />
            <View style={{ flex: 1 }}>
                <Text style={styles.eventItemTitle}>{item.title}</Text>
                <Text style={styles.eventItemTime}>
                    {item.startTime ? `${item.startTime} - ${item.endTime}` : 'Horario no definido'}
                </Text>
                <Text style={styles.eventItemPax}>
                    {item.reservas.length} reservas | {item.reservas.reduce((acc, r) => acc + r.cantidadAsistentes, 0)} pax
                </Text>
                {item.cerrado && <Text style={styles.closedBadgeSmall}>VALIDADO</Text>}
            </View>
            <Text style={styles.arrow}>›</Text>
        </Pressable>
    );

    if (loading) {
        return <View style={[styles.container, styles.center]}><ActivityIndicator size="large" color={theme.colors.primary} /></View>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Calendario Guía</Text>

            <Calendar
                markingType={'multi-dot'}
                markedDates={markedDates}
                onDayPress={onDayPress}
                theme={{
                    todayTextColor: theme.colors.primary,
                    arrowColor: theme.colors.primary,
                    dotColor: theme.colors.primary,
                    selectedDayBackgroundColor: theme.colors.primary,
                }}
            />

            <View style={styles.hintBox}>
                <Text style={styles.hintText}>Toca un día con punto para ver los detalles.</Text>
            </View>

            {/* Modal Day Events List */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                presentationStyle="pageSheet"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <View style={{ width: 40 }} />

                        <Text style={styles.modalTitle} numberOfLines={1}>
                            Eventos: {selectedDate}
                        </Text>

                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeBtn}>X</Text>
                        </Pressable>
                    </View>

                    <FlatList
                        data={dayEvents}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderEventItem}
                        contentContainerStyle={{ padding: 10 }}
                    />

                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
    center: { justifyContent: 'center', alignItems: 'center' },
    headerTitle: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: theme.colors.black },
    hintBox: { padding: 20, alignItems: 'center' },
    hintText: { color: '#666', fontStyle: 'italic' },

    modalContainer: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#f9f9f9' },
    modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    modalTitle: { fontSize: 22, fontWeight: 'bold', flex: 1, color: theme.colors.black, textAlign: 'center' },
    closeBtn: { fontSize: 24, fontWeight: 'bold', color: '#999', padding: 10 },

    // List Item Styles
    eventItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
        gap: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    eventColorBar: {
        width: 6,
        height: '100%',
        borderRadius: 3
    },
    eventItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.black,
        marginBottom: 4
    },
    eventItemTime: {
        fontSize: 14,
        color: theme.colors.primary,
        fontWeight: '600',
        marginBottom: 2
    },
    eventItemPax: {
        fontSize: 13,
        color: '#666',
    },
    arrow: {
        fontSize: 24,
        color: '#ccc',
        fontWeight: 'bold'
    },
    closedBadgeSmall: {
        fontSize: 10,
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginTop: 6,
        color: '#555',
        fontWeight: 'bold'
    }
});
