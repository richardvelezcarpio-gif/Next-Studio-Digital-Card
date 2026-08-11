export type Lang = 'en' | 'es'

export const PUBLIC_CARD_URL = 'https://next-studio-digital-card.vercel.app'

export const profile = {
  slug: 'richard',
  name: 'Richard Vélez',
  company: 'Next Studio',
  title: {
    en: 'Founder / Digital Business Solutions',
    es: 'Fundador / Soluciones Digitales para Negocios',
  },
  tagline: {
    en: 'Websites, business platforms and AI solutions built to help modern businesses grow.',
    es: 'Sitios web, plataformas empresariales y soluciones con IA para ayudar a negocios modernos a crecer.',
  },
  phoneDisplay: '(239) 333-7935',
  phoneE164: '+12393337935',
  whatsappE164: '12393337935',
  email: 'info@nextprintnyc.com',
  website: 'https://www.nextstudio.agency',
  bookingUrl: 'https://www.nextstudio.agency/contact',
  location: 'New York, NY',
  cardUrl: PUBLIC_CARD_URL,
  photo: richardPhoto,
  logo: nextStudioLogo,
}
import richardPhoto from '../assets/profile/richard-velez.png'
import nextStudioLogo from '../assets/projects/next-studio-logo.png'
