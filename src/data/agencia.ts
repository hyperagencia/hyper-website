export interface LocalizedText {
  es: string;
  en: string;
}

export interface AgencyValue {
  /** Path under public/assets/agency/ */
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface AgencyStat {
  /** display value, not translatable (e.g. "100+") */
  value: string;
  label: LocalizedText;
}

export const AGENCY_VALUES: AgencyValue[] = [
  {
    icon: '/assets/agency/estrategia-icon.svg',
    title: { es: 'Estrategia profunda', en: 'Deep strategy' },
    description: {
      es: 'Nos involucramos y entendemos el negocio, la audiencia y el mercado como si fueran nuestros antes de mover un dedo. Así sabemos el porqué detrás de cada decisión.',
      en: 'We dig into the business, the audience and the market as if they were our own before moving a finger. That way we know the why behind every decision.',
    },
  },
  {
    icon: '/assets/agency/branding-y-tech.svg',
    title: { es: 'Hyper Core', en: 'Hyper Core' },
    description: {
      es: 'Branding y tecnología en sinergia. La identidad es tan importante como el producto digital. Hacemos que ambos sean coherentes y perduren en el tiempo.',
      en: 'Branding and technology in sync. Identity matters as much as the digital product. We make sure both stay coherent and built to last.',
    },
  },
  {
    icon: '/assets/agency/cercania.svg',
    title: { es: 'Cercanía y equipo', en: 'Closeness and teamwork' },
    description: {
      es: 'Creemos que siendo parte de tu equipo entendemos tu proyecto desde dentro. Por eso trabajamos como una extensión del mismo, lo que mejora la comunicación y acelera las decisiones.',
      en: 'We believe that being part of your team lets us understand your project from the inside. That is why we work as an extension of it, which sharpens communication and speeds up decisions.',
    },
  },
  {
    icon: '/assets/agency/crecer-icon.svg',
    title: { es: 'Hechos para perdurar', en: 'Built to last' },
    description: {
      es: 'Soñamos, planeamos y ejecutamos pensando en el negocio a futuro. Nada más satisfactorio que ver crecer a nuestros partners y acompañarlos en el camino.',
      en: 'We dream, plan and execute with the future of the business in mind. Nothing is more satisfying than watching our partners grow and walking that road with them.',
    },
  },
];

export const AGENCY_STATS: AgencyStat[] = [
  { value: '+100', label: { es: 'Proyectos de los que fuimos parte', en: 'Projects we were part of' } },
  { value: '+10', label: { es: 'Años conectando con personas en todo el mundo', en: 'Years connecting with people around the world' } },
  { value: '+20', label: { es: 'Industrias que entendimos y en las que nos involucramos', en: 'Industries we understood and got involved in' } },
  { value: '+1M', label: { es: 'Tazas de café que nos mantuvieron despiertos', en: 'Cups of coffee that kept us awake' } },
];
