import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Español primero, inglés secundario
  locales: ['es', 'en'],
  // Español como idioma predeterminado
  defaultLocale: 'es',
  // 'as-needed' hace que español no tenga prefijo, inglés sí (/en)
  localePrefix: 'as-needed',
  // Slugs de primer nivel traducidos por idioma — mismo código interno (`Link href="/proyectos"`),
  // next-intl resuelve la URL real según el locale activo (ej. /en/projects en vez de /en/proyectos).
  pathnames: {
    '/': '/',
    '/agencia': { es: '/agencia', en: '/agency' },
    '/proyectos': { es: '/proyectos', en: '/projects' },
    '/proyectos/[slug]': { es: '/proyectos/[slug]', en: '/projects/[slug]' },
    '/expertices': { es: '/expertices', en: '/expertises' },
    '/expertices/[servicio]': { es: '/expertices/[servicio]', en: '/expertises/[servicio]' },
    '/contacto': { es: '/contacto', en: '/contact' },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/privacidad': '/privacidad',
    '/terminos': '/terminos',
  },
});