"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, MapPin, Link as LinkIcon, Calendar } from "lucide-react"

export function ProfileCover() {
  return (
    <div className="min-h-screen bg-muted/20 pb-12">
      {/* Cover Image */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-blue-600 to-purple-600 relative">
        <Button variant="secondary" size="sm" className="absolute bottom-4 right-4 opacity-80 hover:opacity-100">
          <Camera className="mr-2 h-4 w-4" /> Editar Capa
        </Button>
      </div>

      <div className="container mx-auto px-4">
        {/* Profile Header Info */}
        <div className="relative -mt-20 mb-8 flex flex-col md:flex-row items-end md:items-end gap-6 pb-6 border-b">
          <div className="relative">
             <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-background overflow-hidden bg-background">
               <Avatar className="h-full w-full">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
             </div>
             <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground rounded-full p-1.5 border-2 border-background cursor-pointer hover:bg-primary/90">
               <Camera className="h-4 w-4" />
             </div>
          </div>

          <div className="flex-1 space-y-2 text-center md:text-left mb-2">
            <h1 className="text-3xl font-bold">Carlos Nogueira</h1>
            <p className="text-muted-foreground">Senior Software Engineer @ Acme Inc.</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground pt-1">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> São Paulo, BR</span>
              <span className="flex items-center gap-1"><LinkIcon className="h-4 w-4" /> carlos.dev</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Entered March 2021</span>
            </div>
          </div>

          <div className="flex gap-3 mb-4 md:mb-2 w-full md:w-auto">
             <Button className="flex-1 md:flex-none">Seguir</Button>
             <Button variant="outline" className="flex-1 md:flex-none">Mensagem</Button>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="posts" className="max-w-4xl mx-auto">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
            <TabsTrigger value="posts" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Publicações</TabsTrigger>
            <TabsTrigger value="about" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Sobre</TabsTrigger>
            <TabsTrigger value="media" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Mídia</TabsTrigger>
            <TabsTrigger value="likes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3">Curtidas</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="py-6 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 flex-1">
                     <div className="bg-muted p-4 rounded-lg">
                       <p className="text-sm text-muted-foreground">No que você está pensando, Carlos?</p>
                     </div>
                     <div className="flex justify-end">
                       <Button size="sm">Publicar</Button>
                     </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mock Posts */}
            {[1, 2].map(i => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                     <Avatar>
                       <AvatarImage src="https://github.com/shadcn.png" />
                       <AvatarFallback>CN</AvatarFallback>
                     </Avatar>
                     <div>
                       <p className="font-semibold text-sm">Carlos Nogueira</p>
                       <p className="text-xs text-muted-foreground">2 horas atrás</p>
                     </div>
                  </div>
                  <p>
                    Acabei de lançar um novo projeto open source! Confiram no meu GitHub. 🚀 #react #opensource
                  </p>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                    Imagem do Projeto
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="about" className="py-6">
             <Card>
               <CardContent className="p-6 space-y-4">
                 <h3 className="font-bold text-lg">Sobre Mim</h3>
                 <p className="text-muted-foreground">
                   Desenvolvedor apaixonado por criar experiências digitais incríveis. Especialista em React, Next.js e Tailwind CSS.
                 </p>

                 <div className="grid sm:grid-cols-2 gap-4 pt-4">
                   <div>
                     <Label className="text-muted-foreground">Cargo Atual</Label>
                     <p>Senior Software Engineer</p>
                   </div>
                   <div>
                     <Label className="text-muted-foreground">Empresa</Label>
                     <p>Acme Inc.</p>
                   </div>
                   <div>
                     <Label className="text-muted-foreground">Educação</Label>
                     <p>Ciência da Computação, USP</p>
                   </div>
                 </div>
               </CardContent>
             </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
