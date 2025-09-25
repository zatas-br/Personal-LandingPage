"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette } from "lucide-react"

const themes = [
  { value: "default", label: "Padrão (Minimalista)", class: "" },
  { value: "theme-blue", label: "Azul Profissional", class: "theme-blue" },
  { value: "theme-green", label: "Verde Natureza", class: "theme-green" },
  { value: "theme-purple", label: "Roxo Criativo", class: "theme-purple" },
  { value: "theme-orange", label: "Laranja Energético", class: "theme-orange" },
  { value: "theme-red", label: "Vermelho Dinâmico", class: "theme-red" },
  { value: "theme-pink", label: "Rosa Moderno", class: "theme-pink" },
  { value: "theme-teal", label: "Azul Turquesa", class: "theme-teal" },
  { value: "theme-indigo", label: "Índigo Elegante", class: "theme-indigo" },
  { value: "theme-yellow", label: "Amarelo Vibrante", class: "theme-yellow" },
  { value: "theme-dark", label: "Modo Escuro", class: "theme-dark" },
  { value: "theme-vibrant-red", label: "Vermelho Vibrante", class: "theme-vibrant-red" },
  { value: "theme-gradient", label: "Gradiente Futurista", class: "theme-gradient" },
]

export function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState("default")

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme)
    // Remove todas as classes de tema
    themes.forEach((t) => {
      if (t.class) document.documentElement.classList.remove(t.class)
    })
    // Adiciona a nova classe de tema
    if (theme && theme !== "default") {
      document.documentElement.classList.add(theme)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Palette className="h-4 w-4" />
      <Select value={selectedTheme} onValueChange={handleThemeChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Escolha um tema" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((theme) => (
            <SelectItem key={theme.value} value={theme.value}>
              {theme.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
