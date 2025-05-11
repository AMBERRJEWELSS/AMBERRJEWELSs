import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'AMBERRJEWELSS | Luxury Resin Jewelry & Home Decor',
  description: 'Luxury resin jewelry, home decor, and customized bouquets. Preserve your memories in beautiful resin creations. Delivery available all over India by AMBERRJEWELSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable} font-body bg-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
} 