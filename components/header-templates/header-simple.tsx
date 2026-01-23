"use client"

import * as React from "react"
import { Menu, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function HeaderSimple() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a className="flex items-center gap-2 font-bold text-xl" href="#">
          <Mountain className="h-6 w-6" />
          <span>Acme Inc</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a className="hover:text-primary transition-colors" href="#">Home</a>
          <a className="hover:text-primary transition-colors" href="#">About</a>
          <a className="hover:text-primary transition-colors" href="#">Services</a>
          <a className="hover:text-primary transition-colors" href="#">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Sign up</Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-4">
              <a className="flex items-center gap-2 font-bold text-xl mb-4" href="#">
                 <Mountain className="h-6 w-6" />
                 <span>Acme Inc</span>
              </a>
              <a className="text-lg font-medium hover:text-primary" href="#">Home</a>
              <a className="text-lg font-medium hover:text-primary" href="#">About</a>
              <a className="text-lg font-medium hover:text-primary" href="#">Services</a>
              <a className="text-lg font-medium hover:text-primary" href="#">Contact</a>
              <div className="flex flex-col gap-2 mt-4">
                 <Button variant="outline" className="w-full">Log in</Button>
                 <Button className="w-full">Sign up</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
