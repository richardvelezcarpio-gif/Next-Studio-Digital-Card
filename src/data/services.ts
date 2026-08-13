import type { Lang } from './profile'
import websitesImage from '../assets/services/websites.webp'
import businessPlatformsImage from '../assets/services/business-platforms.jpg'
import aiSolutionsImage from '../assets/services/ai-solutions.jpg'
import digitalMenusImage from '../assets/services/digital-menus.webp'
import nextPrintLogo from '../assets/projects/nextprint-logo.png'
import digitalCardImage from '../assets/services/digital-business-card-sample.png'

export type Service = {
  icon: 'Globe2' | 'PanelsTopLeft' | 'Bot' | 'QrCode' | 'Printer' | 'ContactRound'
  image: string
  title: Record<Lang, string>
  description: Record<Lang, string>
}

export const services: Service[] = [
  { icon: 'Globe2', image: websitesImage, title: { en: 'Websites', es: 'Sitios Web' }, description: { en: 'Conversion-focused websites with modern design.', es: 'Sitios modernos enfocados en convertir visitantes en clientes.' } },
  { icon: 'PanelsTopLeft', image: businessPlatformsImage, title: { en: 'Business Platforms', es: 'Plataformas de Negocio' }, description: { en: 'Custom systems for operations, CRM, documents and workflows.', es: 'Sistemas personalizados para operaciones, CRM, documentos y procesos.' } },
  { icon: 'Bot', image: aiSolutionsImage, title: { en: 'AI Solutions', es: 'Soluciones con IA' }, description: { en: 'Practical AI tools that automate repetitive business work.', es: 'Herramientas de IA prácticas que automatizan trabajo repetitivo.' } },
  { icon: 'QrCode', image: digitalMenusImage, title: { en: 'Digital Menus', es: 'Menús Digitales' }, description: { en: 'Digital menu experiences for screens, tablets and mobile.', es: 'Menús digitales para pantallas, tabletas y dispositivos móviles.' } },
  { icon: 'Printer', image: nextPrintLogo, title: { en: 'Printing Solutions', es: 'Soluciones de Impresión' }, description: { en: 'Print materials that extend your brand beyond the screen.', es: 'Materiales impresos que extienden tu marca más allá de la pantalla.' } },
  { icon: 'ContactRound', image: digitalCardImage, title: { en: 'Digital Business Card', es: 'Tarjeta Digital de Negocio' }, description: { en: 'A polished digital card with instant contact, QR sharing and app-ready access.', es: 'Una tarjeta digital profesional con contacto instantáneo, QR y acceso listo para app.' } },
]
