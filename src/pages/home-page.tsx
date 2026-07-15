import { MockBanner } from '@/components/mock-banner'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrailsSection } from '@/components/trails-section'
import { HowItWorks } from '@/components/how-it-works'
import { PassportSection } from '@/components/passport-section'
import { SystemSection } from '@/components/system-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { fontStudies, type FontStudyId } from '@/data/font-studies'
import { cn } from '@/lib/utils'

type HomePageProps = {
  titleStudy?: FontStudyId
}

/**
 * Page composition mock.
 * Exercises marketing-scale layout patterns against live tokens and components.
 * Not a product website.
 */
export function HomePage({ titleStudy = 'quoly' }: HomePageProps) {
  const study = fontStudies[titleStudy]

  return (
    <div id="top" className={cn('relative min-h-[100dvh]', study.className)}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="grain-overlay" aria-hidden />
      <SiteHeader banner={<MockBanner label={study.banner} />} />
      <main id="main">
        <Hero />
        <TrailsSection />
        <HowItWorks />
        <PassportSection />
        <SystemSection displayFont={titleStudy} />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
