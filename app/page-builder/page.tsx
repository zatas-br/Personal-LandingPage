"use client"

import { useState } from "react"
import {
  PanelLeft,
  Layout,
  Type,
  Image as ImageIcon,
  Menu,
  Footprints,
  Maximize2,
  Undo2,
  Palette
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

// Import Components
import { HeaderCentered } from "@/components/header-templates/header-centered"
import { HeaderMega } from "@/components/header-templates/header-mega"
import { HeaderSimple } from "@/components/header-templates/header-simple"

import { HeroSection } from "@/components/hero-section"

import { FeaturesSection } from "@/components/features-section"

import { FooterMinimal } from "@/components/footer-templates/footer-minimal"
import { FooterNewsletter } from "@/components/footer-templates/footer-newsletter"
import { FooterSitemap } from "@/components/footer-templates/footer-sitemap"
import Link from "next/link"

export default function PageBuilder() {
  const [config, setConfig] = useState({
    header: "simple",
    hero: "layout1",
    features: "layout1",
    footer: "minimal"
  })
  const [theme, setTheme] = useState("theme-blue")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderHeader = () => {
    switch(config.header) {
      case "centered": return <HeaderCentered />
      case "mega": return <HeaderMega />
      case "simple":
      default: return <HeaderSimple />
    }
  }

  const renderFooter = () => {
    switch(config.footer) {
      case "newsletter": return <FooterNewsletter />
      case "sitemap": return <FooterSitemap />
      case "minimal":
      default: return <FooterMinimal />
    }
  }

  return (
    <div className={`min-h-screen flex flex-col overflow-hidden ${theme}`}>
      {/* Top Bar */}
      <header className="h-14 border-b bg-background flex items-center justify-between px-4 z-50 sticky top-0 shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <PanelLeft className="h-5 w-5" />
          </Button>
          <div className="font-semibold flex items-center gap-2">
            <Layout className="h-5 w-5 text-primary" />
            Page Builder
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
             <Link href="/">
               <Undo2 className="mr-2 h-4 w-4" />
               Voltar ao Menu
             </Link>
          </Button>
          <Button size="sm">
             Exportar Layout
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Controls - Fixed height due to parent flex/overflow-hidden */}
        <aside
          className={`
            bg-muted/30 border-r transition-all duration-300 ease-in-out flex flex-col h-full
            ${sidebarOpen ? "w-80 translate-x-0" : "w-0 -translate-x-full opacity-0 overflow-hidden"}
          `}
        >
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-8">

              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Palette className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Cores do Tema</h3>
                </div>
                <div className="space-y-3">
                  <Label>Selecione uma paleta</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="theme-blue">Azul Profissional</SelectItem>
                      <SelectItem value="theme-green">Verde Natureza</SelectItem>
                      <SelectItem value="theme-purple">Roxo Criativo</SelectItem>
                      <SelectItem value="theme-orange">Laranja Energético</SelectItem>
                      <SelectItem value="theme-red">Vermelho Dinâmico</SelectItem>
                      <SelectItem value="theme-pink">Rosa Moderno</SelectItem>
                      <SelectItem value="theme-teal">Azul Turquesa</SelectItem>
                      <SelectItem value="theme-indigo">Índigo Elegante</SelectItem>
                      <SelectItem value="theme-yellow">Amarelo Vibrante</SelectItem>
                      <SelectItem value="theme-dark">Modo Escuro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Menu className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Header (Cabeçalho)</h3>
                </div>
                <div className="space-y-3">
                  <Label>Estilo do Menu</Label>
                  <Select
                    value={config.header}
                    onValueChange={(v) => setConfig(prev => ({ ...prev, header: v }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simple">Simples (Logo + Links)</SelectItem>
                      <SelectItem value="centered">Centralizado</SelectItem>
                      <SelectItem value="mega">Mega Menu (Completo)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <ImageIcon className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Hero (Seção Principal)</h3>
                </div>
                <div className="space-y-3">
                  <Label>Layout</Label>
                  <Select
                    value={config.hero}
                    onValueChange={(v) => setConfig(prev => ({ ...prev, hero: v }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="layout1">Centralizado</SelectItem>
                      <SelectItem value="layout2">Split (Texto + Imagem)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Type className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Features (Recursos)</h3>
                </div>
                <div className="space-y-3">
                  <Label>Disposição</Label>
                  <Select
                    value={config.features}
                    onValueChange={(v) => setConfig(prev => ({ ...prev, features: v }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="layout1">Grid (Cartões)</SelectItem>
                      <SelectItem value="layout2">Lista (Detalhado)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Footprints className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Footer (Rodapé)</h3>
                </div>
                <div className="space-y-3">
                  <Label>Estilo</Label>
                  <Select
                    value={config.footer}
                    onValueChange={(v) => setConfig(prev => ({ ...prev, footer: v }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Minimalista</SelectItem>
                      <SelectItem value="newsletter">Com Newsletter</SelectItem>
                      <SelectItem value="sitemap">Sitemap Completo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

            </div>
          </ScrollArea>
        </aside>

        {/* Preview Area */}
        <main className="flex-1 bg-muted/10 overflow-auto relative h-full">
           {!sidebarOpen && (
             <Button
                variant="outline"
                size="icon"
                className="absolute top-4 left-4 z-50 bg-background/80 backdrop-blur"
                onClick={() => setSidebarOpen(true)}
             >
               <Maximize2 className="h-4 w-4" />
             </Button>
           )}

           <div className="bg-background shadow-sm min-h-screen">
             {renderHeader()}
             <HeroSection layout={config.hero} />
             <FeaturesSection layout={config.features} />
             {renderFooter()}
           </div>
        </main>
      </div>
    </div>
  )
}
