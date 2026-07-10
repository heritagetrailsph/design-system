import { useState } from 'react'
import { ArrowLeft, Bookmark, Check, Footprints } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PhotoBlock, PhotoCaption, MetaRowFromString } from '@/components/patterns'
import type { Trail, TrailTone } from '@/data/trails'
import { cn } from '@/lib/utils'

const toneToBadge: Record<TrailTone, 'gold' | 'sea' | 'terracotta' | 'indigo'> = {
  gold: 'gold',
  sea: 'sea',
  terracotta: 'terracotta',
  indigo: 'indigo',
}

type Stop = {
  n: number
  name: string
  blurb: string
  done: boolean
}

const stopsByTrail: Record<string, Stop[]> = {
  intramuros: [
    {
      n: 1,
      name: 'Puerta Real',
      blurb: 'The royal gate — reserved for the Governor-General.',
      done: true,
    },
    {
      n: 2,
      name: 'San Agustin Church',
      blurb: 'The oldest stone church in the Philippines, 1607.',
      done: true,
    },
    {
      n: 3,
      name: 'Plaza de Roma',
      blurb: 'The old center of ceremonial Manila.',
      done: false,
    },
    {
      n: 4,
      name: 'Fort Santiago',
      blurb: 'Citadel at the mouth of the Pasig River.',
      done: false,
    },
  ],
  vigan: [
    {
      n: 1,
      name: 'Calle Crisologo',
      blurb: 'Cobblestones and capiz windows under lamplight.',
      done: true,
    },
    {
      n: 2,
      name: 'St. Paul Cathedral',
      blurb: 'Earthquake Baroque heart of the old town.',
      done: false,
    },
    {
      n: 3,
      name: 'Plaza Salcedo',
      blurb: 'Where the dancing fountain meets heritage façades.',
      done: false,
    },
  ],
  banaue: [
    {
      n: 1,
      name: 'Viewpoint',
      blurb: 'The classic “stairways to heaven” overlook.',
      done: false,
    },
    {
      n: 2,
      name: 'Batad amphitheater',
      blurb: 'A living rice landscape carved over centuries.',
      done: false,
    },
    {
      n: 3,
      name: 'Tappiya Falls',
      blurb: 'Cool-off after the ridge walk.',
      done: false,
    },
  ],
  bohol: [
    {
      n: 1,
      name: 'Baclayon Church',
      blurb: 'Coral-stone façade and a quiet museum of faith.',
      done: false,
    },
    {
      n: 2,
      name: 'Loboc Church',
      blurb: 'Rebuilt resilience after the 2013 quake.',
      done: false,
    },
    {
      n: 3,
      name: 'Maribojoc',
      blurb: 'Watchtower and sea breeze between stops.',
      done: false,
    },
  ],
}

const historyByTrail: Record<string, string> = {
  intramuros:
    'Founded by Miguel López de Legazpi, Intramuros — “within the walls” — was the seat of Spanish colonial power in Asia for over 300 years.',
  vigan:
    'Vigan is one of the few remaining Hispanic towns in the Philippines — a living streetscape of bahay na bato, not a museum behind glass.',
  banaue:
    'Hand-carved into the Cordillera over 2,000 years, the rice terraces still feed the valleys — living cultural landscape, not a relic.',
  bohol:
    'Coral-stone churches rebuilt after every quake tell of faith that is resilient, ornate, and deeply local.',
}

const tipsByTrail: Record<string, string> = {
  intramuros:
    'Go at golden hour. Wear walking shoes for the cobblestones, and bring water — shade is scarce along the ramparts.',
  vigan:
    'Best after dusk when the lamps glow. Pair with longganisa for breakfast the next morning.',
  banaue:
    'Start early for cooler air. Hire a local guide for Batad — the paths reward patience, not speed.',
  bohol:
    'A half-day drive loop. Midday is harsh on coral façades — mornings photograph more kindly.',
}

type TrailDetailScreenProps = {
  trail: Trail
  saved: boolean
  onBack: () => void
  onToggleSave: () => void
  onStart: () => void
}

export function TrailDetailScreen({
  trail,
  saved,
  onBack,
  onToggleSave,
  onStart,
}: TrailDetailScreenProps) {
  const [tab, setTab] = useState('stops')
  const stops = stopsByTrail[trail.id] ?? stopsByTrail.intramuros

  return (
    <div className="relative flex min-h-full flex-col">
      <PhotoBlock
        src={trail.image}
        alt={trail.imageAlt}
        gradient={trail.gradient}
        aspect="hero"
        radius="none"
        className="min-h-[15rem] w-full shrink-0"
      >
        <div className="absolute inset-x-3 top-3 z-10 flex justify-between">
          <Button
            type="button"
            size="icon"
            variant="secondary"
            className="rounded-full bg-[var(--surface-frost)] shadow-sm backdrop-blur-md"
            onClick={onBack}
            aria-label="Back to explore"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="secondary"
            className={cn(
              'rounded-full bg-[var(--surface-frost)] shadow-sm backdrop-blur-md',
              saved && 'text-sun-600'
            )}
            onClick={onToggleSave}
            aria-label={saved ? 'Remove from saved' : 'Save trail'}
            aria-pressed={saved}
          >
            <Bookmark className="size-4" fill={saved ? 'currentColor' : 'none'} />
          </Button>
        </div>
        <PhotoCaption
          region={trail.region}
          title={trail.name}
          className="p-4"
          meta={<MetaRowFromString meta={trail.meta} onImage className="mt-1 text-xs" />}
        />
      </PhotoBlock>

      <div className="flex flex-1 flex-col gap-4 px-4 pb-28 pt-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant={toneToBadge[trail.tone]}>{trail.badge}</Badge>
          <Badge variant="outline">Open now</Badge>
          <Badge variant="secondary">Walking</Badge>
        </div>

        <p className="text-sm leading-relaxed text-[var(--text-body)]">{trail.story}</p>

        <Tabs value={tab} onValueChange={setTab} className="gap-3">
          <TabsList className="grid h-10 w-full grid-cols-3 rounded-full bg-muted p-1">
            <TabsTrigger value="stops" className="rounded-full text-xs sm:text-sm">
              Stops
            </TabsTrigger>
            <TabsTrigger value="history" className="rounded-full text-xs sm:text-sm">
              History
            </TabsTrigger>
            <TabsTrigger value="tips" className="rounded-full text-xs sm:text-sm">
              Tips
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stops" className="mt-0 space-y-2.5 outline-none">
            {stops.map((stop) => (
              <Card key={stop.n} size="sm" className="border-border shadow-sm ring-1 ring-border/60">
                <CardContent className="flex items-center gap-3 p-3">
                  <span
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold',
                      stop.done
                        ? 'bg-sun-100 text-sun-600'
                        : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {stop.done ? <Check className="size-4" strokeWidth={2.5} /> : stop.n}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--text-heading)]">
                      {stop.name}
                    </p>
                    <p className="text-xs leading-snug text-muted-foreground">{stop.blurb}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="history" className="mt-0 outline-none">
            <p className="text-sm leading-relaxed text-[var(--text-body)]">
              {historyByTrail[trail.id] ?? historyByTrail.intramuros}
            </p>
          </TabsContent>

          <TabsContent value="tips" className="mt-0 outline-none">
            <p className="text-sm leading-relaxed text-[var(--text-body)]">
              {tipsByTrail[trail.id] ?? tipsByTrail.intramuros}
            </p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--surface-page)] via-[var(--surface-page)] to-transparent px-4 pb-4 pt-10">
        <Button
          type="button"
          size="lg"
          className="pointer-events-auto w-full rounded-full font-semibold shadow-raised"
          onClick={onStart}
        >
          <Footprints className="size-4" />
          Start trail
        </Button>
      </div>
    </div>
  )
}
