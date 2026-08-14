import type { ServiceDetail } from './types';

export const wordpress: ServiceDetail = {
  slug: 'wordpress',
  pillarSlug: 'development',
  seo: {
    title: {
      es: 'Desarrollo WordPress Avanzado y Plugins a Medida | Hyper',
      en: 'Advanced WordPress Development and Custom Plugins | Hyper',
    },
    description: {
      es: 'Desarrollamos en WordPress a nivel avanzado: temas a medida, plugins personalizados y WooCommerce sin límites. Sin plantillas genéricas. Agencia WordPress en Chile.',
      en: 'We build advanced WordPress: custom themes, custom plugins and unrestricted WooCommerce. No generic templates. WordPress agency in Chile.',
    },
  },
  hero: {
    title: {
      es: 'WordPress puede hacer mucho más de lo que crees',
      en: 'WordPress can do a lot more than you think',
    },
    subtitle: {
      es: 'Desarrollamos en WordPress a nivel avanzado — temas a medida, plugins personalizados y funcionalidades complejas que la mayoría de las agencias no saben construir. Sin atajos, sin plantillas genéricas, sin límites artificiales.',
      en: "We build advanced WordPress — custom themes, custom plugins and complex features most agencies don't know how to build. No shortcuts, no generic templates, no artificial limits.",
    },
  },
  valueBlocks: [
    {
      title: { es: 'WordPress como plataforma de desarrollo real', en: 'WordPress as a real development platform' },
      description: {
        es: 'WordPress no es solo para blogs o sitios simples. Con la arquitectura correcta es una plataforma robusta capaz de sostener sitios corporativos complejos, portales de contenido, intranets y e-commerce avanzado. La diferencia está en cómo se construye.',
        en: "WordPress isn't just for blogs or simple sites. With the right architecture it's a robust platform able to support complex corporate sites, content portals, intranets and advanced e-commerce. The difference is in how it's built.",
      },
    },
    {
      title: { es: 'Plugins hechos para tu negocio', en: 'Plugins built for your business' },
      description: {
        es: 'Cuando ningún plugin existente hace exactamente lo que necesitas, lo construimos nosotros. Desarrollamos plugins personalizados que se integran nativamente con WordPress, funcionan sin conflictos y resuelven la lógica específica de tu operación.',
        en: "When no existing plugin does exactly what you need, we build it. We develop custom plugins that integrate natively with WordPress, work without conflicts and solve the specific logic of your operation.",
      },
    },
    {
      title: { es: 'WooCommerce sin límites', en: 'WooCommerce without limits' },
      description: {
        es: 'WooCommerce es potente, pero su verdadero potencial aparece cuando se personaliza. Construimos extensiones, modificamos flujos de compra, creamos tipos de producto a medida y conectamos WooCommerce con cualquier sistema externo.',
        en: 'WooCommerce is powerful, but its true potential appears when customized. We build extensions, modify purchase flows, create custom product types and connect WooCommerce to any external system.',
      },
    },
    {
      title: { es: 'Rápido, seguro y mantenible', en: 'Fast, secure and maintainable' },
      description: {
        es: 'Un WordPress mal construido es lento, vulnerable y difícil de mantener. El nuestro no. Optimizamos rendimiento, aplicamos buenas prácticas de seguridad y escribimos código limpio y documentado.',
        en: 'A poorly built WordPress is slow, vulnerable and hard to maintain. Ours isn’t. We optimize performance, apply security best practices and write clean, documented code.',
      },
    },
  ],
  includes: [
    { es: 'Desarrollo de temas a medida — sin plantillas', en: 'Custom theme development — no templates' },
    { es: 'Custom Post Types y taxonomías personalizadas', en: 'Custom Post Types and custom taxonomies' },
    { es: 'Campos avanzados con ACF o desarrollo nativo', en: 'Advanced fields with ACF or native development' },
    { es: 'Desarrollo de plugins personalizados', en: 'Custom plugin development' },
    { es: 'Extensiones y modificaciones de WooCommerce', en: 'WooCommerce extensions and modifications' },
    { es: 'Integración con APIs y servicios externos', en: 'Integration with APIs and external services' },
    { es: 'Optimización de rendimiento y velocidad', en: 'Performance and speed optimization' },
    { es: 'Configuración de seguridad y respaldos', en: 'Security configuration and backups' },
    { es: 'Actualizaciones y mantenimiento', en: 'Updates and maintenance' },
    { es: 'Capacitación para gestión de contenido', en: 'Content management training' },
  ],
  process: [
    {
      title: { es: 'Auditoría o Brief', en: 'Audit or Brief' },
      description: {
        es: 'Si es un proyecto nuevo definimos los requerimientos técnicos completos. Si es un sitio existente auditamos el estado actual.',
        en: 'For a new project we define the complete technical requirements. For an existing site, we audit its current state.',
      },
    },
    {
      title: { es: 'Arquitectura', en: 'Architecture' },
      description: {
        es: 'Definimos la estructura de contenidos, los custom post types, la lógica de plugins y las integraciones necesarias.',
        en: 'We define the content structure, custom post types, plugin logic and required integrations.',
      },
    },
    {
      title: { es: 'Desarrollo', en: 'Development' },
      description: {
        es: 'Construimos el tema, los plugins y todas las funcionalidades a medida con código limpio y sin dependencias innecesarias.',
        en: 'We build the theme, plugins and all custom features with clean code and no unnecessary dependencies.',
      },
    },
    {
      title: { es: 'QA, Optimización & Entrega', en: 'QA, Optimization & Delivery' },
      description: {
        es: 'Probamos en distintos entornos, optimizamos rendimiento y entregamos con capacitación y documentación completa.',
        en: 'We test across environments, optimize performance and deliver with full training and documentation.',
      },
    },
  ],
  cta: {
    heading: {
      es: '¿Tienes un proyecto WordPress que necesita más de lo que un desarrollador básico puede ofrecer?',
      en: 'Do you have a WordPress project that needs more than a basic developer can offer?',
    },
    description: {
      es: 'Cuéntanos qué necesitas construir.',
      en: 'Tell us what you need to build.',
    },
  },
};
