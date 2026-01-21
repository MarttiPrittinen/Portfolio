'use client'

import type { Locale } from '@/types/portfolio'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const navItems = [
  { id: 'about', label: { fi: 'Taustaa', en: 'About' } },
  { id: 'experience', label: { fi: 'Kokemus', en: 'Experience' } },
  { id: 'projects', label: { fi: 'Projektit', en: 'Projects' } },
  { id: 'skills', label: { fi: 'Taidot', en: 'Skills' } },
  { id: 'contact', label: { fi: 'Ota yhteyttä', en: 'Contact' } }
]

type NavbarProps = {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
  name: string
}

export function Navbar({ locale, onLocaleChange, name }: NavbarProps) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-heading text-sm uppercase tracking-[0.25em] text-zinc-200"
        >
          {name}
        </a>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-zinc-400 md:flex">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition hover:text-zinc-100"
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => onLocaleChange(locale === 'fi' ? 'en' : 'fi')}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-200 transition hover:border-white/20"
          aria-label="Toggle language"
        >
          <Globe className="h-4 w-4" />
          {locale === 'fi' ? 'EN' : 'FI'}
        </motion.button>
      </div>
    </div>
  )
}
