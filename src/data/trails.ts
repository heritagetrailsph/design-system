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
    gradient: 'linear-gradient(135deg, #4E7BB0, #1B3D6B 60%, #A85E3E)',
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
    gradient: 'linear-gradient(135deg, #A85E3E, #8F4E32 55%, #F3D08F)',
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
    gradient: 'linear-gradient(135deg, #55897F, #345F58 55%, #EAB14E)',
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
    gradient: 'linear-gradient(135deg, #4E7BB0, #13294A 65%, #55897F)',
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
  { name: 'Indigo 700', token: '--ph-indigo-700', hex: '#22508C', role: 'Primary action' },
  { name: 'Indigo 900', token: '--ph-indigo-900', hex: '#13294A', role: 'Headings / inverse' },
  { name: 'Sun 500', token: '--ph-sun-500', hex: '#EAB14E', role: 'Achievement gold' },
  { name: 'Terracotta 600', token: '--ph-terracotta-600', hex: '#A85E3E', role: 'Culture / food' },
  { name: 'Sea 600', token: '--ph-sea-600', hex: '#3F7168', role: 'Nature / water' },
  { name: 'Sand 0', token: '--ph-sand-0', hex: '#FCFBF8', role: 'Page background' },
]
