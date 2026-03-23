"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function About() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
          entry.target.classList.remove("opacity-0", "translate-y-12", "scale-95");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#111111] relative overflow-hidden radial-glow">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className="max-w-5xl mx-auto bg-gray-900/50 backdrop-blur-sm ring-1 ring-white/10 rounded-lg shadow-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95"
        >
          {/* Espaço para a foto */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
              src="/img/cliente.png"
              alt="Foto Sobre Nós"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-auto aspect-square"
            />
          </div>
          {/* Textos */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-red-500 mb-4">{t.about.title}</h2>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">{t.about.description}</p>
          </div>
        </div>
      </div>
      {/* Fundo decorativo (Grid) */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#000000] to-transparent"></div>
    </section>
  );
}
