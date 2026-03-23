"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 text-sm font-medium">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "pt" ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"
        }`}
      >
        PT
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "en" ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
