import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../src/context/AuthContext"; // ajusta la ruta si tu app/ está en otra carpeta

export default function LogoutScreen() {
  const { signOut } = useAuth();

  useEffect(() => {
    const run = async () => {
      await signOut();
      router.replace("/"); // o "/login"
    };
    run();
  }, [signOut]);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={styles.text}>Cerrando sesión…</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 10 },
  text: { fontSize: 14 },
});
