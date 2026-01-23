"use client"

import { useState } from "react"
import { DetailedPricing } from "@/components/pricing-templates/detailed-pricing"
import { PricingCards } from "@/components/pricing-templates/pricing-cards"
import { PricingComparison } from "@/components/pricing-templates/pricing-comparison"
import { CheckoutMultistep } from "@/components/pricing-templates/checkout-multistep"
import { Button } from "@/components/ui/button"
import { CreditCard, List, ShoppingCart, Table } from "lucide-react"

export default function PricingPage() {
  const [layout, setLayout] = useState<"detailed" | "cards" | "comparison" | "checkout">("detailed")

  return (
    <div className="min-h-screen flex flex-col">
       {/* Layout Switcher (Temporary for demo purposes) */}
       <div className="bg-muted border-b py-3 px-4 sticky top-0 z-40 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground hidden sm:inline">Alterar Layout:</span>
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          <Button
            variant={layout === "detailed" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("detailed")}
            className="gap-2"
          >
            <List className="h-4 w-4" /> Detailed
          </Button>
          <Button
            variant={layout === "cards" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("cards")}
            className="gap-2"
          >
            <CreditCard className="h-4 w-4" /> Cards
          </Button>
          <Button
            variant={layout === "comparison" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("comparison")}
            className="gap-2"
          >
            <Table className="h-4 w-4" /> Table
          </Button>
          <Button
            variant={layout === "checkout" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("checkout")}
            className="gap-2"
          >
            <ShoppingCart className="h-4 w-4" /> Checkout Flow
          </Button>
        </div>
      </div>

      <div className="flex-1">
        {layout === "detailed" && <DetailedPricing />}
        {layout === "cards" && <PricingCards />}
        {layout === "comparison" && <PricingComparison />}
        {layout === "checkout" && <CheckoutMultistep />}
      </div>
    </div>
  )
}
