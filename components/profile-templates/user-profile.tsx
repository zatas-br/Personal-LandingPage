"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, User, Lock, Settings, Bell, Shield, LogOut } from "lucide-react"
import Link from "next/link"

export function UserProfile() {
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-bold">Minha Conta</h2>
              <p className="text-xs text-muted-foreground">Gerencie suas informações</p>
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
             {/* Note: In a real app these might be links, but for this template we use Tabs on the right side.
                 To make it responsive and unified, we'll wrap everything in a big Tabs component.
                 However, keeping the navigation visual style is important.
             */}
             <div className="hidden md:block">
               {/* This sidebar is visual only in this structure as Tabs control the content */}
             </div>
          </nav>
        </aside>

        {/* Main Content Area with Tabs */}
        <div className="flex-1">
          <Tabs defaultValue="general" className="space-y-6">
            <div className="flex items-center justify-between overflow-x-auto pb-2 md:pb-0">
              <TabsList>
                <TabsTrigger value="general" className="gap-2">
                  <User className="h-4 w-4" /> Geral
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-2">
                  <Lock className="h-4 w-4" /> Segurança
                </TabsTrigger>
                <TabsTrigger value="preferences" className="gap-2">
                  <Settings className="h-4 w-4" /> Preferências
                </TabsTrigger>
              </TabsList>

              <Button variant="destructive" size="sm" className="hidden md:flex gap-2">
                <LogOut className="h-4 w-4" /> Sair
              </Button>
            </div>

            {/* General Tab */}
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>Atualize sua foto e dados pessoais.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Photo Upload */}
                  <div className="flex items-center gap-6">
                    <div className="relative group cursor-pointer">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Foto de Perfil</h4>
                      <p className="text-sm text-muted-foreground">
                        JPG, GIF ou PNG. Máximo de 2MB.
                      </p>
                      <div className="flex gap-2 mt-2">
                         <Button variant="outline" size="sm">Alterar Foto</Button>
                         <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Remover</Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Form */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" defaultValue="Carlos Nogueira" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="carlos@exemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" defaultValue="+55 (11) 99999-9999" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Cargo</Label>
                      <Input id="role" defaultValue="Desenvolvedor Full Stack" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" defaultValue="Apaixonado por tecnologia e design." />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t pt-6">
                  <Button variant="ghost">Cancelar</Button>
                  <Button onClick={handleSave} disabled={loading}>
                    {loading ? "Salvando..." : "Salvar Alterações"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Segurança da Conta</CardTitle>
                  <CardDescription>Gerencie sua senha e métodos de autenticação.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Alterar Senha</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Senha Atual</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">Nova Senha</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      Autenticação de Dois Fatores (2FA)
                    </h3>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <Label className="text-base">Autenticador App</Label>
                        <p className="text-sm text-muted-foreground">
                          Use apps como Google Authenticator ou Authy.
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t pt-6">
                  <Button variant="ghost">Cancelar</Button>
                  <Button>Atualizar Senha</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Preferências do Sistema</CardTitle>
                  <CardDescription>Personalize sua experiência.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      Notificações
                    </h3>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-notif">Emails de Marketing</Label>
                        <Switch id="email-notif" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="security-notif">Alertas de Segurança</Label>
                        <Switch id="security-notif" defaultChecked disabled />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="push-notif">Notificações Push</Label>
                        <Switch id="push-notif" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Geral
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Idioma</Label>
                        <Select defaultValue="pt-br">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Español</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Fuso Horário</Label>
                        <Select defaultValue="sao-paulo">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sao-paulo">São Paulo (GMT-3)</SelectItem>
                            <SelectItem value="ny">New York (GMT-5)</SelectItem>
                            <SelectItem value="london">London (GMT+0)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t pt-6">
                  <Button variant="ghost">Restaurar Padrão</Button>
                  <Button>Salvar Preferências</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
