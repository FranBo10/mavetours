
import { api } from "./client";
import { API_BASE_URL } from "../config/env";

export type Parada = {
    id: number;
    titulo: string;
    contenido: string | null;
    contenidoFr: string | null;
    contenidoEs: string | null;
    mapa: string | null;
    imagen: string | null;
    audioUrl: string | null;
    audioUrlEs: string | null;
    audioUrlFr: string | null;
    latitud: number | null;
    longitud: number | null;
    videoUrl: string | null;
};

export type ParadaApi = {
    id: number;
    titulo: string;
    contenido?: string | null;
    contenido_fr?: string | null;
    contenido_es?: string | null;
    mapa?: string | null;
    imagen?: string | null;
    audioUrl?: string | null;
    audioUrlEs?: string | null;
    audioUrlFr?: string | null;
    latitud?: number | null;
    longitud?: number | null;
    videoUrl?: string | null;
};

type HydraCollection<T> = {
    "hydra:member"?: T[];
    "hydra:totalItems"?: number;
};

type CollectionEnvelope<P> = {
    member?: P[];
    items?: P[];
    data?: P[];
};

function absolutizeImage(imagen: string | null | undefined) {
    if (!imagen) return null;
    if (imagen.startsWith("http://") || imagen.startsWith("https://")) return imagen;
    return `${API_BASE_URL}/uploads/images/${imagen}`;
}

function absolutizeAudio(audio: string | null | undefined) {
    if (!audio) return null;
    if (audio.startsWith("http://") || audio.startsWith("https://")) return audio;
    return `${API_BASE_URL}/uploads/audios/${audio}`;
}

function mapParada(p: ParadaApi): Parada {
    return {
        id: p.id,
        titulo: p.titulo,
        contenido: p.contenido ?? null,
        contenidoFr: p.contenido_fr ?? null,
        contenidoEs: p.contenido_es ?? null,
        mapa: p.mapa ?? null,
        imagen: absolutizeImage(p.imagen),
        audioUrl: absolutizeAudio(p.audioUrl),
        audioUrlEs: absolutizeAudio(p.audioUrlEs),
        audioUrlFr: absolutizeAudio(p.audioUrlFr),
        latitud: p.latitud ?? null,
        longitud: p.longitud ?? null,
        videoUrl: p.videoUrl ?? null,
    };
}

function extractList(payload: unknown): ParadaApi[] {
    // 1) Array directo
    if (Array.isArray(payload)) return payload as ParadaApi[];

    // 2) Objeto (Hydra / envelope)
    if (payload && typeof payload === "object") {
        const obj = payload as HydraCollection<ParadaApi> & CollectionEnvelope<ParadaApi>;

        if (Array.isArray(obj["hydra:member"])) return obj["hydra:member"];
        if (Array.isArray(obj.member)) return obj.member;
        if (Array.isArray(obj.items)) return obj.items;
        if (Array.isArray(obj.data)) return obj.data;
    }

    // 3) fallback seguro
    return [];
}

export async function fetchParadasByTourId(tourId: number): Promise<Parada[]> {
    // Correct endpoint with filter query param
    const res = await api.get<unknown>(`/api/paradas?tour=${tourId}`);
    const list = extractList(res.data);
    return list.map(mapParada);
}

export async function fetchParadaById(id: number): Promise<Parada> {
    const res = await api.get<unknown>(`/api/paradas/${id}`);
    const payload = res.data as ParadaApi;
    return mapParada(payload);
}
