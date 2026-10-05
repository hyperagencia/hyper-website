import { getTranslations } from 'next-intl/server';
import { buildPageMetadata } from '@/lib/seo';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { PillarCard } from '@/components/services/PillarCard';
import { ProcessSteps } from '@/components/services/ProcessSteps';
import { PILLARS } from '@/data/services';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.expertices' });
  return buildPageMetadata({ locale, href: '/expertices', title: t('title'), description: t('description') });
}

export default async function ExperticesPage() {
  const t = await getTranslations('pages.expertices');

  const stepKeys = ['discovery', 'strategy', 'development', 'launch'] as const;
  const steps = stepKeys.map((key) => ({
    title: t(`methodology.steps.${key}.title`),
    description: t(`methodology.steps.${key}.description`),
  }));

  return (
    <div data-header-theme="light" className="bg-white">
      {/* Hero — same editorial structure as the Home hero */}
      <section className="relative min-h-[70vh] flex flex-col pt-20">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-8 pt-16 lg:pt-24 pb-16">
          <div className="flex flex-col justify-center">
            <h1 className="font-display font-medium leading-none tracking-tighter text-black select-none text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem]">
              {t('hero.title')}
            </h1>
          </div>
          <div className="flex flex-col justify-center lg:justify-end lg:pb-8 mt-10 lg:mt-0 lg:pl-8">
            <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-sm">{t('hero.subtitle')}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/8" />
      </section>

      {/* Pillars */}
      <section className="px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.slug} pillar={pillar} />
          ))}
        </div>
      </section>

      {/* Methodology */}
      <ProcessSteps heading={t('methodology.heading')} steps={steps} />

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
