"use client"

import React, { useEffect } from "react"
import { useSettings } from "@/hooks/use-settings"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"

export function AppProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useSettings()

  useEffect(() => {
    if (!settings) return

    const root = document.documentElement

    // 1. Aplica Fonte
    if (settings.fontFamily === "manrope") {
      root.style.setProperty("--font-sans", "'Manrope', sans-serif")
    } else if (settings.fontFamily === "system") {
      root.style.setProperty("--font-sans", "system-ui, -apple-system, sans-serif")
    } else {
      root.style.setProperty("--font-sans", "'Inter', sans-serif")
    }

    // 2. Aplica Tamanho Base (Escala)
    const percentage = (settings.baseFontSize / 16) * 100
    root.style.fontSize = `${percentage}%`

    // 3. Aplica Variáveis de Layout
    root.style.setProperty("--container-width", `${settings.containerWidth}px`)
    root.style.setProperty("--section-spacing", `${settings.sectionSpacing}rem`)
    
    // 4. Aplica Radius
    root.style.setProperty("--radius", `${settings.radius}rem`)

  }, [settings])

  return (
    <TooltipProvider>
      {children}
      <Toaster />
      <Sonner />
    </TooltipProvider>
  )
}