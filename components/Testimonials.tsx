"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
            entry.target.classList.remove("opacity-0", "translate-y-12", "scale-95");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".revealable-testimonial");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-[#111111] relative overflow-hidden">
      {/* Fundo decorativo (Grid) */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#000000] to-[#111111]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Título da Seção */}
        <div className="text-center mb-12 md:mb-16 revealable-testimonial transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {t.testimonials.titleStart} <span className="text-red-500">{t.testimonials.titleHighlight}</span>
          </h2>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="revealable-testimonial bg-gray-900/50 backdrop-blur-sm ring-1 ring-white/10 rounded-lg p-6 flex flex-col gap-4 transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95 h-full"
              style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="bg-gray-800 aspect-square rounded-lg overflow-hidden relative flex-shrink-0">
                <Image
                  src="/img/cliente.png"
                  alt={`Foto do Cliente ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed flex-grow">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
