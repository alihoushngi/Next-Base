// src/components/shared/LanguageSwitcher.tsx
"use client";

import Button from "@/components/shared/Button/Button";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
    if (typeof window !== "undefined") {
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
      document.documentElement.classList.remove("font-fa", "font-en");
      document.documentElement.classList.add(
        newLang === "fa" ? "font-fa" : "font-en",
      );
    }
  };

  const isFa = i18n.language === "fa";

  return (
    <Button
      onClick={toggleLanguage}
      className="px-2 py-0 pt-1 text-xl"
      aria-label="Change Language"
    >
      {isFa ? "🇬🇧" : "🇮🇷"}
    </Button>
  );
}
