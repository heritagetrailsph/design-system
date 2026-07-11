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
          This trail ends here
        </h1>
        <p className="mx-auto mt-4 max-w-[38ch] text-base leading-relaxed text-muted-foreground">
          The page may have moved, but the heritage trails are still waiting.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full">
          <Link to="/">
            <ArrowLeft className="size-4" />
            Return home
          </Link>
        </Button>
      </div>
    </main>
  )
}
