"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AuthForm } from "./auth-shared"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function SplitAuth() {
  const [isLogin, setIsLogin] = React.useState(true)

  return (
    <div className="grid min-h-[600px] w-full grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Acme Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Este template economizou meses de trabalho. A qualidade do design e a facilidade de personalização são impressionantes.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {isLogin ? "Entrar na conta" : "Criar uma conta"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isLogin
                ? "Digite seu email abaixo para entrar na sua conta"
                : "Digite seu email abaixo para criar sua conta"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "register"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AuthForm type={isLogin ? "login" : "register"} onSubmit={(e) => e.preventDefault()} />
            </motion.div>
          </AnimatePresence>

          <div className="px-8 text-center text-sm text-muted-foreground">
             <Button
              variant="link"
              className="p-0 h-auto font-normal underline-offset-4 hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem conta? Entre aqui"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
