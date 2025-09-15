import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('pages.home');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Test que Tailwind funciona */}
      <div className="pt-24 pb-8 text-center">
        <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4"></div>
        <p className="text-blue-600 font-semibold">🎉 Si ves esto con estilos, Tailwind funciona</p>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('hero.cta')}
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('services.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
                <h3 className="font-semibold mb-2">Servicio {i}</h3>
                <p className="text-gray-600">Descripción del servicio</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}