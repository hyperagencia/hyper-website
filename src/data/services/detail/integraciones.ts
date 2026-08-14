import type { ServiceDetail } from './types';

export const integraciones: ServiceDetail = {
  slug: 'integraciones',
  pillarSlug: 'development',
  seo: {
    title: {
      es: 'Integraciones y Desarrollo de APIs para Empresas | Hyper',
      en: 'Integrations and API Development for Companies | Hyper',
    },
    description: {
      es: 'Conectamos tus plataformas, desarrollamos APIs y automatizamos flujos de negocio. CRM, ERP, e-commerce, pagos y más. Agencia de integraciones tecnológicas en Chile.',
      en: 'We connect your platforms, build APIs and automate business workflows. CRM, ERP, e-commerce, payments and more. Technology integrations agency in Chile.',
    },
  },
  hero: {
    title: {
      es: 'Tus sistemas deberían trabajar juntos. Si no lo hacen, algo se está perdiendo.',
      en: 'Your systems should work together. If they don’t, something’s being lost.',
    },
    subtitle: {
      es: 'Conectamos plataformas, automatizamos procesos y construimos las APIs que hacen que tu stack tecnológico funcione como un sistema cohesionado — no como un conjunto de herramientas desconectadas.',
      en: 'We connect platforms, automate processes and build the APIs that make your tech stack work as one cohesive system — not a set of disconnected tools.',
    },
  },
  valueBlocks: [
    {
      title: { es: 'El costo oculto de los sistemas desconectados', en: 'The hidden cost of disconnected systems' },
      description: {
        es: 'Cada vez que alguien de tu equipo copia datos de una plataforma a otra manualmente, estás pagando ese costo en tiempo, errores y frustración. Una integración bien construida elimina ese trabajo repetitivo y libera a tu equipo para lo que realmente importa.',
        en: "Every time someone on your team manually copies data from one platform to another, you're paying for it in time, errors and frustration. A well-built integration eliminates that repetitive work and frees your team for what really matters.",
      },
    },
    {
      title: { es: 'APIs propias y de terceros', en: 'Custom and third-party APIs' },
      description: {
        es: 'Tanto construimos APIs desde cero para que tus sistemas expongan sus datos de forma controlada, como integramos las APIs de servicios que ya usas — CRMs, ERPs, plataformas de pago, herramientas de marketing, logística y cualquier servicio con una API disponible.',
        en: 'We build APIs from scratch so your systems can expose data in a controlled way, and we integrate the APIs of services you already use — CRMs, ERPs, payment platforms, marketing tools, logistics and any service with an available API.',
      },
    },
    {
      title: { es: 'Automatización real, no solo conexión', en: 'Real automation, not just connection' },
      description: {
        es: 'Conectar dos sistemas es el primer paso. El valor real aparece cuando esa conexión desencadena acciones automáticas: un pedido confirmado que actualiza el inventario, un formulario enviado que crea un contacto en el CRM, una venta que genera una factura.',
        en: 'Connecting two systems is the first step. The real value appears when that connection triggers automatic actions: a confirmed order that updates inventory, a submitted form that creates a CRM contact, a sale that generates an invoice.',
      },
    },
    {
      title: { es: 'Construida para no fallar', en: 'Built not to fail' },
      description: {
        es: 'Una integración que falla silenciosamente es peor que no tener integración. Construimos con manejo de errores, reintentos, logs y monitoreo — para que sepas en todo momento que los datos están fluyendo correctamente.',
        en: "An integration that fails silently is worse than no integration at all. We build with error handling, retries, logs and monitoring — so you always know data is flowing correctly.",
      },
    },
  ],
  includes: [
    { es: 'Desarrollo de APIs REST propias', en: 'Custom REST API development' },
    { es: 'Consumo e integración de APIs de terceros', en: 'Consuming and integrating third-party APIs' },
    { es: 'Webhooks y eventos en tiempo real', en: 'Webhooks and real-time events' },
    { es: 'Sincronización de datos entre plataformas', en: 'Data synchronization between platforms' },
    { es: 'Automatizaciones de flujos de negocio', en: 'Business workflow automations' },
    { es: 'Integraciones con CRM — HubSpot, Salesforce y otros', en: 'CRM integrations — HubSpot, Salesforce and others' },
    { es: 'Conexión con plataformas de pago — Transbank, MercadoPago, Stripe', en: 'Payment platform connections — Transbank, MercadoPago, Stripe' },
    { es: 'Integraciones con ERP y sistemas de gestión', en: 'ERP and management system integrations' },
    { es: 'Conectores con herramientas de marketing y analytics', en: 'Connectors for marketing and analytics tools' },
    { es: 'Documentación técnica completa', en: 'Complete technical documentation' },
    { es: 'Monitoreo y alertas de errores', en: 'Monitoring and error alerts' },
  ],
  extraLists: [
    {
      heading: { es: 'Casos comunes', en: 'Common cases' },
      items: [
        { es: 'Tienda WooCommerce sincronizada con el sistema de inventario', en: 'WooCommerce store synced with the inventory system' },
        { es: 'Formulario web que alimenta automáticamente el CRM y dispara emails', en: 'Web form that automatically feeds the CRM and triggers emails' },
        { es: 'Plataforma interna conectada con una API de facturación', en: 'Internal platform connected to a billing API' },
        { es: 'E-commerce integrado con operadores logísticos', en: 'E-commerce integrated with logistics operators' },
        { es: 'Sitio web que consume datos de un sistema legado en tiempo real', en: 'Website consuming data from a legacy system in real time' },
      ],
    },
  ],
  process: [
    {
      title: { es: 'Mapeo de sistemas', en: 'Systems mapping' },
      description: {
        es: 'Levantamos todos los sistemas involucrados, sus APIs disponibles y los flujos de datos que necesitan conectarse.',
        en: 'We map every system involved, their available APIs and the data flows that need to connect.',
      },
    },
    {
      title: { es: 'Arquitectura de integración', en: 'Integration architecture' },
      description: {
        es: 'Definimos cómo van a comunicarse los sistemas, qué datos fluyen, en qué dirección y con qué frecuencia.',
        en: 'We define how the systems will communicate, what data flows, in which direction and how often.',
      },
    },
    {
      title: { es: 'Desarrollo & Testing', en: 'Development & Testing' },
      description: {
        es: 'Construimos las integraciones con manejo de errores, pruebas exhaustivas en staging y validación de cada flujo.',
        en: 'We build the integrations with error handling, thorough staging tests and validation of every flow.',
      },
    },
    {
      title: { es: 'Despliegue & Monitoreo', en: 'Deployment & Monitoring' },
      description: {
        es: 'Activamos en producción con logs y alertas configuradas para detectar cualquier problema antes de que impacte tu operación.',
        en: 'We activate in production with logs and alerts configured to catch any issue before it impacts your operation.',
      },
    },
  ],
  cta: {
    heading: {
      es: '¿Tienes sistemas que no se comunican o procesos manuales que podrían automatizarse?',
      en: 'Do you have systems that don’t talk to each other, or manual processes that could be automated?',
    },
    description: {
      es: 'Cuéntanos cómo funciona tu operación hoy — encontramos dónde conectar.',
      en: "Tell us how your operation works today — we'll find where to connect.",
    },
  },
};
