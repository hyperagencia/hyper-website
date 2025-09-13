import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Esta página redirige automáticamente al idioma por defecto
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}