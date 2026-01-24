"use client"

import { useState, useEffect } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy, Check, Loader2 } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { getComponentCode } from "@/app/actions/get-component-code"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CodeViewerProps {
  isOpen: boolean
  onClose: () => void
  componentName: string
  componentPath: string // Relative to components/ e.g. "hero-section.tsx"
  usageCode: string // The JSX usage example
}

export function CodeViewer({
  isOpen,
  onClose,
  componentName,
  componentPath,
  usageCode,
}: CodeViewerProps) {
  const [sourceCode, setSourceCode] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (isOpen && componentPath) {
      setLoading(true)
      getComponentCode(componentPath)
        .then((code) => {
          setSourceCode(code)
        })
        .catch((err) => {
          console.error(err)
          setSourceCode("// Error loading code")
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [isOpen, componentPath])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Código: {componentName}</DialogTitle>
          <DialogDescription>
            Visualize e copie o código deste componente.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="usage" className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="usage">Uso (JSX)</TabsTrigger>
              <TabsTrigger value="source">Código Fonte</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="usage" className="flex-1 min-h-0 relative border rounded-md overflow-hidden bg-[#1e1e1e]">
             <Button
                size="icon"
                variant="secondary"
                className="absolute top-2 right-2 z-10 h-8 w-8 bg-muted/20 hover:bg-muted/40 text-white"
                onClick={() => copyToClipboard(usageCode)}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            <ScrollArea className="h-full">
              <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                customStyle={{ margin: 0, height: '100%', minHeight: '100%' }}
                showLineNumbers
              >
                {usageCode}
              </SyntaxHighlighter>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="source" className="flex-1 min-h-0 relative border rounded-md overflow-hidden bg-[#1e1e1e]">
            <Button
                size="icon"
                variant="secondary"
                className="absolute top-2 right-2 z-10 h-8 w-8 bg-muted/20 hover:bg-muted/40 text-white"
                onClick={() => copyToClipboard(sourceCode)}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            {loading ? (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <ScrollArea className="h-full">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, height: '100%', minHeight: '100%' }}
                  showLineNumbers
                >
                  {sourceCode}
                </SyntaxHighlighter>
              </ScrollArea>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
