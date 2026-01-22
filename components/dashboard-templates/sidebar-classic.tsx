"use client"

import * as React from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import {
  Bell,
  Home,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Users,
  Search,
  Menu,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Dummy Data
const data = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
]

export function SidebarClassic() {
  return (
    <div className="grid min-h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar Desktop */}
      <div className="hidden border-r bg-muted/40 md:block overflow-y-auto">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <LinkItem href="#" icon={<Package className="h-6 w-6" />} label="Acme Inc" bold />
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <LinkItem href="#" icon={<Home className="h-4 w-4" />} label="Dashboard" active />
              <LinkItem href="#" icon={<ShoppingCart className="h-4 w-4" />} label="Orders" badge="6" />
              <LinkItem href="#" icon={<Package className="h-4 w-4" />} label="Products" />
              <LinkItem href="#" icon={<Users className="h-4 w-4" />} label="Customers" />
              <LinkItem href="#" icon={<LineChart className="h-4 w-4" />} label="Analytics" />
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-y-auto h-full">
        {/* Header Mobile & Desktop */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10 backdrop-blur">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <LinkItem href="#" icon={<Package className="h-5 w-5" />} label="Acme Inc" bold size="large" />
                <LinkItem href="#" icon={<Home className="h-5 w-5" />} label="Dashboard" active size="large" />
                <LinkItem href="#" icon={<ShoppingCart className="h-5 w-5" />} label="Orders" badge="6" size="large" />
                <LinkItem href="#" icon={<Package className="h-5 w-5" />} label="Products" size="large" />
                <LinkItem href="#" icon={<Users className="h-5 w-5" />} label="Customers" size="large" />
                <LinkItem href="#" icon={<LineChart className="h-5 w-5" />} label="Analytics" size="large" />
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Users className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>

        {/* Content */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Total Revenue" value="$45,231.89" change="+20.1% from last month" icon={<span className="text-muted-foreground">$</span>} />
            <StatsCard title="Subscriptions" value="+2350" change="+180.1% from last month" icon={<Users className="h-4 w-4 text-muted-foreground" />} />
            <StatsCard title="Sales" value="+12,234" change="+19% from last month" icon={<CreditCard className="h-4 w-4 text-muted-foreground" />} />
            <StatsCard title="Active Now" value="+573" change="+201 since last hour" icon={<Activity className="h-4 w-4 text-muted-foreground" />} />
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={data}>
                    <XAxis
                      dataKey="name"
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Bar
                      dataKey="total"
                      fill="currentColor"
                      radius={[4, 4, 0, 0]}
                      className="fill-primary"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                 <div className="flex items-center gap-4">
                    <div className="hidden h-9 w-9 items-center justify-center rounded-full sm:flex bg-primary/10 text-primary font-bold">JD</div>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">Jackson Lee</p>
                      <p className="text-sm text-muted-foreground">
                        jackson.lee@email.com
                      </p>
                    </div>
                    <div className="ml-auto font-medium">+$39.00</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden h-9 w-9 items-center justify-center rounded-full sm:flex bg-primary/10 text-primary font-bold">OM</div>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">Olivia Martin</p>
                      <p className="text-sm text-muted-foreground">
                        olivia.martin@email.com
                      </p>
                    </div>
                    <div className="ml-auto font-medium">+$299.00</div>
                  </div>
                   <div className="flex items-center gap-4">
                    <div className="hidden h-9 w-9 items-center justify-center rounded-full sm:flex bg-primary/10 text-primary font-bold">SD</div>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">Sofia Davis</p>
                      <p className="text-sm text-muted-foreground">
                        sofia.davis@email.com
                      </p>
                    </div>
                    <div className="ml-auto font-medium">+$99.00</div>
                  </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function LinkItem({ href, icon, label, badge, bold, active, size = "default" }: any) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
        active ? "bg-muted text-primary" : "text-muted-foreground"
      } ${size === "large" ? "mx-[-0.65rem] px-4" : ""}`}
    >
      {icon}
      <span className={bold ? "font-semibold" : ""}>{label}</span>
      {badge && (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {badge}
        </Badge>
      )}
    </a>
  )
}

function StatsCard({ title, value, change, icon }: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{change}</p>
      </CardContent>
    </Card>
  )
}

import { CreditCard, Activity } from "lucide-react"
