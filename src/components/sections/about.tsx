'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function AboutSection() {
  const t = useTranslations('pages.home.about');

  return (
    <section className="bg-[#e8e8e8] py-24 md:py-36 px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <motion.p
          variants={fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black leading-tight max-w-5xl"
        >
          {t('paragraph')}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-10">
          <Link href="/expertices">
            <Button variant="pill-yellow" size="lg">
              {t('cta')}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
