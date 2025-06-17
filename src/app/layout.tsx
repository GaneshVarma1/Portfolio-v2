import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../index.css'
import { Loading } from '@/components/loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sri Ganesh Shiramshetty | Full Stack Software Engineer',
  description: 'Full Stack Software Engineer with 4+ years of experience in building scalable applications and creating exceptional user experiences. Specializing in React, Next.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Sri Ganesh Shiramshetty' }],
  creator: 'Sri Ganesh Shiramshetty',
  publisher: 'Sri Ganesh Shiramshetty',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://srishiram.xyz'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://srishiram.xyz',
    title: 'Sri Ganesh Shiramshetty | Full Stack Software Engineer',
    description: 'Full Stack Software Engineer with 4+ years of experience in building scalable applications and creating exceptional user experiences.',
    siteName: 'Sri Ganesh Shiramshetty Portfolio',
    images: [
      {
        url: '/IMG_2576.png',
        width: 1200,
        height: 630,
        alt: 'Sri Ganesh Shiramshetty Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Ganesh Shiramshetty | Full Stack Software Engineer',
    description: 'Full Stack Software Engineer with 4+ years of experience in building scalable applications and creating exceptional user experiences.',
    images: ['/og-image.png'],
    creator: '@varmaaa_x',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
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
        <link rel="canonical" href="https://srishiram.xyz" />
      </head>
      <body className={inter.className}>
        <Loading />
        {children}
      </body>
    </html>
  )
} 