import React from "react";
import { Tabs } from "expo-router";
import { Text, Platform } from "react-native";
import { useApp } from "@/components/AppContext";

export default function DoctorTabsLayout() {
  const { C } = useApp();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: C.card,
          borderTopColor: C.brd,
          borderTopWidth: 1,
          paddingBottom: Platform.OS === "ios" ? 20 : 8,
          paddingTop: 6,
          height: Platform.OS === "ios" ? 84 : 60,
        },
        tabBarActiveTintColor: C.mt,
        tabBarInactiveTintColor: C.mu,
        tabBarLabelStyle: { fontSize: 9, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>📊</Text>,
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: "Appointments",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>📅</Text>,
        }}
      />
      <Tabs.Screen
        name="patients"
        options={{
          title: "Patients",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>🧑‍⚕️</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>👤</Text>,
        }}
      />
    </Tabs>
  );
}
