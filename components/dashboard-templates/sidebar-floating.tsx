"use client"

import * as React from "react"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import {
  Bell,
  Home,
  LineChart as LineChartIcon,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
  Search,
  Menu,
  PanelLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const data = [
  { average: 400, today: 240 },
  { average: 300, today: 139 },
  { average: 200, today: 980 },
  { average: 278, today: 390 },
  { average: 189, today: 480 },
  { average: 239, today: 380 },
  { average: 349, today: 430 },
]

export function SidebarFloating() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <LinkItem icon={<Package2 className="h-5 w-5 transition-all group-hover:scale-110" />} label="Acme Inc" main />
          <LinkItem icon={<Home className="h-5 w-5" />} label="Dashboard" active />
          <LinkItem icon={<ShoppingCart className="h-5 w-5" />} label="Orders" />
          <LinkItem icon={<Package2 className="h-5 w-5" />} label="Products" />
          <LinkItem icon={<Users2 className="h-5 w-5" />} label="Customers" />
          <LinkItem icon={<LineChartIcon className="h-5 w-5" />} label="Analytics" />
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <LinkItem icon={<Settings className="h-5 w-5" />} label="Settings" />
        </nav>
      </aside>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <a href="#" className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </a>
                <a href="#" className="flex items-center gap-4 px-2.5 text-foreground">
                  <Home className="h-5 w-5" />
                  Dashboard
                </a>
                <a href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </a>
                <a href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                  <Package2 className="h-5 w-5" />
                  Products
                </a>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
             <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">A</div>
          </Button>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="sm:col-span-2">
                <CardHeader className="pb-3">
                  <CardTitle>Your Dashboard</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Create New Order</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>This Week</CardDescription>
                  <CardTitle className="text-4xl">$1,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25% from last week
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-1/4 rounded-full" />
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>This Month</CardDescription>
                  <CardTitle className="text-4xl">$5,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                 <CardFooter>
                  <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-2/3 rounded-full" />
                  </div>
                </CardFooter>
              </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Performance</CardTitle>
                    <CardDescription>Daily comparison against average.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <Tooltip
                                contentStyle={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                                itemStyle={{ color: 'var(--foreground)' }}
                            />
                            <Line type="monotone" dataKey="average" stroke="#8884d8" strokeDasharray="5 5" />
                            <Line type="monotone" dataKey="today" stroke="currentColor" className="stroke-primary" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

          </div>
        </main>
      </div>
    </div>
  )
}

function LinkItem({ icon, label, active, main }: any) {
  if (main) {
    return (
        <a href="#" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
            {icon}
            <span className="sr-only">{label}</span>
        </a>
    )
  }
  return (
    <TooltipUI>
      <TooltipTrigger asChild>
        <a
          href="#"
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
            active ? "bg-accent text-accent-foreground" : "text-muted-foreground"
          }`}
        >
          {icon}
          <span className="sr-only">{label}</span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </TooltipUI>
  )
}
