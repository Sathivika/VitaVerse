import React, { createContext, useContext, useState, ReactNode } from "react";
import { LIGHT, DARK, Theme } from "@/constants/theme";
import { T, Lang, Translations } from "@/constants/translations";

type AppContextType = {
  dark: boolean;
  setDark: (v: boolean) => void;
  lang: Lang;
  setLang: (v: Lang) => void;
  C: Theme;
  t: Translations;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const C = dark ? DARK : LIGHT;
  const t = T[lang];

  return (
    <AppContext.Provider value={{ dark, setDark, lang, setLang, C, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
