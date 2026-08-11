import { Navigate, Route, Routes } from 'react-router-dom'
import { DigitalCardPage } from './pages/DigitalCardPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/en" element={<DigitalCardPage lang="en" />} />
      <Route path="/es" element={<DigitalCardPage lang="es" />} />
      <Route path="/card/richard" element={<Navigate to="/en" replace />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  )
}
