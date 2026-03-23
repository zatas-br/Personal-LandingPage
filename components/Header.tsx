"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, Instagram, Facebook } from "lucide-react";

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 animate-fade-in ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold tracking-wider">
            <Image src="/img/logo.png" alt="Personal Deusmar Logo" width={120} height={32} className="h-8 w-auto" priority />
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#sobre" className="text-gray-200 hover:text-white transition-colors duration-300">
              {t.nav.about}
            </a>
            <a href="#produto" className="text-gray-200 hover:text-white transition-colors duration-300">
              {t.nav.product}
            </a>
            <a href="#depoimentos" className="text-gray-200 hover:text-white transition-colors duration-300">
              {t.nav.testimonials}
            </a>
            <a href="#planos" className="text-gray-200 hover:text-white transition-colors duration-300">
              {t.nav.plans}
            </a>
            <a href="#contato" className="text-gray-200 hover:text-white transition-colors duration-300">
              {t.nav.contact}
            </a>

            <div className="flex items-center space-x-4 pl-4 border-l border-gray-700">
              <LanguageSwitcher />
              <a href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-200 hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-200 hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </nav>

          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              type="button"
              className="z-50 text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-30 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <a
            href="#sobre"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            {t.nav.about}
          </a>
          <a
            href="#produto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            {t.nav.product}
          </a>
          <a
            href="#depoimentos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            {t.nav.testimonials}
          </a>
          <a
            href="#planos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            {t.nav.plans}
          </a>
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            {t.nav.contact}
          </a>
        </nav>
      </div>
    </>
  );
}
