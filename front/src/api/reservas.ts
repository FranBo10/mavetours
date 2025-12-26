// src/api/reservas.ts
import api from './client';

/**
 * Tipos para las solicitudes y las respuestas
 */

export interface ReservaCreatePayload {
  tour_id: number;
  fecha_evento: string; // formato 'YYYY-MM-DD'
  cantidad_adultos: number;
  cantidad_kids: number;
}

export interface ReservaUpdatePayload {
  fecha_evento?: string;
  cantidad_adultos?: number;
  cantidad_kids?: number;
}

export interface ReservaDetalle {
  fecha_evento: string | null;
  cantidad_adultos: number | null;
  cantidad_kids: number | null;
  cantidad: number | null;
  total_reserva: number | null;
}

export interface ReservaTour {
  id: number;
  titulo: string;
  precio: number;
}

export interface Reserva {
  id: number;
  referencia: string;
  estado: string;
  user_id: number | null;
  tour: ReservaTour | null;
  detalles: ReservaDetalle | null;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  error?: string;
  data: T;
}


/**
 * Crear una nueva reserva
 * POST /api/reservas
 */

export async function createReserva(payload: ReservaCreatePayload): Promise<ApiResponse<Reserva>> {
  const res = await api.post('/reservas', payload);
  return res.data;
}


/**
 * Obtener reservas del usuario conectado
 * GET /api/reservas
 */

export async function fetchReservas(): Promise<ApiResponse<Reserva[]>> {
  const res = await api.get('/reservas');
  return res.data;
}


/**
 * Obtener detalle de una reserva
 * GET /api/reservas/{id}
 */

export async function fetchReserva(id: number): Promise<ApiResponse<Reserva>> {
  const res = await api.get(`/reservas/${id}`);
  return res.data;
}


/**
 * Modificar una reserva existente
 * PATCH /api/reservas/{id}
 */

export async function updateReserva(
  id: number,
  payload: ReservaUpdatePayload
): Promise<ApiResponse<Reserva>> {
  const res = await api.patch(`/reservas/${id}`, payload);
  return res.data;
}


/**
 * Eliminar / cancelar una reserva
 * DELETE /api/reservas/{id}
 */

export async function deleteReserva(id: number): Promise<ApiResponse<null>> {
  const res = await api.delete(`/reservas/${id}`);
  return res.data;
}
