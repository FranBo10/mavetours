// src/api/tours.ts
import { api } from "./client";
import { API_BASE_URL } from "../config/env";

export type Tour = {
  id: number;
  titulo: string;
  imagen: string; // URL absoluta lista para <Image />
  precio: number; // céntimos
  isEstado: boolean;
  descripcionCorta?: string | null;
  descripcionLarga?: string | null;
};

export type TourApi = {
  id: number;
  titulo: string;
  imagen: string;
  precio: number; // euros (double) en tu API
  estado: boolean | number;
  descripcion_corta?: string | null;
  descripcion_larga?: string | null;
};

// Hydra (API Platform)
type HydraCollection<T> = {
  "hydra:member"?: T[];
  "hydra:totalItems"?: number;
};

// Por si tu API devuelve otras variantes
type CollectionEnvelope<T> = {
  member?: T[];
  items?: T[];
  data?: T[];
};

function absolutizeImage(imagen: string) {
  if (!imagen) return imagen;
  if (imagen.startsWith("http://") || imagen.startsWith("https://")) return imagen;
  return `${API_BASE_URL}/uploads/images/${imagen}`;
}

function eurosToCents(value: number) {
  return Math.round((value ?? 0) * 100);
}

function mapTour(t: TourApi): Tour {
  return {
    id: t.id,
    titulo: t.titulo,
    imagen: absolutizeImage(t.imagen),
    precio: eurosToCents(t.precio),
    isEstado: Boolean(t.estado),
    descripcionCorta: t.descripcion_corta ?? null,
    descripcionLarga: t.descripcion_larga ?? null,
  };
}

function extractList(payload: unknown): TourApi[] {
  // 1) Array directo
  if (Array.isArray(payload)) return payload as TourApi[];

  // 2) Objeto (Hydra / envelope)
  if (payload && typeof payload === "object") {
    const obj = payload as HydraCollection<TourApi> & CollectionEnvelope<TourApi>;

    if (Array.isArray(obj["hydra:member"])) return obj["hydra:member"];
    if (Array.isArray(obj.member)) return obj.member;
    if (Array.isArray(obj.items)) return obj.items;
    if (Array.isArray(obj.data)) return obj.data;
  }

  // 3) fallback seguro
  return [];
}

export async function fetchTours(): Promise<Tour[]> {
  const res = await api.get<unknown>("/api/tours");
  const list = extractList(res.data);
  return list.map(mapTour);
}

export async function fetchTourById(id: number): Promise<Tour> {
  const res = await api.get<unknown>(`/api/tours/${id}`);

  // Puede venir como TourApi directo o como { data: TourApi }
  const payload = res.data;

  let t: TourApi | null = null;

  if (payload && typeof payload === "object" && !Array.isArray(payload)) {
    const obj = payload as Partial<TourApi> & { data?: TourApi };

    if (typeof obj.id === "number") t = obj as TourApi;
    else if (obj.data && typeof obj.data.id === "number") t = obj.data;
  }

  if (!t) {
    throw new Error("Respuesta inesperada al cargar el tour");
  }

  return mapTour(t);
}
