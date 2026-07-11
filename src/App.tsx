import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/home-page'
import { SystemPage } from '@/pages/system-page'
import { PrototypePage } from '@/pages/prototype-page'
import { NotFoundPage } from '@/pages/not-found-page'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/system" element={<SystemPage />} />
        <Route path="/prototype" element={<PrototypePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
