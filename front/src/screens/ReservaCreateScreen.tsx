// src/screens/ReservaCreateScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import NavigationHeader from '../components/NavigationHeader';
import { createReserva } from '../api/reservas';

type ReservaRouteProp = RouteProp<RootStackParamList, 'ReservaCreate'>;
type ReservaNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'ReservaCreate'
>;

const ReservaCreateScreen: React.FC = () => {
  const route = useRoute<ReservaRouteProp>();
  const navigation = useNavigation<ReservaNavProp>();

  const { tourId } = route.params;

  const [fechaEvento, setFechaEvento] = useState(''); // 'YYYY-MM-DD'
  const [cantidadAdultos, setCantidadAdultos] = useState('1');
  const [cantidadKids, setCantidadKids] = useState('0');
  const [loading, setLoading] = useState(false);

  const handleCreateReserva = async () => {
    if (!fechaEvento) {
      Alert.alert('Error', 'Por favor, indica la fecha del evento (YYYY-MM-DD)');
      return;
    }

    const adultosNum = Number(cantidadAdultos);
    const kidsNum = Number(cantidadKids);

    if (adultosNum + kidsNum <= 0) {
      Alert.alert('Error', 'Debes indicar al menos 1 participante');
      return;
    }

    setLoading(true);

    try {
      const data = await createReserva({
        tour_id: tourId,
        fecha_evento: fechaEvento,
        cantidad_adultos: adultosNum,
        cantidad_kids: kidsNum,
      });

      if (!data.success) {
        Alert.alert('Error', data.error || 'No se pudo crear la reserva');
      } else {
        Alert.alert('OK', data.message || 'Reserva creada correctamente');
        // Podrías navegar a un detalle de reserva o a "Mis reservas"
        navigation.goBack();
      }
    } catch (e: any) {
      console.log(e?.response?.data || e);
      Alert.alert(
        'Error',
        e?.response?.data?.error || 'Error de comunicación con el servidor'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.title}>Nueva reserva</Text>

        <TextInput
          style={styles.input}
          placeholder="Fecha evento (YYYY-MM-DD)"
          placeholderTextColor="#9ca3af"
          value={fechaEvento}
          onChangeText={setFechaEvento}
        />

        <TextInput
          style={styles.input}
          placeholder="Número de adultos"
          placeholderTextColor="#9ca3af"
          keyboardType="numeric"
          value={cantidadAdultos}
          onChangeText={setCantidadAdultos}
        />

        <TextInput
          style={styles.input}
          placeholder="Número de niños"
          placeholderTextColor="#9ca3af"
          keyboardType="numeric"
          value={cantidadKids}
          onChangeText={setCantidadKids}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleCreateReserva}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#111827" />
          ) : (
            <Text style={styles.buttonText}>Confirmar reserva</Text>
          )}
        </TouchableOpacity>
      </View>
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
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#f9fafb',
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1f2937',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#f9fafb',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#f97316',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#111827',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReservaCreateScreen;
