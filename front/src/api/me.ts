// src/api/me.ts
import { api } from "./client";

export type MeResponse = {
  success: boolean;
  error?: string;
  data?: {
    id: number;
    email: string;
    nombre?: string | null;
    apellidos?: string | null;
    telefono?: string | null;
    pais?: string | null;
    avatar?: string | null;
    roles?: string[];
  };
};

export type UpdateUserPayload = {
  nombre?: string;
  apellidos?: string;
  email?: string;
  telefono?: string;
  pais?: string;
  avatar?: string;
};

export async function fetchMe(): Promise<MeResponse> {
  const res = await api.get("/api/auth/me"); // ✅ RUTA CORRECTA
  return res.data;
}

export async function updateUser(id: number, data: UpdateUserPayload): Promise<MeResponse> {
  // API Platform standard endpoint: PATCH /api/users/{id}
  // Headers: "Content-Type": "application/merge-patch+json" is usually required for API Platform PATCH,
  // but "application/json" might work depending on config. "client.ts" might handle default headers.
  // We'll try PATCH with partial data.
  const res = await api.patch(`/api/users/${id}`, data, {
    headers: {
      "Content-Type": "application/merge-patch+json",
    },
  });
  return { success: true, data: res.data };
}
