import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  TextInput, Modal, Dimensions,
} from "react-native";
import { useApp } from "@/components/AppContext";
import { Av, Stars } from "@/components/SharedUI";
import { DOCTORS, SPECS, Doctor } from "@/constants/data";

const { width: SW } = Dimensions.get("window");
const isWide = SW > 768;

export default function ConsultScreen() {
  const { C, t } = useApp();
  const [tab, setTab]     = useState<"find"|"appts"|"stats">("find");
  const [spec, setSpec]   = useState("All");
  const [query, setQuery] = useState("");
  const [nearby, setNearby] = useState(false);
  const [modal, setModal] = useState<Doctor | null>(null);
  const [slot, setSlot]   = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const docs = DOCTORS
    .filter(d =>
      (spec === "All" || d.tag === spec) &&
      (d.name.toLowerCase().includes(query.toLowerCase()) ||
       d.spec.toLowerCase().includes(query.toLowerCase()))
    )
    .sort((a, b) => nearby ? a.dist - b.dist : 0);

  function book() {
    if (!slot) return;
    setModal(null); setSlot(null);
    setBooked(true); setTimeout(() => setBooked(false), 2500);
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Tab bar */}
      <View style={{ flexDirection: "row", backgroundColor: C.card, borderBottomWidth: 1, borderBottomColor: C.brd }}>
        {([["find", t.findDoctors], ["appts", t.appointments], ["stats", t.stats]] as [string, string][]).map(([k, l]) => (
          <TouchableOpacity key={k} onPress={() => setTab(k as any)}
            style={{ flex: 1, paddingVertical: 11, alignItems: "center", borderBottomWidth: 2, borderBottomColor: tab === k ? C.mt : "transparent" }}>
            <Text style={{ fontSize: 12, fontWeight: "600", color: tab === k ? C.mt : C.mu }}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ── FIND ── */}
      {tab === "find" && (
        <ScrollView style={{ flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 14 }} showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: C.card, borderRadius: 12, paddingHorizontal: 14, borderWidth: 1, borderColor: C.brd, marginBottom: 10 }}>
            <Text style={{ fontSize: 16, marginRight: 8 }}>🔍</Text>
            <TextInput
              style={{ flex: 1, height: 44, fontSize: 14, color: C.tp }}
              placeholder={t.searchPlaceholder} placeholderTextColor={C.mu}
              value={query} onChangeText={setQuery}
            />
          </View>

          <TouchableOpacity onPress={() => setNearby(v => !v)}
            style={{
              backgroundColor: nearby ? C.bb : C.card, borderRadius: 10,
              paddingHorizontal: 14, paddingVertical: 8, marginBottom: 10,
              borderWidth: 1, borderColor: nearby ? C.bb : C.brd,
              flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start",
            }}>
            <Text style={{ fontSize: 12, fontWeight: "700", color: nearby ? "#e8f5e0" : C.mu }}>
              {nearby ? t.sortedNearest : t.nearestFirst}
            </Text>
          </TouchableOpacity>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
            {SPECS.map(sp => (
              <TouchableOpacity key={sp} onPress={() => setSpec(sp)}
                style={{
                  paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, marginRight: 8,
                  borderWidth: 1, borderColor: spec === sp ? C.bb : C.brd,
                  backgroundColor: spec === sp ? C.bb : C.card,
                }}>
                <Text style={{ fontSize: 12, fontWeight: "600", color: spec === sp ? "#e8f5e0" : C.mu }}>{sp}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {nearby && (
            <View style={{ backgroundColor: C.mt + "10", borderRadius: 10, padding: 10, marginBottom: 10, borderWidth: 1, borderColor: C.mt + "30" }}>
              <Text style={{ fontSize: 12, color: C.mt, fontWeight: "600" }}>📍 Sorted by distance from your location</Text>
            </View>
          )}

          <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>
            {docs.length} {t.doctorsAvailable}
          </Text>

          <View style={isWide ? { flexDirection: "row", flexWrap: "wrap", gap: 12 } : {}}>
            {docs.map(doc => (
              <TouchableOpacity key={doc.id} activeOpacity={0.85}
                style={{
                  backgroundColor: C.card, borderRadius: 14, padding: 16,
                  borderWidth: 1, borderColor: C.brd, marginBottom: 12,
                  width: isWide ? (SW - 280 - 48) / 2 - 6 : "100%",
                }}
                onPress={() => { setModal(doc); setSlot(null); }}>
                <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 12 }}>
                  <Av init={doc.init} color={doc.color} size={46} />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, marginBottom: 2 }}>{doc.name}</Text>
                    <Text style={{ fontSize: 11, color: C.mu, marginBottom: 2 }}>{doc.spec} · {doc.exp}</Text>
                    <Stars rating={doc.rating} />
                  </View>
                  <View style={{ alignItems: "flex-end", gap: 5 }}>
                    <View style={{
                      paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20,
                      backgroundColor: (doc.avail === "Now" ? C.mt : C.mu) + "18",
                      borderWidth: 1, borderColor: (doc.avail === "Now" ? C.mt : C.mu) + "44",
                    }}>
                      <Text style={{ fontSize: 11, fontWeight: "700", color: doc.avail === "Now" ? C.mt : C.mu }}>
                        {doc.avail === "Now" ? "● Now" : doc.avail}
                      </Text>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: "700", color: C.mt }}>₹{doc.fee}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10, borderTopWidth: 1, borderTopColor: C.brd }}>
                  <Text style={{ fontSize: 11, color: C.mu, flex: 1 }}>📍 {doc.dist} km  ·  💬 {doc.reviews}</Text>
                  <TouchableOpacity
                    style={{ backgroundColor: C.bb, paddingHorizontal: 14, paddingVertical: 7, borderRadius: 8 }}
                    onPress={() => { setModal(doc); setSlot(null); }}>
                    <Text style={{ color: "#e8f5e0", fontSize: 12, fontWeight: "700" }}>{t.bookBtn}</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ height: 32 }} />
        </ScrollView>
      )}

      {/* ── APPOINTMENTS ── */}
      {tab === "appts" && (
        <ScrollView style={{ flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 14 }} showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>{t.yourAppts}</Text>
          {[
            {init:"RS",color:"#00A896",name:"Dr. Riya Sharma", spec:"General Physician",date:"18 Mar 2026",time:"10:00 AM",type:"Video",status:"Upcoming"},
            {init:"AK",color:"#028090",name:"Dr. Arjun Kumar", spec:"Cardiologist",      date:"12 Mar 2026",time:"9:30 AM", type:"Video",status:"Completed"},
            {init:"PM",color:"#05668D",name:"Dr. Priya Mehta", spec:"Gynaecologist",      date:"5 Mar 2026", time:"3:00 PM", type:"Chat", status:"Completed"},
          ].map((a, i) => (
            <View key={i} style={{
              backgroundColor: C.card, borderRadius: 12, padding: 14,
              borderWidth: 1, borderColor: C.brd,
              flexDirection: "row", alignItems: "center", marginBottom: 10,
            }}>
              <Av init={a.init} color={a.color} size={42} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, marginBottom: 2 }}>{a.name}</Text>
                <Text style={{ fontSize: 12, color: C.mu }}>{a.spec}</Text>
                <Text style={{ fontSize: 11, color: C.mu }}>{a.date} · {a.time} · {a.type}</Text>
              </View>
              <View style={{
                paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20,
                backgroundColor: (a.status === "Upcoming" ? C.mt : C.mu) + "18",
                borderWidth: 1, borderColor: (a.status === "Upcoming" ? C.mt : C.mu) + "44",
              }}>
                <Text style={{ fontSize: 11, fontWeight: "700", color: a.status === "Upcoming" ? C.mt : C.mu }}>{a.status}</Text>
              </View>
            </View>
          ))}
          <View style={{ height: 32 }} />
        </ScrollView>
      )}

      {/* ── STATS ── */}
      {tab === "stats" && (
        <ScrollView style={{ flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 14 }} showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
            {[["🩺","12","Consultations"],["👨‍⚕️","5","Doctors Saved"],["📋","8","Prescriptions"],["⭐","4","Reviews"]].map(([ico,v,l],i) => (
              <View key={i} style={{
                backgroundColor: C.card, borderRadius: 12, padding: 16,
                width: isWide ? (SW - 280 - 48) / 4 - 8 : (SW - 42) / 2,
                alignItems: "center", borderWidth: 1, borderColor: C.brd,
              }}>
                <Text style={{ fontSize: 24, marginBottom: 6 }}>{ico}</Text>
                <Text style={{ fontSize: 28, fontWeight: "700", color: C.tp, letterSpacing: -0.5 }}>{v}</Text>
                <Text style={{ fontSize: 10, color: C.mu, fontWeight: "600", marginTop: 2 }}>{l}</Text>
              </View>
            ))}
          </View>
          <View style={{ height: 32 }} />
        </ScrollView>
      )}

      {/* Booking Modal */}
      <Modal visible={!!modal} animationType="slide" transparent>
        <View style={{ flex: 1, backgroundColor: "rgba(5,102,141,0.4)", justifyContent: "flex-end" }}>
          <View style={{ backgroundColor: C.card, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 22, paddingBottom: 36 }}>
            <View style={{ width: 36, height: 4, backgroundColor: C.brd, borderRadius: 2, alignSelf: "center", marginBottom: 18 }} />
            {modal && (
              <>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 18, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: C.brd }}>
                  <Av init={modal.init} color={modal.color} size={52} />
                  <View style={{ flex: 1, marginLeft: 14 }}>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: C.tp }}>{modal.name}</Text>
                    <Text style={{ fontSize: 12, color: C.mu, marginTop: 2 }}>{modal.spec} · {modal.exp}</Text>
                    <Stars rating={modal.rating} />
                  </View>
                  <Text style={{ fontSize: 20, fontWeight: "700", color: C.mt }}>₹{modal.fee}</Text>
                </View>

                <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>{t.selectSlot}</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                  {modal.slots.map(sl => (
                    <TouchableOpacity key={sl} onPress={() => setSlot(sl)}
                      style={{
                        paddingHorizontal: 16, paddingVertical: 9, borderRadius: 9,
                        borderWidth: 1.5, borderColor: slot === sl ? C.bb : C.brd,
                        backgroundColor: slot === sl ? C.bb : "transparent",
                      }}>
                      <Text style={{ fontSize: 13, fontWeight: "600", color: slot === sl ? "#e8f5e0" : C.mu }}>{sl}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>{t.consultType}</Text>
                <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
                  {["📹 Video Call", "💬 Chat"].map(t2 => (
                    <View key={t2} style={{ flex: 1, backgroundColor: C.mt + "10", borderRadius: 10, paddingVertical: 11, alignItems: "center" }}>
                      <Text style={{ fontSize: 13, color: C.tl, fontWeight: "600" }}>{t2}</Text>
                    </View>
                  ))}
                </View>

                <View style={{ flexDirection: "row", gap: 10 }}>
                  <TouchableOpacity onPress={() => setModal(null)}
                    style={{ flex: 1, paddingVertical: 13, borderRadius: 10, alignItems: "center", borderWidth: 1.5, borderColor: C.brd }}>
                    <Text style={{ fontWeight: "700", fontSize: 14, color: C.tp }}>{t.cancel}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={book}
                    style={{ flex: 2, paddingVertical: 13, borderRadius: 10, alignItems: "center", backgroundColor: C.bb, opacity: slot ? 1 : 0.45 }}>
                    <Text style={{ fontWeight: "700", fontSize: 14, color: "#e8f5e0" }}>{t.confirmBooking}</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      {booked && (
        <View style={{ position: "absolute", bottom: 20, left: 20, right: 20, backgroundColor: C.mt, borderRadius: 12, padding: 14, alignItems: "center" }}>
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 14 }}>{t.apptBooked}</Text>
        </View>
      )}
    </View>
  );
}
