import { getTranslations } from 'next-intl/server';
import { RotatingGreeting } from '@/components/contact/RotatingGreeting';
import { ContactForm } from '@/components/contact/ContactForm';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.contact' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.contact' });
  const tFooter = await getTranslations({ locale, namespace: 'footer' });

  const email = t('world.email');
  const address = `${tFooter('address_line1')}, ${tFooter('address_line2')}.`;

  return (
    <div data-header-theme="light" className="bg-white">
      {/* Hero — rotating greeting + intro + form */}
      <section className="px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-start">
            <RotatingGreeting
              accessibleLabel={t('greeting_accessible_label')}
              className="font-display font-medium leading-none tracking-tighter text-black select-none text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem]"
            />
          </div>

          <div className="flex flex-col gap-10">
            <p className="max-w-md text-lg leading-relaxed text-black/70 md:text-xl">{t('intro')}</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Operando en todo el mundo */}
      <section className="border-t border-black/8 px-6 pb-24 pt-16 md:pb-32 md:pt-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <p className="text-sm text-black/50">{t('world.eyebrow')}</p>

          <div className="flex flex-col gap-12">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-black md:text-4xl lg:text-5xl">
              {t('world.paragraph')}
            </p>

            <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
              <div>
                <h2 className="font-display text-lg font-medium text-black">{t('world.contact_heading')}</h2>
                <p className="mt-2 text-black/70">{address}</p>
              </div>

              <div>
                <h2 className="font-display text-lg font-medium text-black">{t('world.email_heading')}</h2>
                <a href={`mailto:${email}`} className="mt-2 inline-block text-black underline underline-offset-4">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
