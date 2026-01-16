"use client"

import { useSettings } from "@/hooks/use-settings"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsapp() {
  const { settings } = useSettings()
  const { enabled, number } = settings.whatsapp || {}

  // Se não estiver habilitado ou não tiver número, não renderiza
  if (!enabled || !number) return null

  // Remove caracteres não numéricos
  const cleanNumber = number.replace(/\D/g, "")
  const whatsappUrl = `https://wa.me/${cleanNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl active:scale-95 animate-in zoom-in duration-300"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Ícone similar ao do WhatsApp usando Lucide */}
      <MessageCircle className="h-8 w-8 fill-current" />
    </a>
  )
}
