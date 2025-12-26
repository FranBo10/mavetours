// src/screens/ReservasScreen.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import { router } from "expo-router";

import NavigationHeader from "../components/NavigationHeader";
import { theme } from "../theme/theme";
import { API_BASE_URL } from "../config/env";
import { api } from "../api/client";

/* ========= TIPOS (según tus entidades / API) ========= */

type TourApi = {
  id: number;
  titulo: string;
  imagen: string; // nombre de fichero o url
  precio: number; // puede venir euros o céntimos según tu API
};

type DetallesReservaApi = {
  id: number;
  total_reserva: number; // en tu twig ya son céntimos (totalReserva/100)
  cantidad_adultos: number;
  cantidad_kids: number | null;
  fecha_evento: string; // ISO o "Y-m-d H:i:s"
};

type EventoApi = {
  id: number;
  inicio?: string; // IMPORTANTE para el contador (evento.inicio)
  // si en tu entidad el campo se llama distinto, ajusta aquí
};

type ReservaApi = {
  id: number;
  estado: string; // "Añadir guía" / "Confirmada" etc.
  referencia: string;
  fecha_registro: string;

  tours: TourApi[]; // ManyToMany
  detallesReserva: DetallesReservaApi | null; // OneToOne
  evento: EventoApi | null; // ManyToOne
};

/* ========= HELPERS ========= */

function absolutizeImage(imagen: string) {
  if (!imagen) return imagen;
  if (imagen.startsWith("http://") || imagen.startsWith("https://")) return imagen;

  // Si Symfony te devuelve sólo el nombre del archivo:
  if (!imagen.startsWith("/")) return `${API_BASE_URL}/uploads/images/${imagen}`;

  // Si devuelve "/uploads/images/xxx.jpg"
  return `${API_BASE_URL}${imagen}`;
}

function formatPriceFromCents(cents: number) {
  if (!cents) return "Free Tour";
  return `${(cents / 100).toFixed(2)} €`;
}

function formatDateDMY(isoLike: string) {
  const d = new Date(isoLike);
  if (Number.isNaN(d.getTime())) return isoLike;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function getCountdown(startISO: string) {
  const now = Date.now();
  const start = new Date(startISO).getTime();
  const diffMs = start - now;

  if (Number.isNaN(start)) return { mode: "invalid" as const, text: "Invalid date" };
  if (diffMs <= 0) return { mode: "started" as const, text: "" };

  const diffSec = Math.floor(diffMs / 1000);
  const days = Math.floor(diffSec / 86400);
  const remainingAfterDays = diffSec % 86400;
  const hours = Math.floor(remainingAfterDays / 3600);
  const remainingAfterHours = remainingAfterDays % 3600;
  const minutes = Math.floor(remainingAfterHours / 60);

  let text = "";
  if (days > 0) text = `${days}d ${hours}h ${minutes}min`;
  else if (hours > 0) text = `${hours}h ${minutes}min`;
  else text = `${minutes}min`;

  return { mode: "waiting" as const, text };
}

/* ========= API (ajusta el endpoint real) =========
   Ideal: un endpoint que ya devuelva SOLO reservas del usuario logueado y confirmadas.
   Ejemplo: GET /api/me/reservas?estado=confirmada
*/
async function fetchMyConfirmedReservas(): Promise<ReservaApi[]> {
  // ✅ CAMBIA AQUÍ si tu endpoint es otro
  // Opciones típicas:
  // - "/api/me/reservas"
  // - "/api/reservas" (pero entonces filtras por user en backend)
  const { data } = await api.get<ReservaApi[]>("/api/me/reservas");

  // Filtrar confirmadas en móvil (ajusta el string a tu realidad)
  // Si tu estado de “confirmada” es otro, cambia esta lógica:
  return (data ?? []).filter((r) =>
    String(r.estado || "").toLowerCase().includes("confirm")
  );
}

export default function ReservasScreen() {
  const [reservas, setReservas] = useState<ReservaApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setInfoMsg(null);

        const data = await fetchMyConfirmedReservas();
        if (!mounted) return;

        setReservas(data);
      } catch (e: any) {
        if (!mounted) return;
        setInfoMsg(e?.message ?? "No se han podido cargar tus reservas");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const empty = useMemo(() => !loading && reservas.length === 0, [loading, reservas.length]);

  const renderCard = ({ item }: { item: ReservaApi }) => {
    const tour = item.tours?.[0];
    const detalles = item.detallesReserva;

    const imageUrl = tour?.imagen ? absolutizeImage(tour.imagen) : "";
    const totalCents = detalles?.total_reserva ?? 0;

    // En twig: evento.inicio para diff. Aquí lo usamos si existe.
    const eventoInicio = item.evento?.inicio;
    const countdown = eventoInicio ? getCountdown(eventoInicio) : null;

    return (
      <View style={styles.cardReservas}>
        {!!imageUrl && <Image source={{ uri: imageUrl }} style={styles.cardImage} />}

        <View style={styles.reservasDetalles}>
          <Text style={styles.cardTitle}>{tour?.titulo ?? "Tour"}</Text>

          <Text style={styles.line}>
            Price: <Text style={styles.value}>{formatPriceFromCents(totalCents)}</Text>
          </Text>

          <Text style={styles.line}>
            Date:{" "}
            <Text style={styles.value}>
              {detalles?.fecha_evento ? formatDateDMY(detalles.fecha_evento) : "-"}
            </Text>
          </Text>

          <Text style={styles.line}>
            Adults:{" "}
            <Text style={styles.value}>{detalles?.cantidad_adultos ?? 0}</Text>
          </Text>

          <Text style={styles.line}>
            Kids: <Text style={styles.value}>{detalles?.cantidad_kids ?? 0}</Text>
          </Text>

          {/* ⏳ Countdown o Navigate */}
          {countdown?.mode === "waiting" ? (
            <Text style={styles.unlockLine}>
              ⏳ Your tour will be unlocked in{" "}
              <Text style={styles.unlockValue}>{countdown.text}</Text>
            </Text>
          ) : countdown?.mode === "started" ? (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/tour/[id]",
                  params: { id: String(tour?.id ?? "") },
                })
              }
              style={styles.btnPrimaryCard}
            >
              <Text style={styles.btnPrimaryCardText}>Navigate</Text>
            </Pressable>
          ) : null}

          {/* Edit / Delete (de momento placeholders en móvil) */}
          <Pressable
            onPress={() => {
              // si luego creas /reserva/[id]/edit o similar en expo-router, lo conectamos
              setInfoMsg(`(Demo) Edit booking #${item.id}`);
            }}
            style={styles.btnTertiary}
          >
            <Text style={styles.btnTertiaryText}>Modify your booking date</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              Alert.alert("Cancel booking", "Are you sure?", [
                { text: "No", style: "cancel" },
                {
                  text: "Yes",
                  style: "destructive",
                  onPress: () => setInfoMsg(`(Demo) Cancel booking #${item.id}`),
                },
              ]);
            }}
            style={styles.btnDanger}
          >
            <Text style={styles.btnDangerText}>Cancel / Delete booking</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.mainContainer}>
        {infoMsg ? (
          <View style={styles.alertInfo}>
            <Text style={styles.alertInfoText}>{infoMsg}</Text>
          </View>
        ) : null}

        <Text style={styles.tituloReservas}>MY BOOKINGS</Text>

        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Loading bookings...</Text>
          </View>
        ) : empty ? (
          <View style={styles.reservaVacia}>
            <Text style={styles.emptyTitle}>
              Come on, book your first tour with us and lets walk!!!
            </Text>

            <Pressable style={styles.btnPrimary} onPress={() => router.replace("/")}>
              <Text style={styles.btnPrimaryText}>Back to homepage</Text>
            </Pressable>
          </View>
        ) : (
          <FlatList
            data={reservas}
            keyExtractor={(x) => String(x.id)}
            renderItem={renderCard}
            contentContainerStyle={styles.cardsReservas}
          />
        )}
      </View>
    </View>
  );
}

/* ======== STYLES (inspirado en reservas.css) ======== */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },

  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    flex: 1,
  },

  alertInfo: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#DBEAFE",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  alertInfoText: { color: "#1E3A8A", textAlign: "center", fontWeight: "700" },

  tituloReservas: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "900",
    color: theme.colors.primary,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },

  center: { justifyContent: "center", alignItems: "center", paddingTop: 30 },
  loadingText: { marginTop: 10, color: theme.colors.grayDark },

  cardsReservas: { paddingBottom: 30, gap: 16 },

  cardReservas: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  cardImage: { width: "100%", height: 200 },

  reservasDetalles: { padding: 12, gap: 8, alignItems: "center" },

  cardTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: theme.colors.grayDarken,
    textAlign: "center",
  },

  line: { fontSize: 16, color: theme.colors.grayDarken, textAlign: "center" },
  value: { fontWeight: "900" },

  unlockLine: {
    marginTop: 2,
    fontSize: 14,
    color: theme.colors.grayDark,
    textAlign: "center",
  },
  unlockValue: { fontWeight: "900", color: theme.colors.primary },

  btnPrimaryCard: {
    marginTop: 6,
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  btnPrimaryCardText: { color: theme.colors.white, fontWeight: "900" },

  btnTertiary: {
    width: "100%",
    backgroundColor: theme.colors.tertiary,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 6,
  },
  btnTertiaryText: { color: theme.colors.white, fontWeight: "900" },

  btnDanger: {
    width: "100%",
    backgroundColor: "#E74C3C",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 2,
  },
  btnDangerText: { color: theme.colors.white, fontWeight: "900" },

  reservaVacia: { alignItems: "center", marginTop: 30, paddingHorizontal: 10, gap: 12 },
  emptyTitle: { textAlign: "center", fontSize: 16, color: theme.colors.grayDarken, fontWeight: "700" },

  btnPrimary: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  btnPrimaryText: { color: theme.colors.white, fontWeight: "900" },
});
