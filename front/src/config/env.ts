// src/config/env.ts
import { Platform } from "react-native";

const DEV_PORT = 8000;

// ⚠️ Cambia esto por la IP LAN de tu PC si usas móvil real:
const LAN_IP = "192.168.1.50";

function getDevBaseUrl() {
  // Android Emulator
  if (Platform.OS === "android") return `http://10.0.2.2:${DEV_PORT}`;
  // iOS Simulator
  if (Platform.OS === "ios") return `http://localhost:${DEV_PORT}`;
  // Fallback (por si acaso)
  return `http://${LAN_IP}:${DEV_PORT}`;
}

export const API_BASE_URL = __DEV__ ? getDevBaseUrl() : "https://TU_DOMINIO_PROD";
