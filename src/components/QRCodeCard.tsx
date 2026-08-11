import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

export function QRCodeCard({ url, title, text }: { url: string; title: string; text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return
    QRCode.toCanvas(canvasRef.current, url, {
      width: 220,
      margin: 2,
      color: { dark: '#072b62', light: '#ffffff' },
      errorCorrectionLevel: 'H',
    }).then(() => setReady(true))
  }, [url])

  return (
    <section className="qr-card section-card">
      <div>
        <p className="eyebrow">QR + NFC READY</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <code className="card-url">{url.replace(/^https?:\/\//, '')}</code>
      </div>
      <div className="qr-frame" aria-label={ready ? 'QR code ready' : 'Generating QR code'}>
        <canvas ref={canvasRef} />
      </div>
    </section>
  )
}
