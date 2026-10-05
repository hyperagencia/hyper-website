const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
/**
 * 301 desde las URLs del WordPress anterior (sitemap real de hyperagencia.com) para no perder
 * lo ya indexado. Los más específicos van primero; los comodines al final.
 */
const r = (source: string, destination: string) => ({ source, destination, permanent: true });

const wordpressRedirects = [
  r('/en/home', '/en'),
  r('/cultura', '/agencia'),
  r('/luis-garcia', '/agencia'),
  r('/en/about', '/en/agency'),
  r('/en/work', '/en/projects'),
  r('/en/services', '/en/expertises'),

  // Servicios: slugs que cambiaron
  r('/servicios/diseno-ui-ux', '/expertices/ui-ux'),
  r('/servicios/diseno-web', '/expertices/web-design'),
  r('/servicios/e-commerce', '/expertices/ecommerce-design'),
  r('/servicios/desarrollo-e-commerce', '/expertices/ecommerce'),
  r('/servicios/integraciones-apis', '/expertices/integraciones'),
  r('/wordpress-plugins', '/expertices/wordpress'),
  // Servicios: mismo slug (identidad-visual, estrategia-naming, brand-systems, motion-branding, sitios-web, web-apps)
  ...['identidad-visual', 'estrategia-naming', 'brand-systems', 'motion-branding', 'sitios-web', 'web-apps'].map((slug) =>
    r(`/servicios/${slug}`, `/expertices/${slug}`),
  ),
  r('/servicios/:path*', '/expertices'),

  // Portfolio: casos que existen en la web nueva
  r('/en/portfolio/probel', '/en/projects/probel'),
  r('/portfolio/probel-beauty-corporate', '/proyectos/probel'),
  r('/en/portfolio/zhibo', '/en/projects/zhibo'),
  r('/portfolio/zhibo-brands-group', '/proyectos/zhibo'),
  r('/portfolio/long-king', '/proyectos/lonkingmaq'),
  // Portfolio / categorías: el resto cae al listado
  r('/en/portfolio/:slug*', '/en/projects'),
  r('/portfolio/:slug*', '/proyectos'),
  r('/en/project-type/:slug*', '/en/projects'),
  r('/project-type/:slug*', '/proyectos'),

  // Blog viejo (posts de 2020/2024 con Lorem ipsum) → "Próximamente"
  r('/noticias', '/blog'),
  r('/category/:slug*', '/blog'),
  r('/tag/:slug*', '/blog'),
  r('/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug', '/blog'),

  r('/politicas-de-privacidad', '/privacidad'),
  r('/postulacion', '/contacto'),

  // Páginas basura / de prueba que estaban en el sitemap de WP
  ...['mi-cuenta', 'practica', 'servicios-old', 'pruebas-js', 'error-es', 'new-home-2024-test'].map((slug) => r(`/${slug}`, '/')),
];

const nextConfig = {
  async redirects() {
    return wordpressRedirects;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);