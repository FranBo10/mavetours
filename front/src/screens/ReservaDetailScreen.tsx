// src/screens/ReservaDetailScreen.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import NavigationHeader from '../components/NavigationHeader';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { fetchReserva, deleteReserva, Reserva } from '../api/reservas';

type ReservaDetailRouteProp = RouteProp<RootStackParamList, 'ReservaDetail'>;
type ReservaDetailNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'ReservaDetail'
>;

const ReservaDetailScreen: React.FC = () => {
  const route = useRoute<ReservaDetailRouteProp>();
  const navigation = useNavigation<ReservaDetailNavProp>();

  const { id } = route.params;

  const [reserva, setReserva] = useState<Reserva | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchReserva(id);
        if (res.success) {
          setReserva(res.data);
        } else {
          setError(res.error || 'No se pudo cargar la reserva');
        }
      } catch (e: any) {
        console.log(e?.response?.data || e);
        setError('Error de comunicación con el servidor');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  const handleDelete = () => {
    if (!reserva) return;

    Alert.alert(
      'Cancelar reserva',
      '¿Seguro que quieres cancelar esta reserva?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Sí, cancelar',
          style: 'destructive',
          onPress: async () => {
            try {
              setDeleting(true);
              const res = await deleteReserva(reserva.id);
              if (res.success) {
                Alert.alert('OK', res.message || 'Reserva cancelada');
                navigation.navigate('ReservasList');
              } else {
                Alert.alert('Error', res.error || 'No se pudo cancelar');
              }
            } catch (e: any) {
              console.log(e?.response?.data || e);
              Alert.alert(
                'Error',
                e?.response?.data?.error ||
                  'Error de comunicación con el servidor'
              );
            } finally {
              setDeleting(false);
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !reserva) {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.errorText}>{error || 'Reserva no encontrada'}</Text>
        </View>
      </View>
    );
  }

  const detalles = reserva.detalles;
  const tour = reserva.tour;

  const fecha = detalles?.fecha_evento ?? '-';
  const total =
    detalles?.total_reserva != null
      ? (detalles.total_reserva / 100).toFixed(2) + ' €'
      : '-';

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Detalle de la reserva</Text>

        <View style={styles.box}>
          <Text style={styles.label}>Referencia:</Text>
          <Text style={styles.value}>{reserva.referencia}</Text>

          <Text style={styles.label}>Estado:</Text>
          <Text style={styles.value}>{reserva.estado}</Text>

          <Text style={styles.label}>Tour:</Text>
          <Text style={styles.value}>{tour?.titulo ?? '-'}</Text>

          <Text style={styles.label}>Fecha del evento:</Text>
          <Text style={styles.value}>{fecha}</Text>

          <Text style={styles.label}>Adultos:</Text>
          <Text style={styles.value}>
            {detalles?.cantidad_adultos ?? 0}
          </Text>

          <Text style={styles.label}>Niños:</Text>
          <Text style={styles.value}>
            {detalles?.cantidad_kids ?? 0}
          </Text>

          <Text style={styles.label}>Total participantes:</Text>
          <Text style={styles.value}>
            {detalles?.cantidad ?? 0}
          </Text>

          <Text style={styles.label}>Total reserva:</Text>
          <Text style={styles.value}>{total}</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.buttonDanger]}
          onPress={handleDelete}
          disabled={deleting}
        >
          {deleting ? (
            <ActivityIndicator color="#111827" />
          ) : (
            <Text style={styles.buttonText}>Cancelar reserva</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#fecaca',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    color: '#f9fafb',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#1f2937',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#f9fafb',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#f97316',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDanger: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReservaDetailScreen;
