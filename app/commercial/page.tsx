"use client"

import * as React from "react"
import { ArrowLeft, Layout, Menu, Palette } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { SaasLanding } from "@/components/commercial-templates/saas-landing"
import { EcommerceProduct } from "@/components/commercial-templates/ecommerce-product"
import { AgencyPortfolio } from "@/components/commercial-templates/agency-portfolio"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function CommercialPage() {
  const [activeTemplate, setActiveTemplate] = React.useState("saas")
  const [activeColor, setActiveColor] = React.useState("blue")

  const colorClasses = {
    blue: "theme-blue",
    green: "theme-green",
    purple: "theme-purple",
    orange: "theme-orange",
    red: "theme-red",
  }

  // Mobile Control Panel
  const Controls = ({ mobile = false }) => (
    <div className={`flex ${mobile ? "flex-col gap-4" : "flex-row items-center gap-2"}`}>
      <div className={`flex items-center gap-2 ${mobile ? "w-full" : ""}`}>
        <Palette className="h-4 w-4 text-muted-foreground" />
        <Select value={activeColor} onValueChange={setActiveColor}>
          <SelectTrigger className={mobile ? "w-full" : "w-[140px]"}>
            <SelectValue placeholder="Tema" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="blue">Azul Profissional</SelectItem>
            <SelectItem value="green">Verde Natureza</SelectItem>
            <SelectItem value="purple">Roxo Criativo</SelectItem>
            <SelectItem value="orange">Laranja</SelectItem>
            <SelectItem value="red">Vermelho</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {!mobile && <Separator orientation="vertical" className="h-6" />}

      <div className={`flex items-center gap-2 ${mobile ? "w-full" : ""}`}>
        <Layout className="h-4 w-4 text-muted-foreground" />
        <Select value={activeTemplate} onValueChange={setActiveTemplate}>
          <SelectTrigger className={mobile ? "w-full" : "w-[180px]"}>
            <SelectValue placeholder="Template" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="saas">SaaS Landing</SelectItem>
            <SelectItem value="ecommerce">E-commerce</SelectItem>
            <SelectItem value="agency">Agência / Portfolio</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  return (
    <TooltipProvider>
      <div className={`min-h-screen bg-background flex flex-col ${colorClasses[activeColor as keyof typeof colorClasses] || ""}`}>
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Voltar</span>
                </Link>
              </Button>
              <h1 className="text-lg font-semibold truncate hidden md:block">Páginas Comerciais</h1>
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center justify-end">
              <Controls />
            </div>

            {/* Mobile Controls Trigger */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Configurações</SheetTitle>
                    <SheetDescription>
                      Personalize o layout da página.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <Controls mobile />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTemplate === "saas" && <SaasLanding />}
          {activeTemplate === "ecommerce" && <EcommerceProduct />}
          {activeTemplate === "agency" && <AgencyPortfolio />}
        </div>
      </div>
    </TooltipProvider>
  )
}
