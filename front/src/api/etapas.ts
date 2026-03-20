// src/api/etapas.ts
import { api } from "./client";
import { API_BASE_URL } from "../config/env";

export type Etapa = {
    id: number;
    titulo: string;
    descripcion: string;
    orden: number;
};

export type EtapaApi = {
    id: number;
    titulo: string;
    descripcion: string;
    orden: number;
};

// Hydra (API Platform)
type HydraCollection<T> = {
    "hydra:member"?: T[];
    "hydra:totalItems"?: number;
};

type CollectionEnvelope<T> = {
    member?: T[];
    items?: T[];
    data?: T[];
};

export function mapEtapa(e: EtapaApi): Etapa {
    return {
        id: e.id,
        titulo: e.titulo,
        descripcion: e.descripcion,
        orden: e.orden,
    };
}

export function extractList(payload: unknown): any[] {
    if (Array.isArray(payload)) return payload;

    if (payload && typeof payload === "object") {
        const obj = payload as HydraCollection<any> & CollectionEnvelope<any>;
        if (Array.isArray(obj["hydra:member"])) return obj["hydra:member"];
        if (Array.isArray(obj.member)) return obj.member;
        if (Array.isArray(obj.items)) return obj.items;
        if (Array.isArray(obj.data)) return obj.data;
    }
    return [];
}

export async function fetchEtapasByCircuito(circuitoId: number): Promise<Etapa[]> {
    try {
        const res = await api.get<unknown>(`/api/etapas?circuito=${circuitoId}`);
        const list = extractList(res.data);
        return list.map((item: any) => mapEtapa(item));
    } catch (error) {
        console.error("Error fetching etapas:", error);
        return [];
    }
}

export async function fetchEtapaById(id: number): Promise<Etapa> {
    const res = await api.get<unknown>(`/api/etapas/${id}`);
    const payload = res.data;

    let e: EtapaApi | null = null;
    if (payload && typeof payload === "object" && !Array.isArray(payload)) {
        const obj = payload as Partial<EtapaApi> & { data?: EtapaApi };
        if (typeof obj.id === "number") e = obj as EtapaApi;
        else if (obj.data && typeof obj.data.id === "number") e = obj.data;
    }

    if (!e) throw new Error("Respuesta inesperada al cargar la etapa");
    return mapEtapa(e);
}
