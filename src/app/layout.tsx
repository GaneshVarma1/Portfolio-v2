import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sri Ganesh Shiramshetty',
  description: 'You can know about me here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ganesh.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 