import * as React from "react"
import { Mountain, Twitter, Instagram, Linkedin } from "lucide-react"

export function FooterMinimal() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
           <Mountain className="h-6 w-6" />
           <p className="text-sm text-muted-foreground">© 2024 Acme Inc. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
           <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
           </a>
           <a href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
           </a>
           <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
           </a>
        </div>
        <nav className="flex gap-4 sm:gap-6 text-sm">
          <a className="text-muted-foreground hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-muted-foreground hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  )
}
