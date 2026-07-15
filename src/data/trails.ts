export type TrailTone = 'gold' | 'sea' | 'terracotta' | 'indigo'

export interface Trail {
  id: string
  region: string
  name: string
  meta: string
  story: string
  tone: TrailTone
  badge: string
  gradient: string
  /** Local photo of the real place (see public/images/trails/) */
  image: string
  imageAlt: string
}

export const trails: Trail[] = [
  {
    id: 'intramuros',
    region: 'Manila · Colonial',
    name: 'The Walled City of Intramuros',
    meta: 'Built 1571 · 4.2 km · 12 stops',
    story:
      'The walls of Intramuros were raised in 1571 and survived four centuries of earthquakes, fires, and war.',
    tone: 'gold',
    badge: 'UNESCO',
    gradient: 'linear-gradient(135deg, var(--ph-indigo-500), var(--ph-indigo-800) 60%, var(--ph-terracotta-600))',
    image: '/images/trails/intramuros.jpg',
    imageAlt: 'Fort Santiago gate in Intramuros, the walled city of Manila',
  },
  {
    id: 'vigan',
    region: 'Ilocos Sur · Colonial',
    name: 'Calle Crisologo by lamplight',
    meta: '1.8 km · 7 stops · Evening walk',
    story:
      'Cobblestones, capiz windows, and the soft glow of kerosene lamps. Vigan is a living bahay na bato streetscape.',
    tone: 'gold',
    badge: 'UNESCO',
    gradient: 'linear-gradient(135deg, var(--ph-terracotta-600), var(--ph-terracotta-700) 55%, var(--ph-sun-300))',
    image: '/images/trails/vigan.jpg',
    imageAlt: 'Calle Crisologo heritage street in Vigan, Ilocos Sur',
  },
  {
    id: 'banaue',
    region: 'Ifugao · Living landscape',
    name: 'Banaue Rice Terraces',
    meta: '6.5 km · 9 stops · Full day',
    story:
      'Hand-carved into the mountains over 2,000 years. The “stairways to heaven” still feed the valleys below.',
    tone: 'sea',
    badge: 'Nature',
    gradient: 'linear-gradient(135deg, var(--ph-sea-500), var(--ph-sea-700) 55%, var(--ph-sun-500))',
    image: '/images/trails/banaue.jpg',
    imageAlt: 'Banaue Rice Terraces stretching across the Ifugao mountains',
  },
  {
    id: 'bohol',
    region: 'Bohol · Baroque',
    name: 'Churches of Bohol',
    meta: '12 km drive · 5 stops',
    story:
      'Coral-stone façades and painted ceilings tell of faith rebuilt after every quake: resilient, ornate, deeply local.',
    tone: 'indigo',
    badge: 'History',
    gradient: 'linear-gradient(135deg, var(--ph-indigo-500), var(--ph-indigo-900) 65%, var(--ph-sea-600))',
    image: '/images/trails/bohol.jpg',
    imageAlt: 'Baclayon Church façade in Bohol, coral-stone Baroque church',
  },
]

export const steps = [
  {
    title: 'Pick a trail near you',
    body: 'Browse curated walks by region, mood, and pace: churches at dawn, forts at golden hour, markets in between.',
    icon: 'map' as const,
  },
  {
    title: 'Walk with quiet guidance',
    body: 'Story cards unlock as you arrive. No loud tour-bus energy, just a knowledgeable local in your pocket.',
    icon: 'book' as const,
  },
  {
    title: 'Earn your passport stamps',
    body: 'Complete a trail and collect a gold stamp. Your heritage passport grows with every place you truly walk.',
    icon: 'stamp' as const,
  },
]

export const paletteSwatches = [
  { name: 'Marine Blue', token: '--ph-indigo-700', hex: '#4E52A6', role: 'Primary action' },
  { name: 'Deep Blue', token: '--ph-indigo-900', hex: '#3B2786', role: 'Headings / inverse' },
  { name: 'Sun Gold', token: '--ph-sun-500', hex: '#F9ED32', role: 'UNESCO / achievement' },
  { name: 'Gastronomy Red', token: '--ph-terracotta-600', hex: '#E60638', role: 'Culture / food' },
  { name: 'Nature Green', token: '--ph-sea-500', hex: '#41B40B', role: 'Nature / conservation' },
  { name: 'Near-black', token: '--ph-ink-900', hex: '#1A1A1A', role: 'Heading / body text' },
]
