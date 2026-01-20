'use client'

import type { ExperienceItem } from '@/types/portfolio'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

type ExperienceProps = {
  title: string
  items: ExperienceItem[]
}

export function Experience({ title, items }: ExperienceProps) {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-24 px-6 py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{title}</p>
        </motion.div>
        <div className="mt-10 space-y-10 border-l border-white/10 pl-6">
          {items.map((job, index) => (
            <motion.div key={index} variants={item} className="relative">
              <span className="absolute -left-[34px] top-2 h-3 w-3 rounded-full bg-cyan-400" />
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-400">
                <span>{job.period}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
              <h3 className="font-heading mt-3 text-xl text-zinc-100">
                {job.role}
              </h3>
              <p className="text-sm text-zinc-300">{job.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {job.summary.map((line, summaryIndex) => (
                  <li key={summaryIndex}>- {line}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                {job.technologies.map(tech => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
