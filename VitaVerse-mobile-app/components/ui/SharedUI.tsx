import React from "react";
import { View, Text, Svg, Circle, Ellipse, Line, Path } from "react-native";
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
      {[1,2,3,4,5].map(i => (
        <Text key={i} style={{ fontSize: 10, color: i <= Math.round(rating) ? "#f5a623" : "#ddd" }}>
          ★
        </Text>
      ))}
      <Text style={{ fontSize: 10, color: "#888", marginLeft: 3 }}>{rating}</Text>
    </View>
  );
}

// ─── HUMAN BODY SVG ───────────────────────────────────────────────
type BodyProps = {
  selected: string;
  onSelect: (key: string) => void;
  C: Theme;
};

const HOTSPOTS = [
  { key: "brain",  x: 110, y: 30,  label: "🧠" },
  { key: "heart",  x: 105, y: 108, label: "🫀" },
  { key: "lungs",  x: 125, y: 103, label: "🫁" },
  { key: "liver",  x: 120, y: 148, label: "🟫" },
  { key: "kidney", x: 95,  y: 163, label: "🫘" },
];

export function HumanBodySVG({ selected, onSelect, C }: BodyProps) {
  return (
    <View style={{ alignItems: "center", paddingVertical: 8 }}>
      {/* @ts-ignore — react-native-svg */}
      <Svg width={220} height={280} viewBox="0 0 220 280">
        {/* Head */}
        {/* @ts-ignore */}
        <Ellipse cx="110" cy="30" rx="22" ry="26" fill={C.card} stroke={C.brd} strokeWidth="1.5"/>
        {/* Neck */}
        {/* @ts-ignore */}
        <Line x1="103" y1="54" x2="103" y2="68" stroke={C.brd} strokeWidth="1.5"/>
        {/* @ts-ignore */}
        <Line x1="117" y1="54" x2="117" y2="68" stroke={C.brd} strokeWidth="1.5"/>
        {/* Torso */}
        {/* @ts-ignore */}
        <Path d="M80,68 L140,68 L148,190 L72,190 Z" fill={C.card} stroke={C.brd} strokeWidth="1.5"/>
        {/* Left arm */}
        {/* @ts-ignore */}
        <Path d="M80,70 L55,75 L48,155 L62,155 L68,88" fill={C.card} stroke={C.brd} strokeWidth="1.5"/>
        {/* Right arm */}
        {/* @ts-ignore */}
        <Path d="M140,70 L165,75 L172,155 L158,155 L152,88" fill={C.card} stroke={C.brd} strokeWidth="1.5"/>
        {/* Left leg */}
        {/* @ts-ignore */}
        <Path d="M85,190 L78,270 L98,270 L105,195" fill={C.card} stroke={C.brd} strokeWidth="1.5"/>
        {/* Right leg */}
        {/* @ts-ignore */}
        <Path d="M135,190 L142,270 L122,270 L115,195" fill={C.card} stroke={C.brd} strokeWidth="1.5"/>

        {/* Organ hotspots */}
        {HOTSPOTS.map(h => {
          const isSel = selected === h.key;
          return (
            // @ts-ignore
            <Circle
              key={h.key}
              cx={h.x} cy={h.y} r={isSel ? 14 : 11}
              fill={isSel ? "#02C39A30" : C.card}
              stroke={isSel ? "#02C39A" : C.brd}
              strokeWidth={isSel ? 2 : 1}
              onPress={() => onSelect(h.key)}
            />
          );
        })}
      </Svg>

      {/* Emoji labels rendered as RN Text over SVG */}
      <View style={{ position: "absolute", top: 8 }}>
        {HOTSPOTS.map(h => (
          <Text
            key={h.key}
            onPress={() => onSelect(h.key)}
            style={{
              position: "absolute",
              left: h.x - 9,
              top: h.y - 9,
              fontSize: 14,
            }}
          >
            {h.label}
          </Text>
        ))}
      </View>
    </View>
  );
}
