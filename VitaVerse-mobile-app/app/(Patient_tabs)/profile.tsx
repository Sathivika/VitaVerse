import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity, TextInput, Switch,
} from "react-native";
import { useApp } from "@/components/AppContext";
import { Lang } from "@/constants/translations";

export default function ProfileScreen() {
  const { C, t, dark, setDark, lang, setLang } = useApp();
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [name, setName]   = useState("Sophie Paul");
  const [email, setEmail] = useState("sophie@vitaverse.in");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [dob, setDob]     = useState("12 Apr 2000");
  const [blood, setBlood] = useState("B+");
  const [height, setHeight] = useState("162 cm");
  const [weight, setWeight] = useState("55 kg");

  function save() {
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const activity = [
    { ico: "🩺", event: "Consultation with Dr. Riya Sharma", date: "18 Mar 2026", type: "consult", color: C.mt },
    { ico: "💊", event: "Prescription renewed — Metformin 500mg", date: "15 Mar 2026", type: "prescription", color: "#6b8cf5" },
    { ico: "🧪", event: "Blood test report uploaded", date: "10 Mar 2026", type: "report", color: "#f5a623" },
    { ico: "💰", event: "Insurance claim submitted — ₹12,500", date: "5 Mar 2026", type: "finance", color: C.tl },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 14 }} showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 12 }}>{t.account}</Text>

      {/* Profile card */}
      <View style={{ backgroundColor: C.card, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: C.brd, marginBottom: 16, alignItems: "center" }}>
        <View style={{
          width: 72, height: 72, borderRadius: 36,
          backgroundColor: C.mt + "25",
          borderWidth: 1.5, borderColor: C.mt + "60",
          alignItems: "center", justifyContent: "center",
        }}>
          <Text style={{ fontSize: 36 }}>👤</Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "700", color: C.tp, marginTop: 12 }}>{name}</Text>
        <Text style={{ fontSize: 13, color: C.mu, marginTop: 3 }}>{email}</Text>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 14 }}>
          {[{l:"Blood",v:blood,c:"#e05c5c"},{l:"Height",v:height,c:C.tl},{l:"Weight",v:weight,c:C.mt}].map((s,i)=>(
            <View key={i} style={{ backgroundColor: C.bg, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, alignItems: "center", borderWidth: 1, borderColor: C.brd }}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: s.c }}>{s.v}</Text>
              <Text style={{ fontSize: 9, color: C.mu, marginTop: 2 }}>{s.l}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Personal details */}
      <View style={{ backgroundColor: C.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: C.brd, marginBottom: 14 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp }}>{t.profileTitle}</Text>
          <TouchableOpacity onPress={() => editing ? save() : setEditing(true)}
            style={{ backgroundColor: editing ? C.mt : C.bg, borderRadius: 8, paddingHorizontal: 14, paddingVertical: 6, borderWidth: 1, borderColor: editing ? C.mt : C.brd }}>
            <Text style={{ fontSize: 12, fontWeight: "700", color: editing ? "#fff" : C.tp }}>
              {editing ? t.saveProfile : t.editProfile}
            </Text>
          </TouchableOpacity>
        </View>
        {[
          { l: "Full Name",  v: name,  set: setName  },
          { l: "Email",      v: email, set: setEmail  },
          { l: "Phone",      v: phone, set: setPhone  },
          { l: "Date of Birth", v: dob, set: setDob  },
        ].map((f, i) => (
          <View key={i} style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 11, color: C.mu, fontWeight: "600", marginBottom: 4 }}>{f.l}</Text>
            {editing
              ? <TextInput
                  style={{ backgroundColor: C.bg, borderRadius: 8, padding: 10, fontSize: 14, color: C.tp, borderWidth: 1, borderColor: C.brd2 }}
                  value={f.v} onChangeText={f.set}
                />
              : <Text style={{ fontSize: 14, color: C.tp }}>{f.v}</Text>
            }
          </View>
        ))}
      </View>

      {/* Health details */}
      <View style={{ backgroundColor: C.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: C.brd, marginBottom: 14 }}>
        <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, marginBottom: 14 }}>{t.healthDetails}</Text>
        {[
          { l: "Blood Group", v: blood, set: setBlood },
          { l: "Height",      v: height, set: setHeight },
          { l: "Weight",      v: weight, set: setWeight },
        ].map((f, i) => (
          <View key={i} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 10, borderBottomWidth: i < 2 ? 1 : 0, borderBottomColor: C.brd }}>
            <Text style={{ fontSize: 13, color: C.mu }}>{f.l}</Text>
            {editing
              ? <TextInput
                  style={{ backgroundColor: C.bg, borderRadius: 8, padding: 8, fontSize: 13, color: C.tp, borderWidth: 1, borderColor: C.brd2, minWidth: 90, textAlign: "right" }}
                  value={f.v} onChangeText={f.set}
                />
              : <Text style={{ fontSize: 13, fontWeight: "700", color: C.tp }}>{f.v}</Text>
            }
          </View>
        ))}
      </View>

      {/* Settings */}
      <View style={{ backgroundColor: C.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: C.brd, marginBottom: 14 }}>
        <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 12 }}>{t.settings}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: C.brd }}>
          <Text style={{ fontSize: 14, color: C.tp }}>{t.darkMode}</Text>
          <Switch value={dark} onValueChange={setDark} trackColor={{ true: C.mt, false: C.brd }} thumbColor="#fff" />
        </View>
        <View style={{ paddingVertical: 12 }}>
          <Text style={{ fontSize: 14, color: C.tp, marginBottom: 10 }}>{t.language}</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {(["en","hi","mr"] as Lang[]).map(l => (
              <TouchableOpacity key={l} onPress={() => setLang(l)}
                style={{ flex: 1, paddingVertical: 9, borderRadius: 10, alignItems: "center", backgroundColor: lang === l ? C.mt : C.bg, borderWidth: 1, borderColor: lang === l ? C.mt : C.brd }}>
                <Text style={{ fontSize: 13, fontWeight: "700", color: lang === l ? "#fff" : C.tp }}>
                  {l === "en" ? "English" : l === "hi" ? "हिंदी" : "मराठी"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* Recent activity */}
      <View style={{ backgroundColor: C.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: C.brd, marginBottom: 14 }}>
        <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, marginBottom: 14 }}>{t.recentActivity}</Text>
        {activity.map((a, i) => (
          <View key={i} style={{ flexDirection: "row", gap: 12, paddingVertical: 10, borderBottomWidth: i < activity.length - 1 ? 1 : 0, borderBottomColor: C.brd }}>
            <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: a.color + "15", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 16 }}>{a.ico}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, color: C.tp, lineHeight: 18, marginBottom: 3 }}>{a.event}</Text>
              <Text style={{ fontSize: 11, color: C.mu }}>{a.date}</Text>
            </View>
          </View>
        ))}
      </View>

      {saved && (
        <View style={{ backgroundColor: C.mt, borderRadius: 12, padding: 14, alignItems: "center", marginTop: 4 }}>
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 14 }}>{t.profileSaved}</Text>
        </View>
      )}
      <View style={{ height: 32 }} />
    </ScrollView>
  );
}
