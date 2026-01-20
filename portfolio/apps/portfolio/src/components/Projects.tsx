'use client'

import type { Locale, ProjectItem } from '@/types/portfolio'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

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

type ProjectsProps = {
  title: string
  items: ProjectItem[]
  locale: Locale
}

export function Projects({ title, items, locale }: ProjectsProps) {
  const labels = useMemo(
    () => ({
      featured: locale === 'fi' ? 'Nostettu' : 'Featured',
      github: locale === 'fi' ? 'GitHub' : 'GitHub',
      language: locale === 'fi' ? 'Kieli' : 'Language',
      loading: locale === 'fi' ? 'Haetaan projekteja...' : 'Loading projects...',
      error:
        locale === 'fi'
          ? 'Projektien haku epäonnistui. Näytetään varaslista.'
          : 'Failed to load projects. Showing fallback list.',
      empty:
        locale === 'fi'
          ? 'Ei projekteja saatavilla tällä hetkellä.'
          : 'No projects available right now.',
      unknownLanguage: locale === 'fi' ? 'Ei määritelty' : 'Not specified',
      noDescription:
        locale === 'fi'
          ? 'Ei kuvausta saatavilla.'
          : 'No description provided.'
    }),
    [locale]
  )
  const [projects, setProjects] = useState<ProjectItem[]>(items)
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    let isActive = true
    const controller = new AbortController()

    const fetchProjects = async () => {
      setStatus('loading')
      try {
        const response = await fetch(
          'https://api.github.com/users/MarttiPrittinen/repos?sort=updated&per_page=6',
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error('GitHub fetch failed')
        }

        const repos = (await response.json()) as Array<{
          id: number
          name: string
          description: string | null
          language: string | null
          html_url: string
        }>

        if (!isActive) {
          return
        }

        const mapped = repos.map(repo => ({
          name: repo.name,
          description: repo.description ?? labels.noDescription,
          stack: [repo.language ?? labels.unknownLanguage],
          links: [{ label: labels.github, href: repo.html_url }]
        }))

        setProjects(mapped.length ? mapped : items)
        setStatus('success')
      } catch (error) {
        if (!isActive) {
          return
        }
        setProjects(items)
        setStatus('error')
      }
    }

    fetchProjects()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [items, labels.github, labels.noDescription, labels.unknownLanguage])

  return (
    <motion.section
      id="projects"
      className="scroll-mt-24 px-6 py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{title}</p>
        </motion.div>
        {status === 'loading' ? (
          <motion.p variants={item} className="mt-6 text-sm text-zinc-400">
            {labels.loading}
          </motion.p>
        ) : null}
        {status === 'error' ? (
          <motion.p variants={item} className="mt-6 text-sm text-amber-200/80">
            {labels.error}
          </motion.p>
        ) : null}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.length ? (
            projects.map(project => (
            <motion.article
              key={project.name}
              variants={item}
              className={`group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 transition hover:border-white/20 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl text-zinc-100">
                    {project.name}
                  </h3>
                  {project.featured ? (
                    <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                      {labels.featured}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm text-zinc-400 md:text-base">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-zinc-300">
                  <span className="uppercase tracking-[0.2em] text-[10px] text-zinc-500">
                    {labels.language}
                  </span>
                  {project.stack.map(stackItem => (
                    <span
                      key={stackItem}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {stackItem}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-200">
                {project.links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 transition group-hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.article>
            ))
          ) : (
            <motion.p variants={item} className="text-sm text-zinc-400">
              {labels.empty}
            </motion.p>
          )}
        </div>
      </div>
    </motion.section>
  )
}
