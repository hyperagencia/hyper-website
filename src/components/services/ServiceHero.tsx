'use client';

import { motion } from 'framer-motion';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { fadeInUp } from '@/lib/animations';
import type { Pillar } from '@/data/services';

interface ServiceHeroProps {
  pillarLabel: string;
  pillarAccent: Pillar['accent'];
  title: string;
  subtitle: string;
  coverImage?: string;
}

const BADGE_CLASSES: Record<Pillar['accent'], string> = {
  yellow: 'bg-[#f1e066] text-black',
  dark: 'bg-[#111111] text-white',
  light: 'bg-[#e8e8e8] text-black',
};

const PLACEHOLDER_GRADIENTS: Record<Pillar['accent'], string> = {
  yellow: 'linear-gradient(135deg, #f1e066 0%, #d9c74d 100%)',
  dark: 'linear-gradient(135deg, #111111 0%, #2a2a2a 100%)',
  light: 'linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 100%)',
};

export function ServiceHero({ pillarLabel, pillarAccent, title, subtitle, coverImage }: ServiceHeroProps) {
  return (
    <section className="px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-28">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className={`inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide ${BADGE_CLASSES[pillarAccent]}`}
      >
        {pillarLabel}
      </motion.span>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="font-medium leading-[1.05] tracking-tighter text-black mt-6 text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[5rem] max-w-4xl"
      >
        {title}
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeInUp}
        className="relative w-full aspect-video mt-14 md:mt-20 overflow-hidden rounded-2xl md:rounded-3xl"
      >
        {coverImage ? (
          <CloudinaryImage publicId={coverImage} alt={title} fill sizes="100vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0" style={{ background: PLACEHOLDER_GRADIENTS[pillarAccent] }} />
        )}
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeInUp}
        className="text-3xl md:text-4xl lg:text-5xl font-medium text-black tracking-tight leading-snug w-full md:w-4/5 mt-14"
      >
        {subtitle}
      </motion.p>
    </section>
  );
}
