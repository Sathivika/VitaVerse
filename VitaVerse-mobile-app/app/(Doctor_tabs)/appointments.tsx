import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useApp } from "@/components/AppContext";
import { Av } from "@/components/SharedUI";

const ALL_APPTS = [
  {init:"AP",color:"#00A896",name:"Anushree Patil",  age:25,issue:"Diabetes follow-up",     date:"18 Mar 2026",time:"10:00 AM",type:"Video",    status:"Upcoming"},
  {init:"RK",color:"#028090",name:"Rahul Kumar",      age:42,issue:"Hypertension check",      date:"18 Mar 2026",time:"11:30 AM",type:"In-person",status:"Upcoming"},
  {init:"SM",color:"#6b8cf5",name:"Sunita Mehta",     age:35,issue:"Migraine consultation",  date:"18 Mar 2026",time:"2:00 PM", type:"Chat",     status:"Upcoming"},
  {init:"VN",color:"#e05c5c",name:"Vijay Nair",       age:60,issue:"Post-surgery review",    date:"18 Mar 2026",time:"3:30 PM", type:"Video",    status:"Upcoming"},
  {init:"PS",color:"#a855f7",name:"Priya Shah",       age:28,issue:"Skin allergy",           date:"15 Mar 2026",time:"10:00 AM",type:"In-person",status:"Completed"},
  {init:"MJ",color:"#f5a623",name:"Mohan Joshi",      age:55,issue:"Cardiac follow-up",      date:"12 Mar 2026",time:"3:00 PM", type:"Video",    status:"Completed"},
];

export default function DoctorAppointmentsScreen() {
  const { C } = useApp();
  const [filter, setFilter] = useState<"all"|"upcoming"|"completed">("all");

  const filtered = ALL_APPTS.filter(a =>
    filter === "all" ? true :
    filter === "upcoming" ? a.status === "Upcoming" :
    a.status === "Completed"
  );

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      {/* Filter tabs */}
      <View style={{ flexDirection: "row", backgroundColor: C.card, borderBottomWidth: 1, borderBottomColor: C.brd }}>
        {(["all","upcoming","completed"] as const).map(f => (
          <TouchableOpacity key={f} onPress={() => setFilter(f)}
            style={{ flex: 1, paddingVertical: 12, alignItems: "center", borderBottomWidth: 2, borderBottomColor: filter === f ? C.mt : "transparent" }}>
            <Text style={{ fontSize: 12, fontWeight: "600", color: filter === f ? C.mt : C.mu, textTransform: "capitalize" }}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingTop: 14 }} showsVerticalScrollIndicator={false}>
        {filtered.map((a, i) => (
          <View key={i} style={{ backgroundColor: C.card, borderRadius: 12, padding: 14, borderWidth: 1, borderColor: C.brd, marginBottom: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
              <Av init={a.init} color={a.color} size={44} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp }}>{a.name}</Text>
                <Text style={{ fontSize: 12, color: C.mu }}>{a.age} yrs · {a.issue}</Text>
              </View>
              <View style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, backgroundColor: (a.status === "Upcoming" ? C.mt : C.mu) + "18", borderWidth: 1, borderColor: (a.status === "Upcoming" ? C.mt : C.mu) + "44" }}>
                <Text style={{ fontSize: 10, fontWeight: "700", color: a.status === "Upcoming" ? C.mt : C.mu }}>{a.status}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 10, borderTopWidth: 1, borderTopColor: C.brd }}>
              <Text style={{ fontSize: 12, color: C.mu }}>📅 {a.date} · {a.time} · {a.type}</Text>
              {a.status === "Upcoming" && (
                <TouchableOpacity style={{ backgroundColor: C.bb, paddingHorizontal: 14, paddingVertical: 6, borderRadius: 8 }}>
                  <Text style={{ color: "#e8f5e0", fontSize: 12, fontWeight: "700" }}>Start →</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}
