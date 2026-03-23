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
    <section id="planilha-abs" className="py-20 md:py-32 bg-gradient-to-b from-[#111111] to-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-20">
          <h2 className="revealable-abs text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95">
            Planilha de treinos<br/>
            de abs em <span className="text-red-600">casa!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          <div className="revealable-abs flex justify-center lg:justify-end transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95">
            <div className="card-abs relative w-full max-w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.15)] ring-1 ring-white/5">
              
              <img src="/img/abdomen.jpg" alt="Abdômen Definido" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] object-cover z-0 opacity-90" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>

              <div className="absolute top-8 left-0 right-0 text-center z-10 px-4">
                <span className="text-[#dc2626] text-[10px] md:text-xs tracking-[0.3em] font-medium uppercase">Planilha</span>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mt-1 tracking-tighter" style={{ textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
                  Abdômen Definido
                </h3>
                <p className="text-[9px] md:text-[10px] text-gray-300 uppercase tracking-widest mt-2">30 dias para resultados reais</p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-[#111111]/80 backdrop-blur-md rounded border border-white/5 p-4 z-10">
                <ul className="space-y-2 text-xs md:text-sm text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Treinos diários
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Guia de execução de exercícios
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Foco em queima de gordura
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Acesso vitalício
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="revealable-abs flex flex-col justify-center text-center lg:text-left transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-2xl md:text-3xl font-black text-[#dc2626] mb-4">
              Tenha o abdomen definido em casa!
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Ideal para quem quer ter um treino bem montado, com progressão de carga e periodização, mas ainda não pode investir em acompanhamento presencial. A planilha é entregue em formato digital e pode ser acessada pelo celular.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contato" className="bg-[#cc0000] text-white font-bold py-3 px-8 rounded uppercase tracking-wide hover:bg-[#a30000] transition-colors duration-300 text-center shadow-[inset_0px_-3px_0px_rgba(0,0,0,0.2)]">
                Adquira agora
              </a>
              <a href="#sobre" className="bg-white text-black font-bold py-3 px-8 rounded uppercase tracking-wide hover:bg-gray-200 transition-colors duration-300 text-center shadow-[inset_0px_-3px_0px_rgba(0,0,0,0.1)]">
                Saiba mais
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
