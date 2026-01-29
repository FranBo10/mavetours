import { api } from "./client";

export type CreateReservationParams = {
    tour_id: number;
    fecha_evento: string; // YYYY-MM-DD
    cantidad_adultos: number;
    cantidad_kids: number;
};

export type ReservationResponse = {
    success: boolean;
    message?: string;
    error?: string;
    data?: any; // We can type this better if needed, based on serializeReserva
};

export async function createReservation(params: CreateReservationParams): Promise<ReservationResponse> {
    try {
        const response = await api.post<ReservationResponse>("/api/reservas", params);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            return error.response.data as ReservationResponse;
        }
        // Fallback error
        throw error;
    }
}
