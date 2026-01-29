// app/tour/[id]/book.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAuth } from "../../../src/context/AuthContext";
import { theme } from "../../../src/theme/theme";
import { fetchTourById, type Tour, getTourTitle } from "../../../src/api/tours";
import { createReservation } from "../../../src/api/reservations";
import i18n from "../../../src/i18n";
import { useLanguage } from "../../../src/context/LanguageContext";

// Helper Counter Component
function CounterControl({
  label,
  value,
  onChange,
  min = 0
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min?: number;
}) {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
    <View style={styles.counterRow}>
      <Text style={styles.counterLabel}>{label}</Text>
      <View style={styles.counterControls}>
        <Pressable
          onPress={handleDecrement}
          style={({ pressed }) => [
            styles.counterBtn,
            value <= min && styles.counterBtnDisabled,
            pressed && styles.counterBtnPressed
          ]}
          disabled={value <= min}
        >
          <Text style={[styles.counterBtnText, value <= min && styles.counterBtnTextDisabled]}>-</Text>
        </Pressable>

        <Text style={styles.counterValue}>{value}</Text>

        <Pressable
          onPress={handleIncrement}
          style={({ pressed }) => [
            styles.counterBtn,
            pressed && styles.counterBtnPressed
          ]}
        >
          <Text style={styles.counterBtnText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function BookTourScreen() {
  const { isAuthenticated } = useAuth();
  const { locale } = useLanguage();
  const params = useLocalSearchParams<{ id?: string }>();
  const id = useMemo(() => Number(params.id), [params.id]);
  const router = useRouter();

  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // default 1 adult, 0 children
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        if (!id || Number.isNaN(id)) throw new Error("Invalid tour id");
        const found = await fetchTourById(id);
        if (mounted) setTour(found);
      } catch (e: any) {
        if (mounted) setError(e?.message ?? "Error loading tour");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [id, isAuthenticated]);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleSubmit = async () => {
    if (!tour) return;

    setError(null);

    // Validation
    if ((adults + children) <= 0) {
      Alert.alert(i18n.t("error"), i18n.t("reservation_participants_error"));
      return;
    }

    // Format date to YYYY-MM-DD
    const formattedDate = date.toISOString().split('T')[0];

    try {
      setSubmitting(true);
      const result = await createReservation({
        tour_id: tour.id,
        fecha_evento: formattedDate,
        cantidad_adultos: adults,
        cantidad_kids: children
      });

      if (result.success) {
        Alert.alert(
          i18n.t("booking_success_title"),
          result.message || i18n.t("success"),
          [
            {
              text: "OK",
              onPress: () => router.push("/")
            }
          ]
        );
      } else {
        throw new Error(result.error || i18n.t("error_generic"));
      }
    } catch (e: any) {
      if (e?.response?.status === 401) {
        Alert.alert(
          i18n.t("error"),
          i18n.t("login_required"),
          [{ text: "OK", onPress: () => router.push("/login") }]
        );
        return;
      }
      const msg = e?.response?.data?.error || e.message || i18n.t("error_generic");
      Alert.alert(i18n.t("error"), msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error || !tour) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>{error || i18n.t("tour_not_available")}</Text>
        <Link href="/" asChild><Pressable style={styles.btnPrimary}><Text style={styles.btnText}>{i18n.t("go_back_home")}</Text></Pressable></Link>
      </View>
    );
  }

  // Calculate Total
  const price = tour.precio ?? 0;
  // If Free Tour (price 0) -> Total 0
  const totalPrice = price * (adults + children);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <ImageBackground source={{ uri: tour.imagen }} style={styles.headerImage} resizeMode="cover">
            <View style={styles.overlay} />
            <Text style={styles.headerTitle}>{getTourTitle(tour, locale)}</Text>
          </ImageBackground>

          <View style={styles.card}>
            <Text style={styles.title}>{i18n.t("booking_form_title")}</Text>

            {!isAuthenticated && (
              <View style={styles.warningBox}>
                <Text style={styles.warningText}>{i18n.t("login_required")}</Text>
                <Link href="/login" asChild>
                  <Pressable style={styles.btnSmall}><Text style={styles.btnSmallText}>{i18n.t("log_in")}</Text></Pressable>
                </Link>
              </View>
            )}

            <View style={styles.formGroup}>
              <Text style={styles.label}>{i18n.t("date_label")}</Text>

              {Platform.OS === 'android' ? (
                <>
                  <Pressable onPress={() => isAuthenticated && setShowDatePicker(true)} style={styles.input}>
                    <Text style={{ fontSize: 16, color: theme.colors.black }}>
                      {date.toISOString().split('T')[0]}
                    </Text>
                  </Pressable>
                  {showDatePicker && (
                    <DateTimePicker
                      value={date}
                      mode="date"
                      display="default"
                      onChange={onChangeDate}
                      minimumDate={new Date()}
                    />
                  )}
                </>
              ) : (
                <View style={{ alignItems: 'flex-start' }}>
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                    minimumDate={new Date()}
                    disabled={!isAuthenticated}
                    style={{ marginLeft: -10 }}
                  />
                </View>
              )}
            </View>

            {/* Counters Section */}
            <View style={{ gap: 16, marginVertical: 8 }}>
              <CounterControl
                label={i18n.t("adults_label")}
                value={adults}
                onChange={setAdults}
                min={1}
              />
              <View style={styles.separator} />
              <CounterControl
                label={i18n.t("children_label")}
                value={children}
                onChange={setChildren}
                min={0}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.totalLabel}>{i18n.t("total_price")}:</Text>
              <Text style={styles.totalValue}>
                {price === 0 ? i18n.t("free") : `${(totalPrice / 100).toFixed(2)} €`}
              </Text>
            </View>

            {isAuthenticated ? (
              <Pressable
                onPress={handleSubmit}
                style={[styles.btnPrimary, { marginTop: 20 }, submitting && styles.disabled]}
                disabled={submitting}
              >
                {submitting ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <Text style={styles.btnText}>{i18n.t("confirm_booking")}</Text>
                )}
              </Pressable>
            ) : null}

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight },
  center: { justifyContent: "center", alignItems: "center", padding: 20 },
  content: { paddingBottom: 40 },
  headerImage: { width: "100%", height: 200, justifyContent: "flex-end", marginBottom: -20 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.3)" },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    padding: 20,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  title: { fontSize: 20, fontWeight: "bold", color: theme.colors.black, marginBottom: 20, textAlign: "center" },
  formGroup: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: "600", color: theme.colors.grayDark, marginBottom: 6 },
  input: {
    backgroundColor: theme.colors.grayLight,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
    color: theme.colors.black,
    justifyContent: "center" // Added for Pressable vertically centering
  },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  divider: { height: 1, backgroundColor: "#eee", marginVertical: 16 },
  totalLabel: { fontSize: 18, fontWeight: "bold", color: theme.colors.black },
  totalValue: { fontSize: 18, fontWeight: "bold", color: theme.colors.primary },
  btnPrimary: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  errorText: { color: theme.colors.text, fontSize: 16, marginBottom: 10 },
  warningBox: {
    backgroundColor: "#fff3cd",
    borderColor: "#ffeeba",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    alignItems: "center"
  },
  warningText: { color: "#856404", marginBottom: 8 },
  btnSmall: { backgroundColor: theme.colors.primary, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  btnSmallText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  disabled: { opacity: 0.6 },

  // New Styles for Counters
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4
  },
  counterLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.black
  },
  counterControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  counterBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: theme.colors.grayDark, // Or simplified referencing text color
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  counterBtnPressed: {
    backgroundColor: theme.colors.grayLight,
    opacity: 0.7
  },
  counterBtnDisabled: {
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb'
  },
  counterBtnText: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.primary,
    lineHeight: 22,
    marginTop: -2 // Visual alignment
  },
  counterBtnTextDisabled: {
    color: '#d1d5db'
  },
  counterValue: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.black,
    minWidth: 24,
    textAlign: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginVertical: 4
  }
});
