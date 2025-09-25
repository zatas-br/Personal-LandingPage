"use client"

import {
  Shield,
  Zap,
  BarChart3,
  Users,
  Clock,
  Globe,
  Smartphone,
  HeadphonesIcon,
  Lock,
  Rocket,
  Heart,
  Star,
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Criptografia de ponta a ponta e conformidade com LGPD",
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Carregamento 3x mais rápido que a concorrência",
    },
    {
      icon: BarChart3,
      title: "Analytics Detalhado",
      description: "Relatórios em tempo real com insights acionáveis",
    },
    {
      icon: Users,
      title: "Colaboração em Equipe",
      description: "Trabalhe junto com sua equipe de forma sincronizada",
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "99.9% de uptime garantido com suporte contínuo",
    },
    {
      icon: Globe,
      title: "Acesso Global",
      description: "CDN mundial para acesso rápido de qualquer lugar",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Experiência otimizada para dispositivos móveis",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Premium",
      description: "Atendimento especializado quando você precisar",
    },
    {
      icon: Lock,
      title: "Backup Automático",
      description: "Seus dados sempre seguros com backup em nuvem",
    },
    {
      icon: Rocket,
      title: "Integração Fácil",
      description: "APIs simples para integrar com suas ferramentas",
    },
    {
      icon: Heart,
      title: "Interface Intuitiva",
      description: "Design pensado na experiência do usuário",
    },
    {
      icon: Star,
      title: "Atualizações Constantes",
      description: "Novos recursos e melhorias toda semana",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Recursos Completos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para levar seu negócio ao próximo nível, em uma única plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
