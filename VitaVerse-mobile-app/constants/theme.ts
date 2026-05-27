// ─── THEME ────────────────────────────────────────────────────────
export type Theme = {
  bb: string; tl: string; vg: string; mt: string;
  bg: string; card: string; sidebar: string;
  brd: string; brd2: string;
  tp: string; mu: string; headerBg: string;
};

export const LIGHT: Theme = {
  bb:"#05668D", tl:"#028090", vg:"#00A896", mt:"#02C39A",
  bg:"#F0F7F9", card:"#ffffff", sidebar:"#ffffff",
  brd:"rgba(5,102,141,0.12)", brd2:"rgba(2,195,154,0.3)",
  tp:"#0D3347", mu:"#5E8FA3", headerBg:"#05668D",
};

export const DARK: Theme = {
  bb:"#028090", tl:"#00A896", vg:"#02C39A", mt:"#02C39A",
  bg:"#0d1f2d", card:"#112230", sidebar:"#0a1a27",
  brd:"rgba(255,255,255,0.1)", brd2:"rgba(2,195,154,0.3)",
  tp:"#e2eeea", mu:"rgba(200,228,222,0.55)", headerBg:"#0a1a27",
};
