"use client"

import Link from "next/link"
import { Calendar, User, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

// Mock Data
const posts = [
  {
    id: 1,
    slug: "tendencias-design-2024",
    title: "As 10 Tendências de Design para 2024",
    excerpt: "Descubra o que vai dominar o mundo do design digital no próximo ano.",
    author: "Ana Silva",
    date: "15 Jan, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=60",
    height: "h-96"
  },
  {
    id: 2,
    slug: "guia-react-server-components",
    title: "Guia React Server Components",
    excerpt: "Tudo sobre a nova arquitetura do React.",
    author: "Carlos Oliveira",
    date: "12 Jan, 2024",
    category: "Dev",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60",
    height: "h-64"
  },
  {
    id: 3,
    slug: "marketing-digital",
    title: "Marketing para Startups",
    excerpt: "Growth hacking com baixo custo.",
    author: "Mariana Costa",
    date: "10 Jan, 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
    height: "h-80"
  },
  {
    id: 4,
    slug: "ia-generativa",
    title: "Futuro da IA Generativa",
    excerpt: "Transformando a produtividade nos negócios.",
    author: "Pedro Santos",
    date: "08 Jan, 2024",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=60",
    height: "h-72"
  },
  {
    id: 5,
    slug: "ux-writing",
    title: "UX Writing",
    excerpt: "A arte de escrever para interfaces.",
    author: "Ana Silva",
    date: "05 Jan, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=60",
    height: "h-64"
  },
  {
    id: 6,
    slug: "typescript-tips",
    title: "Dicas de TypeScript",
    excerpt: "Melhore seu código hoje.",
    author: "Carlos O.",
    date: "03 Jan, 2024",
    category: "Dev",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&auto=format&fit=crop&q=60",
    height: "h-80"
  },
]

export function BlogMasonry() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="break-inside-avoid group overflow-hidden hover:shadow-lg transition-shadow bg-card border-none ring-1 ring-border">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-background/80 hover:bg-background text-foreground backdrop-blur">{post.category}</Badge>
              </div>
            </div>
            <div className="p-5">
              <div className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                {post.date}
              </div>
              <h3 className="font-bold text-xl mb-2 leading-tight group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-2 text-xs font-medium">
                   <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">
                      {post.author.charAt(0)}
                   </div>
                   {post.author}
                </div>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:translate-x-1 transition-transform">
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
