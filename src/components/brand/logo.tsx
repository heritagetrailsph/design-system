import { useId } from 'react'
import { cn } from '@/lib/utils'

type LogoMarkProps = {
  className?: string
  /** Pixel size of the mark (square) */
  size?: number
  title?: string
}

/**
 * Heritage Trails PH mark — "Morning gateway"
 *
 * Concept: a passport-stamp seal holding a heritage arch with a rising
 * sun and a quiet trail leading in. Indigo plaque + honey gold inscription.
 * Not a UNESCO mark; not a flag copy.
 */
export function LogoMark({ className, size = 36, title }: LogoMarkProps) {
  const uid = useId().replace(/:/g, '')
  const sunId = `ht-sun-${uid}`
  const plaqueId = `ht-plaque-${uid}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={sunId} x1="24" y1="14" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D08F" />
          <stop offset="0.55" stopColor="#EAB14E" />
          <stop offset="1" stopColor="#C9922E" />
        </linearGradient>
        <linearGradient id={plaqueId} x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1B3D6B" />
          <stop offset="1" stopColor="#13294A" />
        </linearGradient>
      </defs>

      {/* Plaque / app tile */}
      <rect width="48" height="48" rx="12" fill={`url(#${plaqueId})`} />

      {/* Soft inner vignette */}
      <rect x="3" y="3" width="42" height="42" rx="10" stroke="#4E7BB0" strokeOpacity="0.35" strokeWidth="1" />

      {/* Stamp double ring */}
      <circle cx="24" cy="24" r="16.5" stroke="#EAB14E" strokeOpacity="0.9" strokeWidth="1.35" />
      <circle cx="24" cy="24" r="14.25" stroke="#EAB14E" strokeOpacity="0.45" strokeWidth="0.9" />

      {/* Heritage gateway arch */}
      <path
        d="M15.5 31.5V22.5C15.5 17.8 19.2 14 24 14C28.8 14 32.5 17.8 32.5 22.5V31.5"
        stroke="#FCFBF8"
        strokeOpacity="0.92"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arch threshold */}
      <path
        d="M15.5 31.5H32.5"
        stroke="#FCFBF8"
        strokeOpacity="0.35"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Rising sun inside the arch */}
      <circle cx="24" cy="22.25" r="4.1" fill={`url(#${sunId})`} />
      {/* Soft sun halo */}
      <circle cx="24" cy="22.25" r="5.6" stroke="#EAB14E" strokeOpacity="0.35" strokeWidth="0.75" />

      {/* Quiet trail leading into the gateway */}
      <path
        d="M18.5 36.5C20.2 34.2 21.6 33.2 24 33.2C26.4 33.2 27.8 34.2 29.5 36.5"
        stroke="#EAB14E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.75 36.5C21.7 35.35 22.6 34.85 24 34.85C25.4 34.85 26.3 35.35 27.25 36.5"
        stroke="#EAB14E"
        strokeOpacity="0.45"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}

type LogoProps = {
  className?: string
  markSize?: number
  /** Show wordmark text beside the mark */
  wordmark?: boolean
  /** Compact: "Heritage Trails" without PH on very small screens handled by CSS */
  href?: string
  asLink?: boolean
}

/** Full lockup: mark + Spectral wordmark */
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
          <span className="font-display text-[1.05rem] font-medium tracking-[0.01em] text-[var(--text-heading)] transition-colors group-hover:text-primary sm:text-lg">
            Heritage Trails
          </span>
          <span className="mt-0.5 text-[0.65rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            PH
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
        aria-label="Heritage Trails PH — home"
      >
        {content}
      </a>
    )
  }

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)} aria-label="Heritage Trails PH">
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
      Heritage Trails PH
    </span>
  )
}
