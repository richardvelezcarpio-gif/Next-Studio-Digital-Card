import { profile } from '../data/profile'

export function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${profile.name}`,
    `ORG:${profile.company}`,
    `TITLE:${profile.title.en}`,
    `TEL;TYPE=CELL:${profile.phoneE164}`,
    `EMAIL:${profile.email}`,
    `URL;TYPE=WORK:${profile.website}`,
    `URL;TYPE=PROFILE:${profile.cardUrl}`,
    `ADR;TYPE=WORK:;;${profile.location};;;;`,
    'END:VCARD',
  ].join('\r\n')

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = 'richard-velez-next-studio.vcf'
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

export async function shareCard(url: string) {
  const payload = {
    title: `${profile.name} | ${profile.company}`,
    text: `${profile.name} — ${profile.company}`,
    url,
  }

  if (navigator.share) {
    await navigator.share(payload)
    return 'shared'
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url)
    return 'copied'
  }

  const textarea = document.createElement('textarea')
  textarea.value = url
  textarea.setAttribute('readonly', '')
  textarea.style.cssText = 'position:fixed;opacity:0;pointer-events:none;'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  textarea.remove()
  if (!copied) throw new Error('Copy failed')
  return 'copied'
}
