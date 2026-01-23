// src/api/blog.ts
import { api } from "./client";
import { API_BASE_URL } from "../config/env";

/* =========================
   TYPES
========================= */

export type BlogTag = { id: number; titulo: string };

export type BlogCategory = {
  id: number;
  titulo: string;
  imagen: string; // url absoluta
};

export type BlogPost = {
  id: number;
  titulo: string;
  imagen: string; // url absoluta
  descripcionCorta?: string | null;
  descripcionLarga?: string | null;
  descripcionLargaEs?: string | null;
  descripcionLargaFr?: string | null;
  fechaRegistro?: string | null;
  estado: boolean;
  etiquetas: BlogTag[];
};

/* =========================
   HELPERS
========================= */

function absolutizeBlogImage(path: string) {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${API_BASE_URL}/uploads/images/blog/${path}`;
}

function toTags(value: unknown): BlogTag[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((t: any) => ({ id: Number(t?.id), titulo: String(t?.titulo ?? "") }))
    .filter((t) => Number.isFinite(t.id) && t.id > 0 && t.titulo.length > 0);
}

/* =========================
   API
========================= */

export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  const res = await api.get("/api/blog/categories");
  const payload = res.data;

  const list = payload?.data ?? [];
  if (!Array.isArray(list)) return [];

  return list.map((c: any) => ({
    id: Number(c.id),
    titulo: String(c.titulo ?? ""),
    imagen: absolutizeBlogImage(String(c.imagen ?? "")),
  }));
}

export async function fetchBlogsByCategory(
  categoryId: number
): Promise<{ categoria: BlogCategory; blogs: BlogPost[] }> {
  const res = await api.get(`/api/blog/categories/${categoryId}`);
  const payload = res.data;

  const cat = payload?.data?.categoria ?? null;
  const blogs = payload?.data?.blogs ?? [];

  const categoria: BlogCategory = {
    id: Number(cat?.id ?? categoryId),
    titulo: String(cat?.titulo ?? ""),
    imagen: absolutizeBlogImage(String(cat?.imagen ?? "")),
  };

  const mapped: BlogPost[] = Array.isArray(blogs)
    ? blogs.map((b: any): BlogPost => ({
        id: Number(b.id),
        titulo: String(b.titulo ?? ""),
        imagen: absolutizeBlogImage(String(b.imagen ?? "")),
        descripcionCorta: b.descripcion_corta ?? null,
        descripcionLarga: b.descripcion_larga ?? null,
        descripcionLargaEs: b.descripcion_larga_es ?? null,
        descripcionLargaFr: b.descripcion_larga_fr ?? null,
        fechaRegistro: b.fecha_registro ?? null,
        estado: Boolean(b.estado),
        etiquetas: toTags(b.etiquetas),
      }))
    : [];

  return { categoria, blogs: mapped };
}

export async function fetchBlogPostById(id: number): Promise<BlogPost> {
  const res = await api.get(`/api/blog/posts/${id}`);
  const payload = res.data;

  if (!payload?.success || !payload?.data) {
    throw new Error(payload?.error ?? "Error loading post");
  }

  const b = payload.data;

  return {
    id: Number(b.id),
    titulo: String(b.titulo ?? ""),
    imagen: absolutizeBlogImage(String(b.imagen ?? "")),
    descripcionCorta: b.descripcion_corta ?? null,
    descripcionLarga: b.descripcion_larga ?? null,
    descripcionLargaEs: b.descripcion_larga_es ?? null,
    descripcionLargaFr: b.descripcion_larga_fr ?? null,
    fechaRegistro: b.fecha_registro ?? null,
    estado: Boolean(b.estado),
    etiquetas: toTags(b.etiquetas),
  };
}
