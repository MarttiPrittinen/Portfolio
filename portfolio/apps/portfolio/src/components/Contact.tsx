'use client'

import type { Contact as ContactContent, Link, Locale } from '@/types/portfolio'
import { motion } from 'framer-motion'
import { ExternalLink, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

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

type ContactProps = {
  locale: Locale
  content: ContactContent
  socialLinks: Link[]
}

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const iconMap: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
}

export function Contact({ locale, content, socialLinks }: ContactProps) {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  )
  const [notice, setNotice] = useState('')

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (!formState.name.trim()) {
      nextErrors.name = locale === 'fi' ? 'Täytä nimesi.' : 'Please add your name.'
    }

    if (!emailPattern.test(formState.email.trim())) {
      nextErrors.email =
        locale === 'fi' ? 'Syötä kelvollinen sähköposti.' : 'Enter a valid email.'
    }

    if (formState.message.trim().length < 10) {
      nextErrors.message =
        locale === 'fi'
          ? 'Kirjoita vähintään 10 merkkiä.'
          : 'Message should be at least 10 characters.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    setStatus('sending')
    setNotice('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, locale })
      })

      const payload = (await response.json()) as { ok: boolean; message?: string }

      if (!response.ok || !payload.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      setNotice(
        payload.message || (locale === 'fi' ? 'Viesti vastaanotettu.' : 'Message received.')
      )
      setFormState({ name: '', email: '', message: '' })
      setErrors({})
    } catch {
      setStatus('error')
      setNotice(
        locale === 'fi'
          ? 'Lomaketta ei voitu lähettää. Yritä uudelleen.'
          : 'Unable to send. Please try again.'
      )
    }
  }

  return (
    <motion.section
      id="contact"
      className="scroll-mt-24 px-6 py-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr]">
        <motion.div variants={item}>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            {content.title}
          </p>
          <h2 className="font-heading mt-4 text-3xl text-zinc-100 md:text-4xl">
            {content.description}
          </h2>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              {content.ctaLabel}
            </p>
            <a
              href={`mailto:${content.email}`}
              className="mt-4 inline-flex items-center gap-2 text-lg text-zinc-100"
            >
              <Mail className="h-5 w-5" />
              {content.email}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-300">
            {socialLinks.map(link => {
              const Icon = iconMap[link.label] ?? ExternalLink
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              )
            })}
          </div>
        </motion.div>
        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-slate-950/70 p-8"
        >
          <div className="grid gap-6">
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                {content.form.nameLabel}
              </label>
              <input
                value={formState.name}
                onChange={event =>
                  setFormState(prev => ({ ...prev, name: event.target.value }))
                }
                type="text"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-cyan-400"
              />
              {errors.name ? (
                <p className="mt-2 text-xs text-rose-300">{errors.name}</p>
              ) : null}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                {content.form.emailLabel}
              </label>
              <input
                value={formState.email}
                onChange={event =>
                  setFormState(prev => ({ ...prev, email: event.target.value }))
                }
                type="email"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-cyan-400"
              />
              {errors.email ? (
                <p className="mt-2 text-xs text-rose-300">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                {content.form.messageLabel}
              </label>
              <textarea
                value={formState.message}
                onChange={event =>
                  setFormState(prev => ({ ...prev, message: event.target.value }))
                }
                rows={5}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-cyan-400"
              />
              {errors.message ? (
                <p className="mt-2 text-xs text-rose-300">{errors.message}</p>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'sending'
              ? locale === 'fi'
                ? 'Lahetetaan...'
                : 'Sending...'
              : content.form.submitLabel}
          </button>
          {notice ? (
            <p
              className={`mt-4 text-sm ${
                status === 'success' ? 'text-emerald-300' : 'text-rose-300'
              }`}
            >
              {notice}
            </p>
          ) : null}
        </motion.form>
      </div>
    </motion.section>
  )
}
