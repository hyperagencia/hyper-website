'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  heading: string;
  steps: ProcessStep[];
}

export function ProcessSteps({ heading, steps }: ProcessStepsProps) {
  return (
    <section className="px-6 lg:px-8 py-20 md:py-28 border-t border-black/8">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-medium text-black tracking-tight mb-12 md:mb-16"
      >
        {heading}
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="border-t border-black/10"
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            variants={fadeInUp}
            className="flex items-center justify-between gap-6 py-10 border-b border-black/10"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-black">{step.title}</h3>
              <p className="text-sm md:text-base text-black/50 mt-1">{step.description}</p>
            </div>
            <span className="text-4xl md:text-5xl font-medium text-black/15 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
