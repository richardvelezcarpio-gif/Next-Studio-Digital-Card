import { Link } from 'react-router-dom'
import type { Lang } from '../data/profile'

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const selectorLabel = lang === 'es' ? 'Selector de idioma' : 'Language selector'
  const isCanonicalCard = window.location.pathname.startsWith('/card/richard')
  const englishPath = isCanonicalCard ? '/card/richard?lang=en' : '/en'
  const spanishPath = isCanonicalCard ? '/card/richard?lang=es' : '/es'

  return (
    <div className="language-switch" aria-label={selectorLabel}>
      <Link className={lang === 'en' ? 'active' : ''} to={englishPath} aria-label="English" title="English">
        <img className="language-flag" src={`${import.meta.env.BASE_URL}flags/us.svg`} alt="United States flag" />
        <span>English</span>
      </Link>
      <Link className={lang === 'es' ? 'active' : ''} to={spanishPath} aria-label="Español" title="Español">
        <img className="language-flag" src={`${import.meta.env.BASE_URL}flags/ec.svg`} alt="Ecuador flag" />
        <span>Español</span>
      </Link>
    </div>
  )
}
