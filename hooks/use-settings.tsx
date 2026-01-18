"use client"

import * as React from "react"

export type Theme = "dark" | "light"

export interface SectionConfig {
  id: string
  enabled: boolean
  label?: string
}

export interface WhatsappConfig {
  enabled: boolean
  number: string
}

export interface Settings {
  // Estilo Visual
  theme: Theme
  radius: number
  fontFamily: string
  baseFontSize: number
  containerWidth: number
  sectionSpacing: number
  
  // Estrutura da Página
  sections: SectionConfig[]
  whatsapp: WhatsappConfig
}

interface SettingsContextType {
  settings: Settings
  updateSettings: (newSettings: Partial<Settings>) => void
  toggleSection: (id: string) => void // Função auxiliar específica
  resetSettings: () => void
}

const defaultSections: SectionConfig[] = [
  { id: "hero", enabled: true, label: "Hero (Início)" },
  { id: "about", enabled: true, label: "Sobre" },
  { id: "technology", enabled: true, label: "Tecnologias" },
  { id: "app", enabled: true, label: "App Showcase" },
  { id: "partners", enabled: true, label: "Parceiros" },
  { id: "how-it-works", enabled: true, label: "Como Funciona" },
  { id: "features", enabled: true, label: "Recursos" },
  { id: "results", enabled: true, label: "Resultados" },
  { id: "testimonials", enabled: true, label: "Depoimentos" },
  { id: "pricing", enabled: true, label: "Preços" },
  { id: "guarantee", enabled: true, label: "Garantia" },
  { id: "faq", enabled: true, label: "FAQ" },
  { id: "newsletter", enabled: true, label: "Newsletter" },
  { id: "contact", enabled: true, label: "Contato" },
]

const defaultSettings: Settings = {
  theme: "light",
  radius: 0.5,
  fontFamily: "inter",
  baseFontSize: 16,
  containerWidth: 1200,
  sectionSpacing: 4,
  sections: defaultSections,
  whatsapp: {
    enabled: false,
    number: "",
  },
}

const SettingsContext = React.createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = React.useState<Settings>(defaultSettings)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("landing-page-settings")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Mescla para garantir que novos campos no código não quebrem configurações antigas
        setSettings((prev) => ({
          ...prev,
          ...parsed,
          sections: parsed.sections || prev.sections, // Garante que sections exista
        }))
      } catch (e) {
        console.error("Erro ao carregar configurações", e)
      }
    }
  }, [])

  React.useEffect(() => {
    if (mounted) {
      localStorage.setItem("landing-page-settings", JSON.stringify(settings))
      
      // Aplica tema
      if (settings.theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      
      // Aplica variáveis CSS
      document.documentElement.style.setProperty("--radius", `${settings.radius}rem`)
    }
  }, [settings, mounted])

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }))
  }

  const toggleSection = (id: string) => {
    setSettings((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => 
        s.id === id ? { ...s, enabled: !s.enabled } : s
      )
    }))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, toggleSection, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = React.useContext(SettingsContext)
  if (!context) {
    throw new Error("useSettings deve ser usado dentro de um SettingsProvider")
  }
  return context
}