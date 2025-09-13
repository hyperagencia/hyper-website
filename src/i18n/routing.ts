import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Español primero, inglés secundario
  locales: ['es', 'en'],
  // Español como idioma predeterminado
  defaultLocale: 'es',
  // 'as-needed' hace que español no tenga prefijo, inglés sí (/en)
  localePrefix: 'as-needed'
  // Removemos pathnames por ahora para simplificar
});