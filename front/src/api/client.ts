// src/api/client.ts
import axios from "axios";
import { API_BASE_URL } from "../config/env";

import { getAccessToken, clearTokens } from "../auth/tokenStorage";

// Para poder usar original._retry sin que TS se queje
type RetryConfig = {
  _retry?: boolean;
};

export const api = axios.create({
  baseURL: API_BASE_URL, // <- IMPORTANTE: NO pongas /api aquí
  timeout: 15000,
});

// ===== Interceptors =====

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
    if (error?.response?.status === 401) {
      const original = error.config as (typeof error.config & RetryConfig);
      if (!original?._retry) {
        original._retry = true;
        await clearTokens();
        // Retry the request (now without token)
        return api(original);
      }
    }

    return Promise.reject(error);
  }
);
