import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useApp } from "@/components/AppContext";
import { Av } from "@/components/SharedUI";

const { width: SW } = Dimensions.get("window");
const isWide = SW > 768;

const TODAY_APPTS = [
  {init:"AP",color:"#00A896",name:"Anushree Patil",  age:25,issue:"Diabetes follow-up",     time:"10:00 AM",type:"Video",  status:"Upcoming"},
  {init:"RK",color:"#028090",name:"Rahul Kumar",      age:42,issue:"Hypertension check",      time:"11:30 AM",type:"In-person",status:"Upcoming"},
  {init:"SM",color:"#6b8cf5",name:"Sunita Mehta",     age:35,issue:"Migraine consultation",  time:"2:00 PM", type:"Chat",   status:"Upcoming"},
  {init:"VN",color:"#e05c5c",name:"Vijay Nair",       age:60,issue:"Post-surgery review",    time:"3:30 PM", type:"Video",  status:"Upcoming"},
];

export default function DoctorDashboardScreen() {
  const { C } = useApp();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 14 }} showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mt, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>DOCTOR PORTAL</Text>
      <Text style={{ fontSize: 22, fontWeight: "700", color: C.tp, letterSpacing: -0.4, marginBottom: 4 }}>Good morning, Dr. Sharma 👋</Text>
      <Text style={{ fontSize: 13, color: C.mu, marginBottom: 18 }}>Here's your overview for today, 18 Mar 2026.</Text>

      {/* Stats */}
      <View style={{ flexDirection: "row", borderRadius: 12, overflow: "hidden", borderWidth: 1, borderColor: C.brd, marginBottom: 20, gap: 1, backgroundColor: C.brd }}>
        {[
          { v: "4",  l: "Today's Appts", c: C.mt   },
          { v: "12", l: "This Week",      c: C.tl   },
          { v: "148",l: "Total Patients", c: "#6b8cf5" },
          { v: "4.9",l: "Rating",         c: "#f5a623" },
        ].map((s, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: C.card, paddingVertical: 14, alignItems: "center" }}>
            <Text style={{ fontSize: isWide ? 16 : 13, fontWeight: "700", color: s.c }}>{s.v}</Text>
            <Text style={{ fontSize: 9, color: C.mu, marginTop: 2 }}>{s.l}</Text>
          </View>
        ))}
      </View>

      {/* Today's appointments */}
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>TODAY'S APPOINTMENTS</Text>
      {TODAY_APPTS.map((a, i) => (
        <View key={i} style={{ backgroundColor: C.card, borderRadius: 12, padding: 14, borderWidth: 1, borderColor: C.brd, marginBottom: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Av init={a.init} color={a.color} size={44} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp }}>{a.name}</Text>
              <Text style={{ fontSize: 12, color: C.mu }}>{a.age} yrs · {a.issue}</Text>
              <Text style={{ fontSize: 11, color: C.mu }}>{a.time} · {a.type}</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: C.mt, paddingHorizontal: 14, paddingVertical: 7, borderRadius: 8 }}>
              <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700" }}>Start →</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Quick actions */}
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10, marginTop: 6 }}>QUICK ACTIONS</Text>
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
        {[
          { ico: "📝", l: "Write Prescription", c: C.mt },
          { ico: "📋", l: "View Lab Reports",   c: "#6b8cf5" },
          { ico: "📞", l: "Emergency Call",     c: "#e05c5c" },
        ].map((q, i) => (
          <TouchableOpacity key={i} style={{ flex: 1, backgroundColor: q.c + "15", borderRadius: 12, padding: 14, alignItems: "center", borderWidth: 1, borderColor: q.c + "30" }}>
            <Text style={{ fontSize: 22 }}>{q.ico}</Text>
            <Text style={{ fontSize: 10, fontWeight: "600", color: q.c, marginTop: 6, textAlign: "center" }}>{q.l}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}
