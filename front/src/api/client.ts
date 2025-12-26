// src/api/client.ts
import axios from "axios";
import { API_BASE_URL } from "../config/env";
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  clearTokens,
} from "../auth/tokenStorage";
import { refreshApi } from "./auth";

// Para poder usar original._retry sin que TS se queje
type RetryConfig = {
  _retry?: boolean;
};

export const api = axios.create({
  baseURL: API_BASE_URL, // <- IMPORTANTE: NO pongas /api aquí
  timeout: 15000,
});

// ===== Interceptors =====

let isRefreshing = false;
let queue: Array<(token: string | null) => void> = [];

function flushQueue(token: string | null) {
  queue.forEach((cb) => cb(token));
  queue = [];
}

api.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config as (typeof error.config & RetryConfig);

    if (error?.response?.status === 401 && !original?._retry) {
      original._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          queue.push((token) => {
            if (!token) return reject(error);
            original.headers = original.headers ?? {};
            original.headers.Authorization = `Bearer ${token}`;
            resolve(api(original));
          });
        });
      }

      isRefreshing = true;

      try {
        const refreshToken = await getRefreshToken();
        if (!refreshToken) {
          await clearTokens();
          isRefreshing = false;
          flushQueue(null);
          return Promise.reject(error);
        }

        // OJO: aquí usa exactamente las claves que devuelve tu backend
        const data = await refreshApi(refreshToken);

        // ✅ tu backend devuelve "token"
        const newAccess = data.token;
        const newRefresh = data.refresh_token ?? refreshToken;

        if (!newAccess) {
          await clearTokens();
          isRefreshing = false;
          flushQueue(null);
          return Promise.reject(error);
        }

await setTokens(newAccess, newRefresh);

        isRefreshing = false;
        flushQueue(newAccess);

        original.headers = original.headers ?? {};
        original.headers.Authorization = `Bearer ${newAccess}`;

        return api(original);
      } catch (e) {
        isRefreshing = false;
        flushQueue(null);
        await clearTokens();
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);
