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
        'Minua kiinnostavat erityisesti web-sovellusten toteutus sekä tekoälyyn liittyvät ratkaisut. Opintojen ohella rakennan projekteja, joissa keskityn selkeisiin kokonaisuuksiin, toimivaan rakenteeseen ja helposti ylläpidettävään koodiin.',
        'Haen roolia, jossa pääsen oppimaan lisää käytännön ohjelmistokehityksestä, työskentelemään osana tiimiä ja soveltamaan osaamistani oikeisiin projekteihin. Arvostan ympäristöä, jossa tekeminen on huolellista, oppiminen jatkuvaa ja laatu tärkeä osa työtä.'
      ],
    },
    experience: {
      title: 'Kokemus',
      items: [
        {
          role: 'Kentänhoitaja',
          company: 'Oulun Golf',
          period: 'Kausityö',
          location: 'Oulu • 2024-2025',
          summary: [
            'Vastasin golfkentän viheralueiden leikkuu- ja hoitotöistä: viheriöt, väylät ja karheikot sekä reunojen siistiminen.',
            'Käytin päältäajettavia ruohonleikkureita ja muita ajoneuvoja turvallisesti ja huolellisesti, ja huolsin peruskunnossapidon (puhdistus, tarkistukset, terien/perusosien kunto).',
            'Tein käsin tehtäviä hoitotöitä, kuten trimmaukset, haravoinnit ja pienet korjaustyöt, jotta kenttä pysyi siistinä ja pelattavana.',
            'Toimin osana tiimiä päivittäisen työjärjestyksen mukaan ja varmistin, että kenttä oli valmis pelaajille myös ruuhka- ja tapahtumapäivinä.'
          ],
          technologies: ['Kentänhoito', 'Kunnossapito', 'Koneiden käyttö', 'Tiimityö']
        },
        {
          role: 'Muuttotyöntekijä',
          company: 'Martela Group',
          period: 'Trainee',
          location: 'Oulu • 2024-2025',
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
          location: 'Kalajoki • 2020-2023',
          summary: [
            'Osallistuin kentän päivittäiseen ylläpitoon usean kauden ajan: leikkaukset, siistiminen ja pelipintojen kunnon seuranta eri sääolosuhteissa.',
            'Käytin päältäajettavia leikkureita sekä muita työkoneita, ja tein työvuorojen aikana myös käsityönä tehtäviä viheralueiden hoitotöitä (reunojen viimeistely, haravointi, paikkaukset).',
            'Huolehdin kentän yleisilmeestä ja turvallisuudesta: roskien keruu, kulkureittien siisteys sekä ongelmakohtien raportointi ja korjaaminen.',
            'Avustin kilpailu- ja tapahtumapäivinä valmisteluissa ja varmistin, että kenttä oli aikataulussa pelikunnossa.'
          ],
          technologies: ['Kentänhoito', 'Kunnossapito', 'Yhteistyö', 'Laatuajattelu']
        }
      ]
    },
    projects: { title: 'Projektit', items: [] },
    skills: {
      title: 'Taidot',
      groups: [
        { label: 'Core', skills: ['C++'] },
        { label: 'Web', skills: ['HTML/CSS', 'JavaScript', 'REST APIs'] },
        { label: 'Data', skills: ['SQL'] },
        { label: 'Workflow', skills: ['Git'] }
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
        'I am particularly interested in web application development and AI-related solutions. Alongside my studies, I build projects that focus on clear structure, functional design, and maintainable code.',
        'I am seeking a role where I can grow through hands-on development work, learn as part of a team, and apply my skills in real-world projects. I value environments that support continuous learning, careful engineering, and long-term quality.'
      ],
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
          location: 'Oulu • 2024-2025',
          summary: [
            'Maintained turf areas across the course: mowing and care work on greens, fairways, rough areas, and edges to keep playing surfaces consistent.',
            'Operated ride-on mowers and other course vehicles safely and efficiently, and handled basic daily upkeep (cleaning, checks, and ensuring equipment readiness).',
            'Performed hands-on maintenance tasks such as trimming, raking, and small surface fixes to improve course appearance and playability.',
            'Worked as part of the daily maintenance team and helped prepare the course for busy days and events.'
          ],
          technologies: ['Course maintenance', 'Upkeep', 'Equipment operation', 'Teamwork']
        },
        {
          role: 'Mover / Relocation Worker',
          company: 'Martela Group',
          period: 'Trainee',
          location: 'Oulu • 2024-2025',
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
          location: 'Kalajoki • 2020-2023',
          summary: [
            'Supported day-to-day course upkeep over multiple seasons, adapting maintenance routines to changing weather and course conditions.',
            'Operated ride-on mowers and other machines, and completed manual turf-care tasks (edge finishing, raking, touch-up repairs) to keep areas neat and playable.',
            'Focused on overall course presentation and safety: keeping paths and common areas clean, spotting issues early, and reporting/fixing problem areas.',
            'Provided extra support during competitions and event days to ensure the course was ready on schedule.'
          ],
          technologies: ['Course maintenance', 'Upkeep', 'Collaboration', 'Attention to detail']
        }
      ]
    },

    projects: { title: 'Projects', items: [] },
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
      ]
    }
  }
}
