import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { DigitalCardPage } from './pages/DigitalCardPage'

export default function App() {
  const location = useLocation()
  const isCanonicalCardPath = location.pathname.startsWith('/card/richard')
  const canonicalLanguage = new URLSearchParams(location.search).get('lang') === 'es' ? 'es' : 'en'

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/en" element={<DigitalCardPage lang="en" />} />
      <Route path="/es" element={<DigitalCardPage lang="es" />} />
      <Route path="/card/richard" element={<DigitalCardPage lang={canonicalLanguage} />} />
      <Route path="/card/richard/*" element={<DigitalCardPage lang={canonicalLanguage} />} />
      <Route path="*" element={isCanonicalCardPath ? <DigitalCardPage lang={canonicalLanguage} /> : <Navigate to="/en" replace />} />
    </Routes>
  )
}
