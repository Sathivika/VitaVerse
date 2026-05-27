import React, { useState } from "react";
import {
  View, Text, ScrollView, TouchableOpacity, Linking,
} from "react-native";
import { useApp } from "@/components/AppContext";
import { ORGANS } from "@/constants/data";

type InfoTab = "overview" | "facts" | "conditions" | "prevention";

export default function ARLearningScreen() {
  const { C, t } = useApp();
  const [sel, setSel]   = useState("heart");
  const [info, setInfo] = useState<InfoTab>("overview");
  const o = ORGANS[sel];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg, paddingHorizontal: 16, paddingTop: 14 }} showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 10, fontWeight: "700", color: C.mt, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>{t.arModule}</Text>
      <Text style={{ fontSize: 22, fontWeight: "700", color: C.tp, letterSpacing: -0.4, marginBottom: 4 }}>{t.arTitle}</Text>
      <Text style={{ fontSize: 13, color: C.mu, marginBottom: 16 }}>{t.arSub}</Text>

      {/* Simplified body map */}
      <View style={{ backgroundColor: C.card, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: C.brd, marginBottom: 14, alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center", width: "100%", marginBottom: 12 }}>
          <Text style={{ fontSize: 14, fontWeight: "700", color: C.tp, flex: 1 }}>Interactive Body Map</Text>
          <View style={{ backgroundColor: C.mt + "18", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, borderWidth: 1, borderColor: C.brd2 }}>
            <Text style={{ fontSize: 10, fontWeight: "700", color: C.mt }}>{t.arView}</Text>
          </View>
        </View>
        {/* Body outline with tappable organ circles */}
        <View style={{ width: 160, height: 260, alignItems: "center", position: "relative" }}>
          {/* Head */}
          <View style={{ width: 50, height: 55, borderRadius: 25, backgroundColor: C.bg, borderWidth: 1.5, borderColor: C.brd, marginBottom: 0 }} />
          {/* Torso */}
          <View style={{ width: 90, height: 130, borderRadius: 12, backgroundColor: C.bg, borderWidth: 1.5, borderColor: C.brd, alignItems: "center", justifyContent: "center", marginTop: -2 }}>
            {/* Organ buttons on torso */}
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, justifyContent: "center", padding: 8 }}>
              {Object.entries(ORGANS).map(([k, og]) => (
                <TouchableOpacity key={k} onPress={() => { setSel(k); setInfo("overview"); }}
                  style={{
                    width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center",
                    backgroundColor: sel === k ? og.color + "30" : C.card,
                    borderWidth: sel === k ? 2 : 1,
                    borderColor: sel === k ? og.color : C.brd,
                  }}>
                  <Text style={{ fontSize: 18 }}>{og.emoji}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {/* Legs */}
          <View style={{ flexDirection: "row", gap: 8, marginTop: -2 }}>
            <View style={{ width: 38, height: 80, borderRadius: 8, backgroundColor: C.bg, borderWidth: 1.5, borderColor: C.brd }} />
            <View style={{ width: 38, height: 80, borderRadius: 8, backgroundColor: C.bg, borderWidth: 1.5, borderColor: C.brd }} />
          </View>
        </View>
        <Text style={{ fontSize: 11, color: C.mu, marginTop: 8 }}>Tap an organ icon to explore</Text>
      </View>

      {/* Organ quick-select row */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
        {Object.entries(ORGANS).map(([k, og]) => (
          <TouchableOpacity key={k} onPress={() => { setSel(k); setInfo("overview"); }}
            style={{
              alignItems: "center", backgroundColor: sel === k ? og.color + "18" : C.card,
              borderRadius: 12, padding: 10, marginRight: 8,
              borderWidth: 1, borderColor: sel === k ? og.color : C.brd, width: 75,
            }}>
            <Text style={{ fontSize: 18 }}>{og.emoji}</Text>
            <Text style={{ fontSize: 9, fontWeight: "600", color: sel === k ? og.color : C.tp, marginTop: 3, textAlign: "center" }}>{og.label}</Text>
            <Text style={{ fontSize: 8, color: C.mu, marginTop: 1 }}>{og.conditions.length} cond.</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Selected organ detail card */}
      <View style={{ backgroundColor: C.card, borderRadius: 16, borderWidth: 1, borderColor: C.brd, overflow: "hidden", marginBottom: 14 }}>
        <View style={{ backgroundColor: o.color + "18", padding: 16, borderBottomWidth: 1, borderBottomColor: C.brd, flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: o.color + "30", alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: o.color }}>
            <Text style={{ fontSize: 28 }}>{o.emoji}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", color: C.tp }}>{o.title}</Text>
            <Text style={{ fontSize: 11, color: o.color, fontWeight: "600", marginTop: 2 }}>
              {o.conditions.length} conditions · Tap tabs below
            </Text>
          </View>
        </View>

        {/* Info tabs */}
        <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: C.brd }}>
          {(["overview","facts","conditions","prevention"] as InfoTab[]).map(tab => (
            <TouchableOpacity key={tab} onPress={() => setInfo(tab)}
              style={{ flex: 1, paddingVertical: 10, alignItems: "center", borderBottomWidth: 2, borderBottomColor: info === tab ? C.mt : "transparent" }}>
              <Text style={{ fontSize: 10, fontWeight: "600", textTransform: "capitalize", color: info === tab ? C.mt : C.mu }}>
                {(t as any)[tab] || tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ padding: 16 }}>
          {info === "overview" && (
            <Text style={{ fontSize: 13, color: C.tp, lineHeight: 20 }}>{o.desc}</Text>
          )}
          {info === "facts" && (
            <View style={{ gap: 8 }}>
              {o.facts.map((f, i) => (
                <View key={i} style={{ flexDirection: "row", gap: 10 }}>
                  <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: o.color + "20", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 10, fontWeight: "700", color: o.color }}>{i + 1}</Text>
                  </View>
                  <Text style={{ fontSize: 13, color: C.tp, flex: 1, lineHeight: 19 }}>{f}</Text>
                </View>
              ))}
            </View>
          )}
          {info === "conditions" && (
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {o.conditions.map((c, i) => (
                <View key={i} style={{ backgroundColor: o.color + "15", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5, borderWidth: 1, borderColor: o.color + "40" }}>
                  <Text style={{ fontSize: 12, color: o.color, fontWeight: "600" }}>{c}</Text>
                </View>
              ))}
            </View>
          )}
          {info === "prevention" && (
            <Text style={{ fontSize: 13, color: C.tp, lineHeight: 20 }}>{o.prevention}</Text>
          )}
        </View>

        {/* Learn more links */}
        <View style={{ padding: 16, paddingTop: 0 }}>
          {o.websites.map((w, i) => (
            <TouchableOpacity key={i} onPress={() => Linking.openURL(w.url)}
              style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10, borderTopWidth: 1, borderTopColor: C.brd }}>
              <Text style={{ flex: 1, fontSize: 13, color: C.bb, fontWeight: "600" }}>{w.name}</Text>
              <Text style={{ fontSize: 12, color: C.mu }}>→</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}


/*import { View, Text } from "react-native";

export default function ARExplorer() {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:24}}>AR Health Explorer</Text>
      <Text>View organs in augmented reality</Text>
    </View>
  );
}*/