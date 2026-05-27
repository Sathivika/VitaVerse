import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Theme } from "@/constants/theme";

// ─── AVATAR ───────────────────────────────────────────────────────
type AvProps = { init: string; color: string; size?: number };

export function Av({ init, color, size = 40 }: AvProps) {
  return (
    <View style={{
      width: size, height: size, borderRadius: size / 2,
      backgroundColor: color + "25",
      alignItems: "center", justifyContent: "center",
      borderWidth: 1.5, borderColor: color + "60",
    }}>
      <Text style={{ fontSize: size * 0.34, fontWeight: "700", color }}>
        {init}
      </Text>
    </View>
  );
}

// ─── STARS ────────────────────────────────────────────────────────
export function Stars({ rating }: { rating: number }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2, marginTop: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Text key={i} style={{ fontSize: 10, color: i <= Math.round(rating) ? "#f5a623" : "#ddd" }}>
          ★
        </Text>
      ))}
      <Text style={{ fontSize: 10, color: "#888", marginLeft: 3 }}>{rating}</Text>
    </View>
  );
}

// ─── HUMAN BODY MAP (pure RN — no react-native-svg needed) ────────
type BodyProps = {
  selected: string;
  onSelect: (key: string) => void;
  C: Theme;
};

const HOTSPOTS = [
  { key: "brain",  emoji: "🧠", label: "Brain"   },
  { key: "heart",  emoji: "🫀", label: "Heart"   },
  { key: "lungs",  emoji: "🫁", label: "Lungs"   },
  { key: "liver",  emoji: "🟫", label: "Liver"   },
  { key: "kidney", emoji: "🫘", label: "Kidneys" },
];

export function HumanBodySVG({ selected, onSelect, C }: BodyProps) {
  return (
    <View style={{ alignItems: "center", paddingVertical: 8 }}>
      {/* Head */}
      <View style={{
        width: 54, height: 58, borderRadius: 27,
        backgroundColor: C.bg, borderWidth: 1.5, borderColor: C.brd,
        alignItems: "center", justifyContent: "center",
      }}>
        <Text style={{ fontSize: 22 }}>🙂</Text>
      </View>

      {/* Neck */}
      <View style={{ width: 2, height: 10, backgroundColor: C.brd }} />

      {/* Torso with organ buttons */}
      <View style={{
        width: 130, borderRadius: 14,
        backgroundColor: C.bg, borderWidth: 1.5, borderColor: C.brd,
        padding: 12, alignItems: "center",
      }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          {HOTSPOTS.map(h => {
            const isSel = selected === h.key;
            return (
              <TouchableOpacity
                key={h.key}
                onPress={() => onSelect(h.key)}
                style={{
                  width: 44, height: 44, borderRadius: 22,
                  alignItems: "center", justifyContent: "center",
                  backgroundColor: isSel ? "#02C39A20" : C.card,
                  borderWidth: isSel ? 2 : 1,
                  borderColor: isSel ? "#02C39A" : C.brd,
                }}
              >
                <Text style={{ fontSize: 20 }}>{h.emoji}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Legs */}
      <View style={{ flexDirection: "row", gap: 10, marginTop: -2 }}>
        {[0, 1].map(i => (
          <View key={i} style={{
            width: 44, height: 70, borderRadius: 10,
            backgroundColor: C.bg, borderWidth: 1.5, borderColor: C.brd,
          }} />
        ))}
      </View>

      <Text style={{ fontSize: 10, color: C.mu, marginTop: 8 }}>
        Tap an organ to explore
      </Text>
    </View>
  );
}
