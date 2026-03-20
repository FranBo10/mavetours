// src/api/circuitos.ts
import { api } from "./client";
import { API_BASE_URL } from "../config/env";

export type Pais = {
    id: number;
    nombre: string;
    iso2: string;
    slug: string;
};

export type CircuitoDia = {
    id: number;
    diaNumero: number;
    titulo?: string;
    descripcion: string;
    transporte?: string;
    ciudad?: any;
    pais?: Pais;
};

export type Circuito = {
    id: number;
    titulo: string;
    slug: string;
    resumenCard?: string;
    descripcionLarga?: string;
    duracionDias?: number;
    imagenCover?: string;
    orden: number;
    dias: CircuitoDia[];
    destino?: any; // Para evitar dependencia circular
};

export type CircuitoApi = {
    id: number;
    titulo: string;
    slug: string;
    resumenCard?: string;
    descripcionLarga?: string;
    duracionDias?: number;
    imagenCover?: string | null;
    orden: number;
    dias?: any[];
    destino?: any;
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

function absolutizeImage(imagen: string | null | undefined): string {
    if (!imagen) return "https://via.placeholder.com/400";
    if (imagen.startsWith("http://") || imagen.startsWith("https://")) return imagen;
    return `${API_BASE_URL}/uploads/images/${imagen}`;
}

function mapCircuitoDia(d: any): CircuitoDia {
    return {
        id: d.id,
        diaNumero: d.diaNumero,
        titulo: d.titulo,
        descripcion: d.descripcion,
        transporte: d.transporte,
        ciudad: d.ciudad,
        pais: d.pais,
    };
}

export function mapCircuito(c: CircuitoApi): Circuito {
    let img = c.imagenCover;
    if (img && !img.startsWith("http")) {
        img = `circuitos/${img}`;
    }

    return {
        id: c.id,
        titulo: c.titulo,
        slug: c.slug,
        resumenCard: c.resumenCard,
        descripcionLarga: c.descripcionLarga,
        duracionDias: c.duracionDias,
        imagenCover: absolutizeImage(img),
        orden: c.orden,
        dias: Array.isArray(c.dias) ? c.dias.map(mapCircuitoDia) : [],
        destino: c.destino ?? undefined,
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

export async function fetchCircuitos(): Promise<Circuito[]> {
    try {
        const res = await api.get<unknown>("/api/circuitos");
        const list = extractList(res.data);
        return list.map((item: any) => mapCircuito(item));
    } catch (error) {
        console.error("Error fetching circuitos:", error);
        return [];
    }
}

export async function fetchCircuitoBySlug(slug: string): Promise<Circuito> {
    const res = await api.get<unknown>(`/api/circuitos?slug=${slug}`);
    const list = extractList(res.data);
    if (list.length === 0) throw new Error("Circuito no encontrado");
    return mapCircuito(list[0]);
}

export async function fetchCircuitoById(id: number): Promise<Circuito> {
    const res = await api.get<unknown>(`/api/circuitos/${id}`);
    const payload = res.data;

    let c: CircuitoApi | null = null;
    if (payload && typeof payload === "object" && !Array.isArray(payload)) {
        const obj = payload as Partial<CircuitoApi> & { data?: CircuitoApi };
        if (typeof obj.id === "number") c = obj as CircuitoApi;
        else if (obj.data && typeof obj.data.id === "number") c = obj.data;
    }

    if (!c) throw new Error("Respuesta inesperada al cargar el circuito");
    return mapCircuito(c);
}
