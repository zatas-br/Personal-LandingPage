"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const benefits = [
    "Dicas exclusivas de produtividade",
    "Novidades e atualizações em primeira mão",
    "Cases de sucesso dos nossos clientes",
    "Conteúdo premium gratuito",
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-primary">NEWSLETTER EXCLUSIVA</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Receba Conteúdo Exclusivo</h2>
              <p className="text-muted-foreground mb-6">
                Junte-se a mais de 50.000 profissionais que recebem nossas dicas semanais para aumentar a produtividade
                e crescer no mercado.
              </p>

              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg border">
              <h3 className="text-xl font-semibold mb-4 text-center">Inscreva-se Gratuitamente</h3>

              {isSubscribed ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-green-700 mb-2">Inscrição Confirmada!</h4>
                  <p className="text-sm text-muted-foreground">Verifique seu email para confirmar a inscrição.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu melhor email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12" size="lg">
                    Quero Receber Conteúdo Gratuito
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">Não enviamos spam. Cancele quando quiser.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
