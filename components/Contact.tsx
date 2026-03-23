"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { useLanguage } from "./LanguageProvider";

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    const elements = document.querySelectorAll(".revealable-contact");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5 seconds
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-[#111111] relative overflow-hidden radial-glow">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="revealable-contact max-w-xl mx-auto transition-all duration-700 ease-out opacity-0 translate-y-12 scale-95">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            {t.contact.titleStart} <span className="text-red-500">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-gray-300 mt-4 mb-12">
            {t.contact.description}
          </p>

          {isSubmitted && (
            <div className="bg-green-500/20 border-l-4 border-green-500 text-green-100 p-4 mb-6 rounded">
              <p>{t.contact.successMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder={t.contact.form.name}
                className="w-full bg-transparent border-2 border-red-500 rounded-lg p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder={t.contact.form.email}
                className="w-full bg-transparent border-2 border-red-500 rounded-lg p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder={t.contact.form.phone}
                className="w-full bg-transparent border-2 border-red-500 rounded-lg p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-lg uppercase tracking-wider hover:bg-red-700 transition-all duration-300"
              >
                {t.contact.form.submit}
              </button>
            </div>
          </form>

          <div className="my-6 flex items-center justify-center">
            <span className="flex-grow bg-gray-800 h-px"></span>
            <span className="mx-4 text-gray-300">{t.contact.or}</span>
            <span className="flex-grow bg-gray-800 h-px"></span>
          </div>

          <a
            href="https://wa.me/5500999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white font-bold py-4 px-8 rounded-lg uppercase tracking-wider hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.888-.001 2.225.651 4.315 1.731 6.086l.474.854-1.217 4.464 4.625-1.217.833.491z" />
            </svg>
            {t.contact.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
