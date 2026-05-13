'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer, slideInRight } from '@/lib/animations';

export function HeroSection() {
  const t = useTranslations('pages.home.hero');

  return (
    <section className="relative min-h-screen bg-white flex flex-col pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex-1 grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-8 pt-16 lg:pt-24 pb-24"
      >
        {/* Left — editorial headline */}
        <motion.div variants={fadeInUp} className="flex flex-col justify-center">
          <h1 className="font-medium leading-none tracking-tighter text-black select-none">
            <span className="block text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem]">
              {t('title_line1')}
            </span>
            <span className="block text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem]">
              {t('title_line2')}
            </span>
          </h1>
        </motion.div>

        {/* Right — subtitle only */}
        <motion.div
          variants={slideInRight}
          className="flex flex-col justify-center lg:justify-end lg:pb-8 mt-10 lg:mt-0 lg:pl-8"
        >
          <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-sm">
            {t('hero_subtitle')}
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex justify-between items-end px-6 lg:px-8 pb-8 text-xs text-black/50 tracking-wide"
      >
        <span>{t('label_agency')}</span>
        <span>{t('label_since')}</span>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/8" />
    </section>
  );
}
