import type { Lang } from './profile'

export type Service = {
  icon: 'Globe2' | 'PanelsTopLeft' | 'Bot' | 'QrCode' | 'Printer'
  title: Record<Lang, string>
  description: Record<Lang, string>
}

export const services: Service[] = [
  { icon: 'Globe2', title: { en: 'Websites', es: 'Sitios Web' }, description: { en: 'Conversion-focused websites with modern design.', es: 'Sitios modernos enfocados en convertir visitantes en clientes.' } },
  { icon: 'PanelsTopLeft', title: { en: 'Business Platforms', es: 'Plataformas de Negocio' }, description: { en: 'Custom systems for operations, CRM, documents and workflows.', es: 'Sistemas personalizados para operaciones, CRM, documentos y procesos.' } },
  { icon: 'Bot', title: { en: 'AI Solutions', es: 'Soluciones con IA' }, description: { en: 'Practical AI tools that automate repetitive business work.', es: 'Herramientas de IA prácticas que automatizan trabajo repetitivo.' } },
  { icon: 'QrCode', title: { en: 'Digital Menus', es: 'Menús Digitales' }, description: { en: 'Digital menu experiences for screens, tablets and mobile.', es: 'Menús digitales para pantallas, tabletas y dispositivos móviles.' } },
  { icon: 'Printer', title: { en: 'Printing Solutions', es: 'Soluciones de Impresión' }, description: { en: 'Print materials that extend your brand beyond the screen.', es: 'Materiales impresos que extienden tu marca más allá de la pantalla.' } },
]
