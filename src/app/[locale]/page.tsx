import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('pages.home');
  const tCommon = useTranslations('common');

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation temporal */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Hyperagencia</h1>
          <div className="flex space-x-4">
            <Link href="/">{tCommon('navigation.inicio')}</Link>
            <Link href="/proyectos">{tCommon('navigation.proyectos')}</Link>
            <Link href="/expertices">{tCommon('navigation.expertices')}</Link>
            <Link href="/agencia">{tCommon('navigation.agencia')}</Link>
            <Link href="/blog">{tCommon('navigation.blog')}</Link>
            <Link href="/contacto">{tCommon('navigation.contacto')}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Link 
            href="/proyectos"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>
      </section>
    </main>
  );
}