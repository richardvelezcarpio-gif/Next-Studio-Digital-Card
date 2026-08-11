import { useEffect, useState } from 'react'
import { AtSign, Bot, ExternalLink, Globe2, Mail, Phone, Printer, QrCode, Save, Share2, MessageCircle, PanelsTopLeft } from 'lucide-react'
import type { Lang } from '../data/profile'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { services } from '../data/services'
import { socialLinks } from '../data/socialLinks'
import { copy } from '../i18n/copy'
import { ActionButton } from '../components/ActionButton'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { QRCodeCard } from '../components/QRCodeCard'
import { downloadVCard, shareCard } from '../utils/contact'
import nextPrintLogo from '../assets/projects/nextprint-logo.png'

const serviceIcons = { Globe2, PanelsTopLeft, Bot, QrCode, Printer }

export function DigitalCardPage({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const [toast, setToast] = useState('')
  const shareUrl = typeof window === 'undefined' ? `${profile.cardUrl}/${lang}` : window.location.href
  const whatsappText = lang === 'es'
    ? 'Hola Richard, encontré tu información a través de tu tarjeta digital.'
    : 'Hi Richard, I found you through your digital business card.'
  const whatsappUrl = `https://wa.me/${profile.whatsappE164}?text=${encodeURIComponent(whatsappText)}`

  useEffect(() => {
    const title = lang === 'es' ? 'Richard Vélez | Tarjeta Digital Next Studio' : 'Richard Vélez | Next Studio Digital Business Card'
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', title)
  }, [lang])

  const handleShare = async () => {
    try {
      const result = await shareCard(shareUrl)
      if (result === 'copied') setToast(lang === 'es' ? 'Enlace copiado' : 'Link copied')
      setTimeout(() => setToast(''), 2200)
    } catch {
      setToast(lang === 'es' ? 'No se pudo compartir.' : 'Could not share.')
      setTimeout(() => setToast(''), 2200)
    }
  }

  return (
    <main className="site-shell">
      {toast && <div className="toast" role="status">{toast}</div>}
      <section className="hero-card">
        <div className="hero-topline">
          <div className="logo-placeholder" aria-label="Next Studio logo placeholder">NEXT STUDIO<br /><small>LOGO PLACEHOLDER</small></div>
          <LanguageSwitcher lang={lang} />
        </div>
        <div className="hero-profile">
          <div className="avatar"><img src={profile.photo} alt="Richard Vélez" /></div>
          <div className="profile-copy">
            <p className="eyebrow">{t.badge}</p>
            <h1>{profile.name}</h1>
            <p className="company-name">{profile.company}</p>
            <p className="role">{profile.title[lang]}</p>
            <p className="tagline">{profile.tagline[lang]}</p>
          </div>
        </div>
        <div className="actions-grid">
          <ActionButton href={whatsappUrl} external primary icon={<MessageCircle />} label={t.whatsapp} />
          <ActionButton href={`tel:${profile.phoneE164}`} icon={<Phone />} label={t.call} />
          <ActionButton href={`mailto:${profile.email}`} icon={<Mail />} label={t.email} />
          <ActionButton onClick={downloadVCard} icon={<Save />} label={t.save} />
          <ActionButton onClick={handleShare} icon={<Share2 />} label={t.share} />
          <ActionButton href={profile.website} external icon={<Globe2 />} label={t.website} />
        </div>
      </section>

      <section className="section-block">
        <p className="eyebrow">{t.servicesEyebrow}</p><h2>{t.servicesTitle}</h2>
        <div className="service-grid">{services.map((service) => {
          const ServiceIcon = serviceIcons[service.icon]
          return <article className="service-card" key={service.title.en}><ServiceIcon className="service-icon" aria-hidden="true" /><h3>{service.title[lang]}</h3><p>{service.description[lang]}</p></article>
        })}</div>
      </section>

      <section className="section-block">
        <p className="eyebrow">{t.projectsEyebrow}</p><h2>{t.projectsTitle}</h2>
        <div className="project-grid">{projects.filter((project) => project.featured).map((project) => <a className="project-card" key={project.id} href={project.url} target="_blank" rel="noopener noreferrer"><div className="project-copy"><span>{project.category[lang]}</span><h3>{project.name}</h3><p>{project.description[lang]}</p></div><strong>{project.cta[lang]} <ExternalLink size={16} /></strong></a>)}</div>
      </section>

      <section className="about-card section-card"><div><p className="eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2></div><p>{t.aboutText}</p></section>
      <QRCodeCard url={profile.cardUrl} title={t.qrTitle} text={t.qrText} />

      <section className="social-card" aria-label="Next Studio social links">
        {socialLinks.map(({ label, href }) => href ? <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><AtSign size={19} /><span>{label}</span></a> : <span className="social-link social-link--pending" key={label} aria-label={`${label} link pending`}><AtSign size={19} /><span>{label}</span></span>)}
      </section>

      <section className="connect-card"><div><p className="eyebrow">NEXT STUDIO</p><h2>{t.connectTitle}</h2><p>{t.connectText}</p></div><div className="connect-actions"><ActionButton href={whatsappUrl} external primary icon={<MessageCircle />} label={t.whatsapp} /><ActionButton href={profile.bookingUrl} external icon={<Phone />} label={t.booking} /></div></section>
      <footer><div className="company-logos" aria-label="Next Studio and Next Print NYC"><span className="company-logo company-logo--next-studio"><img src={profile.logo} alt="Next Studio" /></span><img className="company-logo company-logo--next-print" src={nextPrintLogo} alt="Next Print NYC" /></div><p>{t.footer}</p><a href={profile.website} target="_blank" rel="noreferrer">www.nextstudio.agency</a></footer>
    </main>
  )
}
