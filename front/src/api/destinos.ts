// src/api/destinos.ts
import { api } from "./client";
import { API_BASE_URL } from "../config/env";

export type Destino = {
  id: number;
  titulo: string;
  slug: string;
  imagen: string;
  descripcionCorta: string | null;
  descripcionLarga: string | null;
  isActive: boolean; // Corregido: Nombre real de la propiedad
  circuitos?: any[];
  ciudades?: any[];
};

export type DestinoApi = {
  id: number;
  titulo: string;
  slug: string;
  imagen: string | null;
  descripcionCorta?: string | null;
  descripcionLarga?: string | null;
  isActive: boolean; // Coincide con tu entidad PHP
  circuitos?: any[];
  ciudades?: any[];
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

function absolutizeImage(imagen: string | null) {
  if (!imagen) return "https://via.placeholder.com/400";
  if (imagen.startsWith("http://") || imagen.startsWith("https://")) return imagen;
  return `${API_BASE_URL}/uploads/images/destinos/${imagen}`;
}

export function mapDestino(d: DestinoApi): Destino {
  return {
    id: d.id,
    titulo: d.titulo,
    slug: d.slug,
    imagen: absolutizeImage(d.imagen),
    descripcionCorta: d.descripcionCorta ?? null,
    descripcionLarga: d.descripcionLarga ?? null,
    // Verificación robusta para booleanos que vienen de la API
    isActive: d.isActive === true || (d.isActive as any) === 1 || (d.isActive as any) === "true",
    circuitos: d.circuitos ?? [],
    ciudades: d.ciudades ?? [],
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

export async function fetchDestinos(): Promise<Destino[]> {
  try {
    const res = await api.get<unknown>("/api/destinos");
    const list = extractList(res.data);
    return list.map((item: any) => mapDestino(item));
  } catch (error) {
    console.error("Error fetching destinos:", error);
    return [];
  }
}

export async function fetchDestinoById(id: number): Promise<Destino> {
  const res = await api.get<unknown>(`/api/destinos/${id}`);
  const payload = res.data;

  let d: DestinoApi | null = null;
  if (payload && typeof payload === "object" && !Array.isArray(payload)) {
    const obj = payload as Partial<DestinoApi> & { data?: DestinoApi };
    if (typeof obj.id === "number") d = obj as DestinoApi;
    else if (obj.data && typeof obj.data.id === "number") d = obj.data;
  }

  if (!d) throw new Error("Respuesta inesperada al cargar el destino");
  return mapDestino(d);
}

export async function fetchDestinoBySlug(slug: string): Promise<Destino> {
  const res = await api.get<unknown>(`/api/destinos?slug=${slug}`);
  const list = extractList(res.data);
  if (list.length === 0) throw new Error("Destino no encontrado");
  return mapDestino(list[0]);
}