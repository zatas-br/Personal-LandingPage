"use client";

import { useLanguage } from "./LanguageProvider";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('/img/academia.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="flex-grow flex items-center justify-center text-center relative px-4">
        {/* Texto de fundo decorativo */}
        <div className="text-[15vw] font-black text-white/[0.04] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none">
          {t.hero.backgroundText}
        </div>

        <div className="relative z-10 pt-20">
          {/* Box de Destaque */}
          <div className="inline-block bg-white text-gray-900 p-3 md:p-4 rounded-lg shadow-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-2xl md:text-4xl font-black">{t.hero.projects}</p>
            <p className="text-xs md:text-sm uppercase tracking-widest">{t.hero.projectsLabel}</p>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {t.hero.titleStart} <span className="text-red-500">{t.hero.titleHighlight}</span>.
          </h1>

          {/* Botão "Saiba Mais" */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="#sobre"
              className="inline-block bg-red-600 text-white font-bold py-3 px-6 md:px-8 rounded-full uppercase tracking-wider hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t.hero.button}
            </a>
          </div>
        </div>
      </main>

      {/* Ícone de Scroll */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 w-full p-6 md:p-8 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="container mx-auto">
          <div className="w-full flex justify-center">
            <a href="#sobre" className="animate-bounce-slow cursor-pointer" aria-label="Rolar para baixo">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
