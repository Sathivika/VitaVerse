import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { useApp } from "@/components/AppContext";

const { width: SW } = Dimensions.get("window");
const isWide = SW > 768;

const VITALS = [
  { ico: "❤️", label: "Heart Rate",     value: "72",   unit: "bpm",  color: "#e05c5c", status: "Normal",  range: "60–100" },
  { ico: "🩸", label: "Blood Pressure", value: "118/78", unit: "mmHg", color: "#6b8cf5", status: "Normal",  range: "<120/80" },
  { ico: "🫁", label: "SpO₂",           value: "98",   unit: "%",    color: "#00A896", status: "Normal",  range: "95–100" },
  { ico: "🌡️", label: "Temperature",   value: "36.8", unit: "°C",   color: "#f5a623", status: "Normal",  range: "36.1–37.2" },
  { ico: "🏃", label: "Steps Today",    value: "6,842", unit: "steps",color: "#02C39A", status: "On Track",range: ">10,000" },
  { ico: "😴", label: "Sleep",          value: "7.2",  unit: "hrs",  color: "#a855f7", status: "Good",    range: "7–9 hrs" },
];

const WEEKLY = [
  { day: "Mon", hr: 74, bp: 120, spo2: 97 },
  { day: "Tue", hr: 70, bp: 118, spo2: 98 },
  { day: "Wed", hr: 72, bp: 122, spo2: 98 },
  { day: "Thu", hr: 76, bp: 119, spo2: 96 },
  { day: "Fri", hr: 68, bp: 116, spo2: 99 },
  { day: "Sat", hr: 71, bp: 121, spo2: 98 },
  { day: "Sun", hr: 72, bp: 118, spo2: 98 },
];

export default function HealthScreen() {
  const { C, t } = useApp();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 14 }} showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mt, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>{t.dashModule}</Text>
      <Text style={{ fontSize: 22, fontWeight: "700", color: C.tp, letterSpacing: -0.4, marginBottom: 4 }}>{t.dashTitle}</Text>
      <Text style={{ fontSize: 13, color: C.mu, marginBottom: 16 }}>{t.dashSub}</Text>

      {/* All vitals grid */}
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>{t.allVitals}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
        {VITALS.map((v, i) => (
          <View key={i} style={{
            backgroundColor: C.card, borderRadius: 14, padding: 16,
            width: isWide ? (SW - 280 - 48) / 3 - 7 : (SW - 42) / 2,
            borderWidth: 1, borderColor: C.brd,
            borderTopWidth: 3, borderTopColor: v.color,
          }}>
            <Text style={{ fontSize: 20, marginBottom: 6 }}>{v.ico}</Text>
            <Text style={{ fontSize: isWide ? 24 : 20, fontWeight: "700", color: v.color, letterSpacing: -0.5 }}>{v.value}</Text>
            <Text style={{ fontSize: 10, color: C.mu, marginTop: 1 }}>{v.unit}</Text>
            <Text style={{ fontSize: 11, fontWeight: "600", color: C.tp, marginTop: 5 }}>{v.label}</Text>
            <View style={{ marginTop: 6, flexDirection: "row", alignItems: "center", gap: 5 }}>
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: v.color }} />
              <Text style={{ fontSize: 9, color: v.color, fontWeight: "700" }}>{v.status}</Text>
            </View>
            <Text style={{ fontSize: 9, color: C.mu, marginTop: 2 }}>Range: {v.range}</Text>
          </View>
        ))}
      </View>

      {/* Weekly summary */}
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>{t.weeklySummary}</Text>
      <View style={{ backgroundColor: C.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: C.brd, marginBottom: 16 }}>
        {/* Simple bar chart for heart rate */}
        <Text style={{ fontSize: 13, fontWeight: "700", color: C.tp, marginBottom: 12 }}>Heart Rate — Last 7 Days</Text>
        <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 6, height: 70 }}>
          {WEEKLY.map((w, i) => {
            const barH = Math.round(((w.hr - 60) / 30) * 60) + 10;
            return (
              <View key={i} style={{ flex: 1, alignItems: "center" }}>
                <View style={{ width: "100%", height: barH, backgroundColor: C.mt + "60", borderRadius: 4, borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
                <Text style={{ fontSize: 8, color: C.mu, marginTop: 4 }}>{w.day}</Text>
                <Text style={{ fontSize: 8, color: C.tp, fontWeight: "600" }}>{w.hr}</Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Health insight */}
      <View style={{ backgroundColor: C.bb + "10", borderRadius: 14, padding: 16, borderWidth: 1, borderColor: C.brd2, marginBottom: 16 }}>
        <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, marginBottom: 8 }}>{t.healthInsight}</Text>
        {[
          "Your SpO₂ has been consistently above 97% this week — excellent respiratory health.",
          "Heart rate variability looks normal. Keep up the cardio routine.",
          "You're averaging 6,800 steps/day. Try to reach 10,000 for optimal health.",
        ].map((tip, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 8, marginBottom: 7 }}>
            <Text style={{ color: C.mt, fontWeight: "700" }}>→</Text>
            <Text style={{ fontSize: 13, color: C.tp, flex: 1, lineHeight: 18 }}>{tip}</Text>
          </View>
        ))}
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}
