import type { Pillar } from './types';

export const development: Pillar = {
  slug: 'development',
  order: 1,
  accent: 'yellow',
  title: { es: 'Desarrollo & Tecnología', en: 'Development & Technology' },
  description: {
    es: 'Desarrollamos lo que diseñamos. Sitios, tiendas y aplicaciones web construidas con las tecnologías correctas para cada proyecto y cada escala.',
    en: 'We build what we design. Websites, stores and web applications built with the right technologies for every project and every scale.',
  },
  services: [
    { slug: 'sitios-web', label: { es: 'Sitios Web', en: 'Websites' } },
    { slug: 'ecommerce', label: { es: 'E-Commerce', en: 'E-Commerce' } },
    { slug: 'web-apps', label: { es: 'Web Apps', en: 'Web Apps' } },
    { slug: 'wordpress', label: { es: 'WordPress & Plugins', en: 'WordPress & Plugins' } },
    { slug: 'integraciones', label: { es: 'Integraciones & APIs', en: 'Integrations & APIs' } },
  ],
};
