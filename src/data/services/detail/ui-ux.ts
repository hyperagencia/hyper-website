import type { ServiceDetail } from './types';

export const uiUx: ServiceDetail = {
  slug: 'ui-ux',
  pillarSlug: 'design',
  seo: {
    title: {
      es: 'Diseño UI/UX para Productos y Aplicaciones Digitales | Hyper',
      en: 'UI/UX Design for Digital Products and Applications | Hyper',
    },
    description: {
      es: 'Diseñamos interfaces y experiencias digitales desde la investigación hasta el producto final. Wireframes, prototipos y UI design listos para desarrollo. Agencia en Chile.',
      en: 'We design digital interfaces and experiences from research to final product. Wireframes, prototypes and UI design ready for development. Agency in Chile.',
    },
  },
  hero: {
    title: {
      es: 'Interfaces que la gente entiende a la primera',
      en: 'Interfaces people understand at first glance',
    },
    subtitle: {
      es: 'Diseñamos la experiencia antes de diseñar la pantalla. Investigamos, estructuramos y prototipamos para que cada producto digital que construimos sea intuitivo, funcional y agradable de usar.',
      en: 'We design the experience before designing the screen. We research, structure and prototype so every digital product we build is intuitive, functional and enjoyable to use.',
    },
  },
  valueBlocks: [
    {
      title: { es: 'Primero la experiencia, luego la estética', en: 'Experience first, aesthetics second' },
      description: {
        es: 'Un producto hermoso que nadie sabe cómo usar es un producto fallido. Por eso empezamos siempre por entender al usuario: qué necesita, cómo piensa y dónde se pierde. El diseño visual viene después, cuando la experiencia ya está resuelta.',
        en: 'A beautiful product nobody knows how to use is a failed product. That’s why we always start by understanding the user: what they need, how they think, where they get lost. Visual design comes after, once the experience is solved.',
      },
    },
    {
      title: { es: 'Diseñado para poder construirse', en: 'Designed to be buildable' },
      description: {
        es: 'La mayoría de los problemas de desarrollo vienen de diseños que no consideran la implementación. Como agencia que también desarrolla, diseñamos interfaces pensando en cómo se van a construir — sin sorpresas en el proceso, sin rediseños de último minuto.',
        en: "Most development problems come from designs that don't consider implementation. As an agency that also builds, we design interfaces thinking about how they'll be constructed — no surprises along the way, no last-minute redesigns.",
      },
    },
    {
      title: { es: 'Del wireframe al producto real', en: 'From wireframe to real product' },
      description: {
        es: 'No entregamos pantallas estáticas para archivar. Entregamos prototipos navegables, sistemas de componentes y especificaciones listas para desarrollo. Lo que diseñamos es exactamente lo que se construye.',
        en: "We don't deliver static screens to file away. We deliver navigable prototypes, component systems and specifications ready for development. What we design is exactly what gets built.",
      },
    },
    {
      title: { es: 'Para productos que escalan', en: 'For products that scale' },
      description: {
        es: 'Una interfaz bien diseñada hoy tiene que poder crecer mañana. Construimos sistemas de componentes y patrones de diseño que le dan coherencia al producto a medida que evoluciona.',
        en: 'A well-designed interface today has to be able to grow tomorrow. We build component systems and design patterns that keep the product coherent as it evolves.',
      },
    },
  ],
  includes: [
    { es: 'Investigación de usuario y análisis de contexto', en: 'User research and context analysis' },
    { es: 'Arquitectura de información y flujos de navegación', en: 'Information architecture and navigation flows' },
    { es: 'Wireframes de baja y alta fidelidad', en: 'Low and high-fidelity wireframes' },
    { es: 'Prototipo interactivo y navegable', en: 'Interactive, navigable prototype' },
    { es: 'UI Design — interfaz visual completa', en: 'UI Design — complete visual interface' },
    { es: 'Sistema de componentes y design tokens', en: 'Component system and design tokens' },
    { es: 'Especificaciones para desarrollo', en: 'Specifications for development' },
    { es: 'Testing de usabilidad (cuando aplica)', en: 'Usability testing (when applicable)' },
  ],
  process: [
    {
      title: { es: 'Investigación', en: 'Research' },
      description: {
        es: 'Entendemos a los usuarios, el contexto de uso y los objetivos del negocio. Sin esto, el diseño es una suposición.',
        en: 'We understand users, the context of use and business goals. Without this, design is just a guess.',
      },
    },
    {
      title: { es: 'Arquitectura & Wireframes', en: 'Architecture & Wireframes' },
      description: {
        es: 'Estructuramos la información y los flujos antes de definir ningún elemento visual. La lógica primero.',
        en: 'We structure the information and flows before defining any visual element. Logic first.',
      },
    },
    {
      title: { es: 'Prototipo & Validación', en: 'Prototype & Validation' },
      description: {
        es: 'Construimos un prototipo navegable para testear la experiencia antes de invertir en el diseño final.',
        en: 'We build a navigable prototype to test the experience before investing in final design.',
      },
    },
    {
      title: { es: 'UI Design', en: 'UI Design' },
      description: {
        es: 'Con la experiencia validada, diseñamos la interfaz visual: componentes, estados, interacciones y especificaciones listas para desarrollo.',
        en: 'With the experience validated, we design the visual interface: components, states, interactions and specs ready for development.',
      },
    },
  ],
  cta: {
    heading: {
      es: '¿Tienes un producto digital que necesita ser repensado o construido desde cero?',
      en: 'Do you have a digital product that needs rethinking or building from scratch?',
    },
    description: {
      es: 'Cuéntanos qué estás construyendo.',
      en: "Tell us what you're building.",
    },
  },
};
