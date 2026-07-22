import { CheckCircle2, Bookmark, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ToastTone = 'gold' | 'success' | 'neutral'

export type AppToastData = {
  tone: ToastTone
  message: string
}

const toneStyles: Record<ToastTone, string> = {
  gold: 'border-sun-300/50 bg-sun-100 text-sun-600 dark:bg-sun-600/20 dark:text-sun-300 dark:border-sun-500/30',
  success:
    'border-sea-500/30 bg-sea-100 text-sea-700 dark:bg-sea-600/20 dark:text-sea-100 dark:border-sea-500/30',
  neutral: 'border-border bg-card text-foreground shadow-card',
}

const icons = {
  gold: Award,
  success: CheckCircle2,
  neutral: Bookmark,
}

type AppToastProps = {
  toast: AppToastData | null
  className?: string
}

/** Transient feedback — gold for stamp earn, calm for everything else. */
export function AppToast({ toast, className }: AppToastProps) {
  if (!toast) return null
  const Icon = icons[toast.tone]

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'pointer-events-none absolute inset-x-3 bottom-[5.5rem] z-40 flex justify-center',
        className
      )}
    >
      <div
        className={cn(
          'flex max-w-[min(100%,20rem)] items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold shadow-raised',
          'animate-in fade-in slide-in-from-bottom-2 duration-300',
          toneStyles[toast.tone]
        )}
      >
        <Icon className="size-4 shrink-0" strokeWidth={2} />
        <span className="leading-snug">{toast.message}</span>
      </div>
    </div>
  )
}
