// app/tour/[id]/book.tsx
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, Link, Stack } from "expo-router";
import { theme } from "../../../src/theme/theme";

export default function TourBookScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Book" }} />

      <Text style={styles.title}>Booking</Text>
      <Text style={styles.text}>Tour ID: {id}</Text>

      <Link href={{ pathname: "/tour/[id]", params: { id: String(id) } }} asChild>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Back to Tour</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.grayLight, padding: 16 },
  title: { fontSize: 22, fontWeight: "800", marginBottom: 8, color: theme.colors.black },
  text: { fontSize: 14, color: theme.colors.grayDarken, marginBottom: 16 },
  btn: { backgroundColor: theme.colors.primary, padding: 12, borderRadius: 10, alignSelf: "flex-start" },
  btnText: { color: theme.colors.white, fontWeight: "800" },
});
