import { api } from "./client";

export type GuiaEvent = {
    id: number;
    title: string;
    start: string; // YYYY-MM-DD
    startTime?: string;
    endTime?: string;
    color: string;
    cerrado: boolean;
    guia: string;
    guia_id: number | null;
    reservas: GuiaReserva[];
};

export type GuiaReserva = {
    id: number;
    cantidadAsistentes: number;
    usuario: string; // Name
    email: string;
    telefono: string;
};

export async function fetchGuiaEvents(): Promise<GuiaEvent[]> {
    const res = await api.get<{ success: boolean; data: GuiaEvent[] }>("/api/guia/events");
    return res.data.data;
}

export async function fetchGuiaEvent(id: number): Promise<GuiaEvent> {
    const res = await api.get<{ success: boolean; data: GuiaEvent }>(`/api/guia/events/${id}`);
    return res.data.data;
}

export async function closeGuiaEvent(
    id: number,
    data: { cantidad_asistentes: number }
): Promise<{ success: boolean; message?: string; error?: string }> {
    const res = await api.post(`/api/guia/events/${id}/close`, data);
    return res.data;
}
