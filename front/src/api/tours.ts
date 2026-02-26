// src/api/tours.ts
import { api } from "./client";
import { API_BASE_URL } from "../config/env";
// Import Destino if needed, but to avoid circular deps we might just use 'any' or a partial type if Destino imports Tour
// import { Destino } from "./destinos"; 

export type Etapa = {
  id: number;
  titulo: string;
  descripcion: string;
  orden: number;
};

export type Tour = {
  id: number;
  titulo: string;
  tituloEs?: string | null;
  tituloFr?: string | null;
  imagen: string; // URL absoluta lista para <Image />
  precio: number; // céntimos
  isEstado: boolean;
  descripcionCorta?: string | null;
  subtitulo?: string | null;
  subtituloEs?: string | null;
  subtituloFr?: string | null;
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
  descripcionLargaEs?: string | null;
  descripcionLargaFr?: string | null;
  descripcionCortaEs?: string | null;
  descripcionCortaFr?: string | null;
  destino?: any | null; // Typed as any to avoid circular dependency for now
  etapas?: Etapa[];
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
  subtitulo?: string | null;
  subtitulo_es?: string | null;
  subtitulo_fr?: string | null;
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
  descripcion_larga_es?: string | null;
  descripcion_larga_fr?: string | null;
  descripcion_corta_es?: string | null;
  descripcion_corta_fr?: string | null;
  destino?: any; // API response structure
  etapas?: any[];
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

export function mapTour(t: TourApi): Tour {
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
    stock: typeof t.stock === "number" ? t.stock : null,
    descripcionLargaEs: t.descripcion_larga_es ?? null,
    descripcionLargaFr: t.descripcion_larga_fr ?? null,
    descripcionCortaEs: t.descripcion_corta_es ?? null,
    descripcionCortaFr: t.descripcion_corta_fr ?? null,
    subtitulo: t.subtitulo ?? null,
    subtituloEs: t.subtitulo_es ?? null,
    subtituloFr: t.subtitulo_fr ?? null,
    // @ts-ignore
    etapas: Array.isArray(t.etapas) ? t.etapas.map((e: any) => ({
      id: e.id,
      titulo: e.titulo,
      descripcion: e.descripcion,
      orden: e.orden
    })) : []
  };
}

export function extractList(payload: unknown): any[] {
  // 1) Array directo
  if (Array.isArray(payload)) return payload as any[];

  // 2) Objeto (Hydra / envelope)
  if (payload && typeof payload === "object") {
    const obj = payload as HydraCollection<any> & CollectionEnvelope<any>;

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

  return tour.titulo;
}

// Helper to get localized description
export function getTourDescription(tour: Tour, locale: string): string | null {
  // 1. Specific matches
  if (locale.startsWith('es') && tour.descripcionLargaEs) return tour.descripcionLargaEs;
  if (locale.startsWith('fr') && tour.descripcionLargaFr) return tour.descripcionLargaFr;

  // 2. English (Base)
  if (locale.startsWith('en') && tour.descripcionLarga) return tour.descripcionLarga;

  // 3. Fallback to Spanish (Default preferred)
  if (tour.descripcionLargaEs) return tour.descripcionLargaEs;

  // 4. Last resort (Base)
  return tour.descripcionLarga || null;
}

// Helper to get localized short description
export function getTourShortDescription(tour: Tour, locale: string): string | null {
  // 1. Specific matches
  if (locale.startsWith('es') && tour.descripcionCortaEs) return tour.descripcionCortaEs;
  if (locale.startsWith('fr') && tour.descripcionCortaFr) return tour.descripcionCortaFr;

  // 2. English (Base)
  if (locale.startsWith('en') && tour.descripcionCorta) return tour.descripcionCorta;

  // 3. Fallback to Spanish (Default preferred)
  if (tour.descripcionCortaEs) return tour.descripcionCortaEs;

  // 4. Last resort (Base)
  return tour.descripcionCorta || null;
}

// Helper to get localized subtitle
export function getTourSubtitle(tour: Tour, locale: string): string | null {
  // 1. Specific matches
  if (locale.startsWith('es') && tour.subtituloEs) return tour.subtituloEs;
  if (locale.startsWith('fr') && tour.subtituloFr) return tour.subtituloFr;

  // 2. English (Base)
  if (locale.startsWith('en') && tour.subtitulo) return tour.subtitulo;

  // 3. Fallback to Spanish (Default preferred)
  if (tour.subtituloEs) return tour.subtituloEs;

  // 4. Last resort (Base)
  return tour.subtitulo || null;
}

export async function fetchTours(): Promise<Tour[]> {
  const res = await api.get<unknown>("/api/tours");
  const list = extractList(res.data);
  return list.map((item: any) => mapTour(item));
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
