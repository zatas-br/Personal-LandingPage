"use client"

import { useState } from "react"
import {
  PanelLeft,
  Layout,
  Maximize2,
  Undo2,
  Palette,
  GripVertical,
  Edit,
  Code2,
  Download
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { Reorder } from "framer-motion"
import Link from "next/link"

// Helper Components
import { CodeViewer } from "@/components/code-viewer"
import { PreviewContainer } from "@/components/preview-container"

// Import Components
import { HeaderCentered } from "@/components/header-templates/header-centered"
import { HeaderMega } from "@/components/header-templates/header-mega"
import { HeaderSimple } from "@/components/header-templates/header-simple"

import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

import { FooterMinimal } from "@/components/footer-templates/footer-minimal"
import { FooterNewsletter } from "@/components/footer-templates/footer-newsletter"
import { FooterSitemap } from "@/components/footer-templates/footer-sitemap"

// Types
type SectionType = "header" | "hero" | "features" | "footer"

interface SectionData {
  id: string
  type: SectionType
  variant: string
  label: string
  content: any
}

// Default Content
const defaultContent = {
  header: {},
  hero: {
    badge: "Transforme seu negócio hoje mesmo",
    titlePrefix: "Soluções que ",
    titleHighlight: "Impulsionam",
    titleSuffix: " Resultados",
    description: "Descubra como nossa tecnologia inovadora pode revolucionar sua empresa e levar seus resultados para o próximo nível.",
    primaryCta: "Começar Agora",
    secondaryCta: "Ver Demonstração"
  },
  features: {
    title: "Recursos Completos",
    subtitle: "Tudo que você precisa para levar seu negócio ao próximo nível, em uma única plataforma"
  },
  footer: {
    companyName: "Acme Inc",
    copyrightText: "© 2024 Acme Inc. All rights reserved."
  }
}

export default function PageBuilder() {
  const [theme, setTheme] = useState("theme-blue")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // State for Sections (Order & Data)
  const [sections, setSections] = useState<SectionData[]>([
    { id: "header-1", type: "header", variant: "simple", label: "Cabeçalho", content: defaultContent.header },
    { id: "hero-1", type: "hero", variant: "layout1", label: "Hero (Início)", content: defaultContent.hero },
    { id: "features-1", type: "features", variant: "layout1", label: "Recursos", content: defaultContent.features },
    { id: "footer-1", type: "footer", variant: "minimal", label: "Rodapé", content: defaultContent.footer },
  ])

  // Dialog States
  const [editSectionId, setEditSectionId] = useState<string | null>(null)
  const [codeViewerData, setCodeViewerData] = useState<{ path: string, name: string, usage: string } | null>(null)
  const [exportOpen, setExportOpen] = useState(false)

  // Update Section Helper
  const updateSection = (id: string, updates: Partial<SectionData>) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s))
  }

  const updateSectionContent = (id: string, field: string, value: string) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, content: { ...s.content, [field]: value } } : s))
  }

  // Render Logic
  const renderSectionComponent = (section: SectionData) => {
    switch (section.type) {
      case "header":
        switch (section.variant) {
          case "centered": return <HeaderCentered />
          case "mega": return <HeaderMega />
          case "simple": default: return <HeaderSimple />
        }
      case "hero":
        return <HeroSection layout={section.variant} {...section.content} />
      case "features":
        return <FeaturesSection layout={section.variant} {...section.content} />
      case "footer":
        switch (section.variant) {
          case "newsletter": return <FooterNewsletter />
          case "sitemap": return <FooterSitemap />
          case "minimal": default: return <FooterMinimal {...section.content} />
        }
      default:
        return null
    }
  }

  // Code Viewer Logic
  const openCodeViewer = (section: SectionData) => {
    let path = ""
    let usage = ""

    switch (section.type) {
      case "header":
        path = `header-templates/header-${section.variant}`
        usage = `<Header${section.variant.charAt(0).toUpperCase() + section.variant.slice(1)} />`
        break
      case "hero":
        path = "hero-section"
        usage = `<HeroSection layout="${section.variant}" ${Object.entries(section.content).map(([k,v]) => `${k}="${v}"`).join(" ")} />`
        break
      case "features":
        path = "features-section"
        usage = `<FeaturesSection layout="${section.variant}" title="${section.content.title}" subtitle="${section.content.subtitle}" />`
        break
      case "footer":
        path = `footer-templates/footer-${section.variant}`
        usage = `<Footer${section.variant.charAt(0).toUpperCase() + section.variant.slice(1)} />`
        break
    }

    setCodeViewerData({
      name: section.label,
      path,
      usage
    })
  }

  // Export Logic
  const generateExportCode = () => {
    const imports = new Set<string>()
    const components = sections.map(s => {
      // Logic to determine import name and component usage
      let componentName = ""
      let props = ""

      if (s.type === "header") {
        componentName = `Header${s.variant.charAt(0).toUpperCase() + s.variant.slice(1)}`
        imports.add(`import { ${componentName} } from "@/components/header-templates/header-${s.variant}"`)
      } else if (s.type === "footer") {
        componentName = `Footer${s.variant.charAt(0).toUpperCase() + s.variant.slice(1)}`
        imports.add(`import { ${componentName} } from "@/components/footer-templates/footer-${s.variant}"`)
        if (s.variant === "minimal") {
             props = Object.entries(s.content).map(([k,v]) => `${k}="${v}"`).join(" ")
        }
      } else if (s.type === "hero") {
        componentName = "HeroSection"
        imports.add(`import { HeroSection } from "@/components/hero-section"`)
        props = `layout="${s.variant}" ` + Object.entries(s.content).map(([k,v]) => `${k}="${v}"`).join(" ")
      } else if (s.type === "features") {
        componentName = "FeaturesSection"
        imports.add(`import { FeaturesSection } from "@/components/features-section"`)
        props = `layout="${s.variant}" ` + Object.entries(s.content).map(([k,v]) => `${k}="${v}"`).join(" ")
      }

      return `<${componentName} ${props} />`
    })

    return `
"use client"

${Array.from(imports).join("\n")}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      ${components.join("\n      ")}
    </div>
  )
}
    `.trim()
  }

  const editingSection = sections.find(s => s.id === editSectionId)

  return (
    <div className={`h-screen flex flex-col overflow-hidden ${theme}`}>
      {/* Top Bar */}
      <header className="h-14 border-b bg-background flex items-center justify-between px-4 z-50 shrink-0">
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
               Sair
             </Link>
          </Button>
          <Button size="sm" onClick={() => setExportOpen(true)}>
             <Download className="mr-2 h-4 w-4" />
             Exportar
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Controls */}
        <aside
          className={`
            bg-muted/30 border-r transition-all duration-300 ease-in-out flex flex-col h-full
            ${sidebarOpen ? "w-80 translate-x-0" : "w-0 -translate-x-full opacity-0 overflow-hidden"}
          `}
        >
          <div className="p-4 border-b">
            <div className="flex items-center gap-2 pb-2 mb-2">
               <Palette className="h-4 w-4 text-primary" />
               <h3 className="font-medium">Tema</h3>
            </div>
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
                <SelectItem value="theme-dark">Modo Escuro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4 space-y-4">
              <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-2">Seções</h3>

              <Reorder.Group axis="y" values={sections} onReorder={setSections} className="space-y-3">
                {sections.map((section) => (
                  <Reorder.Item key={section.id} value={section} className="bg-background border rounded-md p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 font-medium cursor-grab active:cursor-grabbing">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        {section.label}
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openCodeViewer(section)} title="Ver Código">
                          <Code2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditSectionId(section.id)} title="Editar Conteúdo">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                       <Label className="text-xs text-muted-foreground">Variante</Label>
                       <Select
                          value={section.variant}
                          onValueChange={(v) => updateSection(section.id, { variant: v })}
                       >
                         <SelectTrigger className="h-8 text-xs">
                           <SelectValue />
                         </SelectTrigger>
                         <SelectContent>
                           {section.type === "header" && (
                             <>
                               <SelectItem value="simple">Simples</SelectItem>
                               <SelectItem value="centered">Centralizado</SelectItem>
                               <SelectItem value="mega">Mega Menu</SelectItem>
                             </>
                           )}
                           {section.type === "hero" && (
                             <>
                               <SelectItem value="layout1">Centralizado</SelectItem>
                               <SelectItem value="layout2">Split</SelectItem>
                             </>
                           )}
                           {section.type === "features" && (
                             <>
                               <SelectItem value="layout1">Grid</SelectItem>
                               <SelectItem value="layout2">Lista</SelectItem>
                             </>
                           )}
                           {section.type === "footer" && (
                             <>
                               <SelectItem value="minimal">Minimalista</SelectItem>
                               <SelectItem value="newsletter">Newsletter</SelectItem>
                               <SelectItem value="sitemap">Sitemap</SelectItem>
                             </>
                           )}
                         </SelectContent>
                       </Select>
                    </div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>

            </div>
          </ScrollArea>
        </aside>

        {/* Preview Area */}
        <main className="flex-1 bg-muted/10 overflow-hidden relative h-full">
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

           <PreviewContainer>
             <div className="bg-background min-h-full">
                {sections.map(section => (
                  <div key={section.id}>
                    {renderSectionComponent(section)}
                  </div>
                ))}
             </div>
           </PreviewContainer>
        </main>
      </div>

      {/* Edit Content Dialog */}
      <Dialog open={!!editSectionId} onOpenChange={(o) => !o && setEditSectionId(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Editar {editingSection?.label}</DialogTitle>
            <DialogDescription>
              Personalize o texto e conteúdo desta seção.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
             <div className="space-y-4 py-4">
               {editingSection?.type === "hero" && (
                 <>
                   <div className="space-y-2">
                     <Label>Badge</Label>
                     <Input
                        value={editingSection.content.badge || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "badge", e.target.value)}
                     />
                   </div>
                   <div className="space-y-2">
                     <Label>Título (Prefixo)</Label>
                     <Input
                        value={editingSection.content.titlePrefix || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "titlePrefix", e.target.value)}
                     />
                   </div>
                   <div className="space-y-2">
                     <Label>Título (Destaque)</Label>
                     <Input
                        value={editingSection.content.titleHighlight || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "titleHighlight", e.target.value)}
                     />
                   </div>
                   <div className="space-y-2">
                     <Label>Título (Sufixo)</Label>
                     <Input
                        value={editingSection.content.titleSuffix || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "titleSuffix", e.target.value)}
                     />
                   </div>
                   <div className="space-y-2">
                     <Label>Descrição</Label>
                     <Textarea
                        value={editingSection.content.description || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "description", e.target.value)}
                     />
                   </div>
                   <div className="space-y-2">
                     <Label>Botão Principal</Label>
                     <Input
                        value={editingSection.content.primaryCta || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "primaryCta", e.target.value)}
                     />
                   </div>
                   <div className="space-y-2">
                     <Label>Botão Secundário</Label>
                     <Input
                        value={editingSection.content.secondaryCta || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "secondaryCta", e.target.value)}
                     />
                   </div>
                 </>
               )}

               {editingSection?.type === "features" && (
                 <>
                   <div className="space-y-2">
                     <Label>Título</Label>
                     <Input
                        value={editingSection.content.title || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "title", e.target.value)}
                     />
                   </div>
                   <div className="space-y-2">
                     <Label>Subtítulo</Label>
                     <Textarea
                        value={editingSection.content.subtitle || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "subtitle", e.target.value)}
                     />
                   </div>
                   <p className="text-xs text-muted-foreground italic mt-4">
                     Nota: A edição dos itens individuais de recursos será adicionada em breve.
                   </p>
                 </>
               )}

               {editingSection?.type === "footer" && editingSection?.variant === "minimal" && (
                 <>
                   <div className="space-y-2">
                     <Label>Texto Copyright</Label>
                     <Input
                        value={editingSection.content.copyrightText || ""}
                        onChange={(e) => updateSectionContent(editingSection.id, "copyrightText", e.target.value)}
                     />
                   </div>
                 </>
               )}

               {(editingSection?.type === "header" || (editingSection?.type === "footer" && editingSection?.variant !== "minimal")) && (
                 <div className="text-center py-8 text-muted-foreground">
                   Esta seção não possui opções de texto personalizáveis no momento.
                 </div>
               )}
             </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Code Viewer Modal */}
      {codeViewerData && (
        <CodeViewer
          isOpen={!!codeViewerData}
          onClose={() => setCodeViewerData(null)}
          componentName={codeViewerData.name}
          componentPath={codeViewerData.path}
          usageCode={codeViewerData.usage}
        />
      )}

      {/* Export Dialog */}
      <Dialog open={exportOpen} onOpenChange={setExportOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Exportar Página</DialogTitle>
            <DialogDescription>
              Copie o código abaixo para criar sua página em <code>app/page.tsx</code>.
            </DialogDescription>
          </DialogHeader>
          <div className="relative mt-4 border rounded-md bg-muted/50 p-4 font-mono text-xs overflow-auto max-h-[500px]">
             <pre>{generateExportCode()}</pre>
             <Button
               size="sm"
               className="absolute top-2 right-2"
               onClick={() => {
                 navigator.clipboard.writeText(generateExportCode())
               }}
             >
               Copiar
             </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
