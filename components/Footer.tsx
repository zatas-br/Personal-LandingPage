"use client";

import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p>{t.footer.copyright}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white transition-colors">
            {t.footer.terms}
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
