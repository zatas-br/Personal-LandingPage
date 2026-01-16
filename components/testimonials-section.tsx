"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useSettings } from "@/hooks/use-settings"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Maria Santos",
    role: "CEO, TechStart",
    content:
      "A solução transformou completamente nossa operação. Aumentamos nossa eficiência em 200% e reduzimos custos significativamente.",
    rating: 5,
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "Carlos Oliveira",
    role: "Diretor de Marketing, InnovaCorp",
    content:
      "Impressionante como conseguiram entender exatamente nossas necessidades. O ROI foi visível já no primeiro mês.",
    rating: 5,
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Ana Costa",
    role: "Fundadora, DigitalPlus",
    content: "Profissionalismo excepcional e resultados que superaram todas as expectativas. Recomendo sem hesitação.",
    rating: 5,
    avatar: "/business-woman-avatar.png",
  },
  {
    name: "Roberto Lima",
    role: "CTO, FutureTech",
    content: "A tecnologia implementada é de ponta. Nossa equipe ficou impressionada com a qualidade e performance.",
    rating: 5,
    avatar: "/tech-professional-avatar.png",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { settings } = useSettings()
  const layout = settings.sections.find((s) => s.id === "testimonials")?.layout || "layout1"

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="custom-section-padding">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O Que Dizem Nossos Clientes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Depoimentos reais de quem já transformou seu negócio conosco
            </p>
          </div>

          {layout === "layout2" ? (
            // Layout 2: Carousel
            <div className="relative max-w-5xl mx-auto">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                  {testimonials.map((testimonial, index) => (
                    <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4" key={index}>
                      <Card className="h-full group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-8 flex flex-col h-full">
                          <div className="flex items-start gap-4 mb-6">
                            <Quote className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                            <p className="text-lg italic text-muted-foreground line-clamp-4">"{testimonial.content}"</p>
                          </div>
                          <div className="mt-auto flex items-center gap-4">
                            <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="font-semibold text-sm">{testimonial.name}</div>
                              <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                            </div>
                            <div className="flex gap-0.5">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                <Button variant="outline" size="icon" onClick={scrollPrev}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={scrollNext}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            // Layout 1: Grid (Default)
            <div className="grid md:grid-cols-2 custom-item-gap">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <Quote className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <p className="text-lg italic text-muted-foreground">"{testimonial.content}"</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
