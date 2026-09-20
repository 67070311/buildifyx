"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-[10px] border border-[#e5ebf3] bg-[#f8fafc] p-1 ${compact ? "gap-0" : "gap-1"}`}
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage("th")}
        aria-pressed={language === "th"}
        className={`rounded-[7px] transition ${compact ? "px-2.5 py-1.5 text-[10px]" : "px-3 py-1.5 text-[10px]"} ${
          language === "th"
            ? "bg-white text-[#2f7fff] shadow-sm"
            : "text-[#8b97a9] hover:text-[#172033]"
        }`}
      >
        TH
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-[7px] transition ${compact ? "px-2.5 py-1.5 text-[10px]" : "px-3 py-1.5 text-[10px]"} ${
          language === "en"
            ? "bg-white text-[#2f7fff] shadow-sm"
            : "text-[#8b97a9] hover:text-[#172033]"
        }`}
      >
        US
      </button>
    </div>
  );
}
