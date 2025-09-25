"use client"

import { useEffect } from "react"
import { SettingsProvider, useSettings } from "@/hooks/use-settings"

// Lista de temas para remover classes antigas
const themes = [
  "theme-blue",
  "theme-green",
  "theme-purple",
  "theme-orange",
  "theme-red",
  "theme-pink",
  "theme-teal",
  "theme-indigo",
  "theme-yellow",
  "theme-dark",
  "theme-vibrant-red",
  "theme-gradient",
]

function StyleManager({ children }: { children: React.ReactNode }) {
  const { settings } = useSettings()
  const { theme, typography, spacing, componentStyle } = settings

  // Efeito para gerenciar o tema de cores
  useEffect(() => {
    themes.forEach((themeClass) => document.documentElement.classList.remove(themeClass))
    if (theme && theme !== "default") {
      document.documentElement.classList.add(theme)
    }
  }, [theme])

  // Efeito para gerenciar a tipografia
  useEffect(() => {
    const { fontFamily, fontSizeScale, lineHeight, fontWeight } = typography

    // Aplicar variáveis CSS no elemento raiz
    const root = document.documentElement
    root.style.setProperty("--font-family", fontFamily)
    root.style.setProperty("--font-size-scale", fontSizeScale.toString())
    root.style.setProperty("--line-height", lineHeight.toString())
    root.style.setProperty("--font-weight", fontWeight.toString())

    // Carregar a fonte do Google Fonts, se não for a padrão
    if (fontFamily !== "Geist Sans") {
      const linkId = "google-font-stylesheet"
      let link = document.getElementById(linkId) as HTMLLinkElement
      if (!link) {
        link = document.createElement("link")
        link.id = linkId
        link.rel = "stylesheet"
        document.head.appendChild(link)
      }
      // Carrega uma gama de pesos para permitir a troca dinâmica
      link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}:wght@300;400;500;600;700&display=swap`
    }
  }, [typography])

  // Efeito para gerenciar os espaçamentos
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--section-padding-y", `${spacing.sectionPadding}rem`)
    root.style.setProperty("--item-gap", `${spacing.itemGap}rem`)
  }, [spacing])

  // Efeito para gerenciar o estilo dos componentes
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty("--radius", `${componentStyle.borderRadius}rem`)
  }, [componentStyle])

  return <>{children}</>
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <StyleManager>{children}</StyleManager>
    </SettingsProvider>
  )
}