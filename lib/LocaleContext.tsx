"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations, LOCALES } from "./i18n";

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof translations.en;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextType>({
  locale:    "en",
  setLocale: () => {},
  t:         translations.en,
  dir:       "ltr",
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // persist to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("walid-locale") as Locale | null;
    if (saved && translations[saved]) setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("walid-locale", l);
    // update <html> dir and lang
    document.documentElement.dir  = LOCALES.find(x => x.code === l)?.dir ?? "ltr";
    document.documentElement.lang = l;
  };

  const dir = LOCALES.find(x => x.code === locale)?.dir ?? "ltr";

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] as typeof translations.en, dir }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
