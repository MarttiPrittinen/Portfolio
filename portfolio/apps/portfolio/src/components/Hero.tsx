'use client'

import type { Hero as HeroContent } from '@/types/portfolio'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1], staggerChildren: 0.12 }

  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] } }

}

type HeroProps = {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  return (
    <motion.section
      id="top"
      className="relative px-6 pb-20 pt-24 md:pb-28 md:pt-28"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-2xl flex-col gap-10">
          <motion.div variants={item}>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              {content.location}
            </p>
            <h1 className="font-heading mt-4 text-4xl font-semibold leading-tight text-zinc-100 md:text-6xl">
              {content.name}
            </h1>
            <p className="font-heading mt-4 text-2xl text-zinc-300 md:text-3xl">
              {content.title}
            </p>
            <p className="mt-6 text-base text-zinc-400 md:text-lg">
              {content.subtitle}
            </p>
          </motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href={content.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              {content.ctaPrimary.label}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={content.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-white/30"
            >
              {content.ctaSecondary.label}
            </a>
          </motion.div>
        </div>
        <motion.div variants={item} className="flex justify-center md:justify-end">
        <div className="relative h-64 w-64 overflow-hidden rounded-full">
            <Image
              src="/uploads/IMG_1904.JPG"
              alt="Portrait of Martti Prittinen"
             
               fill className="object-cover object-[50%_45%] brightness-95"     
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
