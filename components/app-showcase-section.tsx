"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Download, Star, Play, Users, Zap, Shield } from "lucide-react"

export function AppShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Interface Intuitiva",
      description: "Design moderno e fácil de usar, pensado para máxima produtividade.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança Avançada",
      description: "Seus dados protegidos com criptografia de ponta e backup automático.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Colaboração em Tempo Real",
      description: "Trabalhe em equipe de forma sincronizada, onde quer que esteja.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Smartphone className="h-4 w-4 mr-2" />
            Nosso Aplicativo
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Leve Sua Produtividade Para o <span className="text-primary">Próximo Nível</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Disponível para iOS e Android, nosso app revoluciona a forma como você trabalha, oferecendo todas as
            ferramentas necessárias na palma da sua mão.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup do App */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="bg-gray-50 h-8 flex items-center justify-between px-6 text-xs font-medium">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Dashboard</h3>
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg mb-2"></div>
                      <p className="text-sm font-medium">Projetos</p>
                      <p className="text-xs text-gray-500">24 ativos</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="w-8 h-8 bg-green-500 rounded-lg mb-2"></div>
                      <p className="text-sm font-medium">Tarefas</p>
                      <p className="text-xs text-gray-500">156 concluídas</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Reunião de Equipe</p>
                        <p className="text-xs text-gray-500">14:30 - 15:30</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Apresentação Cliente</p>
                        <p className="text-xs text-gray-500">16:00 - 17:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-float">
              <Star className="h-6 w-6" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Download className="h-6 w-6" />
            </div>
          </div>

          {/* Features e Downloads */}
          <div className="space-y-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeFeature === index ? "border-primary shadow-lg" : "hover:shadow-md"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          activeFeature === index ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-card rounded-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <Download className="h-5 w-5 mr-2" />
                Download para iOS
              </Button>
              <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                <Play className="h-5 w-5 mr-2" />
                Download para Android
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
