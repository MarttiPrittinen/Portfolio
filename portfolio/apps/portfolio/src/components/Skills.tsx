'use client'

import type { SkillGroup } from '@/types/portfolio'
import { Code2, Cpu, Database, Layout, Terminal } from 'lucide-react'
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
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

type SkillsProps = {
  title: string
  groups: SkillGroup[]
}

export function Skills({ title, groups }: SkillsProps) {
  return (
    <motion.section
      id="skills"
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
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {groups.map(group => (
            <motion.div
              key={group.label}
              variants={item}
              whileHover={{ scale: 1.02, filter: 'brightness(1.12)' }}
              className="group rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  {getSkillIcon(group.label)}
                </span>
                <h3 className="font-heading text-lg text-zinc-100">{group.label}</h3>
              </div>
              <div className={`mt-3 h-px w-16 bg-gradient-to-r ${getSkillAccent(group.label).line}`} />
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-200">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.12em] transition-all duration-300"
                  >
                    {skill}
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

function getSkillIcon(label: string) {
  const accent = getSkillAccent(label)
  const normalized = label.toLowerCase()
  if (normalized.includes('frontend') || normalized.includes('ui') || normalized.includes('design')) {
    return <Layout className={`h-6 w-6 ${accent.icon}`} aria-hidden="true" />
  }
  if (normalized.includes('backend') || normalized.includes('api')) {
    return <Terminal className={`h-6 w-6 ${accent.icon}`} aria-hidden="true" />
  }
  if (normalized.includes('data') || normalized.includes('db') || normalized.includes('database')) {
    return <Database className={`h-6 w-6 ${accent.icon}`} aria-hidden="true" />
  }
  if (normalized.includes('infra') || normalized.includes('ops') || normalized.includes('devops')) {
    return <Cpu className={`h-6 w-6 ${accent.icon}`} aria-hidden="true" />
  }
  return <Code2 className={`h-6 w-6 ${accent.icon}`} aria-hidden="true" />
}

function getSkillAccent(label: string) {
  const normalized = label.toLowerCase()
  if (normalized.includes('frontend') || normalized.includes('ui') || normalized.includes('design')) {
    return { icon: 'text-cyan-300', line: 'from-cyan-400/70 via-cyan-300/40 to-transparent' }
  }
  if (normalized.includes('backend') || normalized.includes('api')) {
    return { icon: 'text-emerald-300', line: 'from-emerald-400/70 via-emerald-300/40 to-transparent' }
  }
  if (normalized.includes('data') || normalized.includes('db') || normalized.includes('database')) {
    return { icon: 'text-amber-300', line: 'from-amber-400/70 via-amber-300/40 to-transparent' }
  }
  if (normalized.includes('infra') || normalized.includes('ops') || normalized.includes('devops')) {
    return { icon: 'text-sky-300', line: 'from-sky-400/70 via-sky-300/40 to-transparent' }
  }
  return { icon: 'text-cyan-200', line: 'from-cyan-300/70 via-cyan-200/40 to-transparent' }
}
