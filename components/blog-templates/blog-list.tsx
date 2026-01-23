"use client"

import { useState } from "react"
import Link from "next/link"
import { Grid, List, Calendar, User, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock Data
const posts = [
  {
    id: 1,
    slug: "tendencias-design-2024",
    title: "As 10 Tendências de Design para 2024",
    excerpt: "Descubra o que vai dominar o mundo do design digital no próximo ano, desde minimalismo até 3D.",
    author: "Ana Silva",
    date: "15 Jan, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    slug: "guia-react-server-components",
    title: "Guia Completo de React Server Components",
    excerpt: "Tudo o que você precisa saber sobre a nova arquitetura do React e como ela melhora a performance.",
    author: "Carlos Oliveira",
    date: "12 Jan, 2024",
    category: "Desenvolvimento",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    slug: "marketing-digital-estrategias",
    title: "Estratégias de Marketing Digital para Startups",
    excerpt: "Como crescer sua startup gastando pouco com táticas comprovadas de growth hacking.",
    author: "Mariana Costa",
    date: "10 Jan, 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    slug: "futuro-ia-generativa",
    title: "O Futuro da IA Generativa nos Negócios",
    excerpt: "Como a inteligência artificial está transformando a produtividade e criando novas oportunidades.",
    author: "Pedro Santos",
    date: "08 Jan, 2024",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    slug: "ux-writing-guia",
    title: "UX Writing: A Arte de Escrever para Interfaces",
    excerpt: "Aprenda a criar microtextos que guiam o usuário e melhoram a experiência de uso do seu produto.",
    author: "Ana Silva",
    date: "05 Jan, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    slug: "typescript-dicas",
    title: "5 Dicas Avançadas de TypeScript",
    excerpt: "Melhore seu código com essas técnicas avançadas de tipagem e padrões de projeto em TS.",
    author: "Carlos Oliveira",
    date: "03 Jan, 2024",
    category: "Desenvolvimento",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
  },
]

export function BlogList() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Nosso Blog</h1>
          <p className="text-muted-foreground text-lg">
            Insights, tutoriais e novidades sobre tecnologia e design.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar artigos..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex border rounded-md p-1 bg-muted/20">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="h-8 w-8"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
              className="h-8 w-8"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Posts List */}
      {viewMode === "grid" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="leading-tight group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex items-center justify-between border-t pt-4 mt-auto bg-muted/10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-3 w-3" />
                  {post.author}
                </div>
                <Button variant="ghost" size="sm" asChild className="group/btn">
                  <Link href={`/blog/${post.slug}`}>
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <Button variant="outline" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Ler Artigo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
