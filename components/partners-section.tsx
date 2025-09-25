"use client"

import { useEffect, useRef } from "react"

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  const partners = [
    "Google",
    "Microsoft",
    "Amazon",
    "Apple",
    "Meta",
    "Netflix",
    "Spotify",
    "Adobe",
    "Salesforce",
    "Oracle",
    "IBM",
    "Intel",
    "NVIDIA",
    "Tesla",
    "Uber",
    "Airbnb",
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Empresas que Confiam em Nós</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 10.000 empresas ao redor do mundo já escolheram nossa solução
          </p>
        </div>

        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-8 animate-scroll" style={{ width: "calc(200% + 2rem)" }}>
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-background rounded-lg p-6 shadow-sm border flex items-center justify-center min-w-[200px] h-20"
              >
                <span className="font-semibold text-lg text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
