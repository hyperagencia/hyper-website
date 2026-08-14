'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface ArrowListProps {
  heading: string;
  items: string[];
}

export function ArrowList({ heading, items }: ArrowListProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
      className="px-6 lg:px-8 py-16 md:py-20 border-t border-black/8"
    >
      <motion.p variants={fadeInUp} className="text-xs font-medium uppercase tracking-[0.2em] text-black/40 mb-8">
        {heading}
      </motion.p>
      <ul className="space-y-4">
        {items.map((item) => (
          <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3 text-base md:text-lg text-black/80">
            <span aria-hidden className="text-black/30">
              →
            </span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
