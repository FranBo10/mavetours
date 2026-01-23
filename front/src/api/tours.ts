// src/api/tours.ts
import { api } from "./client";
import { API_BASE_URL } from "../config/env";

export type Tour = {
  id: number;
  titulo: string;
  tituloEs?: string | null;
  tituloFr?: string | null;
  imagen: string; // URL absoluta lista para <Image />
  precio: number; // céntimos
  isEstado: boolean;
  descripcionCorta?: string | null;
  descripcionLarga?: string | null;
  duracion?: string | null;
  comienzo?: string | null;
  final?: string | null;
  mapaComienzo?: string | null;
  mapaFinal?: string | null;
  horaInicio?: string | null;
  horaFin?: string | null;
  rango?: string | null;
  stock?: number | null;
};

export type TourApi = {
  id: number;
  titulo: string;
  titulo_es?: string | null;
  tituloEs?: string | null; // Handle camelCase mismatch
  titulo_fr?: string | null;
  tituloFr?: string | null; // Handle camelCase mismatch
  imagen: string;
  precio: number; // euros (double) en tu API
  estado: boolean | number;
  descripcion_corta?: string | null;
  descripcion_larga?: string | null;
  duracion?: string | null;
  comienzo?: string | null;
  final?: string | null;
  mapaComienzo?: string | null;
  mapaFinal?: string | null;
  hora_inicio?: string | null;
  hora_fin?: string | null;
  rango?: string | null;
  stock?: number | null;
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
    tituloEs: t.titulo_es ?? t.tituloEs ?? null,
    tituloFr: t.titulo_fr ?? t.tituloFr ?? null,
    imagen: absolutizeImage(t.imagen),
    precio: eurosToCents(t.precio),
    // Robust check for state: true if 1, "1", true, or "true"
    isEstado: t.estado === true || t.estado === 1 || String(t.estado) === "1" || String(t.estado) === "true",
    descripcionCorta: t.descripcion_corta ?? null,
    descripcionLarga: t.descripcion_larga ?? null,
    duracion: t.duracion ?? null,
    comienzo: t.comienzo ?? null,
    final: t.final ?? null,
    mapaComienzo: t.mapaComienzo ?? null,
    mapaFinal: t.mapaFinal ?? null,
    horaInicio: t.hora_inicio ?? null,
    horaFin: t.hora_fin ?? null,
    rango: t.rango ?? null,
    stock: typeof t.stock === "number" ? t.stock : null
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

// Helper to get localized title with strict Spanish default
export function getTourTitle(tour: Tour, locale: string): string {
  // 1. Specific matches
  if (locale.startsWith('es') && tour.tituloEs) return tour.tituloEs;
  if (locale.startsWith('fr') && tour.tituloFr) return tour.tituloFr;

  // 2. English (Base title usually)
  if (locale.startsWith('en')) return tour.titulo;

  // 3. Fallback to Spanish (Default as requested by user)
  if (tour.tituloEs) return tour.tituloEs;

  // 4. Last resort (Base)
  return tour.titulo;
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
