import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrailsSection } from '@/components/trails-section'
import { HowItWorks } from '@/components/how-it-works'
import { PassportSection } from '@/components/passport-section'
import { SystemSection } from '@/components/system-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export function HomePage() {
  return (
    <div id="top" className="min-h-svh">
      <SiteHeader />
      <main>
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
