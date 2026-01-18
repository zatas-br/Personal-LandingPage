"use client"

import * as React from "react"
import { SettingsProvider } from "@/hooks/use-settings"
import { AppProvider } from "@/components/app-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <AppProvider>
        {children}
      </AppProvider>
    </SettingsProvider>
  )
}