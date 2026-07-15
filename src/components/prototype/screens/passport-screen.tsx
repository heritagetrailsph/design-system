import { Badge } from '@/components/ui/badge'
import { Stamp } from '@/components/patterns'
import { cn } from '@/lib/utils'

export type PassportStamp = {
  id: string
  name: string
  earned: boolean
  date?: string
}

const baseStamps: PassportStamp[] = [
  { id: 'vigan', name: 'Vigan', earned: true, date: 'Mar 2026' },
  { id: 'intramuros', name: 'Intramuros', earned: true, date: 'May 2026' },
  { id: 'banaue', name: 'Banaue', earned: false },
  { id: 'bohol', name: 'Bohol', earned: false },
  { id: 'tubbataha', name: 'Tubbataha', earned: false },
  { id: 'miagao', name: 'Miagao', earned: false },
]

type PassportScreenProps = {
  /** Trail ids that were completed in this session */
  earnedTrailIds: string[]
  celebrateId?: string | null
}

export function PassportScreen({ earnedTrailIds, celebrateId }: PassportScreenProps) {
  const stamps = baseStamps.map((s) => {
    const sessionEarned = earnedTrailIds.includes(s.id)
    return {
      ...s,
      earned: s.earned || sessionEarned,
      date: s.earned ? s.date : sessionEarned ? 'Just now' : undefined,
    }
  })

  const earnedCount = stamps.filter((s) => s.earned).length
  const progress = Math.round((earnedCount / stamps.length) * 100)

  return (
    <div className="flex min-h-full flex-col">
      <div className="bg-[var(--surface-inverse)] px-5 pb-7 pt-5 text-[var(--text-inverse)]">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sun-500">
          Heritage passport
        </p>
        <h1 className="mt-1.5 text-2xl text-[var(--text-inverse)]">
          Ana&apos;s journey
        </h1>
        <div className="mt-4 flex items-center gap-3">
          <div
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15"
            role="progressbar"
            aria-valuenow={earnedCount}
            aria-valuemin={0}
            aria-valuemax={stamps.length}
            aria-label="Passport progress"
          >
            <div
              className="h-full rounded-full bg-sun-500 transition-[width] duration-[var(--duration-slow,420ms)] ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="shrink-0 text-xs text-white/80">
            {earnedCount} of {stamps.length} stamps
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 px-4 py-5">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {stamps.map((s) => (
            <div key={s.id} className="flex flex-col gap-1">
              <Stamp
                name={s.name}
                earned={s.earned}
                celebrate={celebrateId === s.id}
                size="sm"
                className={cn(s.earned && 'shadow-glow-gold')}
              />
              <p className="text-center text-[0.65rem] text-muted-foreground">
                {s.earned ? s.date : 'Not yet visited'}
              </p>
            </div>
          ))}
        </div>

        <Badge variant="gold" className="mx-auto">
          UNESCO Philippines heritage passport
        </Badge>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          Complete a trail to earn a gold stamp. Celebration is gold only — no confetti.
        </p>
      </div>
    </div>
  )
}
