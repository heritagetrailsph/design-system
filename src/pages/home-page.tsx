import { MockBanner } from '@/components/mock-banner'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrailsSection } from '@/components/trails-section'
import { HowItWorks } from '@/components/how-it-works'
import { PassportSection } from '@/components/passport-section'
import { SystemSection } from '@/components/system-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

/**
 * Page composition mock.
 * Exercises marketing-scale layout patterns against live tokens and components.
 * Not a product website.
 */
export function HomePage() {
  return (
    <div id="top" className="relative min-h-[100dvh]">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="grain-overlay" aria-hidden />
      <SiteHeader
        banner={
          <MockBanner label="Marketing page layout used only to stress-test design components in context." />
        }
      />
      <main id="main">
        <Hero />
        <TrailsSection />
        <HowItWorks />
        <PassportSection />
        <SystemSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
