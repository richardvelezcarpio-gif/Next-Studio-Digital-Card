import type { ReactNode } from 'react'

type Props = {
  href?: string
  onClick?: () => void
  icon: ReactNode
  label: string
  primary?: boolean
  external?: boolean
}

export function ActionButton({ href, onClick, icon, label, primary, external }: Props) {
  const className = `action-button${primary ? ' action-button--primary' : ''}`
  const content = <><span className="action-icon">{icon}</span><span>{label}</span></>

  if (href) {
    return <a className={className} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{content}</a>
  }

  return <button type="button" className={className} onClick={onClick}>{content}</button>
}
