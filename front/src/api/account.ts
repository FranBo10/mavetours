// src/api/account.ts
import { getAccessToken } from "../auth/tokenStorage";

const API_BASE_URL = "http://localhost:8000";

async function authHeaders() {
  const token = await getAccessToken();
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

// GET /api/me (o el endpoint que uses para el usuario logueado)
export async function getMeApi() {
  const res = await fetch(`${API_BASE_URL}/api/me`, {
    method: "GET",
    headers: await authHeaders(),
  });
  const json = await res.json().catch(() => null);
  if (!res.ok) throw new Error(json?.error ?? json?.message ?? "Error /me");
  return json;
}

// PUT /api/me (actualiza datos del usuario logueado)
export async function updateMeApi(payload: {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  pais: string;
  avatar: string;
}) {
  const res = await fetch(`${API_BASE_URL}/api/me`, {
    method: "PUT",
    headers: await authHeaders(),
    body: JSON.stringify(payload),
  });

  const json = await res.json().catch(() => null);
  if (!res.ok) throw new Error(json?.error ?? json?.message ?? "Error guardando");
  return json;
}
