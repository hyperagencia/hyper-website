import type { ServiceDetail } from './types';

export const webDesign: ServiceDetail = {
  slug: 'web-design',
  pillarSlug: 'design',
  seo: {
    title: {
      es: 'Diseño Web Profesional para Marcas | Hyper',
      en: 'Professional Web Design for Brands | Hyper',
    },
    description: {
      es: 'Diseñamos sitios web únicos, optimizados para todos los dispositivos y construidos sobre tu identidad de marca. Diseño y desarrollo bajo el mismo techo en Chile.',
      en: 'We design unique websites, optimized for every device and built on your brand identity. Design and development under the same roof in Chile.',
    },
  },
  hero: {
    title: {
      es: 'Tu web es tu mejor vendedor. Trátala como tal.',
      en: 'Your website is your best salesperson. Treat it that way.',
    },
    subtitle: {
      es: 'Diseñamos sitios web que representan tu marca en su mejor versión digital. Cada layout, cada tipografía y cada transición está pensada para que quien llega a tu web entienda en segundos por qué tú y no otro.',
      en: 'We design websites that represent your brand in its best digital version. Every layout, typeface and transition is designed so visitors understand in seconds why you and not someone else.',
    },
  },
  valueBlocks: [
    {
      title: { es: 'Tu marca, no un template', en: 'Your brand, not a template' },
      description: {
        es: 'Cada web que diseñamos parte desde cero. No usamos plantillas que limitan — usamos el sistema de identidad de tu marca como punto de partida para construir una experiencia visual única, coherente y reconocible.',
        en: "Every website we design starts from zero. We don't use limiting templates — we use your brand's identity system as the starting point to build a unique, coherent, recognizable visual experience.",
      },
    },
    {
      title: { es: 'Diseño y desarrollo bajo el mismo techo', en: 'Design and development under one roof' },
      description: {
        es: 'Diseñamos sabiendo cómo se va a construir. Eso elimina la fricción entre diseño y desarrollo, acorta los tiempos del proyecto y garantiza que lo que se ve en el diseño sea exactamente lo que aparece en pantalla.',
        en: "We design knowing how it will be built. That removes friction between design and development, shortens project timelines and guarantees what you see in the design is exactly what appears on screen.",
      },
    },
    {
      title: { es: 'Optimizado para todos los dispositivos', en: 'Optimized for every device' },
      description: {
        es: 'Diseñamos mobile-first por defecto. No adaptamos el diseño de escritorio al móvil como segundo paso — pensamos en la experiencia móvil desde el primer trazo y construimos hacia arriba.',
        en: "We design mobile-first by default. We don't adapt the desktop design to mobile as a second step — we think about the mobile experience from the first sketch and build upward.",
      },
    },
    {
      title: { es: 'Velocidad y rendimiento desde el diseño', en: 'Speed and performance from the design stage' },
      description: {
        es: 'Un sitio hermoso que carga lento pierde. Las decisiones visuales que tomamos — peso de imágenes, complejidad de animaciones, estructura de componentes — siempre consideran el rendimiento final del sitio.',
        en: 'A beautiful site that loads slowly loses. The visual decisions we make — image weight, animation complexity, component structure — always consider the final performance of the site.',
      },
    },
  ],
  includes: [
    { es: 'Definición de estructura y flujo de páginas', en: 'Page structure and flow definition' },
    { es: 'Diseño de wireframes y composición', en: 'Wireframes and composition design' },
    { es: 'UI Design completo — desktop, tablet y mobile', en: 'Complete UI Design — desktop, tablet and mobile' },
    { es: 'Sistema de componentes reutilizables', en: 'Reusable component system' },
    { es: 'Diseño de estados interactivos y microanimaciones', en: 'Interactive states and micro-animation design' },
    { es: 'Prototipo navegable para aprobación', en: 'Navigable prototype for approval' },
    { es: 'Especificaciones y handoff para desarrollo', en: 'Specs and handoff for development' },
    { es: 'Aplicación del sistema de identidad de marca al entorno digital', en: "Application of the brand's identity system to digital" },
  ],
  process: [
    {
      title: { es: 'Brief & Estrategia', en: 'Brief & Strategy' },
      description: {
        es: 'Entendemos los objetivos del sitio, la audiencia y cómo la marca debe verse y sentirse en digital.',
        en: 'We understand the site’s goals, the audience and how the brand should look and feel in digital.',
      },
    },
    {
      title: { es: 'Estructura & Composición', en: 'Structure & Composition' },
      description: {
        es: 'Definimos la arquitectura de páginas, jerarquía de contenidos y los wireframes de las vistas principales.',
        en: 'We define the page architecture, content hierarchy and wireframes for the main views.',
      },
    },
    {
      title: { es: 'Diseño Visual', en: 'Visual Design' },
      description: {
        es: 'Construimos la interfaz completa en Figma: tipografía, color, espaciado, componentes e interacciones.',
        en: 'We build the complete interface in Figma: typography, color, spacing, components and interactions.',
      },
    },
    {
      title: { es: 'Prototipo & Aprobación', en: 'Prototype & Approval' },
      description: {
        es: 'Entregamos un prototipo navegable para revisar la experiencia antes de pasar al desarrollo.',
        en: 'We deliver a navigable prototype to review the experience before moving to development.',
      },
    },
  ],
  cta: {
    heading: {
      es: '¿Tu web actual no te representa o simplemente no convierte?',
      en: 'Does your current site not represent you, or simply not convert?',
    },
    description: {
      es: 'Cuéntanos qué necesitas y armamos una propuesta.',
      en: "Tell us what you need and we'll put together a proposal.",
    },
  },
};
