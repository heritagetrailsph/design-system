import type { ReactNode } from 'react'
import { MapPinOff, WifiOff, Stamp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type EmptyVariant = 'stamps' | 'trails' | 'offline' | 'generic'

const presets: Record<
  EmptyVariant,
  { icon: typeof Stamp; title: string; body: string; cta?: string }
> = {
  stamps: {
    icon: Stamp,
    title: 'No stamps yet',
    body: 'Your first trail is waiting. Complete a walk to earn your first gold stamp.',
    cta: 'Explore trails',
  },
  trails: {
    icon: MapPinOff,
    title: 'No trails match',
    body: 'Try another filter or region — there’s heritage within a morning’s walk of most cities.',
    cta: 'Clear filters',
  },
  offline: {
    icon: WifiOff,
    title: 'You’re offline',
    body: 'Saved trails still work. Connect again to sync new stamps and stories.',
    cta: 'Try again',
  },
  generic: {
    icon: MapPinOff,
    title: 'Nothing here yet',
    body: 'Check back soon — we’re still laying the cobblestones.',
  },
}

type EmptyStateProps = {
  variant?: EmptyVariant
  title?: string
  body?: string
  actionLabel?: string
  onAction?: () => void
  className?: string
  children?: ReactNode
  /** Announce only when the state appears after an asynchronous update. */
  announce?: boolean
}

/**
 * Empty states — warm, practical, never shaming.
 * Prefer preset copy from the design system voice.
 */
export function EmptyState({
  variant = 'generic',
  title,
  body,
  actionLabel,
  onAction,
  className,
  children,
  announce = false,
}: EmptyStateProps) {
  const preset = presets[variant]
  const Icon = preset.icon
  const resolvedTitle = title ?? preset.title
  const resolvedBody = body ?? preset.body
  const resolvedCta = actionLabel ?? preset.cta

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4 rounded-[var(--radius-xl)] border border-dashed border-border bg-muted/40 px-6 py-12 text-center',
        className
      )}
      role={announce ? 'status' : undefined}
    >
      <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
        <Icon className="size-6" strokeWidth={1.75} />
      </span>
      <div className="max-w-sm space-y-2">
        <h3 className="text-xl font-medium text-[var(--text-heading)]">
          {resolvedTitle}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{resolvedBody}</p>
      </div>
      {children}
      {resolvedCta && onAction ? (
        <Button onClick={onAction} className="rounded-full font-semibold">
          {resolvedCta}
        </Button>
      ) : null}
    </div>
  )
}
