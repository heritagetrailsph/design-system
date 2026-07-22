import { Link } from 'react-router-dom'
import { FlaskConical } from 'lucide-react'
import { cn } from '@/lib/utils'

type MockBannerProps = {
  /** Short label for what this surface tests */
  label?: string
  className?: string
}

/**
 * Persistent reminder that marketing and app surfaces are composition mocks
 * for design-system validation — not a production product site.
 */
export function MockBanner({
  label = 'Composition mock for design system testing',
  className,
}: MockBannerProps) {
  return (
    <div
      role="note"
      className={cn(
        'border-b border-border/80 bg-muted/80 text-muted-foreground',
        className
      )}
    >
      <div className="container-page flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2.5 text-sm">
        <p className="flex w-full min-w-0 items-center gap-2 sm:w-auto sm:flex-1">
          <FlaskConical className="size-3.5 shrink-0 text-primary" aria-hidden />
          <span>
            <span className="font-semibold text-foreground">Mock surface.</span>{' '}
            {label}
          </span>
        </p>
        <Link
          to="/"
          className="shrink-0 font-semibold text-primary underline-offset-4 hover:underline"
        >
          Open design system
        </Link>
      </div>
    </div>
  )
}
