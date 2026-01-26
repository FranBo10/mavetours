// src/api/auth.ts
import axios from "axios";
import { API_BASE_URL } from "../config/env";

export type LoginUser = {
  id: number;
  email: string;
  nombre?: string | null;
  roles?: string[];
  avatar?: string | null;
  apellidos?: string | null;
  telefono?: string | null;
  pais?: string | null;
};

export type LoginOk = {
  success: true;
  data: {
    access_token: string;
    user?: LoginUser;
  };
};

export type LoginFail = {
  success: false;
  error?: string;
  message?: string;
};

export type LoginResponse = LoginOk | LoginFail;

// Payload para Registro
export type RegisterPayload = {
  email: string;
  password: string;
  nombre: string;
  apellidos: string;
  telefono: string;
  pais: string;
  avatar?: string;
  fechaNacimiento?: string; // YYYY-MM-DD
};

export type RegisterResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

// ✅ Tu backend real
const LOGIN_PATH = "/api/auth/login";
const REGISTER_PATH = "/api/auth/register";

export async function loginApi(email: string, password: string): Promise<LoginResponse> {
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
        validateStatus: () => true, // no lanza excepción por 401/404/500
      }
    );

    console.log("[LOGIN] status =", res.status);
    console.log("[LOGIN] data =", res.data);

    // Si el backend devolvió error HTTP (401/404/500...)
    if (res.status < 200 || res.status >= 300) {
      return {
        success: false,
        error: res.data?.error ?? res.data?.message ?? `HTTP ${res.status}`,
      };
    }

    // Esperamos exactamente { success:true, data:{ access_token, user } }
    const payload = res.data as any;

    if (payload?.success !== true || !payload?.data?.access_token) {
      return {
        success: false,
        error: payload?.error ?? payload?.message ?? "Respuesta de login inválida",
      };
    }

    return {
      success: true,
      data: {
        access_token: payload.data.access_token,
        user: payload.data.user,
      },
    };
  } catch (e: any) {
    console.log("[LOGIN] axios error =", e?.message);
    return { success: false, error: "Error de conexión con el servidor" };
  }
}

export async function registerApi(data: RegisterPayload): Promise<RegisterResponse> {
  const url = `${API_BASE_URL}${REGISTER_PATH}`;
  console.log("[REGISTER] POST →", url);

  try {
    const res = await axios.post(url, data, {
      headers: { "Content-Type": "application/json" },
      timeout: 15000,
      validateStatus: () => true
    });

    console.log("[REGISTER] status =", res.status);

    if (res.status >= 200 && res.status < 300) {
      // Backend returns { success: true, message: '...' }
      return { success: true, message: res.data?.message };
    } else {
      return {
        success: false,
        error: res.data?.error ?? res.data?.message ?? `HTTP ${res.status}`
      };
    }
  } catch (e: any) {
    console.log("[REGISTER] error =", e.message);
    return { success: false, error: "Error de conexión con el servidor" };
  }
}
