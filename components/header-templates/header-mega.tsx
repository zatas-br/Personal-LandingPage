"use client"

import * as React from "react"
import { Menu, ChevronDown, Mountain, Book, Code, Layers, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "#",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "#",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "#",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function HeaderMega() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 md:px-6 justify-between">
        <a className="flex items-center gap-2 font-bold text-xl mr-8" href="#">
          <Mountain className="h-6 w-6" />
          <span>Enterprise</span>
        </a>

        <div className="hidden md:flex flex-1">
             <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <Mountain className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Enterprise Inc
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix UI and
                              Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="#" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="#" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#" className={navigationMenuTriggerStyle()}>
                    Documentation
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
           <Button variant="outline" className="hidden sm:flex">Contact Sales</Button>
           <Button>Get Started</Button>
           <Sheet>
               <SheetTrigger asChild>
                  <Button className="md:hidden" size="icon" variant="ghost">
                     <Menu className="h-6 w-6" />
                     <span className="sr-only">Toggle navigation menu</span>
                  </Button>
               </SheetTrigger>
               <SheetContent side="right">
                   <div className="grid gap-6 py-6">
                      <a className="flex items-center gap-2 font-bold text-xl" href="#">
                         <Mountain className="h-6 w-6" />
                         <span>Enterprise</span>
                      </a>
                      <div className="grid gap-4">
                         <div className="font-medium pb-2 border-b">Getting Started</div>
                         <a href="#" className="pl-4 text-muted-foreground">Introduction</a>
                         <a href="#" className="pl-4 text-muted-foreground">Installation</a>
                         <a href="#" className="pl-4 text-muted-foreground">Typography</a>
                      </div>
                      <div className="grid gap-4">
                         <div className="font-medium pb-2 border-b">Components</div>
                         <a href="#" className="pl-4 text-muted-foreground">Alert Dialog</a>
                         <a href="#" className="pl-4 text-muted-foreground">Hover Card</a>
                         <a href="#" className="pl-4 text-muted-foreground">Progress</a>
                      </div>
                      <div className="grid gap-2 mt-4">
                          <Button variant="outline" className="w-full">Contact Sales</Button>
                          <Button className="w-full">Get Started</Button>
                      </div>
                   </div>
               </SheetContent>
           </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
