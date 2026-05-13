'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export function ExperticesSection() {
  const t = useTranslations('pages.home.expertices');

  return (
    <section className="bg-black py-24 md:py-36 px-6 md:px-12 lg:px-16">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="mb-12 md:mb-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
        >
          {t('heading')}
        </motion.h2>
      </motion.div>

      {/* Two cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Card 1 — Branding (dark with yellow accent) */}
        <motion.div
          variants={scaleIn}
          className="bg-[#111111] rounded-3xl p-10 md:p-14 flex flex-col justify-between min-h-[420px] border border-white/5 hover:border-[#f1e066]/20 transition-colors duration-300"
        >
          <div>
            <span className="text-[#f1e066] text-xs uppercase tracking-[0.2em] font-medium">
              01
            </span>
            <h3 className="text-white text-4xl md:text-5xl font-bold mt-5 tracking-tight">
              {t('branding_title')}
            </h3>
            <p className="text-white/50 text-lg mt-6 leading-relaxed max-w-sm">
              {t('branding_description')}
            </p>
          </div>
          <div className="mt-10">
            <Link href="/expertices">
              <Button
                variant="outline"
                size="md"
                className="rounded-full border-white/25 text-white hover:bg-white hover:text-black"
              >
                {t('cta')}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Card 2 — Tecnología (yellow background) */}
        <motion.div
          variants={scaleIn}
          className="bg-[#f1e066] rounded-3xl p-10 md:p-14 flex flex-col justify-between min-h-[420px]"
        >
          <div>
            <span className="text-black/40 text-xs uppercase tracking-[0.2em] font-medium">
              02
            </span>
            <h3 className="text-black text-4xl md:text-5xl font-bold mt-5 tracking-tight">
              {t('tecnologia_title')}
            </h3>
            <p className="text-black/60 text-lg mt-6 leading-relaxed max-w-sm">
              {t('tecnologia_description')}
            </p>
          </div>
          <div className="mt-10">
            <Link href="/expertices">
              <Button variant="primary" size="md" className="rounded-full">
                {t('cta')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
