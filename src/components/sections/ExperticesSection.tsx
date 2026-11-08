'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PILLARS } from '@/data/services';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function ExperticesSection() {
  const t = useTranslations('pages.home.expertices');
  const locale = useLocale() as 'es' | 'en';

  return (
    <section data-header-theme="light" className="bg-white py-24 md:py-32 px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="flex flex-col items-center text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tighter"
        >
          {t('heading')}
        </motion.h2>

        <div className="mt-12 md:mt-16 flex w-full max-w-5xl flex-col gap-2 md:gap-3">
          {PILLARS.map((pillar) => (
            <motion.div key={pillar.slug} variants={fadeInUp} className="flex flex-col items-center">
              <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
                {pillar.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={{ pathname: '/expertices/[servicio]', params: { servicio: service.slug } }}
                      className="inline-flex items-center rounded-full border border-black/15 px-5 py-2.5 text-sm md:px-7 md:py-3.5 md:text-lg font-medium text-black transition-colors duration-200 hover:border-black hover:bg-black hover:text-white"
                    >
                      {service.label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-12 md:mt-16">
          <Link
            href="/expertices"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base md:text-lg font-medium text-white transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97]"
          >
            {t('cta')}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
