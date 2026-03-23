"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function Features() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna da Esquerda (Celular) */}
          <div className="revealable-feature flex justify-center transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95">
            <div className="device-iphone-14">
              <div className="device-frame">
                <div className="device-screen">
                  <Image
                    src="/img/Tela-Login-DPJ-App.png"
                    alt="Tela do aplicativo"
                    fill
                    className="object-cover"
                  />
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
            {t.product.features.map((feature, index) => (
              <div
                key={index}
                className={`revealable-feature transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95 ${
                  feature.highlight
                    ? "bg-red-600 p-6 rounded-lg ring-1 ring-red-400 shadow-lg shadow-red-500/20"
                    : "bg-white/10 backdrop-blur-sm p-6 rounded-lg ring-1 ring-white/10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 0.2}s` }}
              >
                <h3 className={`text-xl font-bold mb-2 ${feature.highlight ? "text-white" : ""}`}>
                  {feature.title}
                </h3>
                <p className={`${feature.highlight ? "text-red-100" : "text-gray-200"}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
