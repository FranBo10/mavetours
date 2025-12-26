// src/api/auth.ts
import axios from "axios";
import { API_BASE_URL } from "../config/env";

export type LoginOk = {
  success: true;
  data: {
    access_token: string;
    refresh_token?: string;
    user?: {
      id: number;
      email: string;
      nombre?: string | null;
      roles?: string[];
      avatar?: string | null;
    };
  };
};

export type LoginFail = {
  success: false;
  error?: string;
  message?: string;
};

export type LoginResponse = LoginOk | LoginFail;

/** Helpers */
function isRecord(v: unknown): v is Record<string, any> {
  return typeof v === "object" && v !== null;
}

function pickAccessToken(payload: unknown): string | null {
  if (!isRecord(payload)) return null;
  const v =
    payload.access_token ??
    payload.token ??
    payload.jwt ??
    payload.accessToken ??
    null;
  return typeof v === "string" && v.length > 0 ? v : null;
}

function pickRefreshToken(payload: unknown): string | undefined {
  if (!isRecord(payload)) return undefined;
  const v =
    payload.refresh_token ??
    payload.refreshToken ??
    payload.refresh ??
    undefined;
  return typeof v === "string" && v.length > 0 ? v : undefined;
}

/**
 * ⚠️ Ajusta aquí la ruta REAL de tu backend.
 * - LexikJWT típico: /api/login
 * - Custom: /auth/login o /api/auth/login
 */
const LOGIN_PATH = "/api/auth/login"; // 👈 cambia si tu backend usa otra
const REFRESH_PATH = "/api/auth/refresh"; // 👈 cambia si tu backend usa otra

export async function loginApi(
  email: string,
  password: string
): Promise<LoginResponse> {
  const url = `${API_BASE_URL}${LOGIN_PATH}`;

  console.log("[LOGIN] POST →", url);
  console.log("[LOGIN] email =", email);

  try {
    const res = await axios.post(
      url,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        timeout: 10000,
        validateStatus: () => true, // no lanza excepción por 401/404
      }
    );

    console.log("[LOGIN] status =", res.status);
    console.log("[LOGIN] data =", res.data);

    if (res.status < 200 || res.status >= 300) {
      return {
        success: false,
        error:
          (res.data && (res.data.error || res.data.message)) ||
          `HTTP ${res.status}`,
      };
    }

    // Algunos backends devuelven { token: "..." }
    // Otros devuelven { success:true, data:{ access_token, refresh_token, user } }
    const access =
      pickAccessToken(res.data) ??
      pickAccessToken(isRecord(res.data) ? res.data.data : null);

    const refresh =
      pickRefreshToken(res.data) ??
      pickRefreshToken(isRecord(res.data) ? res.data.data : null);

    // Caso 1: backend tipo LexikJWT => { token: "..." }
    if (access && !isRecord(res.data?.data)) {
      return {
        success: true,
        data: {
          access_token: access,
          refresh_token: refresh,
          user: isRecord(res.data) ? res.data.user : undefined,
        },
      };
    }

    // Caso 2: tu formato => { success:true, data:{ access_token, refresh_token, user } }
    if (isRecord(res.data) && res.data.success === true && isRecord(res.data.data)) {
      const a = pickAccessToken(res.data.data);
      if (!a) {
        return { success: false, error: "Login OK pero falta access_token" };
      }
      return {
        success: true,
        data: {
          access_token: a,
          refresh_token: pickRefreshToken(res.data.data),
          user: res.data.data.user,
        },
      };
    }

    // Caso 3: respuesta inesperada
    if (!access) {
      return { success: false, error: "Respuesta de login sin token" };
    }

    return {
      success: true,
      data: {
        access_token: access,
        refresh_token: refresh,
        user: isRecord(res.data) ? res.data.user : undefined,
      },
    };
  } catch (e: any) {
    console.log("[LOGIN] axios error =", e?.message);
    return {
      success: false,
      error: "Error de conexión con el servidor",
    };
  }
}

export async function refreshApi(refresh_token: string): Promise<{
  access_token: string;
  refresh_token?: string;
}> {
  const url = `${API_BASE_URL}${REFRESH_PATH}`;

  console.log("[REFRESH] POST →", url);

  const res = await axios.post(
    url,
    { refresh_token },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 10000,
      validateStatus: () => true,
    }
  );

  console.log("[REFRESH] status =", res.status);
  console.log("[REFRESH] data =", res.data);

  if (res.status < 200 || res.status >= 300) {
    throw new Error(
      (res.data && (res.data.error || res.data.message)) || `HTTP ${res.status}`
    );
  }

  const access = pickAccessToken(res.data) ?? pickAccessToken(res.data?.data);
  const refresh = pickRefreshToken(res.data) ?? pickRefreshToken(res.data?.data);

  if (!access) throw new Error("Refresh OK pero falta access_token");

  return { access_token: access, refresh_token: refresh };
}
