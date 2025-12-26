import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../src/context/AuthContext";
import { theme } from "../src/theme/theme";

export default function LoginScreen() {
  const { signIn, isLoading, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Si ya está autenticado, lo mandamos a Home
  React.useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/(tabs)");
    }
  }, [isLoading, isAuthenticated]);

  const onSubmit = async () => {
    setError(null);
    setSubmitting(true);
    const res = await signIn(email.trim(), password);
    setSubmitting(false);

    if (!res.ok) {
      setError(res.error ?? "Login incorrecto");
      return;
    }

    // login ok => Home
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Log in</Text>

        {error ? (
          <View style={styles.alertDanger}>
            <Text style={styles.alertDangerText}>{error}</Text>
          </View>
        ) : null}

        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#9ca3af"
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#9ca3af"
          style={styles.input}
        />

        <View style={styles.menuButtons}>
          <Pressable style={styles.btnPrimary} onPress={onSubmit} disabled={submitting}>
            {submitting ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.btnPrimaryText}>Log in</Text>
            )}
          </Pressable>

          {/* <Pressable onPress={() => router.push("/forgot-password")}>
            <Text style={styles.link}>I forgot my password</Text>
          </Pressable> */}

          {/* <Text style={styles.smallText}>
            Don&apos;t have an account?{" "}
            <Text style={styles.link} onPress={() => router.push("/register")}>
              Register here
            </Text>
          </Text> */}

          <Pressable onPress={() => router.replace("/(tabs)")}>
            <Text style={styles.link}>Back to Home</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight, padding: 16, justifyContent: "center" },
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 16, ...theme.shadow.soft },
  title: { textAlign: "center", fontSize: 20, fontWeight: "800", marginBottom: 12 },
  label: { fontSize: 14, fontWeight: "700", marginTop: 10, marginBottom: 6, color: "#111827" },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16, // parecido a tu .form-control en móvil
    backgroundColor: "#fff",
  },
  menuButtons: { marginTop: 14, gap: 12 },
  btnPrimary: { backgroundColor: theme.colors.primary, paddingVertical: 12, borderRadius: 10, alignItems: "center" },
  btnPrimaryText: { color: "#fff", fontWeight: "800" },
  link: { color: theme.colors.primary, fontWeight: "700" },
  smallText: { color: "#374151" },
  alertDanger: { backgroundColor: "#fee2e2", padding: 10, borderRadius: 10 },
  alertDangerText: { color: "#991b1b", textAlign: "center", fontWeight: "700" },
});


