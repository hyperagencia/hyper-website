import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ValueBlockRow } from '@/components/services/ValueBlockRow';
import { ArrowList } from '@/components/services/ArrowList';
import { ProcessSteps } from '@/components/services/ProcessSteps';
import { getPillarBySlug } from '@/data/services';
import { getServiceDetailBySlug, SERVICE_DETAILS } from '@/data/services/detail';

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; servicio: string }>;
}

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({ servicio: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { locale, servicio } = await params;
  const service = getServiceDetailBySlug(servicio);
  if (!service) return {};

  const localeKey = locale as 'es' | 'en';
  return {
    title: service.seo.title[localeKey],
    description: service.seo.description[localeKey],
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, servicio } = await params;
  const service = getServiceDetailBySlug(servicio);
  if (!service) notFound();

  const pillar = getPillarBySlug(service.pillarSlug);
  if (!pillar) notFound();

  const t = await getTranslations('pages.expertices');
  const localeKey = locale as 'es' | 'en';

  const process = service.process.map((step) => ({
    title: step.title[localeKey],
    description: step.description[localeKey],
  }));

  return (
    <div data-header-theme="light" className="bg-white">
      <ServiceHero
        pillarLabel={pillar.title[localeKey]}
        pillarAccent={pillar.accent}
        title={service.hero.title[localeKey]}
        subtitle={service.hero.subtitle[localeKey]}
        coverImage={service.hero.coverImage}
      />

      <section className="px-6 lg:px-8">
        {service.valueBlocks.map((block, i) => (
          <ValueBlockRow
            key={block.title[localeKey]}
            title={block.title[localeKey]}
            description={block.description[localeKey]}
            image={block.image}
            index={i}
            pillarAccent={pillar.accent}
          />
        ))}
      </section>

      {service.extraLists?.map((extra) => (
        <ArrowList
          key={extra.heading[localeKey]}
          heading={extra.heading[localeKey]}
          items={extra.items.map((item) => item[localeKey])}
        />
      ))}

      <ProcessSteps heading={t('methodology.heading')} steps={process} />

      {/* Closing CTA */}
      <section className="px-6 lg:px-8 py-24 md:py-32 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-black tracking-tight max-w-2xl mx-auto">
          {service.cta.heading[localeKey]}
        </h2>
        <p className="text-black/60 max-w-xl mx-auto mt-4">{service.cta.description[localeKey]}</p>
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
