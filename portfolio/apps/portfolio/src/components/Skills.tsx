'use client'

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

const skillsFi = [
  'C',
  'C++',
  'JavaScript / TypeScript',
  'React / Next.js',
  'Node.js',
  'REST API -rajapinnat',
  'HTML, CSS, Tailwind',
  'SQL (PostgreSQL / MySQL)',
  'Python-perusteet',
  'Git & GitHub',
  'Linux-perusteet',
  'Olio-ohjelmointi',
  'Tietoturvan perusteet'
]

const skillsEn = [
  'C',
  'C++',
  'JavaScript / TypeScript',
  'React / Next.js',
  'Node.js',
  'REST APIs',
  'HTML, CSS, Tailwind',
  'SQL (PostgreSQL / MySQL)',
  'Python basics',
  'Git & GitHub',
  'Linux fundamentals',
  'Object-oriented programming',
  'Basics of information security'
]

type SkillsProps = {
  locale?: 'fi' | 'en'
}

export default function Skills({ locale = 'fi' }: SkillsProps) {
  const skills = locale === 'en' ? skillsEn : skillsFi
  const title = locale === 'en' ? 'Technical Skills' : 'Tekninen osaaminen'

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-3xl font-semibold"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
              <Code2 className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-medium">{title}</h3>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {skills.map(skill => (
              <li key={skill} className="rounded-xl bg-white/5 px-4 py-2 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
