'use client'

import type { About as AboutContent } from '@/types/portfolio'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1], staggerChildren: 0.12 }

  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

type AboutProps = {
  content: AboutContent
}

export function About({ content }: AboutProps) {
  if (!content) return null

  return (
    <motion.section
      id="about"
      className="scroll-mt-24 px-6 py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >

      <div className="mx-auto max-w-6xl">
        <div className="md:max-w-3xl">
          <motion.div variants={item}>
            <p className="text-ms uppercase tracking-[0.27em] text-zinc-400">
              {content.title}
            </p>

            <h2 className="font-heading mt-4 text-3xl text-zinc-100 md:text-4xl">
              {content.lead}
            </h2>

            <div className="mt-6 space-y-4 text-sm text-zinc-400 md:text-base">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
