import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { SystemPage } from '@/pages/system-page'
import { HomePage } from '@/pages/home-page'
import { PrototypePage } from '@/pages/prototype-page'
import { NotFoundPage } from '@/pages/not-found-page'
import { navigableFontStudies } from '@/data/font-studies'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Design system is the primary surface */}
        <Route path="/" element={<SystemPage />} />
        {/* Legacy path kept so old links still resolve */}
        <Route path="/system" element={<Navigate to="/" replace />} />
        {/* Marketing composition mock — not a product site */}
        <Route path="/mock" element={<HomePage />} />
        {navigableFontStudies.map((study) => (
          <Route
            key={study.id}
            path={`/font-study/${study.id}`}
            element={<HomePage titleStudy={study.id} />}
          />
        ))}
        {/* Interactive mobile pattern mock */}
        <Route path="/prototype" element={<PrototypePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
