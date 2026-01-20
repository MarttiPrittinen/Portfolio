import type { PortfolioContent } from '@/types/portfolio'

export const portfolioContent: Record<'fi' | 'en', PortfolioContent> = {
  fi: {
    hero: {
      name: 'Martti Prittinen',
      title: 'ICT Engineering Student | C++ & Web Development',
      subtitle: 'Rakennan selkeitä ja käytännönläheisiä ratkaisuja opiskelun ja työn kautta.',
      location: 'Oulu, Finland',
      ctaPrimary: { label: 'Ota yhteyttä', href: '#contact' },
      ctaSecondary: { label: 'Katso projektit', href: '#projects' }
    },
    about: {
      title: 'Taustaa',
      lead: 'Olen 3. vuoden ICT-insinööriopiskelija OAMK:ssa ja etsin trainee- tai junior-roolia.',
      paragraphs: [
        'Minua kiinnostavat erityisesti C++-kehitys ja web-sovellusten toteutus. Opintojen ohella rakennan projekteja, joissa yhdistyvät käytännönläheisyys, hyvä käyttökokemus ja selkeä koodi.',
        'Olen #OPEN_TO_WORK ja haen trainee- tai junior-rooleja, joissa pääsen kehittymään tiimissä ja tuomaan osaamiseni hyötykäyttöön.'
      ],
      highlights: [
        'C++-ohjelmointi ja ongelmanratkaisu',
        'Web-kehitys (HTML, CSS, JavaScript)',
        'SQL-tietokannat ja REST-rajapinnat'
      ]
    },
    experience: {
      title: 'Kokemus',
      items: [
        {
          role: 'Kentänhoitaja',
          company: 'Oulun Golf',
          period: 'Kausityö',
          location: 'Oulu',
          summary: [
            'Palvelin asiakkaita ja huolehdin sujuvasta asiakaskokemuksesta klubitalolla.',
            'Käytin varaus- ja kassajärjestelmiä sekä toiminnan päivittäistä koordinointia.'
          ],
          technologies: ['Asiakaspalvelu', 'Varausjärjestelmät', 'Tiimityö']
        },
        {
          role: 'Muuttotyöntekijä',
          company: 'Martela Group',
          period: 'Trainee',
          location: 'Oulu',
          summary: [
            'Osallistuin tuotannon ja logistiikan käytännön tehtäviin sekä laadun varmistamiseen.',
            'Opettelin prosessien sujuvoittamista ja tiimityön merkitystä arjessa.'
          ],
          technologies: ['Prosessit', 'Laatu', 'Tiimityö']
        },
        {
          role: 'Kentänhoitaja',
          company: 'Kalajoki Golf',
          period: 'Kausityö',
          location: 'Kalajoki',
          summary: [
            'Huolehdin asiakaspalvelusta ja päivittäisestä toiminnasta kenttäympäristössä.',
            'Tuin tapahtumien ja kilpailujen järjestelyjä kiireisinä sesonkeina.'
          ],
          technologies: ['Asiakaspalvelu', 'Tapahtumat', 'Yhteistyö']
        }
      ]
    },
    projects: {
      title: 'Projektit',
      items: [
        {
          name: 'Aurora Dashboard',
          description: 'Reaaliaikainen KPI-näkymä teknologia-startupille.',
          stack: ['JavaScript', 'HTML/CSS', 'REST APIs'],
          links: [
            { label: 'Case study', href: '#' },
            { label: 'GitHub', href: '#' }
          ],
          featured: true
        },
        {
          name: 'Nordic Notes',
          description: 'Minimalistinen muistiinpanoalusta vahvalla synkronoinnilla.',
          stack: ['JavaScript', 'SQL', 'REST APIs'],
          links: [{ label: 'Live', href: '#' }]
        },
        {
          name: 'Signal Brand Site',
          description: 'Brändisivusto, jossa animaatiot ohjaavat tarinankerrontaa.',
          stack: ['HTML/CSS', 'JavaScript', 'Git'],
          links: [{ label: 'Live', href: '#' }]
        }
      ]
    },
    skills: {
      title: 'Taidot',
      groups: [
        {
          label: 'Core',
          skills: ['C++']
        },
        {
          label: 'Web',
          skills: ['HTML/CSS', 'JavaScript', 'REST APIs']
        },
        {
          label: 'Data',
          skills: ['SQL']
        },
        {
          label: 'Workflow',
          skills: ['Git']
        }
      ]
    },
    contact: {
      title: 'Ota yhteyttä',
      description: 'Kiinnostuitko yhteistyöstä? Lähetä viesti ja jatketaan keskustelua.',
      email: 'martti.prittinen@gmail.com',
      ctaLabel: 'Lähetä viesti',
      form: {
        nameLabel: 'Nimi',
        emailLabel: 'Sähköposti',
        messageLabel: 'Viesti',
        submitLabel: 'Lähetä'
      }
    },
    footer: {
      text: 'Rakennettu Next.js:llä ja Tailwind CSS:llä.',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/martti-prittinen-404a95336/' },
        { label: 'GitHub', href: 'https://github.com/MarttiPrittinen' },
        { label: 'CV', href: '#' }
      ]
    }
  },
  en: {
    hero: {
      name: 'Martti Prittinen',
      title: 'ICT Engineering Student | C++ & Web Development',
      subtitle: 'I build clear, practical solutions through studies and hands-on work.',
      location: 'Oulu, Finland',
      ctaPrimary: { label: 'Get in touch', href: '#contact' },
      ctaSecondary: { label: 'View projects', href: '#projects' }
    },
    about: {
      title: 'About',
      lead: 'I am a 3rd-year ICT engineering student at OAMK, looking for trainee or junior roles.',
      paragraphs: [
        'I focus on C++ development and web applications. Alongside my studies, I build projects that combine practical value, solid UX, and clean code.',
        'I am #OPEN_TO_WORK and actively seeking trainee or junior opportunities where I can grow with a team and contribute from day one.'
      ],
      highlights: [
        'C++ programming and problem solving',
        'Web development (HTML, CSS, JavaScript)',
        'SQL databases and REST APIs'
      ]
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Golf Course Maintenance Worker',
          company: 'Oulun Golf',
          period: 'Seasonal',
          location: 'Oulu',
          summary: [
            'Supported customers and ensured smooth daily operations at the clubhouse.',
            'Worked with booking and point-of-sale systems while coordinating day-to-day tasks.'
          ],
          technologies: ['Customer service', 'Booking systems', 'Teamwork']
        },
        {
          role: 'Mover / Relocation Worker',
          company: 'Martela Group',
          period: 'Trainee',
          location: 'Oulu',
          summary: [
            'Contributed to hands-on production and logistics tasks with a focus on quality.',
            'Learned how to streamline workflows and collaborate effectively in a team.'
          ],
          technologies: ['Processes', 'Quality', 'Teamwork']
        },
        {
          role: 'Golf Course Maintenance Worker',
          company: 'Kalajoki Golf',
          period: 'Seasonal',
          location: 'Kalajoki',
          summary: [
            'Handled customer service and daily operations in a fast-paced seasonal setting.',
            'Supported event and competition arrangements during peak periods.'
          ],
          technologies: ['Customer service', 'Events', 'Collaboration']
        }
      ]
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Aurora Dashboard',
          description: 'Real-time KPI dashboard for a technology startup.',
          stack: ['JavaScript', 'HTML/CSS', 'REST APIs'],
          links: [
            { label: 'Case study', href: '#' },
            { label: 'GitHub', href: '#' }
          ],
          featured: true
        },
        {
          name: 'Nordic Notes',
          description: 'Minimal note-taking platform with robust syncing.',
          stack: ['JavaScript', 'SQL', 'REST APIs'],
          links: [{ label: 'Live', href: '#' }]
        },
        {
          name: 'Signal Brand Site',
          description: 'Brand site where motion guides the narrative.',
          stack: ['HTML/CSS', 'JavaScript', 'Git'],
          links: [{ label: 'Live', href: '#' }]
        }
      ]
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          label: 'Core',
          skills: ['C++']
        },
        {
          label: 'Web',
          skills: ['HTML/CSS', 'JavaScript', 'REST APIs']
        },
        {
          label: 'Data',
          skills: ['SQL']
        },
        {
          label: 'Workflow',
          skills: ['Git']
        }
      ]
    },
    contact: {
      title: 'Contact',
      description: 'Interested in collaborating? Send a message and let’s talk.',
      email: 'martti.prittinen@gmail.com',
      ctaLabel: 'Send message',
      form: {
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        submitLabel: 'Send'
      }
    },
    footer: {
      text: 'Built with Next.js and Tailwind CSS.',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/martti-prittinen-404a95336/' },
        { label: 'GitHub', href: 'https://github.com/MarttiPrittinen' },
        { label: 'Resume', href: '#' }
      ]
    }
  }
}
