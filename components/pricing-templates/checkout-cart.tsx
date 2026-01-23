"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Wallet, Lock, Trash2 } from "lucide-react"
import { useSearchParams } from "next/navigation"

export function CheckoutCart() {
  const searchParams = useSearchParams()
  const planName = searchParams.get("plan") || "professional"

  const getPlanDetails = (name: string) => {
    switch (name) {
      case "starter": return { name: "Starter Plan", price: 297 };
      case "enterprise": return { name: "Enterprise Plan", price: 997 }; // Placeholder price
      default: return { name: "Professional Plan", price: 597 };
    }
  }

  const selectedPlan = getPlanDetails(planName)

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>

      <div className="grid lg:grid-cols-[1fr_400px] gap-12">
        {/* Left Column: Form */}
        <div className="space-y-8">

          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>Dados Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF/CNPJ</Label>
                <Input id="cpf" placeholder="000.000.000-00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="(11) 99999-9999" />
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Pagamento</CardTitle>
              <CardDescription>Todas as transações são seguras e criptografadas.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card" className="space-y-4">
                <div className="flex items-center space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-1 cursor-pointer flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Cartão de Crédito
                    </span>
                    <div className="flex gap-1">
                      {/* Brand icons placeholder */}
                      <div className="w-8 h-5 bg-muted rounded" />
                      <div className="w-8 h-5 bg-muted rounded" />
                      <div className="w-8 h-5 bg-muted rounded" />
                    </div>
                  </Label>
                </div>

                <div className="pl-8 grid gap-4">
                   <div className="space-y-2">
                     <Label>Número do Cartão</Label>
                     <Input placeholder="0000 0000 0000 0000" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <Label>Validade</Label>
                       <Input placeholder="MM/AA" />
                     </div>
                     <div className="space-y-2">
                       <Label>CVC</Label>
                       <Input placeholder="123" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <Label>Nome no Cartão</Label>
                     <Input placeholder="Como está impresso no cartão" />
                   </div>
                </div>

                <div className="flex items-center space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex-1 cursor-pointer flex items-center gap-2">
                    <Wallet className="h-4 w-4" />
                    PIX (Aprovação Imediata)
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Order Summary */}
        <div className="space-y-6">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold">{selectedPlan.name}</h4>
                  <p className="text-sm text-muted-foreground">Cobrança mensal</p>
                </div>
                <div className="font-semibold">R$ {selectedPlan.price},00</div>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>R$ {selectedPlan.price},00</span>
              </div>
              <div className="flex items-center justify-between text-sm text-green-600 font-medium">
                <span>Desconto</span>
                <span>R$ 0,00</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span>R$ {selectedPlan.price},00</span>
              </div>

              <div className="bg-muted/50 p-3 rounded-lg flex items-start gap-3 text-xs text-muted-foreground mt-4">
                <Lock className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <p>
                  Seus dados pessoais serão usados para processar seu pedido, melhorar sua experiência em todo o site e para outros propósitos descritos em nossa política de privacidade.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Confirmar Pagamento
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
