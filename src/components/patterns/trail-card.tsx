import type { ComponentProps } from 'react'
import { Clock, Footprints } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { PhotoBlock, PhotoCaption } from '@/components/patterns/photo-block'
import { MetaRowFromString } from '@/components/patterns/meta-row'
import type { Trail, TrailTone } from '@/data/trails'
import { cn } from '@/lib/utils'

const toneToBadge: Record<TrailTone, 'gold' | 'sea' | 'terracotta' | 'indigo'> = {
  gold: 'gold',
  sea: 'sea',
  terracotta: 'terracotta',
  indigo: 'indigo',
}

type TrailCardFeaturedProps = {
  trail: Trail
  className?: string
  onClick?: () => void
} & ComponentProps<'div'>

/** Large featured trail — photo + protection gradient + caption */
export function TrailCardFeatured({ trail, className, onClick, ...rest }: TrailCardFeaturedProps) {
  return (
    <Card
      className={cn(
        'group relative overflow-hidden border-border bg-card py-0 shadow-card transition-brand hover:shadow-raised',
        onClick &&
          'pressable focus-within:ring-3 focus-within:ring-ring/50',
        className
      )}
      {...rest}
    >
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          className="absolute inset-0 z-10 cursor-pointer rounded-[inherit] outline-none"
          aria-label={`Open ${trail.name}`}
        />
      ) : null}
      <PhotoBlock
        src={trail.image}
        alt={trail.imageAlt}
        gradient={trail.gradient}
        aspect="hero"
        radius="none"
        className="min-h-[16rem] w-full lg:min-h-[22rem] [&_img]:transition-transform [&_img]:duration-700 [&_img]:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[&_img]:scale-[1.04]"
      >
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge variant={toneToBadge[trail.tone]}>{trail.badge}</Badge>
        </div>
        <PhotoCaption
          region={trail.region}
          title={trail.name}
          className="sm:p-8"
          meta={
            <div className="mt-2 space-y-3">
              <p className="max-w-lg text-sm leading-relaxed text-[var(--text-on-image)]/85">
                {trail.story}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-on-image)]/80">
                <span className="inline-flex items-center gap-1.5">
                  <Footprints className="size-3.5" />
                  {trail.meta.split('·')[1]?.trim() ?? 'Walking trail'}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  Half day
                </span>
              </div>
            </div>
          }
        />
      </PhotoBlock>
    </Card>
  )
}

type TrailCardRowProps = {
  trail: Trail
  className?: string
  onClick?: () => void
} & ComponentProps<'div'>

/** Compact list row — thumb + region + name + meta */
export function TrailCardRow({ trail, className, onClick, ...rest }: TrailCardRowProps) {
  return (
    <Card
      className={cn(
        'group relative overflow-hidden border-border bg-card py-0 shadow-card transition-brand',
        'hover:-translate-y-0.5 hover:shadow-raised',
        onClick &&
          'pressable focus-within:ring-3 focus-within:ring-ring/50',
        className
      )}
      {...rest}
    >
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          className="absolute inset-0 z-10 cursor-pointer rounded-[inherit] outline-none"
          aria-label={`Open ${trail.name}`}
        />
      ) : null}
      <CardContent className="flex h-full gap-0 p-0">
        <div
          className="relative w-24 shrink-0 overflow-hidden sm:w-28"
          style={{ background: trail.gradient }}
        >
          {trail.image ? (
            <img
              src={trail.image}
              alt=""
              className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              loading="lazy"
            />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-medium text-muted-foreground">{trail.region}</p>
            <Badge variant={toneToBadge[trail.tone]} className="shrink-0">
              {trail.badge}
            </Badge>
          </div>
          <h3 className="text-lg font-medium leading-snug text-[var(--text-heading)]">
            {trail.name}
          </h3>
          <MetaRowFromString meta={trail.meta} className="text-xs sm:text-sm" />
        </div>
      </CardContent>
    </Card>
  )
}
