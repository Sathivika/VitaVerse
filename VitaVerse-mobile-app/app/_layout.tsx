import { Stack } from "expo-router";
import { AppProvider } from "@/components/AppContext";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(Patient_tabs)" />
        <Stack.Screen name="(Doctor_tabs)" />
        <Stack.Screen name="auth" />
        <Stack.Screen name="modal" />
        <Stack.Screen name="user" />
      </Stack>
    </AppProvider>
  );
}
