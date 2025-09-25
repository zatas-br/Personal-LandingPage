"use client"

import { useSettings } from "@/hooks/use-settings"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette } from "lucide-react"

// A lista de temas agora só precisa de value e label. A classe CSS é gerenciada centralmente.
const themes = [
  { value: "default", label: "Padrão (Minimalista)" },
  { value: "theme-blue", label: "Azul Profissional" },
  { value: "theme-green", label: "Verde Natureza" },
  { value: "theme-purple", label: "Roxo Criativo" },
  { value: "theme-orange", label: "Laranja Energético" },
  { value: "theme-red", label: "Vermelho Dinâmico" },
  { value: "theme-pink", label: "Rosa Moderno" },
  { value: "theme-teal", label: "Azul Turquesa" },
  { value: "theme-indigo", label: "Índigo Elegante" },
  { value: "theme-yellow", label: "Amarelo Vibrante" },
  { value: "theme-dark", label: "Modo Escuro" },
  { value: "theme-vibrant-red", label: "Vermelho Vibrante" },
  { value: "theme-gradient", label: "Gradiente Futurista" },
]

export function ThemeSelector() {
  // Usa o contexto global em vez do estado local
  const { settings, setTheme } = useSettings()

  return (
    <div className="flex items-center gap-2">
      <Palette className="h-4 w-4" />
      <Select value={settings.theme} onValueChange={setTheme}>
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