import type { Metadata } from 'next'
import { Space_Grotesk, Spectral } from 'next/font/google'
import { Providers } from '@/components/Providers'
import './globals.css'

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading'
})

const body = Spectral({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600']
})

export const metadata: Metadata = {
  title: {
    default: 'Martti Prittinen — Portfolio',
    template: '%s — Martti Prittinen'
  },
  description:
    'Modern portfolio highlighting full-stack product work, data-driven interfaces, and calm dark aesthetics.',
  metadataBase: new URL('https://prittinen.dev'),
  openGraph: {
    title: 'Martti Prittinen — Portfolio',
    description:
      'Modern portfolio highlighting full-stack product work, data-driven interfaces, and calm dark aesthetics.',
    url: 'https://prittinen.dev',
    siteName: 'Martti Prittinen',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martti Prittinen — Portfolio',
    description:
      'Modern portfolio highlighting full-stack product work, data-driven interfaces, and calm dark aesthetics.'
  },
  keywords: [
    'portfolio',
    'full-stack developer',
    'next.js',
    'typescript',
    'product design',
    'frontend'
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${heading.variable} ${body.variable}`}>
      <body className="relative isolate min-h-screen bg-slate-950 text-zinc-100 overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <div className="bg-pulse pulse-1" />
  <div className="bg-pulse pulse-2" />
</div>


        <div className="relative z-10">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}

