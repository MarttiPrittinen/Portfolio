'use client'

import type { Footer as FooterContent } from '@/types/portfolio'

const year = new Date().getFullYear()

type FooterProps = {
  content: FooterContent
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-sm text-zinc-400 md:flex-row md:items-center">
        <div>
          <p className="text-zinc-200">© {year} {content.text}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {content.links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-zinc-400 transition hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
