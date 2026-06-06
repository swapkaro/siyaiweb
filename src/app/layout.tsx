import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SiyAI — Memory Films',
  description: 'Turn your memories into films. Thirty seconds of their voice, an old photograph that smiles back — crafted by hand into something your family keeps forever.',
  keywords: ['memory film', 'voice letter', 'family gift', 'India', 'WhatsApp gift', 'personalised gift'],
  openGraph: {
    title: 'SiyAI — Memory Films',
    description: 'The most personal gift they will ever receive. Ready in hours, delivered on WhatsApp.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiyAI — Memory Films',
    description: 'Turn your memories into films. Crafted by hand, delivered on WhatsApp.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
