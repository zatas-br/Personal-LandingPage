"use client"

import { useState } from "react"
import { UserProfile } from "@/components/profile-templates/user-profile"
import { ProfileSimple } from "@/components/profile-templates/profile-simple"
import { ProfileCover } from "@/components/profile-templates/profile-cover"
import { ProfileSplit } from "@/components/profile-templates/profile-split"
import { Button } from "@/components/ui/button"
import { Layout, User, Image, Columns } from "lucide-react"

export default function ProfilePage() {
  const [layout, setLayout] = useState<"standard" | "simple" | "cover" | "split">("standard")

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
            <Layout className="h-4 w-4" /> Tabs (Standard)
          </Button>
          <Button
            variant={layout === "simple" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("simple")}
            className="gap-2"
          >
            <User className="h-4 w-4" /> Simple
          </Button>
          <Button
            variant={layout === "cover" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("cover")}
            className="gap-2"
          >
            <Image className="h-4 w-4" /> Cover
          </Button>
          <Button
            variant={layout === "split" ? "default" : "outline"}
            size="sm"
            onClick={() => setLayout("split")}
            className="gap-2"
          >
            <Columns className="h-4 w-4" /> Split
          </Button>
        </div>
      </div>

      <div className="flex-1">
        {layout === "standard" && <UserProfile />}
        {layout === "simple" && <ProfileSimple />}
        {layout === "cover" && <ProfileCover />}
        {layout === "split" && <ProfileSplit />}
      </div>
    </div>
  )
}
