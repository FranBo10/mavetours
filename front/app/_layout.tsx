import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "../src/context/AuthContext";
import NavigationHeader from "../src/components/NavigationHeader";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar hidden />
        <NavigationHeader />
        <Stack screenOptions={{ headerShown: false }}>
          {/* index => Redirect a /(tabs) */}
          <Stack.Screen name="index" />

          {/* Tabs */}
          <Stack.Screen name="(tabs)" />

          {/* Pantallas fuera de tabs */}
          <Stack.Screen name="login" />
          <Stack.Screen name="tour/[id]" />
          <Stack.Screen name="tour/[id]/book" />
        </Stack>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
