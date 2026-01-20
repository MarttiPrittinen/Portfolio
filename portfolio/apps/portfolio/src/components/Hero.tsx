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
    transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.12 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

type HeroProps = {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  return (
    <motion.section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-24 md:pb-28 md:pt-28"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-slate-400/10 blur-[120px]" />
      </div>
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
          <div className="relative w-48 aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-cyan-500/10 md:w-56">
            <Image
              src="/uploads/CVKUVA_atc_990f8988.jpg"
              alt="Portrait of Martti Prittinen"
              width={224}
              height={224}
              className="h-full w-full object-cover object-[center_20%]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
