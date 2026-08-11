import { Link } from 'react-router-dom'
import type { Lang } from '../data/profile'

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  return (
    <div className="language-switch" aria-label="Language selector">
      <Link className={lang === 'en' ? 'active' : ''} to="/en" aria-label="English" title="English">
        <img className="language-flag" src="/flags/us.svg" alt="United States flag" />
      </Link>
      <Link className={lang === 'es' ? 'active' : ''} to="/es" aria-label="Español" title="Español">
        <img className="language-flag" src="/flags/ec.svg" alt="Ecuador flag" />
      </Link>
    </div>
  )
}
