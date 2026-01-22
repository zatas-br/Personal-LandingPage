"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AuthForm } from "./auth-shared"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SimpleAuth() {
  const [isLogin, setIsLogin] = React.useState(true)

  return (
    <div className="flex flex-1 items-center justify-center bg-muted/40 p-4 min-h-full">
      <Card className="w-full max-w-md overflow-hidden">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isLogin ? "Bem-vindo de volta" : "Crie sua conta"}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? "Entre com suas credenciais para acessar."
              : "Preencha os dados abaixo para começar."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "register"}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AuthForm type={isLogin ? "login" : "register"} onSubmit={(e) => e.preventDefault()} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
            </span>
            <Button
              variant="link"
              className="ml-1 p-0 font-medium"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Cadastre-se" : "Entre aqui"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
