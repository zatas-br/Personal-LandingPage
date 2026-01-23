"use client"

import Link from "next/link"
import {
  ArrowRight,
  Layout,
  LayoutDashboard,
  LogIn,
  Monitor,
  PanelTop,
  PanelBottom,
  AppWindow,
  BookOpen,
  User,
  CreditCard,
  Hammer
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TemplateSelector() {
  const templates = [
    {
      title: "Landing Page",
      description: "Template profissional e totalmente personalizável para conversão.",
      icon: Layout,
      href: "/landing-page",
      active: true,
      tag: "Disponível",
    },
    {
      title: "Blog & Conteúdo",
      description: "Layouts para listagem de posts e leitura de artigos.",
      icon: BookOpen,
      href: "/blog",
      active: true,
      tag: "Novo",
    },
    {
      title: "Perfil & Configurações",
      description: "Telas de Minha Conta, uploads e preferências.",
      icon: User,
      href: "/profile",
      active: true,
      tag: "Novo",
    },
    {
      title: "Pricing & Checkout",
      description: "Planos detalhados e carrinho de compras.",
      icon: CreditCard,
      href: "/pricing",
      active: true,
      tag: "Novo",
    },
    {
      title: "Page Builder",
      description: "Monte sua página combinando componentes visualmente.",
      icon: Hammer,
      href: "/page-builder",
      active: true,
      tag: "Novo",
    },
    {
      title: "Login & Auth",
      description: "Telas de autenticação modernas e seguras.",
      icon: LogIn,
      href: "/login-auth",
      active: true,
      tag: "Disponível",
    },
    {
      title: "Dashboard Admin",
      description: "Painel administrativo completo com gráficos e tabelas.",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: true,
      tag: "Disponível",
    },
    {
      title: "Páginas Comerciais",
      description: "Layouts focados em vendas e apresentação de produtos.",
      icon: Monitor,
      href: "/commercial",
      active: true,
      tag: "Disponível",
    },
    {
      title: "Modais & Popups",
      description: "Coleção de componentes interativos e diálogos.",
      icon: AppWindow,
      href: "/modals",
      active: true,
      tag: "Disponível",
    },
    {
      title: "Headers & Nav",
      description: "Cabeçalhos responsivos e menus de navegação.",
      icon: PanelTop,
      href: "/headers",
      active: true,
      tag: "Disponível",
    },
    {
      title: "Footers",
      description: "Rodapés informativos com links e formulários.",
      icon: PanelBottom,
      href: "/footers",
      active: true,
      tag: "Disponível",
    },
  ]

  return (
    <div className="min-h-screen bg-muted/40 p-4 md:p-8 flex items-center justify-center">
      <div className="mx-auto max-w-6xl space-y-8 w-full">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight">Meus Projetos</h1>
          <p className="text-muted-foreground">
            Selecione um template para começar ou gerenciar seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.title} className={`flex flex-col transition-all hover:shadow-lg ${!template.active ? "opacity-75" : ""}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <template.icon className="h-6 w-6" />
                  </div>
                  <Badge variant={template.active ? "default" : "secondary"}>
                    {template.tag}
                  </Badge>
                </div>
                <CardTitle className="mt-4">{template.title}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="aspect-video w-full rounded-md bg-muted/50 border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm">
                   Preview
                </div>
              </CardContent>
              <CardFooter>
                {template.active ? (
                  <Button asChild className="w-full">
                    <Link href={template.href}>
                      Acessar Template
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button disabled className="w-full" variant="outline">
                    Indisponível
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
