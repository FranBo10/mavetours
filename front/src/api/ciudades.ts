// src/api/ciudades.ts
import { api } from "./client";
import { API_BASE_URL } from "../config/env";

export type Ciudad = {
    id: number;
    nombre: string;
    slug: string;
    pais?: string;
    imagen?: string;
    descripcion?: string;
    isActive?: boolean;
};

export type CiudadApi = {
    id: number;
    nombre: string;
    slug: string;
    pais?: string;
    imagen?: string | null;
    descripcion?: string | null;
    isActive?: boolean;
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

export function mapCiudad(c: CiudadApi): Ciudad {
    return {
        id: c.id,
        nombre: c.nombre,
        slug: c.slug,
        pais: c.pais,
        imagen: c.imagen ? absolutizeImage(c.imagen) : undefined,
        descripcion: c.descripcion ?? undefined,
        isActive: c.isActive === true || (c.isActive as any) === 1 || (c.isActive as any) === "true",
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

export async function fetchCiudadesByDestino(destinoId: number): Promise<Ciudad[]> {
    try {
        const res = await api.get<unknown>(`/api/ciudades?destino=${destinoId}`);
        const list = extractList(res.data);
        return list.map((item: any) => mapCiudad(item)).filter(c => c.isActive !== false);
    } catch (error) {
        console.error("Error fetching ciudades:", error);
        return [];
    }
}

export async function fetchCiudadById(id: number): Promise<Ciudad> {
    const res = await api.get<unknown>(`/api/ciudades/${id}`);
    const payload = res.data;

    let c: CiudadApi | null = null;
    if (payload && typeof payload === "object" && !Array.isArray(payload)) {
        const obj = payload as Partial<CiudadApi> & { data?: CiudadApi };
        if (typeof obj.id === "number") c = obj as CiudadApi;
        else if (obj.data && typeof obj.data.id === "number") c = obj.data;
    }

    if (!c) throw new Error("Respuesta inesperada al cargar la ciudad");
    return mapCiudad(c);
}
