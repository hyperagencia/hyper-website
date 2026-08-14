import type { ServiceDetail } from './types';

export const webApps: ServiceDetail = {
  slug: 'web-apps',
  pillarSlug: 'development',
  seo: {
    title: {
      es: 'Desarrollo de Web Apps y Aplicaciones a Medida | Hyper',
      en: 'Web App and Custom Application Development | Hyper',
    },
    description: {
      es: 'Desarrollamos aplicaciones web a medida con Next.js y React: dashboards, portales, plataformas y MVPs. Diseño y desarrollo bajo el mismo techo en Chile.',
      en: 'We build custom web applications with Next.js and React: dashboards, portals, platforms and MVPs. Design and development under the same roof in Chile.',
    },
  },
  hero: {
    title: {
      es: 'Cuando un sitio web no es suficiente',
      en: 'When a website isn’t enough',
    },
    subtitle: {
      es: 'Desarrollamos aplicaciones web a medida para empresas que necesitan más que una presencia digital — necesitan una herramienta que trabaje para su negocio. Dashboards, portales, plataformas y productos digitales construidos con tecnología moderna.',
      en: 'We build custom web applications for companies that need more than a digital presence — they need a tool that works for their business. Dashboards, portals, platforms and digital products built with modern technology.',
    },
  },
  valueBlocks: [
    {
      title: { es: 'Lógica de negocio real', en: 'Real business logic' },
      description: {
        es: 'Una web app no es un sitio con más páginas. Es un sistema con lógica propia: usuarios autenticados, datos en tiempo real, flujos complejos, permisos y reglas que reflejan cómo opera tu negocio. Ese nivel de complejidad requiere arquitectura pensada desde el inicio.',
        en: "A web app isn't a site with more pages. It's a system with its own logic: authenticated users, real-time data, complex flows, permissions and rules that reflect how your business runs. That level of complexity requires architecture thought through from day one.",
      },
    },
    {
      title: { es: 'Stack moderno, resultados predecibles', en: 'Modern stack, predictable results' },
      description: {
        es: 'Construimos con Next.js y React — tecnologías probadas, con ecosistemas maduros y comunidades activas. Eso significa aplicaciones rápidas, mantenibles y con capacidad de evolucionar sin reescribirse desde cero.',
        en: 'We build with Next.js and React — proven technologies with mature ecosystems and active communities. That means fast, maintainable applications that can evolve without being rewritten from scratch.',
      },
    },
    {
      title: { es: 'Del producto al código, sin intermediarios', en: 'From product to code, no middlemen' },
      description: {
        es: 'Como equipo que diseña y desarrolla, no hay gap entre lo que se planifica y lo que se construye. Participamos desde la definición del producto hasta el despliegue en producción.',
        en: "As a team that designs and develops, there's no gap between what's planned and what's built. We're involved from product definition through production deployment.",
      },
    },
    {
      title: { es: 'Construida para crecer contigo', en: 'Built to grow with you' },
      description: {
        es: 'Las mejores aplicaciones no son las más complejas desde el inicio — son las que pueden crecer de forma ordenada. Definimos la arquitectura correcta desde el día uno para que agregar funcionalidades no signifique romper lo que funciona.',
        en: "The best applications aren't the most complex from day one — they're the ones that can grow in an orderly way. We define the right architecture from day one so adding features doesn't mean breaking what works.",
      },
    },
  ],
  includes: [
    { es: 'Definición de arquitectura técnica', en: 'Technical architecture definition' },
    { es: 'Desarrollo frontend — Next.js / React', en: 'Frontend development — Next.js / React' },
    { es: 'Desarrollo backend y APIs REST', en: 'Backend development and REST APIs' },
    { es: 'Autenticación y gestión de usuarios y roles', en: 'Authentication and user/role management' },
    { es: 'Base de datos y modelado de datos', en: 'Database and data modeling' },
    { es: 'Integraciones con servicios externos', en: 'Integrations with external services' },
    { es: 'Panel de administración', en: 'Admin panel' },
    { es: 'Optimización de rendimiento', en: 'Performance optimization' },
    { es: 'Despliegue en producción — Vercel, AWS u otros', en: 'Production deployment — Vercel, AWS or others' },
    { es: 'Documentación técnica', en: 'Technical documentation' },
    { es: 'Soporte y mantenimiento post-lanzamiento', en: 'Post-launch support and maintenance' },
  ],
  extraLists: [
    {
      heading: { es: 'Tipos de proyectos', en: 'Project types' },
      items: [
        { es: 'Dashboards y paneles de gestión interna', en: 'Dashboards and internal management panels' },
        { es: 'Portales de clientes o usuarios', en: 'Client or user portals' },
        { es: 'Plataformas SaaS', en: 'SaaS platforms' },
        { es: 'Herramientas internas para equipos', en: 'Internal tools for teams' },
        { es: 'Sistemas de gestión a medida', en: 'Custom management systems' },
        { es: 'MVPs de productos digitales', en: 'Digital product MVPs' },
      ],
    },
  ],
  process: [
    {
      title: { es: 'Definición del producto', en: 'Product definition' },
      description: {
        es: 'Antes de escribir código definimos qué hace la aplicación, cómo fluye, qué usuarios tiene y qué problema resuelve.',
        en: 'Before writing code, we define what the application does, how it flows, who its users are and what problem it solves.',
      },
    },
    {
      title: { es: 'Arquitectura & Diseño', en: 'Architecture & Design' },
      description: {
        es: 'Definimos el stack técnico, la estructura de datos y diseñamos las interfaces.',
        en: 'We define the technical stack, the data structure and design the interfaces.',
      },
    },
    {
      title: { es: 'Desarrollo iterativo', en: 'Iterative development' },
      description: {
        es: 'Construimos por módulos con entregas parciales, para validar el avance real en lugar de esperar al final.',
        en: 'We build in modules with partial deliveries, to validate real progress instead of waiting until the end.',
      },
    },
    {
      title: { es: 'QA, Despliegue & Documentación', en: 'QA, Deployment & Documentation' },
      description: {
        es: 'Probamos exhaustivamente, desplegamos en producción y entregamos documentación técnica completa.',
        en: 'We test thoroughly, deploy to production and deliver complete technical documentation.',
      },
    },
  ],
  cta: {
    heading: {
      es: '¿Tienes una idea de producto o una operación que necesita su propia herramienta?',
      en: 'Do you have a product idea or an operation that needs its own tool?',
    },
    description: {
      es: 'Cuéntanos qué quieres construir — sin compromiso.',
      en: "Tell us what you want to build — no strings attached.",
    },
  },
};
