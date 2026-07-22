import { useMemo, useState } from 'react'
import { Bell, Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  PhotoBlock,
  PhotoCaption,
  TrailCardRow,
  EmptyState,
  MetaRowFromString,
} from '@/components/patterns'
import type { Trail, TrailTone } from '@/data/trails'
import { trails } from '@/data/trails'
import { cn } from '@/lib/utils'

type FilterId = 'all' | 'colonial' | 'nature' | 'history' | 'evening'

const filters: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'colonial', label: 'Colonial' },
  { id: 'nature', label: 'Nature' },
  { id: 'history', label: 'History' },
  { id: 'evening', label: 'Evening' },
]

function matchesFilter(trail: Trail, filter: FilterId, query: string): boolean {
  const q = query.trim().toLowerCase()
  if (q) {
    const hay = `${trail.name} ${trail.region} ${trail.story} ${trail.badge}`.toLowerCase()
    if (!hay.includes(q)) return false
  }
  switch (filter) {
    case 'colonial':
      return trail.region.toLowerCase().includes('colonial')
    case 'nature':
      return trail.tone === 'sea' || trail.badge === 'Nature'
    case 'history':
      return trail.badge === 'History' || trail.region.toLowerCase().includes('baroque')
    case 'evening':
      return trail.meta.toLowerCase().includes('evening')
    default:
      return true
  }
}

const toneToBadge: Record<TrailTone, 'gold' | 'sea' | 'terracotta' | 'indigo'> = {
  gold: 'gold',
  sea: 'sea',
  terracotta: 'terracotta',
  indigo: 'indigo',
}

type ExploreScreenProps = {
  onOpenTrail: (trail: Trail) => void
}

export function ExploreScreen({ onOpenTrail }: ExploreScreenProps) {
  const [filter, setFilter] = useState<FilterId>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => trails.filter((t) => matchesFilter(t, filter, query)),
    [filter, query]
  )

  const featured = filtered[0] ?? trails[0]
  const rest = filtered.filter((t) => t.id !== featured.id)

  return (
    <div className="flex flex-col gap-5 px-4 pb-6 pt-1">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-muted-foreground">Mabuhay, Ana</p>
          <h1 className="text-[1.65rem] leading-tight text-[var(--text-heading)]">
            Trails near you
          </h1>
        </div>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="shrink-0 rounded-xl"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
        </Button>
      </header>

      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search places, trails, stories"
          className="h-11 rounded-xl border-border bg-card pl-9 text-sm shadow-sm"
          aria-label="Search trails"
        />
      </div>

      <div
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="listbox"
        aria-label="Trail filters"
      >
        {filters.map((f) => {
          const selected = filter === f.id
          return (
            <button
              key={f.id}
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => setFilter(f.id)}
              className={cn(
                'shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-brand',
                selected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground'
              )}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          variant="trails"
          onAction={() => {
            setFilter('all')
            setQuery('')
          }}
        />
      ) : (
        <>
          <button
            type="button"
            onClick={() => onOpenTrail(featured)}
            className="group w-full overflow-hidden rounded-[var(--radius-xl)] text-left shadow-card pressable transition-brand focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <PhotoBlock
              src={featured.image}
              alt={featured.imageAlt}
              gradient={featured.gradient}
              aspect="hero"
              radius="none"
              className="min-h-[13.5rem] w-full"
            >
              <div className="absolute left-3.5 top-3.5">
                <Badge variant={toneToBadge[featured.tone]}>{featured.badge}</Badge>
              </div>
              <PhotoCaption
                region={featured.region}
                title={featured.name}
                className="p-4"
                meta={
                  <MetaRowFromString
                    meta={featured.meta}
                    onImage
                    className="mt-1 text-xs"
                  />
                }
              />
            </PhotoBlock>
          </button>

          {rest.length > 0 ? (
            <section className="space-y-3">
              <h2 className="text-lg text-[var(--text-heading)]">
                More to explore
              </h2>
              <div className="flex flex-col gap-3">
                {rest.map((trail) => (
                  <TrailCardRow
                    key={trail.id}
                    trail={trail}
                    onClick={() => onOpenTrail(trail)}
                    className="shadow-sm"
                  />
                ))}
              </div>
            </section>
          ) : null}
        </>
      )}
    </div>
  )
}
