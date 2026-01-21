export type Locale = 'fi' | 'en'

export type Link = {
  label: string
  href: string
}

export type Hero = {
  name: string
  title: string
  subtitle: string
  location: string
  ctaPrimary: Link
  ctaSecondary: Link
}

export type About = {
  title: string
  lead: string
  paragraphs: string[]
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  summary: string[]
  technologies: string[]
}

export type ProjectItem = {
  name: string
  description: string
  stack: string[]
  links: Link[]
  featured?: boolean
}

export type SkillGroup = {
  label: string
  skills: string[]
}

export type Contact = {
  title: string
  description: string
  email: string
  ctaLabel: string
  form: {
    nameLabel: string
    emailLabel: string
    messageLabel: string
    submitLabel: string
  }
}

export type Footer = {
  text: string
  links: Link[]
}

export type PortfolioContent = {
  hero: Hero
  about: About
  experience: {
    title: string
    items: ExperienceItem[]
  }
  projects: {
    title: string
    items: ProjectItem[]
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  contact: Contact
  footer: Footer
}
