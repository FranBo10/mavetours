// src/context/AuthContext.tsx
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { loginApi } from "../api/auth";
import { clearTokens, getAccessToken, setTokens } from "../auth/tokenStorage";
import { fetchMe } from "../api/me";

/* =========================
   TYPES
========================= */

export type AuthUser = {
  id: number;
  email: string;
  nombre?: string;
  apellidos?: string;
  telefono?: string;
  pais?: string;
  avatar?: string;
  roles?: string[];
};

type AuthContextType = {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

/* =========================
   HELPERS (robustos)
========================= */

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function toStringOrUndef(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}

function toStringArrayOrUndef(v: unknown): string[] | undefined {
  return Array.isArray(v) && v.every((x) => typeof x === "string") ? v : undefined;
}

/** Normaliza cualquier “user” del backend a AuthUser */
function normalizeUser(input: unknown): AuthUser | null {
  if (!isRecord(input)) return null;

  const idRaw = input.id;
  const emailRaw = input.email;

  const id = typeof idRaw === "number" ? idRaw : Number(idRaw);
  const email = typeof emailRaw === "string" ? emailRaw : "";

  if (!Number.isFinite(id) || id <= 0 || !email) return null;

  return {
    id,
    email,
    nombre: toStringOrUndef(input.nombre),
    apellidos: toStringOrUndef(input.apellidos),
    telefono: toStringOrUndef(input.telefono),
    pais: toStringOrUndef(input.pais),
    avatar: toStringOrUndef(input.avatar),
    roles: toStringArrayOrUndef(input.roles),
  };
}

/**
 * Tu API de tours devuelve { success, data }.
 * Para login puede ser igual o puede devolver directamente {token: "..."}.
 * Esta función “desenvuelve” el data si existe.
 */
function unwrapData(res: unknown): unknown {
  if (!isRecord(res)) return res;
  if ("data" in res) return (res as any).data;
  return res;
}

/** Extrae access token aunque el backend use claves distintas */
function pickAccessToken(data: unknown): string | null {
  if (!isRecord(data)) return null;

  const v =
    (data as any).access_token ??
    (data as any).token ??
    (data as any).access ??
    null;

  return typeof v === "string" && v.length > 0 ? v : null;
}

/** Extrae refresh token si existe (pero NO lo exigimos) */
function pickRefreshToken(data: unknown): string | null {
  if (!isRecord(data)) return null;

  const v =
    (data as any).refresh_token ??
    (data as any).refresh ??
    (data as any).refreshToken ??
    null;

  return typeof v === "string" && v.length > 0 ? v : null;
}

/* =========================
   PROVIDER
========================= */

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      const meRes = await fetchMe();
      const data = unwrapData(meRes);
      const normalized = normalizeUser(data);
      setUser(normalized);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const boot = async () => {
      try {
        const token = await getAccessToken();
        if (token) {
          await refreshUser();
        }
      } finally {
        setIsLoading(false);
      }
    };
    boot();
  }, [refreshUser]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        // loginApi debe usar el mismo `api` con baseURL correcto (ver nota debajo)
        const raw = await loginApi(email, password);

        // si viene {success:false,error:"..."}
        if (isRecord(raw) && raw.success === false) {
          return { ok: false, error: (raw as any).error || "Login incorrecto" };
        }

        const data = unwrapData(raw);

        const access = pickAccessToken(data);
        const refresh = pickRefreshToken(data); // opcional

        if (!access) {
          return { ok: false, error: "Token inválido en la respuesta de login" };
        }

        // si no hay refresh, guardamos access en ambos para no romper tu storage actual
        await setTokens(access, refresh ?? access);

        // si el login ya trae user
        const userFromLogin = isRecord(data) ? (data as any).user : null;
        const normalized = normalizeUser(userFromLogin);

        if (normalized) setUser(normalized);
        else await refreshUser();

        return { ok: true };
      } catch (e: any) {
        // Si NO hay response => es red / baseURL / firewall / http
        if (!e?.response) {
          return { ok: false, error: "Error de conexión con el servidor" };
        }

        const msg =
          e?.response?.data?.error ||
          e?.response?.data?.message ||
          "Login incorrecto";

        return { ok: false, error: msg };
      }
    },
    [refreshUser]
  );

  const signOut = useCallback(async () => {
    await clearTokens();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      isAuthenticated: !!user,
      signIn,
      signOut,
      refreshUser,
    }),
    [user, isLoading, signIn, signOut, refreshUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}
