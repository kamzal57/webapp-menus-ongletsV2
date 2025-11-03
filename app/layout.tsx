import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SVG Animation Learning Platform',
  description: 'Interactive learning platform for mastering SVG animations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
