// src/api/me.ts
import { api } from './client';

export type MeResponse = {
  success: boolean;
  error?: string;
  data?: {
    id: number;
    email: string;
    nombre?: string | null;
    avatar?: string | null;
    roles: string[];
  };
};

export async function fetchMe(): Promise<MeResponse> {
  const res = await api.get('/auth/me');
  return res.data;
}
