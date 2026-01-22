"use client"

import * as React from "react"
import { Heart, ShoppingBag, Star, Share2, Truck, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EcommerceProduct() {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const images = ["bg-muted", "bg-muted/80", "bg-muted/60", "bg-muted/40"]

  return (
    <div className="flex flex-col min-h-full bg-background">
      {/* Navbar Placeholder */}
      <div className="border-b h-16 flex items-center px-4 md:px-6 justify-between">
         <div className="font-bold text-xl">STORE</div>
         <div className="flex gap-4">
            <SearchIcon className="w-5 h-5 text-muted-foreground" />
            <ShoppingBag className="w-5 h-5 text-muted-foreground" />
         </div>
      </div>

      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Gallery */}
          <div className="space-y-4">
             <div className={`aspect-square w-full rounded-xl overflow-hidden ${images[selectedImage]} flex items-center justify-center text-muted-foreground`}>
                Produto Imagem Principal
             </div>
             <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                   <button
                    key={idx}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${selectedImage === idx ? 'border-primary' : 'border-transparent'} ${img}`}
                    onClick={() => setSelectedImage(idx)}
                   />
                ))}
             </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
             <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Lançamento</Badge>
                <h1 className="text-3xl md:text-4xl font-bold">Wireless Noise Cancelling Headphones</h1>
                <div className="flex items-center gap-4">
                   <div className="flex text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                   </div>
                   <span className="text-sm text-muted-foreground">(128 avaliações)</span>
                </div>
             </div>

             <div className="space-y-1">
                <div className="text-3xl font-bold">$349.00</div>
                <div className="text-sm text-muted-foreground">Em até 12x sem juros</div>
             </div>

             <Separator />

             <div className="space-y-4">
                <div className="space-y-2">
                   <span className="text-sm font-medium">Cor</span>
                   <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-black border-2 border-primary ring-2 ring-offset-2 ring-transparent" />
                      <button className="w-8 h-8 rounded-full bg-slate-300 border-2 border-transparent" />
                      <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-transparent" />
                   </div>
                </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="flex-1 text-lg h-12">Adicionar ao Carrinho</Button>
                <Button size="lg" variant="outline" className="h-12 w-12 p-0">
                   <Heart className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="ghost" className="h-12 w-12 p-0">
                   <Share2 className="w-5 h-5" />
                </Button>
             </div>

             <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                   <Truck className="w-4 h-4" /> Frete Grátis
                </div>
                <div className="flex items-center gap-2">
                   <ShieldCheck className="w-4 h-4" /> Garantia de 2 anos
                </div>
             </div>

             <Tabs defaultValue="desc" className="w-full pt-8">
                <TabsList className="w-full">
                   <TabsTrigger value="desc" className="flex-1">Descrição</TabsTrigger>
                   <TabsTrigger value="specs" className="flex-1">Especificações</TabsTrigger>
                </TabsList>
                <TabsContent value="desc" className="pt-4 text-muted-foreground leading-relaxed">
                   Experimente o silêncio com nossa tecnologia líder de cancelamento de ruído. Projetados para conforto durante todo o dia e qualidade de som excepcional, estes fones de ouvido transformam qualquer ambiente em seu santuário pessoal de áudio.
                </TabsContent>
                <TabsContent value="specs" className="pt-4">
                   <ul className="space-y-2 text-sm">
                      <li className="flex justify-between border-b pb-2"><span>Bateria</span> <span>30 horas</span></li>
                      <li className="flex justify-between border-b pb-2"><span>Peso</span> <span>250g</span></li>
                      <li className="flex justify-between border-b pb-2"><span>Conexão</span> <span>Bluetooth 5.2</span></li>
                   </ul>
                </TabsContent>
             </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24 space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Produtos Relacionados</h2>
              <Button variant="ghost" className="gap-2">Ver tudo <ArrowRight className="w-4 h-4" /></Button>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="group cursor-pointer space-y-3">
                    <div className="aspect-[4/5] bg-muted rounded-xl overflow-hidden relative">
                       <span className="absolute top-2 left-2 bg-background/90 text-xs px-2 py-1 rounded font-medium">New</span>
                    </div>
                    <div>
                       <h3 className="font-medium group-hover:underline">Studio Monitor {i}00</h3>
                       <p className="text-muted-foreground text-sm">$199.00</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/20">
         <div className="container px-4 md:px-6 text-center text-muted-foreground">
            Store Footer Content
         </div>
      </footer>
    </div>
  )
}

function SearchIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
