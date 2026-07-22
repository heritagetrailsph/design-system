import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PhoneFrameProps = {
  children: ReactNode
  className?: string
  /** Optional label under the device */
  caption?: string
}

/**
 * Device chrome for the interactive mobile prototype.
 * Fixed 390×760 canvas matches the design-system mobile kit.
 */
export function PhoneFrame({ children, className, caption }: PhoneFrameProps) {
  return (
    <div className={cn('flex w-full flex-col items-center gap-4', className)}>
      <div
        className={cn(
          'relative w-full max-w-[390px]',
          'rounded-[2.25rem] border-[3px] border-ink-900/90 bg-ink-900 p-2.5',
          'shadow-[0_24px_80px_-12px_color-mix(in_oklab,var(--ph-indigo-900)_45%,transparent),0_8px_24px_-8px_color-mix(in_oklab,var(--ph-indigo-900)_25%,transparent)]',
          'dark:border-ink-700 dark:bg-ink-900'
        )}
      >
        {/* Side buttons (decorative) */}
        <span
          className="absolute -left-[5px] top-28 h-8 w-[3px] rounded-l-sm bg-ink-700"
          aria-hidden
        />
        <span
          className="absolute -left-[5px] top-40 h-12 w-[3px] rounded-l-sm bg-ink-700"
          aria-hidden
        />
        <span
          className="absolute -left-[5px] top-56 h-12 w-[3px] rounded-l-sm bg-ink-700"
          aria-hidden
        />
        <span
          className="absolute -right-[5px] top-36 h-16 w-[3px] rounded-r-sm bg-ink-700"
          aria-hidden
        />

        <div className="relative overflow-hidden rounded-[1.85rem] bg-[var(--surface-page)]">
          {/* Dynamic island */}
          <div
            className="pointer-events-none absolute left-1/2 top-2.5 z-30 h-[1.65rem] w-[7.25rem] -translate-x-1/2 rounded-full bg-ink-900"
            aria-hidden
          />

          {/* Status bar */}
          <div className="relative z-20 flex h-11 items-end justify-between px-6 pb-1.5 text-[0.7rem] font-semibold text-[var(--text-heading)]">
            <span>9:41</span>
            <div className="flex items-center gap-1.5" aria-hidden>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
                <rect x="0" y="7" width="3" height="4" rx="0.5" />
                <rect x="4" y="5" width="3" height="6" rx="0.5" />
                <rect x="8" y="3" width="3" height="8" rx="0.5" />
                <rect x="12" y="1" width="3" height="10" rx="0.5" opacity="0.35" />
              </svg>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
                <path d="M8 2.5c1.8 0 3.4.7 4.6 1.9l-1.1 1.1A5 5 0 008 4.2a5 5 0 00-3.5 1.3L3.4 4.4A6.6 6.6 0 018 2.5z" />
                <path d="M8 0C11 0 13.7 1.2 15.6 3.2l-1.1 1.1A8.4 8.4 0 008 1.8 8.4 8.4 0 001.5 4.3L.4 3.2A11 11 0 018 0z" opacity="0.45" />
                <circle cx="8" cy="9.5" r="1.2" />
              </svg>
              <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
                <rect
                  x="0.5"
                  y="0.5"
                  width="20"
                  height="10"
                  rx="2.5"
                  stroke="currentColor"
                  opacity="0.4"
                />
                <rect x="2" y="2" width="14" height="7" rx="1.5" fill="currentColor" />
                <path d="M22 3.5v4a1.5 1.5 0 000-4z" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* App canvas — fixed height so scroll stays inside the phone */}
          <div className="relative h-[min(44rem,calc(100dvh-12rem))] min-h-[36rem] sm:h-[47.5rem]">
            {children}
          </div>
        </div>
      </div>

      {caption ? (
        <p className="max-w-sm text-center text-sm text-muted-foreground">{caption}</p>
      ) : null}
    </div>
  )
}
