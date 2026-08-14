import type { ServiceDetail } from './types';

export const sitiosWeb: ServiceDetail = {
  slug: 'sitios-web',
  pillarSlug: 'development',
  seo: {
    title: {
      es: 'Desarrollo de Sitios Web Profesionales en Chile | Hyper',
      en: 'Professional Website Development in Chile | Hyper',
    },
    description: {
      es: 'Desarrollamos sitios web completos en WordPress y Next.js: rápidos, seguros y fáciles de administrar. Diseño y desarrollo bajo el mismo techo en Chile.',
      en: 'We build complete websites in WordPress and Next.js: fast, secure and easy to manage. Design and development under the same roof in Chile.',
    },
  },
  hero: {
    title: {
      es: 'Sitios web que funcionan tan bien como se ven',
      en: 'Websites that work as well as they look',
    },
    subtitle: {
      es: 'Desarrollamos sitios web completos — desde el código hasta el contenido. Rápidos, seguros, fáciles de administrar y construidos con la tecnología que mejor se adapta a cada proyecto.',
      en: 'We build complete websites — from code to content. Fast, secure, easy to manage and built with the technology that best fits each project.',
    },
  },
  valueBlocks: [
    {
      title: { es: 'La tecnología correcta, no la de moda', en: 'The right technology, not the trendy one' },
      description: {
        es: 'No todos los proyectos necesitan la misma solución. Un sitio corporativo, un portal de contenidos y una web app tienen requerimientos distintos. Evaluamos cada proyecto y recomendamos la tecnología que mejor lo sirve — WordPress, Next.js o desarrollo a medida.',
        en: 'Not every project needs the same solution. A corporate site, a content portal and a web app have different requirements. We evaluate each project and recommend whichever technology serves it best — WordPress, Next.js or custom development.',
      },
    },
    {
      title: { es: 'Diseño y desarrollo bajo el mismo techo', en: 'Design and development under one roof' },
      description: {
        es: 'Cuando el mismo equipo que diseña también construye, el resultado es más coherente y el proceso más eficiente. No hay pérdida de información entre etapas, no hay rediseños sorpresa y el producto final es exactamente lo que se aprobó.',
        en: "When the same team that designs also builds, the result is more coherent and the process more efficient. No information loss between stages, no surprise redesigns, and the final product is exactly what was approved.",
      },
    },
    {
      title: { es: 'Rápido por diseño, no por accidente', en: 'Fast by design, not by accident' },
      description: {
        es: 'La velocidad de carga no es un detalle — es un factor de conversión y de posicionamiento en Google. Optimizamos el rendimiento desde el código: imágenes, scripts, estructura y hosting configurados para que el sitio cargue rápido desde el primer día.',
        en: "Load speed isn't a detail — it's a conversion and Google ranking factor. We optimize performance from the code: images, scripts, structure and hosting configured so the site loads fast from day one.",
      },
    },
    {
      title: { es: 'Tú administras, nosotros construimos', en: 'You manage it, we build it' },
      description: {
        es: 'Entregamos sitios que tu equipo puede administrar sin depender de nosotros para cada cambio. CMS configurado, documentado y con capacitación incluida — para que la autonomía sea real.',
        en: 'We deliver sites your team can manage without depending on us for every change. CMS configured, documented and with training included — so autonomy is real.',
      },
    },
  ],
  includes: [
    { es: 'Desarrollo frontend y backend completo', en: 'Complete frontend and backend development' },
    { es: 'Configuración de CMS — WordPress, Sanity u otros', en: 'CMS setup — WordPress, Sanity or others' },
    { es: 'Integración del diseño aprobado, pixel perfect', en: 'Pixel-perfect integration of the approved design' },
    { es: 'Optimización de rendimiento y Core Web Vitals', en: 'Performance optimization and Core Web Vitals' },
    { es: 'SEO técnico básico — estructura, metadatos, sitemap', en: 'Basic technical SEO — structure, metadata, sitemap' },
    { es: 'Configuración de hosting y dominio', en: 'Hosting and domain setup' },
    { es: 'Formularios y flujos de contacto', en: 'Forms and contact flows' },
    { es: 'Seguridad básica y certificado SSL', en: 'Basic security and SSL certificate' },
    { es: 'Capacitación para administración del sitio', en: 'Training for site management' },
    { es: 'Soporte post-lanzamiento', en: 'Post-launch support' },
  ],
  extraLists: [
    {
      heading: { es: 'Tecnologías', en: 'Technologies' },
      items: [
        { es: 'WordPress — para sitios con gestión de contenido frecuente', en: 'WordPress — for sites with frequent content management' },
        { es: 'Next.js — para sitios de alto rendimiento y proyectos más complejos', en: 'Next.js — for high-performance sites and more complex projects' },
        { es: 'Desarrollo a medida — cuando ninguna plataforma estándar es suficiente', en: 'Custom development — when no standard platform is enough' },
      ],
    },
  ],
  process: [
    {
      title: { es: 'Brief técnico', en: 'Technical brief' },
      description: {
        es: 'Definimos los requerimientos del sitio: páginas, funcionalidades, integraciones, CMS y expectativas de rendimiento.',
        en: 'We define the site requirements: pages, features, integrations, CMS and performance expectations.',
      },
    },
    {
      title: { es: 'Desarrollo', en: 'Development' },
      description: {
        es: 'Construimos el sitio sobre el diseño aprobado, con revisiones periódicas para validar avance.',
        en: 'We build the site on top of the approved design, with periodic reviews to validate progress.',
      },
    },
    {
      title: { es: 'QA & Optimización', en: 'QA & Optimization' },
      description: {
        es: 'Revisamos el sitio en distintos dispositivos y navegadores, optimizamos rendimiento y resolvemos cualquier inconsistencia.',
        en: 'We review the site across devices and browsers, optimize performance and resolve any inconsistencies.',
      },
    },
    {
      title: { es: 'Lanzamiento & Capacitación', en: 'Launch & Training' },
      description: {
        es: 'Publicamos el sitio, configuramos el hosting y capacitamos a tu equipo para administrarlo de forma autónoma.',
        en: 'We publish the site, configure hosting and train your team to manage it independently.',
      },
    },
  ],
  cta: {
    heading: {
      es: '¿Necesitas un sitio web que esté a la altura de tu marca?',
      en: 'Do you need a website that lives up to your brand?',
    },
    description: {
      es: 'Cuéntanos qué tienes en mente — te preparamos una propuesta.',
      en: "Tell us what you have in mind — we'll put together a proposal.",
    },
  },
};
