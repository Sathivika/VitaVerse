import React from "react";
import {
  View, Text, ScrollView, TouchableOpacity, Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useApp } from "@/components/AppContext";
import { Av } from "@/components/SharedUI";

const { width: SW } = Dimensions.get("window");
const isWide = SW > 768;

export default function HomeScreen() {
  const { C, t } = useApp();
  const router = useRouter();

  const mods = [
    { ico: "🩺", route: "/(Patient_tabs)/consult",     titleKey: "consult",   descKey: "consultDesc",  ac: C.mt  },
    { ico: "💰", route: "/(Patient_tabs)/finance",     titleKey: "finance",   descKey: "financeDesc",  ac: C.tl  },
    { ico: "🫀", route: "/(Patient_tabs)/ar_learning", titleKey: "arLearn",   descKey: "arDesc",       ac: "#e05c5c" },
    { ico: "📊", route: "/(Patient_tabs)/health",      titleKey: "dashboard", descKey: "dashDesc",     ac: "#6b8cf5" },
    { ico: "👤", route: "/(Patient_tabs)/profile",     titleKey: "profile",   descKey: "profileDesc",  ac: "#f5a623" },
    { ico: "🔔", route: "/(Patient_tabs)/index",       titleKey: "reminders", descKey: "remindersDesc",ac: C.vg  },
  ];

  const cardW = isWide ? (SW - 280 - 64) / 3 : (SW - 48) / 3;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 14 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mt, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>
        {t.welcomeBack}
      </Text>
      <Text style={{ fontSize: 22, fontWeight: "700", color: C.tp, letterSpacing: -0.4, marginBottom: 4 }}>
        {t.goodMorning}
      </Text>
      <Text style={{ fontSize: 13, color: C.mu, marginBottom: 18 }}>{t.tagline}</Text>

      {/* Stats row */}
      <View style={{
        flexDirection: "row", borderRadius: 12, overflow: "hidden",
        borderWidth: 1, borderColor: C.brd, marginBottom: 20, gap: 1, backgroundColor: C.brd,
      }}>
        {[
          { v: "12", l: "Consultations", c: C.mt },
          { v: "98%", l: "SpO₂", c: "#6b8cf5" },
          { v: "72 bpm", l: "Heart Rate", c: "#e05c5c" },
          { v: "Standard", l: "Insurance", c: C.tl },
        ].map((s, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: C.card, paddingVertical: 14, alignItems: "center" }}>
            <Text style={{ fontSize: isWide ? 16 : 13, fontWeight: "700", color: s.c }}>{s.v}</Text>
            <Text style={{ fontSize: 9, color: C.mu, marginTop: 2 }}>{s.l}</Text>
          </View>
        ))}
      </View>

      {/* Modules grid */}
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>
        {t.yourModules}
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
        {mods.map((m, idx) => (
          <TouchableOpacity
            key={idx}
            activeOpacity={0.8}
            onPress={() => router.push(m.route as any)}
            style={{
              backgroundColor: C.card, borderRadius: 12,
              padding: isWide ? 16 : 13, width: cardW,
              borderWidth: 1, borderColor: C.brd, overflow: "hidden",
            }}
          >
            <Text style={{ fontSize: isWide ? 26 : 20, marginBottom: 7 }}>{m.ico}</Text>
            <Text style={{ fontSize: isWide ? 13 : 11, fontWeight: "700", color: C.tp, marginBottom: 3 }}>
              {(t as any)[m.titleKey]}
            </Text>
            <Text style={{ fontSize: isWide ? 12 : 10, color: C.mu, lineHeight: 15 }}>
              {(t as any)[m.descKey]}
            </Text>
            <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, backgroundColor: m.ac, opacity: 0.4 }} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Upcoming appointment */}
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>
        {t.upcoming}
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/(Patient_tabs)/consult")}
        activeOpacity={0.85}
        style={{
          backgroundColor: C.card, borderRadius: 12, padding: 16,
          borderWidth: 1, borderColor: C.brd,
          flexDirection: "row", alignItems: "center", gap: 14,
        }}
      >
        <Av init="RS" color={C.mt} size={44} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, marginBottom: 3 }}>
            Dr. Riya Sharma — General Physician
          </Text>
          <Text style={{ fontSize: 12, color: C.mu }}>📅 18 Mar 2026 · 10:00 AM · Video Call</Text>
        </View>
        <View style={{
          paddingHorizontal: 9, paddingVertical: 3, borderRadius: 20,
          backgroundColor: C.mt + "18", borderWidth: 1, borderColor: C.mt + "44",
        }}>
          <Text style={{ fontSize: 11, fontWeight: "700", color: C.mt }}>● Upcoming</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: 32 }} />
    </ScrollView>
  );
}
