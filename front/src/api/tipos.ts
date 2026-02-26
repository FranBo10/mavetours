import { api } from "./client";
import { API_BASE_URL } from "../config/env";
import { Tour, extractList, mapTour } from "./tours";

// --- Interfaces ---

export interface Pais {
    id: number;
    nombre: string;
    iso2: string;
    slug: string;
}

export interface Ciudad {
    id: number;
    nombre: string;
    slug: string;
    pais?: Pais;
}

export interface CircuitoDia {
    id: number;
    diaNumero: number;
    titulo?: string;
    descripcion: string;
    transporte?: string;
    ciudad?: Ciudad;
    pais?: Pais;
}

export interface Circuito {
    id: number;
    titulo: string;
    slug: string;
    resumenCard?: string;
    descripcionLarga?: string;
    duracionDias?: number;
    imagenCover?: string;
    orden: number;
    dias: CircuitoDia[];
    destino?: Destino; // Reference to parent
}

export interface Destino {
    id: number;
    nombre: string;
    slug: string;
    imagenCover?: string;
    descripcionCorta?: string;
    circuitos: Circuito[];
}

// --- API Helpers ---

function absolutizeImage(imagen: string | undefined | null): string {
    if (!imagen) return "";
    if (imagen.startsWith("http://") || imagen.startsWith("https://")) return imagen;
    // Adjust base path if needed, assuming generic images folder or specific
    // For simplicity using /uploads/images/circuitos or /uploads/images/destinos depending on context
    // But here we might just prepend the base URL and let the backend return the relative path
    return `${API_BASE_URL}/uploads/images/${imagen}`;
}

// --- Mappers ---

function mapCircuitoDia(d: any): CircuitoDia {
    return {
        id: d.id,
        diaNumero: d.diaNumero,
        titulo: d.titulo,
        descripcion: d.descripcion,
        transporte: d.transporte,
        ciudad: d.ciudad, // Assuming nested object or simplistic mapping
        pais: d.pais
    };
}

function mapCircuito(c: any): Circuito {
    // Backend returns 'imagenCover' as filename usually
    // We need to know if it is 'circuitos' or 'destinos' folder? 
    // Usually backend assumes /uploads/images/circuitos for Circuito

    let img = c.imagenCover;
    if (img && !img.startsWith('http')) {
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
        destino: c.destino ? mapDestino(c.destino, false) : undefined
    };
}

function mapDestino(c: any, includeCircuitos = true): Destino {
    let img = c.imagenCover;
    if (img && !img.startsWith('http')) {
        // Asumiendo que las imágenes de destino están en 'continentes' o ahora 'destinos'
        img = `continentes/${img}`;
    }

    return {
        id: c.id,
        // El backend devuelve 'destino' si hemos renombrado la propiedad, o 'nombre' si es custom
        // Si el backend antes devolvía 'continente', ahora debería devolver 'destino'
        nombre: c.nombre || c.destino,
        slug: c.slug,
        imagenCover: absolutizeImage(img),
        descripcionCorta: c.descripcionCorta,
        circuitos: includeCircuitos && Array.isArray(c.circuitos) ? c.circuitos.map(mapCircuito) : []
    };
}

// --- Fetchers ---

export * from "./tours"; // Re-export everything from tours

// --- Fetchers ---

// IMPORTANTE: Aquí la URL de la API debe cambiar si el backend lo ha cambiado. 
// Como no tenemos entidad 'Continente', probablemente la API usaba ApiPlatform sobre Circuito 
// y filtraba por 'continente'. Ahora filtrará por 'destino'.
// PERO: Si no hay entidad Destino, ¿cómo obtenemos la lista de destinos únicos?
// Antes: fetchContinentes -> /api/continentes (que no encontré en backend).
// Si era un custom controller, debo encontrarlo. Si no, quizá estaba hardcoded o usaba una entidad que no vi.
// Asumiré que el endpoint sigue siendo /api/continentes o cambiará a /api/destinos si existe tal entidad.
// Si no existe entidad, quizás fetchContinentes usaba una agregación sobre Circuitos.
// Puesto que el usuario pidió cambiar variable, mantendré la estructura pero con nombres nuevos.

export async function fetchDestinos(): Promise<Destino[]> {
    // Si el endpoint realmente existe:
    const res = await api.get<unknown>("/api/destinos");
    const list = extractList(res.data);
    return list.map(item => mapDestino(item, true));
}

export async function fetchDestinoBySlug(slug: string): Promise<Destino> {
    const res = await api.get<unknown>(`/api/destinos?slug=${slug}`);
    const list = extractList(res.data);
    if (list.length === 0) throw new Error("Destino no encontrado");
    return mapDestino(list[0], true);
}

export async function fetchCircuitoBySlug(slug: string): Promise<Circuito> {
    const res = await api.get<unknown>(`/api/circuitos?slug=${slug}`);
    const list = extractList(res.data);
    if (list.length === 0) throw new Error("Circuito no encontrado");
    return mapCircuito(list[0]);
}

export async function fetchToursByCity(ciudadId: number): Promise<Tour[]> {
    const res = await api.get<unknown>(`/api/tours?estado=true&ciudad.id=${ciudadId}`);
    return extractList(res.data);
}
