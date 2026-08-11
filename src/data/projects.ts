import nextStudioLogo from '../assets/projects/next-studio-logo.png'
import nextPrintLogo from '../assets/projects/nextprint-logo.png'
import type { Lang } from './profile'

export type Project = {
  id: string
  name: string
  category: Record<Lang, string>
  description: Record<Lang, string>
  cta: Record<Lang, string>
  url: string
  image?: string
  visualLabel?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'next-studio', name: 'Next Studio', category: { en: 'Digital Agency / Business Technology', es: 'Agencia Digital / Tecnología para Negocios' },
    description: { en: 'Websites, business platforms, AI solutions and digital tools built to help businesses modernize, automate and grow.', es: 'Sitios web, plataformas para negocios, soluciones con IA y herramientas digitales creadas para ayudar a los negocios a modernizarse, automatizarse y crecer.' },
    cta: { en: 'Visit Project', es: 'Ver Proyecto' }, url: 'https://www.nextstudio.agency', image: nextStudioLogo, featured: true,
  },
  {
    id: 'next-studio-teleprompter', name: 'Next Studio Teleprompter', category: { en: 'Video / Teleprompter Web App', es: 'Video / Aplicación Web de Teleprompter' },
    description: { en: 'A browser-based teleprompter and video recording tool designed for creators, entrepreneurs and business content.', es: 'Una herramienta web de teleprompter y grabación de video diseñada para creadores, emprendedores y contenido empresarial.' },
    cta: { en: 'Open Teleprompter', es: 'Ver Teleprompter' }, url: 'https://www.nextstudiotelepronter.online', visualLabel: 'NEXT STUDIO\nTELEPROMPTER', featured: true,
  },
  {
    id: 'alexandra-suarez', name: 'Alexandra Suárez Coach', category: { en: 'Professional Website', es: 'Sitio Web Profesional' },
    description: { en: 'Professional coaching website focused on personal development, emotional growth and transformational experiences.', es: 'Sitio web profesional de coaching enfocado en desarrollo personal, crecimiento emocional y experiencias transformadoras.' },
    cta: { en: 'Visit Website', es: 'Ver Sitio' }, url: 'https://alexandrasuarez.coach/', visualLabel: 'ALEXANDRA\nSUÁREZ', featured: true,
  },
  {
    id: 'next-print-nyc', name: 'Next Print NYC', category: { en: 'Printing & Marketing Website', es: 'Sitio Web de Impresión y Marketing' },
    description: { en: 'Professional printing and marketing website for custom print products, signage and business solutions in New York.', es: 'Sitio web profesional de impresión y marketing para productos personalizados, señalización y soluciones para negocios en New York.' },
    cta: { en: 'Visit Website', es: 'Ver Sitio' }, url: 'https://www.nextprintnyc.com', image: nextPrintLogo, featured: true,
  },
  {
    id: 'next-studio-ai-business-platform', name: 'Next Studio AI Business Platform', category: { en: 'Business Platform / AI Tools', es: 'Plataforma de Negocio / Herramientas de IA' },
    description: { en: 'A unified business platform for invoices, estimates, proposals, CRM and practical AI tools.', es: 'Una plataforma unificada para facturas, estimados, propuestas, CRM y herramientas prácticas de IA.' },
    cta: { en: 'Visit Platform', es: 'Ver Plataforma' }, url: 'https://next-studio-ai-business-platform.vercel.app/en', featured: true,
  },
  {
    id: 'construction-business-manager', name: 'Construction Business Manager', category: { en: 'Construction Operations Platform', es: 'Plataforma de Operaciones de Construcción' },
    description: { en: 'A business management platform for projects, work orders, schedules, crews and change orders.', es: 'Una plataforma de gestión para proyectos, órdenes de trabajo, calendarios, equipos y cambios de obra.' },
    cta: { en: 'Visit Platform', es: 'Ver Plataforma' }, url: 'https://construction-business-manager.vercel.app', featured: true,
  },
]
