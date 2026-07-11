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
      'The walls of Intramuros were raised in 1571 — and survived four centuries of earthquakes, fires, and war.',
    tone: 'gold',
    badge: 'UNESCO',
    gradient: 'linear-gradient(135deg, #4A82C8, #154A91 60%, #D9272E)',
    image: '/images/trails/intramuros.jpg',
    imageAlt: 'Fort Santiago gate in Intramuros, the walled city of Manila',
  },
  {
    id: 'vigan',
    region: 'Ilocos Sur · Colonial',
    name: 'Calle Crisologo by lamplight',
    meta: '1.8 km · 7 stops · Evening walk',
    story:
      'Cobblestones, capiz windows, and the soft glow of kerosene lamps — Vigan is a living bahay na bato streetscape.',
    tone: 'gold',
    badge: 'UNESCO',
    gradient: 'linear-gradient(135deg, #D9272E, #A31F25 55%, #FFD978)',
    image: '/images/trails/vigan.jpg',
    imageAlt: 'Calle Crisologo heritage street in Vigan, Ilocos Sur',
  },
  {
    id: 'banaue',
    region: 'Ifugao · Living landscape',
    name: 'Banaue Rice Terraces',
    meta: '6.5 km · 9 stops · Full day',
    story:
      'Hand-carved into the mountains over 2,000 years — the “stairways to heaven” still feed the valleys below.',
    tone: 'sea',
    badge: 'Nature',
    gradient: 'linear-gradient(135deg, #79AD6D, #356D2C 55%, #F4B72D)',
    image: '/images/trails/banaue.jpg',
    imageAlt: 'Banaue Rice Terraces stretching across the Ifugao mountains',
  },
  {
    id: 'bohol',
    region: 'Bohol · Baroque',
    name: 'Churches of Bohol',
    meta: '12 km drive · 5 stops',
    story:
      'Coral-stone façades and painted ceilings tell of faith rebuilt after every quake — resilient, ornate, deeply local.',
    tone: 'indigo',
    badge: 'History',
    gradient: 'linear-gradient(135deg, #4A82C8, #103B78 65%, #559447)',
    image: '/images/trails/bohol.jpg',
    imageAlt: 'Baclayon Church façade in Bohol, coral-stone Baroque church',
  },
]

export const steps = [
  {
    title: 'Pick a trail near you',
    body: 'Browse curated walks by region, mood, and pace — churches at dawn, forts at golden hour, markets in between.',
    icon: 'map' as const,
  },
  {
    title: 'Walk with quiet guidance',
    body: 'Story cards unlock as you arrive. No loud tour-bus energy — just a knowledgeable local in your pocket.',
    icon: 'book' as const,
  },
  {
    title: 'Earn your passport stamps',
    body: 'Complete a trail and collect a gold stamp. Your heritage passport grows with every place you truly walk.',
    icon: 'stamp' as const,
  },
]

export const paletteSwatches = [
  { name: 'Flag Blue', token: '--ph-indigo-700', hex: '#1958AB', role: 'Primary action' },
  { name: 'Deep Blue', token: '--ph-indigo-900', hex: '#103B78', role: 'Headings / inverse' },
  { name: 'Sun Gold', token: '--ph-sun-500', hex: '#F4B72D', role: 'Achievement gold' },
  { name: 'Flag Red', token: '--ph-terracotta-600', hex: '#D9272E', role: 'Culture / emphasis' },
  { name: 'Leaf Green', token: '--ph-sea-600', hex: '#559447', role: 'Nature / water' },
  { name: 'Warm White', token: '--ph-sand-0', hex: '#FFFDFA', role: 'Page background' },
]
