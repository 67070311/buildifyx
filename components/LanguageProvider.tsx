"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type SiteLanguage = "th" | "en";

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<SiteLanguage>("th");

  useEffect(() => {
    const saved = window.localStorage.getItem("buildifyx-language");
    if (saved === "th" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "th" ? "th" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage: SiteLanguage) => {
        setLanguageState(nextLanguage);
        window.localStorage.setItem("buildifyx-language", nextLanguage);
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
