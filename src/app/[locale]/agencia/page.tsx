import { getTranslations } from 'next-intl/server';
import { buildPageMetadata } from '@/lib/seo';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { LoopVideo } from '@/components/ui/LoopVideo';
import { ClientsGrid } from '@/components/sections/ClientsGrid';
import { AGENCY_VALUES, AGENCY_STATS } from '@/data/agencia';
import { StatCounter } from '@/components/agencia/StatCounter';
import { cn } from '@/lib/utils';

interface AgenciaPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.agency' });
  return buildPageMetadata({ locale, href: '/agencia', title: t('title'), description: t('description') });
}

export default async function AgenciaPage({ params }: AgenciaPageProps) {
  const { locale } = await params;
  const localeKey = locale as 'es' | 'en';
  const t = await getTranslations('pages.agency');

  return (
    <div className="bg-white">
      {/* Hero */}
      <section data-header-theme="light" className="px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-28">
        <span className="inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide bg-[#f1e066] text-black">
          {t('hero.badge')}
        </span>

        <h1 className="font-display font-medium leading-[1.05] tracking-tight text-black mt-6 text-[2.75rem] sm:text-[3.75rem] md:text-[5rem] lg:text-[6rem] max-w-4xl">
          {t('hero.title')}
        </h1>

        <div className="relative w-full aspect-video mt-14 md:mt-20 overflow-hidden rounded-2xl md:rounded-3xl bg-black">
          <LoopVideo className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 lg:px-8 py-34 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          <p className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-black tracking-tight leading-normal">
            {t('hero.subtitle')}
          </p>
          <p className="text-base md:text-lg text-black/70 leading-relaxed md:mt-32 lg:mt-40 max-w-xl">
            {t('mission.statement')}
          </p>
        </div>
      </section>

      {/* Values */}
      <section data-header-theme="dark" className="bg-black px-6 lg:px-8 py-28 md:py-44">
        <h2 className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.75rem] md:text-[5rem] lg:text-[6rem] font-medium text-white tracking-tight max-w-5xl mb-14 md:mb-20">
          {t('values.heading')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:py-20">
          {AGENCY_VALUES.map((value, i) => (
            <div
              key={value.title.es}
              className={cn(
                'flex flex-col py-10 lg:py-0',
                i === 0 ? 'pt-0' : 'border-t border-white/10 lg:border-t-0',
                i !== 0 && 'lg:pl-10 lg:border-l lg:border-white/10',
                i !== AGENCY_VALUES.length - 1 && 'lg:pr-10'
              )}
            >
              <h3 className="font-display text-3xl md:text-3xl font-medium text-white tracking-tight">
                {value.title[localeKey]}
              </h3>
              <p className="text-base text-white/60 leading-relaxed mt-4">{value.description[localeKey]}</p>
              <div className="flex-1" />
              <img src={value.icon} alt="" className="w-14 h-14 md:w-20 md:h-20 mt-12" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section data-header-theme="light" className="px-6 lg:px-8 py-28 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_2fr] gap-12 lg:gap-20">
          <p className="text-2xl md:text-3xl font-display font-medium text-black tracking-tight leading-snug max-w-sm">
            {t('stats.statement')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {AGENCY_STATS.map((stat, i) => {
              const isRight = i % 2 === 1;
              const isBottomRow = i >= 2;
              return (
                <div
                  key={stat.value}
                  className={cn(
                    'py-10 sm:py-14',
                    i !== 0 && 'border-t border-black/10 sm:border-t-0',
                    isRight ? 'sm:border-l sm:border-black/10 sm:pl-10' : 'sm:pr-10',
                    isBottomRow && 'sm:border-t sm:border-black/10 sm:pt-14'
                  )}
                >
                  <StatCounter
                    value={stat.value}
                    className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.75rem] md:text-[5rem] lg:text-[6rem] font-medium text-black tracking-tight block"
                  />
                  <p className="text-sm md:text-base text-black/50 mt-4 max-w-[220px]">{stat.label[localeKey]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients */}
      <ClientsGrid namespace="pages.agency.clients" />

      {/* Closing CTA */}
      <section className="px-6 lg:px-8 py-24 md:py-32 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-black tracking-tight max-w-2xl mx-auto">
          {t('closing.heading')}
        </h2>
        <div className="mt-8">
          <Link href="/contacto">
            <Button variant="primary" size="lg" className="rounded-full">
              {t('closing.cta')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
