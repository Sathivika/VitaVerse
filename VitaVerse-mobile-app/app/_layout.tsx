import React, { useEffect } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { AppProvider } from "@/components/AppContext";
import { useAuthUser } from "@/lib/auth";

// ─── Auth Guard ───────────────────────────────────────────────────
// Automatically redirects based on login state:
//   Not logged in → /auth
//   Logged in     → /(Patient_tabs)
function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthUser();
  const router   = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (loading) return;

    const inAuthScreen = segments[0] === "auth";

    if (!user && !inAuthScreen) {
      // Not signed in — go to login
      router.replace("/auth");
    } else if (user && inAuthScreen) {
      // Already signed in — skip login, go home
      router.replace("/(Patient_tabs)");
    }
  }, [user, loading, segments]);

  // Spinner while Firebase checks saved session
  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
        <ActivityIndicator size="large" color="#6B4FA0" />
      </View>
    );
  }

  return <>{children}</>;
}

// ─── Root Layout ──────────────────────────────────────────────────
export default function RootLayout() {
  return (
    <AppProvider>
      <AuthGuard>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="auth" />
          <Stack.Screen name="index" />
          <Stack.Screen name="(Patient_tabs)" />
          <Stack.Screen name="(Doctor_tabs)" />
          <Stack.Screen name="modal" />
          <Stack.Screen name="user" />
        </Stack>
      </AuthGuard>
    </AppProvider>
  );
}