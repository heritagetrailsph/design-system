import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'
import { getMotionTokens, prefersReducedMotion } from '@/lib/motion'

type StampProps = {
  name: string
  earned?: boolean
  /** Play scale-settle when earned becomes true */
  celebrate?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { cell: 'p-2', seal: 'size-10', text: 'text-[0.6rem]' },
  md: { cell: 'p-3', seal: 'size-12 sm:size-14', text: 'text-[0.65rem] sm:text-xs' },
  lg: { cell: 'p-4', seal: 'size-16', text: 'text-xs sm:text-sm' },
}

/**
 * Heritage passport stamp cell.
 * Celebration is gold only — no emoji. Earn moment: 420ms scale-settle.
 */
export function Stamp({
  name,
  earned = false,
  celebrate = false,
  className,
  size = 'md',
}: StampProps) {
  const sealRef = useRef<HTMLSpanElement>(null)
  const s = sizes[size]

  useEffect(() => {
    if (!celebrate || !earned || !sealRef.current || prefersReducedMotion()) return
    const m = getMotionTokens()
    gsap.fromTo(
      sealRef.current,
      { scale: 1.08 },
      { scale: 1, duration: m.durationSlow, ease: m.easeOut }
    )
  }, [celebrate, earned])

  return (
    <div
      className={cn(
        'flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border text-center transition-brand',
        s.cell,
        earned
          ? 'border-sun-300/60 bg-card shadow-glow-gold'
          : 'border-dashed border-border bg-card/40 opacity-60',
        className
      )}
      aria-label={earned ? `Earned stamp: ${name}` : `Locked stamp: ${name}`}
    >
      <span
        ref={sealRef}
        className={cn(
          'flex items-center justify-center rounded-full',
          s.seal,
          earned
            ? 'bg-gradient-to-br from-sun-300 via-sun-500 to-sun-600 text-ink-900'
            : 'bg-muted text-muted-foreground'
        )}
      >
        {earned ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M8 12.5l2.5 2.5L16 9.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <span className="text-lg" aria-hidden>
            ·
          </span>
        )}
      </span>
      <span
        className={cn(
          'font-semibold leading-tight',
          s.text,
          earned ? 'text-ink-900 dark:text-[var(--text-heading)]' : 'text-muted-foreground'
        )}
      >
        {name}
      </span>
    </div>
  )
}
