"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function Features() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % t.product.features.length;
        setProgressKey((k) => k + 1);
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, [t.product.features.length, activeIndex]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setProgressKey((k) => k + 1); // Reseta a animação forçando um novo key
  };

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

    const elements = document.querySelectorAll(".revealable-feature");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="produto" className="py-20 md:py-32 bg-[#000000] relative overflow-hidden radial-glow">
      {/* Fundo decorativo (Grid) */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mt-16 md:mt-24 mb-16 md:mb-0 revealable-feature transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight md:leading-tight lg:leading-tight">
            {t.product.title} <br className="md:hidden block" />
            <span className="text-red-500">{t.product.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna da Esquerda (Celular) */}
          <div className="revealable-feature flex justify-center transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95">
            <div className="device-iphone-14">
              <div className="device-frame">
                <div className="device-screen relative overflow-hidden bg-black">
                  {t.product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    >
                      <Image
                        src={(feature as { image?: string }).image || "/img/Tela-Login-DPJ-App.png"}
                        alt={`Tela do aplicativo ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="device-stripe"></div>
              <div className="device-header">
                <div className="device-sensors"></div>
              </div>
              <div className="device-btns"></div>
              <div className="device-power"></div>
              <div className="device-home"></div>
            </div>
          </div>

          {/* Coluna da Direita (Features) */}
          <div className="flex flex-col gap-6">
            {t.product.features.map((feature, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => handleManualSelect(index)}
                  className={`revealable-feature cursor-pointer transition-all duration-500 ease-out translate-y-0 scale-100 ${
                    isActive
                      ? "bg-red-600 p-6 rounded-lg ring-1 ring-red-400 shadow-lg shadow-red-500/20"
                      : "bg-white/10 backdrop-blur-sm p-6 rounded-lg ring-1 ring-white/10 hover:bg-white/20"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className={isActive ? "text-red-100" : "text-gray-200"}>
                    {feature.description}
                  </p>
                  
                  {/* Barra de progresso sempre visível de fundo, preenche de branco se ativa */}
                  <div className="mt-4 h-1 w-full bg-white/20 rounded overflow-hidden">
                    {isActive && (
                      <div
                        key={progressKey} // Força re-render da animação no React
                        className="h-full bg-white rounded"
                        style={{
                          animation: "progress 10s linear forwards",
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
