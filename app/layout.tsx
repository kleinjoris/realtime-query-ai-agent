import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'real-time-chat',
  description: 'Created with v0',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
