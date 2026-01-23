"use client"

import { useState } from "react"
import { BlogList } from "@/components/blog-templates/blog-list"
import { BlogMasonry } from "@/components/blog-templates/blog-masonry"
import { BlogSidebar } from "@/components/blog-templates/blog-sidebar"
import { BlogMagazine } from "@/components/blog-templates/blog-magazine"
import { Button } from "@/components/ui/button"
import { Grid, LayoutTemplate, Newspaper, Sidebar } from "lucide-react"

export default function BlogPage() {
  const [layout, setLayout] = useState<"standard" | "masonry" | "sidebar" | "magazine">("standard")

  return (
    <div className="min-h-screen flex flex-col">
      {/* Layout Switcher (Temporary for demo purposes) */}
      <div className="bg-muted border-b py-3 px-4 sticky top-0 z-40 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground hidden sm:inline">Alterar Layout:</span>
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          <Button
            variant={layout === "standard" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("standard")}
            className="gap-2"
          >
            <Grid className="h-4 w-4" /> Standard
          </Button>
          <Button
            variant={layout === "masonry" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("masonry")}
            className="gap-2"
          >
            <LayoutTemplate className="h-4 w-4" /> Masonry
          </Button>
          <Button
            variant={layout === "sidebar" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("sidebar")}
            className="gap-2"
          >
            <Sidebar className="h-4 w-4" /> Com Sidebar
          </Button>
          <Button
            variant={layout === "magazine" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("magazine")}
            className="gap-2"
          >
            <Newspaper className="h-4 w-4" /> Magazine
          </Button>
        </div>
      </div>

      <div className="flex-1">
        {layout === "standard" && <BlogList />}
        {layout === "masonry" && <BlogMasonry />}
        {layout === "sidebar" && <BlogSidebar />}
        {layout === "magazine" && <BlogMagazine />}
      </div>
    </div>
  )
}
