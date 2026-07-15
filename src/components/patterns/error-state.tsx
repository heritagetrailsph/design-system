import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ErrorStateProps = {
  title?: string
  body?: string
  onRetry?: () => void
  retryLabel?: string
  className?: string
  /** Announce only when the error appears after an asynchronous update. */
  announce?: boolean
}

/**
 * Error states — practical, never shaming.
 * Default copy matches design-system voice.
 */
export function ErrorState({
  title = 'Couldn’t load this trail',
  body = 'Check your connection and try again. Your saved stamps are still safe.',
  onRetry,
  retryLabel = 'Try again',
  className,
  announce = false,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4 rounded-[var(--radius-xl)] border border-border bg-card px-6 py-12 text-center shadow-card',
        className
      )}
      role={announce ? 'alert' : undefined}
    >
      <span
        className="flex size-14 items-center justify-center rounded-2xl"
        style={{
          background: 'var(--tone-danger-bg)',
          color: 'var(--tone-danger-fg)',
        }}
      >
        <AlertCircle className="size-6" strokeWidth={1.75} />
      </span>
      <div className="max-w-sm space-y-2">
        <h3 className="text-xl font-medium text-[var(--text-heading)]">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
      {onRetry ? (
        <Button onClick={onRetry} variant="outline" className="rounded-full font-semibold">
          <RefreshCw className="size-4" />
          {retryLabel}
        </Button>
      ) : null}
    </div>
  )
}
