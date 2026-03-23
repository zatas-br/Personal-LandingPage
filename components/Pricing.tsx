"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import { Check } from "lucide-react";

export function Pricing() {
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

    const elements = document.querySelectorAll(".revealable-pricing");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section
      id="planos"
      className="py-20 md:py-32 relative overflow-hidden radial-glow bg-black"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('https://placehold.co/1920x1080/111827/cccccc?text=Imagem+de+Fundo+da+Academia')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Título da Seção */}
        <div className="text-center mb-12 md:mb-16 revealable-pricing transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {t.pricing.titleStart} <span className="text-red-500">{t.pricing.titleHighlight}</span>
          </h2>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {t.pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`revealable-pricing flex flex-col text-center h-full transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95 ${
                plan.highlight
                  ? "bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 ring-2 ring-red-500 shadow-2xl shadow-red-500/30 transform lg:scale-105"
                  : "bg-gray-900/60 backdrop-blur-sm ring-1 ring-white/10 rounded-lg p-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 0.2}s` }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${plan.highlight ? "text-red-500" : ""}`}>
                {plan.name}
              </h3>

              <ul className="space-y-4 text-gray-200 my-8 text-left flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="my-4">
                <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                <span className="text-gray-300">{plan.period}</span>
              </div>

              <a
                href="#contato"
                className="mt-8 w-full bg-red-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-red-700 transition-all duration-300"
              >
                {t.pricing.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
