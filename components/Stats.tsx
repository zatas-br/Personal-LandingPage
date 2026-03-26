"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

function AnimatedCounter({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const stats: StatItem[] = [
    { value: 1000, suffix: "+", label: t.stats?.completedProjects ?? "Projetos Concluídos" },
    { value: 98, suffix: "%", label: t.stats?.satisfiedClients ?? "Clientes Satisfeitos" },
    { value: 5, suffix: "+", label: t.stats?.yearsExperience ?? "Anos de Experiência" },
    { value: 3500, suffix: "+", label: t.stats?.totalStudents ?? "Alunos Transformados" },
    { value: 12, suffix: "", label: t.stats?.countriesReached ?? "Países Alcançados" },
    { value: 150, suffix: "+", label: t.stats?.kgLost ?? "kg Perdidos pelos Alunos" },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".revealable-stat");
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14 revealable-stat opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {t.stats?.titleStart ?? "Resultados"}{" "}
            <span className="text-red-500">{t.stats?.titleHighlight ?? "Reais"}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden ring-1 ring-white/5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="revealable-stat opacity-0 translate-y-8 transition-all duration-700 bg-[#0a0a0a] p-8 md:p-10 flex flex-col items-center text-center group hover:bg-red-950/10 transition-colors"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tabular-nums leading-none">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="w-8 h-0.5 bg-red-600 my-3 group-hover:w-12 transition-all duration-300" />
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
