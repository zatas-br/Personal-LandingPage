"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

// 1. Definir a estrutura das configurações
interface SectionConfig {
  id: string
  enabled: boolean
  layout?: "layout1" | "layout2"
}

// 1. Definir a estrutura das configurações (expandida)
interface TypographyConfig {
  fontFamily: string
  fontSizeScale: number
  lineHeight: number
  fontWeight: number
}

interface SpacingConfig {
  sectionPadding: number // em rem
  itemGap: number // em rem
}

interface ComponentStyleConfig {
  borderRadius: number // em rem
}

interface WhatsappConfig {
  enabled: boolean
  number: string
}

interface SettingsState {
  theme: string
  sections: SectionConfig[]
  typography: TypographyConfig
  spacing: SpacingConfig
  componentStyle: ComponentStyleConfig
  whatsapp: WhatsappConfig
}

// 2. Definir a estrutura do contexto (expandida)
interface SettingsContextType {
  settings: SettingsState
  setTheme: (theme: string) => void
  toggleSection: (sectionId: string) => void
  setSectionLayout: (sectionId: string, layout: "layout1" | "layout2") => void
  setTypography: (typography: Partial<TypographyConfig>) => void
  setSpacing: (spacing: Partial<SpacingConfig>) => void
  setComponentStyle: (style: Partial<ComponentStyleConfig>) => void
  setWhatsapp: (whatsapp: Partial<WhatsappConfig>) => void
}

// 3. Valores iniciais (padrão)
const initialSections: SectionConfig[] = [
  { id: "hero", enabled: true, layout: "layout1" },
  { id: "about", enabled: true, layout: "layout1" },
  { id: "technology", enabled: true, layout: "layout1" },
  { id: "app", enabled: true, layout: "layout1" },
  { id: "partners", enabled: true, layout: "layout1" },
  { id: "how-it-works", enabled: true, layout: "layout1" },
  { id: "features", enabled: true, layout: "layout1" },
  { id: "results", enabled: true, layout: "layout1" },
  { id: "testimonials", enabled: true, layout: "layout1" },
  { id: "pricing", enabled: true, layout: "layout1" },
  { id: "guarantee", enabled: true, layout: "layout1" },
  { id: "faq", enabled: true, layout: "layout1" },
  { id: "newsletter", enabled: true, layout: "layout1" },
  { id: "contact", enabled: true, layout: "layout1" },
]

const initialState: SettingsState = {
  theme: "default",
  sections: initialSections,
  typography: {
    fontFamily: "Geist Sans", // Padrão do template
    fontSizeScale: 1.0, // 100%
    lineHeight: 1.5,
    fontWeight: 400, // Normal
  },
  spacing: {
    sectionPadding: 8, // 8rem (py-32)
    itemGap: 2, // 2rem (gap-8)
  },
  componentStyle: {
    borderRadius: 0.625, // rem
  },
  whatsapp: {
    enabled: false,
    number: "",
  },
}

// 4. Criar o Contexto
const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

// 5. Criar o Provedor (Provider)
export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SettingsState>(initialState)
  const [isInitialized, setIsInitialized] = useState(false)

  // Efeito para carregar as configurações do localStorage na inicialização
  useEffect(() => {
    try {
      const storedSettings = localStorage.getItem("landing-page-settings")
      if (storedSettings) {
        const parsedSettings = JSON.parse(storedSettings)
        // Mescla as seções salvas com as seções padrão para evitar quebras se novas seções forem adicionadas
        const mergedSections = initialSections.map((defaultSection) => {
          const storedSection = parsedSettings.sections?.find((s: SectionConfig) => s.id === defaultSection.id)
          return storedSection ? storedSection : defaultSection
        })
        setSettings({ ...parsedSettings, sections: mergedSections })
      }
    } catch (error) {
      console.error("Failed to load settings from localStorage", error)
    }
    setIsInitialized(true)
  }, [])

  // Efeito para salvar as configurações no localStorage sempre que mudarem
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("landing-page-settings", JSON.stringify(settings))
      } catch (error) {
        console.error("Failed to save settings to localStorage", error)
      }
    }
  }, [settings, isInitialized])

  const setTheme = (theme: string) => {
    setSettings((prev) => ({ ...prev, theme }))
  }

  const toggleSection = (sectionId: string) => {
    setSettings((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId ? { ...section, enabled: !section.enabled } : section,
      ),
    }))
  }

  const setSectionLayout = (sectionId: string, layout: "layout1" | "layout2") => {
    setSettings((prev) => ({
      ...prev,
      sections: prev.sections.map((section) => (section.id === sectionId ? { ...section, layout } : section)),
    }))
  }

  const setTypography = (typography: Partial<TypographyConfig>) => {
    setSettings((prev) => ({
      ...prev,
      typography: { ...prev.typography, ...typography },
    }))
  }

  const setSpacing = (spacing: Partial<SpacingConfig>) => {
    setSettings((prev) => ({
      ...prev,
      spacing: { ...prev.spacing, ...spacing },
    }))
  }

  const setComponentStyle = (style: Partial<ComponentStyleConfig>) => {
    setSettings((prev) => ({
      ...prev,
      componentStyle: { ...prev.componentStyle, ...style },
    }))
  }

  const setWhatsapp = (whatsapp: Partial<WhatsappConfig>) => {
    setSettings((prev) => ({
      ...prev,
      whatsapp: { ...prev.whatsapp, ...whatsapp },
    }))
  }

  const value = {
    settings,
    setTheme,
    toggleSection,
    setSectionLayout,
    setTypography,
    setSpacing,
    setComponentStyle,
    setWhatsapp,
  }

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

// 6. Criar o Hook customizado
export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}