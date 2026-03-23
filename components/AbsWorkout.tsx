"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import { CheckCircle2 } from "lucide-react";

export function AbsWorkout() {
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

    const elements = document.querySelectorAll(".revealable-abs");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="abs-workout" className="py-20 md:py-32 bg-[#000000] relative overflow-hidden radial-glow">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 revealable-abs transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {t.absWorkout.titleStart} <span className="text-red-500">{t.absWorkout.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 font-medium">
            {t.absWorkout.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-md ring-1 ring-red-500/50 rounded-2xl p-8 md:p-12 shadow-2xl shadow-red-900/20 revealable-abs transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95" style={{ transitionDelay: "0.2s" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-6">
                {t.absWorkout.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-200">
                    <CheckCircle2 className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-full aspect-video bg-gray-800 rounded-lg overflow-hidden relative ring-2 ring-gray-700 flex items-center justify-center">
                 <span className="text-gray-500 font-bold tracking-widest uppercase">Video Placeholder</span>
              </div>
              <a
                href="#contato"
                className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-lg uppercase tracking-wider hover:bg-red-700 transition-all duration-300 text-center shadow-lg transform hover:scale-105"
              >
                {t.absWorkout.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
