import { Link } from 'react-router-dom'
import type { Lang } from '../data/profile'

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  return (
    <div className="language-switch" aria-label="Language selector">
      <Link className={lang === 'en' ? 'active' : ''} to="/en">EN</Link>
      <Link className={lang === 'es' ? 'active' : ''} to="/es">ES</Link>
    </div>
  )
}
