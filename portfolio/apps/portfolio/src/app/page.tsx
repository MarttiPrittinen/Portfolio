'use client'

import { useState } from 'react'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import Skills from '@/components/Skills'
import { portfolioContent } from '@/content/portfolio'
import type { Locale } from '@/types/portfolio'

export default function Home() {
  const [locale, setLocale] = useState<Locale>('fi')
  const content = portfolioContent[locale]

  return (
    // overflow-hidden pois -> ei “pallo”/blur leikkausvilahdusta
    // jos haluat estää vaakascrollin, käytä overflow-x-hidden
    <main className="relative overflow-x-hidden">
      <Navbar locale={locale} onLocaleChange={setLocale} name={content.hero.name} />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Experience title={content.experience.title} items={content.experience.items} />
      <Projects title={content.projects.title} items={content.projects.items} locale={locale} />
      <Skills locale={locale} />
      <Contact locale={locale} content={content.contact} socialLinks={content.footer.links} />
      <Footer content={content.footer} />
    </main>
  )
}
