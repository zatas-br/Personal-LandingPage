"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Check } from "lucide-react";

type BillingPeriod = "bimestral" | "semestral" | "anual";

export function Pricing() {
  const { t } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("semestral");
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
  }, [billingPeriod]);

  // @ts-ignore
  const activePlans = t.pricing.plans[billingPeriod];

  return (
    <section
      id="planos"
      className="py-20 md:py-32 relative overflow-hidden radial-glow bg-[#111111]"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Título da Seção */}
        <div className="text-center mb-12 md:mb-16 revealable-pricing transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {t.pricing.titleStart} <span className="text-red-500">{t.pricing.titleHighlight}</span>
          </h2>
          
          {/* Seletor de Período (Toggle Switch) */}
          <div className="mt-8 inline-flex bg-gray-900 rounded-full p-1 border border-gray-800">
            {(["bimestral", "semestral", "anual"] as BillingPeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => setBillingPeriod(period)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  billingPeriod === period
                    ? "bg-red-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {/* @ts-ignore */}
                {t.pricing.periods[period]}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {activePlans.map((plan: any, index: number) => (
            <div
              key={`${billingPeriod}-${index}`}
              className={`revealable-pricing flex flex-col text-center h-full transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95 ${
                plan.highlight
                  ? "bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 ring-2 ring-red-500 shadow-2xl shadow-red-500/30 transform lg:scale-105"
                  : "bg-gray-900/60 backdrop-blur-sm ring-1 ring-white/10 rounded-lg p-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
            >
              <h3 className={`text-2xl font-black mb-2 ${plan.highlight ? "text-red-500" : "text-white"}`}>
                {plan.name}
              </h3>
              
              <p className="text-sm text-gray-400 mb-6 italic h-12">"{plan.slogan}"</p>

              <div className="my-2 min-h-[80px]">
                {plan.originalPrice && (
                  <p className="text-gray-500 line-through text-sm mb-1">
                    De {plan.originalPrice}
                  </p>
                )}
                <div className="flex flex-col items-center justify-center">
                  <span className="text-3xl md:text-4xl font-black">{plan.price}</span>
                  <span className="text-gray-400 text-sm mt-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 text-gray-200 my-8 text-left flex-grow">
                {plan.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`mt-auto w-full font-bold py-3 px-8 rounded-lg uppercase tracking-wider transition-all duration-300 ${
                  plan.highlight 
                    ? "bg-red-600 text-white hover:bg-red-700" 
                    : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                }`}
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
