import { cn } from '@/lib/utils'

type LogoMarkProps = {
  className?: string
  /** Pixel size of the mark (square) */
  size?: number
  title?: string
}

/**
 * Philippines UNESCO Trails mark
 *
 * Source of truth: the favicon asset. Reuse the same icon everywhere so the
 * browser tab, header, footer, and system page all stay visually aligned.
 */
export function LogoMark({ className, size = 36, title }: LogoMarkProps) {
  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <img
        src="/favicon.svg"
        alt={title ?? ''}
        aria-hidden={title ? undefined : true}
        title={title}
        className="h-full w-full object-contain"
        draggable={false}
      />
    </span>
  )
}

type LogoProps = {
  className?: string
  markSize?: number
  /** Show wordmark text beside the mark */
  wordmark?: boolean
  /** Compact: title + tagline handling is tuned in the layout */
  href?: string
  asLink?: boolean
}

/** Full lockup: mark + wordmark + tagline */
export function Logo({
  className,
  markSize = 36,
  wordmark = true,
  href = '/',
}: LogoProps) {
  const content = (
    <>
      <LogoMark size={markSize} />
      {wordmark ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="font-display text-[0.98rem] font-medium tracking-[0.01em] text-[var(--text-heading)] transition-colors group-hover:text-primary sm:text-[1.05rem]">
            Philippines UNESCO Trails
          </span>
          <span className="mt-0.5 text-[0.57rem] font-medium tracking-[0.11em] text-muted-foreground">
            Treading Routes, Discovering Roots
          </span>
        </span>
      ) : null}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          'group inline-flex items-center gap-2.5 no-underline outline-none',
          'focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          className
        )}
        aria-label="Philippines UNESCO Trails — home"
      >
        {content}
      </a>
    )
  }

  return (
    <span
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label="Philippines UNESCO Trails"
    >
      {content}
    </span>
  )
}

/** Wordmark only (no mark) — for dense contexts */
export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display text-lg font-medium tracking-[0.01em] text-[var(--text-heading)]',
        className
      )}
    >
      Philippines UNESCO Trails
    </span>
  )
}
