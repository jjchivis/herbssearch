import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Herbs Search",
  description: "Search and discover herbs, their uses, and their properties.",
}

export const viewport: Viewport = {
  themeColor: "#4a7c59",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
