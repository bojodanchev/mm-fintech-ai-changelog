import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MM Fintech AI Changelog',
  description: 'Changelog for internal MM Fintech AI products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0a] text-[#ededed] antialiased">
        {children}
      </body>
    </html>
  )
}

