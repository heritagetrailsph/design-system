import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { LogoMark } from '@/components/brand/logo'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <main className="container-page flex min-h-[100dvh] items-center justify-center py-16">
      <div className="max-w-lg text-center">
        <LogoMark size={48} className="mx-auto mb-6" />
        <p className="mb-3 text-sm font-semibold text-primary">404 · Route not found</p>
        <h1 className="font-display text-4xl tracking-tight text-[var(--text-heading)] sm:text-5xl">
          This path is not in the lab
        </h1>
        <p className="mx-auto mt-4 max-w-[40ch] text-base leading-relaxed text-muted-foreground">
          Available surfaces: design system, page mock, and app mock.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/">
              <ArrowLeft className="size-4" />
              Design system
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/mock">Page mock</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
