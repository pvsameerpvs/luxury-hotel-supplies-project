import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Providers from './providers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'Luxury Hotel Supplies Trading FZC LLC',
    template: '%s | Luxury Hotel Supplies Trading FZC LLC',
  },
  description: 'Premium hotel and housekeeping supplies across UAE.',
  applicationName: 'Luxury Hotel Supplies Trading FZC LLC',
  keywords: [
    'hotel supplies UAE',
    'housekeeping supplies UAE',
    'hotel amenities',
    'linen supplier UAE',
    'tissue dispensers',
    'waste bins',
    'hygiene products',
  ],
  openGraph: {
    title: 'Luxury Hotel Supplies Trading FZC LLC',
    description: 'Premium hotel and housekeeping supplies across UAE.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow pt-[80px]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
