import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Coincide con todas las rutas excepto API, archivos estáticos y Next.js internos
  matcher: [
    '/',
    '/(es|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*)*)'
  ]
};