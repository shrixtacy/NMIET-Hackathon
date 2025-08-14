import type { Metadata } from 'next'
import { Inter, Oswald, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NMIET Inter-College AI Hackathon 2025 - Defence & Military Innovation',
  description: 'Join NMIET Inter-College AI Hackathon 2025 focused on Defence & Indian Military AI. Free registration, innovative for defence, building for Bharat.',
  keywords: 'AI Hackathon, Defence, Military, Innovation, NMIET, Inter-College, 2025',
  authors: [{ name: 'NMIET' }],
  robots: 'index, follow',
  openGraph: {
    title: 'NMIET Inter-College AI Hackathon 2025',
    description: 'Defence & Military AI Innovation Hackathon',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NMIET Inter-College AI Hackathon 2025',
    description: 'Defence & Military AI Innovation Hackathon',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} ${montserrat.variable}`}>
        <div className="App">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}