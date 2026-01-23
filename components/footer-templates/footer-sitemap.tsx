import * as React from "react"
import { Mountain } from "lucide-react"

export function FooterSitemap() {
  return (
    <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
      <div className="container grid grid-cols-2 gap-8 px-4 md:px-6 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
           <a className="flex items-center gap-2 font-bold text-xl mb-4" href="#">
              <Mountain className="h-6 w-6" />
              <span>Acme Inc</span>
           </a>
           <p className="text-muted-foreground max-w-xs">
              Empowering developers to build better software, faster. Our tools are designed with productivity in mind.
           </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Product</h3>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Features</a>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Integrations</a>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Pricing</a>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Security</a>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Company</h3>
          <a className="text-sm text-muted-foreground hover:underline" href="#">About Us</a>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Careers</a>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Blog</a>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Contact</a>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Resources</h3>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Documentation</a>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Help Center</a>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Community</a>
          <a className="text-sm text-muted-foreground hover:underline" href="#">Status</a>
        </div>
      </div>
      <div className="container mt-12 px-4 md:px-6 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
         <p className="text-sm text-muted-foreground">© 2024 Acme Inc. All rights reserved.</p>
         <div className="flex gap-4 text-sm text-muted-foreground">
             <a href="#" className="hover:underline">Privacy Policy</a>
             <a href="#" className="hover:underline">Terms of Service</a>
             <a href="#" className="hover:underline">Cookie Policy</a>
         </div>
      </div>
    </footer>
  )
}
