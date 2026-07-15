import { cn } from '@/lib/utils'

type LogoMarkProps = {
  className?: string
  /** Pixel size of the mark (square) */
  size?: number
  title?: string
}

/**
 * PH UNESCO Heritage and Nature Trails mark
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
  /** Secondary line under the wordmark (defaults to design system lab) */
  tagline?: string
}

/** Full lockup: mark + wordmark + tagline */
export function Logo({
  className,
  markSize = 36,
  wordmark = true,
  href = '/',
  tagline = 'Design system lab',
}: LogoProps) {
  const content = (
    <>
      <LogoMark size={markSize} />
      {wordmark ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="truncate text-[0.98rem] font-medium tracking-[0.01em] text-[var(--text-heading)] transition-colors group-hover:text-primary sm:text-[1.05rem]">
            PH UNESCO Heritage and Nature Trails
          </span>
          <span className="mt-0.5 text-[0.57rem] font-medium tracking-[0.11em] text-muted-foreground">
            {tagline}
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
        aria-label="PH UNESCO Heritage and Nature Trails design system"
      >
        {content}
      </a>
    )
  }

  return (
    <span
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label="PH UNESCO Heritage and Nature Trails design system"
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
        'text-lg font-medium tracking-[0.01em] text-[var(--text-heading)]',
        className
      )}
    >
      PH UNESCO Heritage and Nature Trails
    </span>
  )
}
