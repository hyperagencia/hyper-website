import type { LegalPage } from '@/data/legal';

interface LegalPageLayoutProps {
  page: LegalPage;
  locale: 'es' | 'en';
}

export function LegalPageLayout({ page, locale }: LegalPageLayoutProps) {
  return (
    <div data-header-theme="light" className="bg-white">
      <section className="px-6 lg:px-8 pt-32 md:pt-40 pb-16 md:pb-20">
        <h1 className="font-display font-medium leading-none tracking-tighter text-black text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] max-w-3xl">
          {page.title[locale]}
        </h1>
        <p className="mt-4 text-sm text-black/50">
          {locale === 'es' ? 'Última actualización' : 'Last updated'}: {page.updated[locale]}
        </p>
      </section>

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-3xl space-y-12 md:space-y-16">
          {page.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="mb-4 font-display text-xl font-medium tracking-tight text-black md:text-2xl">
                {section.heading[locale]}
              </h2>
              <div className="space-y-4">
                {section.body.map((block, blockIndex) => (
                  <div
                    key={blockIndex}
                    className="leading-relaxed text-black/70 [&_a]:text-black [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-medium [&_strong]:text-black [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5"
                    dangerouslySetInnerHTML={{ __html: block[locale] }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
