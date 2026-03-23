"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const InstagramIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="flex-shrink-0">
            <Image src="/img/logo-claro.png" alt="Personal Deusmar Logo" width={160} height={42} className="h-10 w-auto dark:hidden" />
            <Image src="/img/logo-escuro.png" alt="Personal Deusmar Logo" width={160} height={42} className="h-10 w-auto hidden dark:block" />
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-sm">
          <p>
            {t.footer.copyright} | <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.privacy}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
