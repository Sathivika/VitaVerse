import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  TextInput, Linking,
} from "react-native";
import { useApp } from "@/components/AppContext";
import { PLANS, BILL_RANGES, GOVT_SCHEMES, GOVT_HOSPITALS, TERMS, FAQ } from "@/constants/data";

export default function FinanceScreen() {
  const { C, t } = useApp();
  const [tab, setTab]   = useState<"insurance"|"billing"|"govt"|"terms">("insurance");
  const [bill, setBill] = useState("");
  const [sel, setSel]   = useState<string | null>(null);
  const [exp, setExp]   = useState<string | null>(null);
  const [term, setTerm] = useState<number | null>(null);
  const [msgs, setMsgs] = useState<{from:string;text:string}[]>([
    {from:"bot", text:"Hi! I'm your health finance assistant. Ask me about insurance plans, claims, or government schemes."},
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  const bv = parseInt(bill) || 0;
  const matched = bv > 0 ? PLANS.filter(p => p.amt >= bv) : [];

  function sendChat(text: string) {
    if (!text.trim()) return;
    const faq = FAQ.find(f => f.q.toLowerCase().includes(text.toLowerCase().slice(0, 8)));
    const answer = faq ? faq.a : "Please consult your insurance provider or visit pmjay.gov.in for personalised advice.";
    setMsgs(m => [...m, {from:"user",text}, {from:"bot",text:answer}]);
    setChatInput("");
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Sub-tab bar */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: C.card, borderBottomWidth: 1, borderBottomColor: C.brd, maxHeight: 46 }}
        contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 5, gap: 5 }}>
        {([["insurance", t.insurance],["billing", t.billing],["govt", t.govt],["terms", t.terms]] as [string,string][]).map(([k,l]) => (
          <TouchableOpacity key={k} onPress={() => setTab(k as any)}
            style={{
              paddingHorizontal: 15, paddingVertical: 7, borderRadius: 20,
              backgroundColor: tab === k ? C.bb : "transparent",
              borderWidth: 1, borderColor: tab === k ? C.bb : C.brd,
            }}>
            <Text style={{ fontSize: 12, fontWeight: "600", color: tab === k ? "#e8f5e0" : C.mu }}>{l}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={{ flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 14 }} showsVerticalScrollIndicator={false}>

        {/* ── INSURANCE ── */}
        {tab === "insurance" && (
          <>
            {/* Bill checker */}
            <View style={{ backgroundColor: C.mt + "0d", borderRadius: 14, padding: 18, borderWidth: 1, borderColor: C.brd2, marginBottom: 18 }}>
              <Text style={{ fontSize: 15, fontWeight: "700", color: C.tp, marginBottom: 4 }}>{t.billChecker}</Text>
              <Text style={{ fontSize: 12, color: C.mu, marginBottom: 12 }}>{t.billCheckerSub}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: C.card, borderRadius: 11, borderWidth: 1.5, borderColor: C.brd, paddingHorizontal: 14 }}>
                <Text style={{ fontSize: 22, fontWeight: "700", color: C.mt, marginRight: 6 }}>₹</Text>
                <TextInput
                  style={{ flex: 1, height: 50, fontSize: 22, fontWeight: "700", color: C.tp }}
                  keyboardType="numeric" placeholder="e.g. 50000"
                  placeholderTextColor={C.mu} value={bill} onChangeText={setBill}
                />
              </View>
              {bv > 0 && (
                <View style={{ marginTop: 14, paddingTop: 14, borderTopWidth: 1, borderTopColor: C.brd }}>
                  {matched.length === 0
                    ? <Text style={{ fontSize: 13, color: "#c47f00" }}>{t.noPlan}</Text>
                    : <>
                      <Text style={{ fontSize: 13, fontWeight: "700", color: C.tp, marginBottom: 10 }}>
                        {matched.length} {t.plansAvail} ₹{bv.toLocaleString("en-IN")}:
                      </Text>
                      {matched.map(p => (
                        <View key={p.id} style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                          <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: C.mt, marginRight: 9 }} />
                          <Text style={{ fontSize: 13, color: C.tp, fontWeight: "600", flex: 1 }}>{p.name} ({p.cover})</Text>
                          <TouchableOpacity onPress={() => Linking.openURL(p.url)}
                            style={{ backgroundColor: C.bb, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 }}>
                            <Text style={{ fontSize: 11, color: "#e8f5e0", fontWeight: "700" }}>{t.viewPlan}</Text>
                          </TouchableOpacity>
                        </View>
                      ))}
                    </>
                  }
                </View>
              )}
            </View>

            {/* Plans */}
            <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>{t.insurancePlans}</Text>
            {PLANS.map(plan => (
              <View key={plan.id} style={{
                backgroundColor: C.card, borderRadius: 14, padding: 18,
                borderWidth: sel === plan.id ? 1.5 : 1, borderColor: sel === plan.id ? C.mt : C.brd, marginBottom: 12,
              }}>
                {plan.popular && (
                  <View style={{ backgroundColor: C.mt + "18", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, alignSelf: "flex-start", marginBottom: 8, borderWidth: 1, borderColor: C.brd2 }}>
                    <Text style={{ fontSize: 11, fontWeight: "700", color: C.mt }}>⭐ Most Popular</Text>
                  </View>
                )}
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: "700", color: C.tp }}>{plan.name}</Text>
                    <Text style={{ fontSize: 11, color: C.mu, marginTop: 1 }}>{plan.provider}</Text>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", color: C.mt }}>{plan.cover}</Text>
                    <Text style={{ fontSize: 11, color: C.mu }}>{plan.premium}</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 13, color: C.mu, lineHeight: 18, marginBottom: 12 }}>{plan.desc}</Text>
                {exp === plan.id && (
                  <View style={{ borderTopWidth: 1, borderTopColor: C.brd, paddingTop: 12, marginBottom: 12 }}>
                    {plan.feats.map((f, i) => (
                      <View key={i} style={{ flexDirection: "row", gap: 8, marginBottom: 7 }}>
                        <Text style={{ color: C.mt, fontWeight: "700", fontSize: 13 }}>✓</Text>
                        <Text style={{ fontSize: 13, color: C.tp, flex: 1 }}>{f}</Text>
                      </View>
                    ))}
                    <TouchableOpacity onPress={() => Linking.openURL(plan.url)}
                      style={{ backgroundColor: C.bb, borderRadius: 10, paddingVertical: 11, alignItems: "center", marginTop: 10 }}>
                      <Text style={{ color: "#e8f5e0", fontWeight: "700", fontSize: 13 }}>{t.visitWebsite}</Text>
                    </TouchableOpacity>
                  </View>
                )}
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 10, borderTopWidth: 1, borderTopColor: C.brd }}>
                  <TouchableOpacity onPress={() => setExp(exp === plan.id ? null : plan.id)}>
                    <Text style={{ fontSize: 12, color: C.mu, fontWeight: "600" }}>{exp === plan.id ? t.showLess : t.seeFeatures}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSel(plan.id)}
                    style={{ borderWidth: 1.5, borderColor: sel === plan.id ? C.mt : C.brd, borderRadius: 8, paddingHorizontal: 14, paddingVertical: 6, backgroundColor: sel === plan.id ? C.mt + "12" : "transparent" }}>
                    <Text style={{ fontSize: 12, fontWeight: "700", color: sel === plan.id ? C.mt : C.tp }}>{sel === plan.id ? t.selected : t.selectPlan}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        )}

        {/* ── BILLING ── */}
        {tab === "billing" && (
          <>
            <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>{t.typicalCosts}</Text>
            {BILL_RANGES.map((b, i) => (
              <View key={i} style={{ backgroundColor: C.card, borderRadius: 12, padding: 14, borderWidth: 1, borderColor: C.brd, flexDirection: "row", alignItems: "center", marginBottom: 9 }}>
                <Text style={{ fontSize: 20, width: 32 }}>{b.ico}</Text>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={{ fontSize: 13, fontWeight: "700", color: C.tp, marginBottom: 3 }}>{b.l}</Text>
                  <Text style={{ fontSize: 12, color: C.mt, fontWeight: "600" }}>₹{b.min.toLocaleString("en-IN")} – ₹{b.max.toLocaleString("en-IN")}</Text>
                </View>
              </View>
            ))}
          </>
        )}

        {/* ── GOVT ── */}
        {tab === "govt" && (
          <>
            {GOVT_SCHEMES.map((s, i) => (
              <TouchableOpacity key={i} onPress={() => Linking.openURL(s.url)}
                style={{ backgroundColor: C.card, borderRadius: 12, padding: 16, borderWidth: 1, borderColor: C.brd, marginBottom: 10, borderLeftWidth: 3, borderLeftColor: s.color }}>
                <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, marginBottom: 4 }}>{s.name}</Text>
                <Text style={{ fontSize: 12, color: C.mt, fontWeight: "600", marginBottom: 2 }}>{s.cov}</Text>
                <Text style={{ fontSize: 12, color: C.mu }}>{s.elig}</Text>
              </TouchableOpacity>
            ))}
            <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10, marginTop: 6 }}>{t.nearbyHospitals}</Text>
            {GOVT_HOSPITALS.map((h, i) => (
              <View key={i} style={{ backgroundColor: C.card, borderRadius: 12, padding: 14, borderWidth: 1, borderColor: C.brd, marginBottom: 9 }}>
                <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, marginBottom: 6 }}>{h.name}</Text>
                <Text style={{ fontSize: 12, color: C.mu }}>🛏 {h.beds} beds · 📞 {h.phone}</Text>
                <Text style={{ fontSize: 12, color: C.mu, marginTop: 2 }}>Scheme: <Text style={{ color: C.mt, fontWeight: "700" }}>{h.scheme}</Text></Text>
              </View>
            ))}
          </>
        )}

        {/* ── TERMS ── */}
        {tab === "terms" && (
          <>
            <Text style={{ fontSize: 10, fontWeight: "700", color: C.mu, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 10 }}>{t.glossary}</Text>
            {TERMS.map((tr, i) => (
              <TouchableOpacity key={i} onPress={() => setTerm(term === i ? null : i)}
                style={{ backgroundColor: C.card, borderRadius: 12, padding: 14, borderWidth: 1, borderColor: C.brd, marginBottom: 8 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp }}>{tr.term}</Text>
                  <Text style={{ fontSize: 12, color: C.mu }}>{term === i ? "▲" : "▼"}</Text>
                </View>
                {term === i && (
                  <Text style={{ fontSize: 13, color: C.mu, lineHeight: 19, marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: C.brd }}>{tr.def}</Text>
                )}
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setChatOpen(v => !v)}
              style={{ backgroundColor: C.bb + "12", borderRadius: 14, padding: 16, flexDirection: "row", alignItems: "center", gap: 14, marginTop: 6, borderWidth: 1, borderColor: C.brd2 }}>
              <Text style={{ fontSize: 28 }}>🤖</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, marginBottom: 3 }}>{t.askAI}</Text>
                <Text style={{ fontSize: 12, color: C.mu }}>{t.aiDesc}</Text>
              </View>
              <Text style={{ fontSize: 20, color: C.mt, fontWeight: "700" }}>→</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Inline mini-chat (shown on terms tab) */}
        {chatOpen && (
          <View style={{ backgroundColor: C.card, borderRadius: 14, borderWidth: 1, borderColor: C.brd, marginTop: 12, overflow: "hidden" }}>
            <View style={{ backgroundColor: C.bb, padding: 12, flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "#fff", fontWeight: "700", fontSize: 14 }}>🤖 Finance Assistant</Text>
              <TouchableOpacity onPress={() => setChatOpen(false)}>
                <Text style={{ color: "#fff", fontSize: 14 }}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={{ maxHeight: 200, padding: 12 }}>
              {msgs.map((m, i) => (
                <View key={i} style={{ maxWidth: "85%", alignSelf: m.from === "bot" ? "flex-start" : "flex-end", backgroundColor: m.from === "bot" ? C.bg : C.mt + "20", padding: 10, borderRadius: 12, marginBottom: 6 }}>
                  <Text style={{ fontSize: 12, color: C.tp, lineHeight: 17 }}>{m.text}</Text>
                </View>
              ))}
            </View>
            <View style={{ flexDirection: "row", gap: 8, padding: 10, borderTopWidth: 1, borderTopColor: C.brd }}>
              <TextInput
                style={{ flex: 1, backgroundColor: C.bg, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8, fontSize: 13, color: C.tp, borderWidth: 1, borderColor: C.brd }}
                placeholder="Ask about insurance..." placeholderTextColor={C.mu}
                value={chatInput} onChangeText={setChatInput}
                onSubmitEditing={() => sendChat(chatInput)} returnKeyType="send"
              />
              <TouchableOpacity onPress={() => sendChat(chatInput)}
                style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: C.bb, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#e8f5e0", fontSize: 16, fontWeight: "700" }}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
}
