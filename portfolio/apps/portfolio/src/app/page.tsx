'use client'

import { useState } from 'react'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { portfolioContent } from '@/content/portfolio'
import type { Locale } from '@/types/portfolio'

export default function Home() {
  const [locale, setLocale] = useState<Locale>('fi')
  const content = portfolioContent[locale]

  return (
    <main className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-slate-400/10 blur-[140px]" />
      </div>
      <Navbar locale={locale} onLocaleChange={setLocale} name={content.hero.name} />
      <Hero content={content.hero} />
      <About content={content.about} locale={locale} />
      <Experience title={content.experience.title} items={content.experience.items} />
      <Projects
        title={content.projects.title}
        items={content.projects.items}
        locale={locale}
      />
      <Skills title={content.skills.title} groups={content.skills.groups} />
      <Contact locale={locale} content={content.contact} socialLinks={content.footer.links} />
      <Footer content={content.footer} />
    </main>
  )
}
