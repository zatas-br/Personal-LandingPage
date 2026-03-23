import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Personal Deusmar",
  description: "Abdomem Definido: 30 dias para resultados reais",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/img/logo-claro.png',
        href: '/img/logo-claro.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/img/logo-escuro.png',
        href: '/img/logo-escuro.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
