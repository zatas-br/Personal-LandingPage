"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const faqs = t.faq?.items ?? [
    {
      question: "Como funciona o acompanhamento online?",
      answer:
        "O acompanhamento online é feito 100% pelo WhatsApp e por videochamada. Você recebe sua planilha de treino personalizada, acompanhamento nutricional e suporte para tirar dúvidas a qualquer momento. Funciona para qualquer lugar do mundo.",
    },
    {
      question: "Preciso ter experiência na academia para começar?",
      answer:
        "Não! Os treinos são adaptados ao seu nível, seja iniciante, intermediário ou avançado. O objetivo é sempre a progressão segura e eficiente, respeitando suas limitações e objetivos.",
    },
    {
      question: "Com que frequência recebo novos treinos?",
      answer:
        "A prescrição de treino varia conforme o plano escolhido — bimestral, semestral ou anual. Em todos os planos há revisões periódicas com ajuste de carga e periodização para garantir evolução contínua.",
    },
    {
      question: "A nutrição está incluída nos planos?",
      answer:
        "Nos planos Light e Premium, sim! O acompanhamento nutricional com ajustes está incluso. No plano Para Treino, o foco é exclusivamente na prescrição e evolução dos treinos.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Os primeiros resultados visíveis costumam aparecer entre 3 e 8 semanas, dependendo da consistência, alimentação e sono. Resultados sólidos e duradouros são construídos ao longo de meses de dedicação.",
    },
    {
      question: "Posso treinar em casa ou preciso de academia?",
      answer:
        "Os treinos podem ser adaptados tanto para academia quanto para treino em casa, com ou sem equipamentos. Basta informar sua situação no início do acompanhamento.",
    },
    {
      question: "Como faço para adquirir a Planilha de Abs?",
      answer:
        "É só entrar em contato pelo WhatsApp ou pelo formulário de contato nesta página. A entrega é digital e imediata após a confirmação do pagamento.",
    },
    {
      question: "Posso cancelar ou pausar meu plano?",
      answer:
        "Sim, entre em contato pelo WhatsApp para verificar as condições de cancelamento ou pausa conforme o plano contratado. Buscamos sempre a melhor solução para cada caso.",
    },
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
    const elements = document.querySelectorAll(".revealable-faq");
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#111111] relative overflow-hidden">
      {/* Grid de fundo */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        {/* Cabeçalho */}
        <div className="text-center mb-14 revealable-faq opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-red-500 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            {t.faq?.eyebrow ?? "Perguntas Frequentes"}
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {t.faq?.titleStart ?? "Tire suas"}{" "}
            <span className="text-red-500">{t.faq?.titleHighlight ?? "Dúvidas"}</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            {t.faq?.description ?? "Respondemos as perguntas mais comuns para você começar com confiança."}
          </p>
        </div>

        {/* Acordeão */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`revealable-faq opacity-0 translate-y-8 transition-all duration-500 rounded-lg overflow-hidden ring-1 ${
                  isOpen ? "ring-red-600/50 bg-red-950/10" : "ring-white/8 bg-gray-900/40"
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-300 ${
                      isOpen ? "text-red-400" : "text-white group-hover:text-red-400"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-red-600 text-white" : "bg-white/5 text-gray-400 group-hover:bg-red-600/20 group-hover:text-red-400"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {/* Conteúdo com animação */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-300 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA abaixo do FAQ */}
        <div className="revealable-faq opacity-0 translate-y-8 transition-all duration-700 mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            {t.faq?.ctaText ?? "Ainda tem dúvidas? Fale comigo diretamente."}
          </p>
          <a
            href="#contato"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider transition-all duration-300 text-sm"
          >
            {t.faq?.ctaButton ?? "Entrar em Contato"}
          </a>
        </div>
      </div>
    </section>
  );
}
