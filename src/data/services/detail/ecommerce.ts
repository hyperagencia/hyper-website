import type { ServiceDetail } from './types';

export const ecommerce: ServiceDetail = {
  slug: 'ecommerce',
  pillarSlug: 'development',
  seo: {
    title: {
      es: 'Desarrollo de Tiendas Online — Shopify y WooCommerce | Hyper',
      en: 'Online Store Development — Shopify and WooCommerce | Hyper',
    },
    description: {
      es: 'Desarrollamos e-commerce completos en Shopify y WooCommerce: pasarelas de pago, integraciones, inventario y todo lo que necesitas para vender online en Chile.',
      en: 'We build complete e-commerce stores on Shopify and WooCommerce: payment gateways, integrations, inventory and everything you need to sell online in Chile.',
    },
  },
  hero: {
    title: {
      es: 'Tu tienda online, construida para vender',
      en: 'Your online store, built to sell',
    },
    subtitle: {
      es: 'Desarrollamos e-commerce completos sobre las plataformas correctas. Desde la configuración inicial hasta las integraciones más complejas — construimos tiendas que funcionan, escalan y se administran sin complicaciones.',
      en: 'We build complete e-commerce stores on the right platforms. From initial setup to the most complex integrations — we build stores that work, scale and are easy to manage.',
    },
  },
  valueBlocks: [
    {
      title: { es: 'La plataforma correcta para tu negocio', en: 'The right platform for your business' },
      description: {
        es: 'Shopify, WooCommerce o desarrollo a medida — cada opción tiene sus ventajas y sus límites. Te ayudamos a elegir la que mejor se adapta al volumen de tu catálogo, tus integraciones y cómo quieres operar el día a día de tu tienda.',
        en: 'Shopify, WooCommerce or custom development — each option has its strengths and limits. We help you pick the one that best fits your catalog volume, your integrations and how you want to run your store day to day.',
      },
    },
    {
      title: { es: 'Más allá de instalar un tema', en: 'Beyond installing a theme' },
      description: {
        es: 'Construir un e-commerce real implica mucho más que activar una plantilla. Pasarelas de pago, lógica de envíos, gestión de inventario, descuentos, impuestos, integraciones con sistemas externos — todo eso requiere desarrollo con criterio y experiencia.',
        en: "Building a real e-commerce store is much more than activating a template. Payment gateways, shipping logic, inventory management, discounts, taxes, integrations with external systems — all of that requires development with judgment and experience.",
      },
    },
    {
      title: { es: 'Integrado con tu operación', en: 'Integrated with your operation' },
      description: {
        es: 'Una tienda online no vive sola. La conectamos con tus sistemas de gestión, tu bodega, tu ERP, tus herramientas de marketing y cualquier plataforma que ya estés usando — para que todo funcione como un solo sistema.',
        en: "An online store doesn't live in isolation. We connect it to your management systems, your warehouse, your ERP, your marketing tools and whatever platform you already use — so everything works as one system.",
      },
    },
    {
      title: { es: 'Construida para crecer', en: 'Built to grow' },
      description: {
        es: 'Una tienda con 50 productos hoy puede tener 5.000 mañana. Desarrollamos con arquitectura escalable para que cuando tu negocio crezca, tu tienda pueda crecer con él.',
        en: 'A store with 50 products today may have 5,000 tomorrow. We build with scalable architecture so your store can grow along with your business.',
      },
    },
  ],
  includes: [
    { es: 'Configuración y setup de la plataforma', en: 'Platform configuration and setup' },
    { es: 'Desarrollo de tema o plantilla a medida', en: 'Custom theme or template development' },
    { es: 'Catálogo de productos y categorías', en: 'Product and category catalog' },
    { es: 'Pasarelas de pago — Transbank, MercadoPago, Stripe y otras', en: 'Payment gateways — Transbank, MercadoPago, Stripe and others' },
    { es: 'Configuración de envíos y zonas de despacho', en: 'Shipping and delivery zone configuration' },
    { es: 'Gestión de stock e inventario', en: 'Stock and inventory management' },
    { es: 'Cupones, descuentos y promociones', en: 'Coupons, discounts and promotions' },
    { es: 'Integraciones con sistemas externos', en: 'Integrations with external systems' },
    { es: 'SEO técnico para e-commerce', en: 'Technical SEO for e-commerce' },
    { es: 'Configuración de Google Analytics y seguimiento de conversiones', en: 'Google Analytics setup and conversion tracking' },
    { es: 'Capacitación para administración de la tienda', en: 'Training for store management' },
  ],
  extraLists: [
    {
      heading: { es: 'Plataformas', en: 'Platforms' },
      items: [
        { es: 'Shopify — para tiendas que priorizan velocidad de lanzamiento y escalabilidad', en: 'Shopify — for stores prioritizing launch speed and scalability' },
        { es: 'WooCommerce — para tiendas sobre WordPress con mayor flexibilidad y control', en: 'WooCommerce — for WordPress-based stores with more flexibility and control' },
        { es: 'Desarrollo a medida — cuando los requerimientos superan cualquier plataforma estándar', en: 'Custom development — when requirements exceed any standard platform' },
      ],
    },
  ],
  process: [
    {
      title: { es: 'Requerimientos', en: 'Requirements' },
      description: {
        es: 'Mapeamos el catálogo, los flujos de venta, las integraciones necesarias y la plataforma que mejor se adapta al proyecto.',
        en: 'We map the catalog, sales flows, required integrations and the platform that best fits the project.',
      },
    },
    {
      title: { es: 'Configuración & Desarrollo', en: 'Setup & Development' },
      description: {
        es: 'Construimos la tienda: plataforma, tema, productos, pagos y envíos configurados y funcionando.',
        en: 'We build the store: platform, theme, products, payments and shipping configured and working.',
      },
    },
    {
      title: { es: 'Integraciones & Testing', en: 'Integrations & Testing' },
      description: {
        es: 'Conectamos los sistemas externos y probamos todos los flujos de compra.',
        en: 'We connect external systems and test every purchase flow.',
      },
    },
    {
      title: { es: 'Lanzamiento & Capacitación', en: 'Launch & Training' },
      description: {
        es: 'Publicamos la tienda y capacitamos a tu equipo para gestionarla de forma autónoma desde el primer día.',
        en: 'We publish the store and train your team to manage it independently from day one.',
      },
    },
  ],
  cta: {
    heading: {
      es: '¿Quieres lanzar tu tienda online o mejorar la que ya tienes?',
      en: 'Want to launch your online store, or improve the one you have?',
    },
    description: {
      es: 'Cuéntanos tu proyecto — te armamos una propuesta.',
      en: "Tell us about your project — we'll put together a proposal.",
    },
  },
};
