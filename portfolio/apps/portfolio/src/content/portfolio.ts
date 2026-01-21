import type { PortfolioContent } from '@/types/portfolio'

export const portfolioContent: Record<'fi' | 'en', PortfolioContent> = {
  fi: {
    hero: {
      name: 'Martti Prittinen',
      title: 'ICT-insinööriopiskelija | Ohjelmistokehittäjä',
      subtitle: 'Rakennan selkeitä ja käytännönläheisiä ohjelmistoratkaisuja.',
      location: 'Oulu, Finland',
      ctaPrimary: { label: 'Ota yhteyttä', href: '#contact' },
      ctaSecondary: { label: 'Katso projektit', href: '#projects' }
    },
    about: {
      title: 'Taustaa',
      lead: 'Olen 3. vuoden ICT-insinööriopiskelija OAMK:ssa ja etsin trainee- tai junior-roolia ohjelmistokehityksen parissa.',
      paragraphs: [
        'Minua kiinnostavat erityisesti ohjelmistojen taustalogiikka, web-sovellusten toteutus sekä tekoälyyn liittyvät ratkaisut. Opintojen ohella rakennan projekteja, joissa keskityn selkeisiin kokonaisuuksiin, toimivaan rakenteeseen ja helposti ylläpidettävään koodiin.',
        'Haen roolia, jossa pääsen oppimaan lisää käytännön kehitystyöstä, työskentelemään osana tiimiä ja soveltamaan osaamistani oikeisiin projekteihin. Arvostan ympäristöä, jossa tekeminen on huolellista ja jatkuva kehittyminen on luonteva osa työtä.'
      ],
      highlights: [
        'C++-ohjelmointi ja ongelmanratkaisu',
        'Web-kehitys (HTML, CSS, JavaScript)',
        'SQL-tietokannat ja REST-rajapinnat',
        'Kiinnostus tekoälyyn ja dataan'
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
            'Osallistuin golfkentän päivittäiseen kunnossapitoon (viheriöt, väylät, bunkkerit ja yleiset alueet).',
            'Käytin ja huolsin työvälineitä sekä koneita, ja huolehdin kentän siisteydestä ja pelattavuudesta.'
          ],
          technologies: ['Kentänhoito', 'Kunnossapito', 'Tiimityö']          
        },
        {
          role: 'Muuttotyöntekijä',
          company: 'Martela Group',
          period: 'Trainee',
          location: 'Oulu',
          summary: [
            'Työskentelin muuttotyöntekijänä: kanto, kuormaus ja purku sekä tavaroiden suojaus ja pakkaus.',
            'Kokosin ja purin kalusteita, huolehdin työskentelyn turvallisuudesta ja tein asiakaskohteissa työtä aikataulujen mukaan.'
          ],
          technologies: ['Muuttotyö', 'Kalustekasaus', 'Työturvallisuus', 'Tiimityö']          
        },
        {
          role: 'Kentänhoitaja',
          company: 'Kalajoki Golf',
          period: 'Kausityö',
          location: 'Kalajoki',
          summary: [
            'Huolehdin golfkentän kunnossapidosta ja siisteydestä sesongin aikana.',
            'Avustin kentänhoidon päivittäisissä tehtävissä ja tuessa kilpailu- ja tapahtumapäivinä.'
          ],
          technologies: ['Kentänhoito', 'Kunnossapito', 'Yhteistyö']          
        }
      ]
    },
    projects: {
      title: 'Projektit',
      items: []
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
      title: 'ICT Engineering Student | Software Developer',
      subtitle: 'I build clear, practical solutions through studies and hands-on work.',
      location: 'Oulu, Finland',
      ctaPrimary: { label: 'Get in touch', href: '#contact' },
      ctaSecondary: { label: 'View projects', href: '#projects' }
    },
    about: {
      title: 'About',
      lead: 'I am a third-year ICT engineering student at Oulu University of Applied Sciences, seeking an internship or junior role in software development.',
      paragraphs: [
        'I am particularly interested in backend logic, web application development, and AI-related solutions. Alongside my studies, I build projects that focus on clear structure, solid functionality, and maintainable code.',
        'I am looking for a role where I can continue learning through real development work, collaborate as part of a team, and apply my skills to real-world projects. I value careful engineering and environments that support continuous improvement.'
      ],
      highlights: [
        'C++ programming and problem solving',
        'Web development (HTML, CSS, JavaScript)',
        'SQL databases and REST APIs',
        'Interest in AI and data-driven solutions'
      ]
    },
    skills: {
      title: 'Skills',
      groups: [
        { label: 'Core', skills: ['C++'] },
        { label: 'Web', skills: ['HTML/CSS', 'JavaScript', 'REST APIs'] },
        { label: 'Data', skills: ['SQL'] },
        { label: 'Workflow', skills: ['Git'] }
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
            'Worked on daily golf course maintenance (greens, fairways, bunkers, and surrounding areas).',
            'Operated and maintained tools and equipment, ensuring the course remained clean and playable.'
          ],
          technologies: ['Course maintenance', 'Upkeep', 'Teamwork']          
        },
        {
          role: 'Mover / Relocation Worker',
          company: 'Martela Group',
          period: 'Trainee',
          location: 'Oulu',
          summary: [
            'Worked as a mover: loading/unloading, carrying, packing, and protecting items during transport.',
            'Assembled and disassembled furniture, followed safety procedures, and worked to tight schedules at customer sites.'
          ],
          technologies: ['Relocation', 'Furniture assembly', 'Safety', 'Teamwork']          
        },
        {
          role: 'Golf Course Maintenance Worker',
          company: 'Kalajoki Golf',
          period: 'Seasonal',
          location: 'Kalajoki',
          summary: [
            'Supported seasonal golf course upkeep and ensured the course stayed in great condition.',
            'Assisted with day-to-day maintenance tasks and provided extra support during events and competitions.'
          ],
          technologies: ['Course maintenance', 'Upkeep', 'Collaboration']          
        }
      ]
    },
    projects: {
      title: 'Projects',
      items: []
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
