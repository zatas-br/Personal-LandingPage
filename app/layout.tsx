import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope", 
  display: "swap",
})

export const metadata: Metadata = {
  title: "Landing Page Personalizável",
  description: "Template profissional com configurações visuais completas.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}