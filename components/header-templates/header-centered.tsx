"use client"

import * as React from "react"
import { Menu, Search, ShoppingBag, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function HeaderCentered() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <a className="flex items-center gap-2 font-bold text-xl" href="#">
            <Mountain className="h-6 w-6" />
            <span>STORE</span>
          </a>
        </div>

        <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
               <a className="hover:text-primary transition-colors" href="#">New Arrivals</a>
               <a className="hover:text-primary transition-colors" href="#">Men</a>
               <a className="hover:text-primary transition-colors" href="#">Women</a>
               <a className="hover:text-primary transition-colors" href="#">Accessories</a>
               <a className="text-red-500 hover:text-red-600 transition-colors" href="#">Sale</a>
            </nav>
        </div>

        <div className="flex items-center gap-4 justify-end flex-1 md:flex-none">
           <div className="relative hidden sm:block w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-full md:w-[200px] lg:w-[300px]"
              />
            </div>
            <Button size="icon" variant="ghost">
               <ShoppingBag className="h-5 w-5" />
               <span className="sr-only">Cart</span>
            </Button>
            <Sheet>
               <SheetTrigger asChild>
                  <Button className="md:hidden" size="icon" variant="outline">
                     <Menu className="h-6 w-6" />
                     <span className="sr-only">Toggle navigation menu</span>
                  </Button>
               </SheetTrigger>
               <SheetContent side="left">
                   <div className="grid gap-6 py-6">
                      <a className="flex items-center gap-2 font-bold text-xl" href="#">
                         <Mountain className="h-6 w-6" />
                         <span>STORE</span>
                      </a>
                      <div className="relative">
                         <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                         <Input
                           type="search"
                           placeholder="Search..."
                           className="pl-8 w-full"
                         />
                      </div>
                      <nav className="grid gap-4 text-lg font-medium">
                         <a href="#">New Arrivals</a>
                         <a href="#">Men</a>
                         <a href="#">Women</a>
                         <a href="#">Accessories</a>
                         <a className="text-red-500" href="#">Sale</a>
                      </nav>
                   </div>
               </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  )
}
