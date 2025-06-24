import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sital.dev - Python Developer | Full Stack Enthusiast',
  description: 'Personal portfolio of Sital Snigdha Swain - Python Developer and Full Stack Enthusiast based in Bhubaneswar. Showcasing skills, projects, and experience.',
  keywords: ['Python Developer', 'Full Stack Developer', 'Web Developer', 'Django', 'Flask', 'Portfolio'],
  authors: [{ name: 'Sital Snigdha Swain' }],
  creator: 'Sital Snigdha Swain',
  publisher: 'Sital Snigdha Swain',
  openGraph: {
    title: 'Sital.dev - Python Developer | Full Stack Enthusiast',
    description: 'Personal portfolio of Sital Snigdha Swain - Python Developer and Full Stack Enthusiast',
    url: 'https://sital.dev',
    siteName: 'Sital.dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sital.dev - Python Developer | Full Stack Enthusiast',
    description: 'Personal portfolio of Sital Snigdha Swain - Python Developer and Full Stack Enthusiast',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 