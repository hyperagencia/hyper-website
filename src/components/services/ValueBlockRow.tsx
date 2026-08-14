'use client';

import { motion } from 'framer-motion';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
import type { Pillar } from '@/data/services';

interface ValueBlockRowProps {
  title: string;
  description: string;
  image?: string;
  index: number;
  pillarAccent: Pillar['accent'];
}

const PLACEHOLDER_GRADIENTS: Record<Pillar['accent'], string> = {
  yellow: 'linear-gradient(135deg, #f1e066 0%, #d9c74d 100%)',
  dark: 'linear-gradient(135deg, #111111 0%, #2a2a2a 100%)',
  light: 'linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 100%)',
};

export function ValueBlockRow({ title, description, image, index, pillarAccent }: ValueBlockRowProps) {
  const imageFirst = index % 2 === 1;

  const media = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={imageFirst ? slideInLeft : slideInRight}
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
        {image ? (
          <CloudinaryImage publicId={image} alt={title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0" style={{ background: PLACEHOLDER_GRADIENTS[pillarAccent] }} />
        )}
      </div>
    </motion.div>
  );

  const text = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      className="flex flex-col justify-center"
    >
      <h3 className="text-3xl md:text-4xl font-medium text-black tracking-tight">{title}</h3>
      <p className="text-base md:text-lg text-black/60 leading-relaxed mt-4">{description}</p>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-14 md:py-20 border-b border-black/8">
      {imageFirst ? (
        <>
          {media}
          {text}
        </>
      ) : (
        <>
          {text}
          {media}
        </>
      )}
    </div>
  );
}
