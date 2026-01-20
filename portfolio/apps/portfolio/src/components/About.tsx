'use client'

import type { About as AboutContent, Locale } from '@/types/portfolio'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.12 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

type AboutProps = {
  content: AboutContent
  locale: Locale
}

export function About({ content, locale }: AboutProps) {
  const highlightLabel = locale === 'fi' ? 'Nostot' : 'Highlights'

  return (
    <motion.section
      id="about"
      className="scroll-mt-24 px-6 py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{content.title}</p>
          <h2 className="font-heading mt-4 text-3xl text-zinc-100 md:text-4xl">
            {content.lead}
          </h2>
          <div className="mt-6 space-y-4 text-sm text-zinc-400 md:text-base">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{highlightLabel}</p>
          <ul className="mt-6 space-y-4 text-sm text-zinc-200">
            {content.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
