'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const GREETINGS = ['Hola.', 'Hello.', 'Bonjour.', 'Ciao.', 'Cześć.', 'Hej.'];
const INTERVAL_MS = 3000;

interface RotatingGreetingProps {
  className?: string;
  /** Fixed text exposed to screen readers — the animation itself is decorative. */
  accessibleLabel: string;
}

export function RotatingGreeting({ className, accessibleLabel }: RotatingGreetingProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % GREETINGS.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <h1 className={className}>
      <span className="sr-only">{accessibleLabel}</span>
      {/* CSS grid stack: every word occupies the same cell, so the box is sized to the
          widest one and swapping words never shifts the layout. */}
      <span aria-hidden className="grid select-none">
        {GREETINGS.map((word, i) => (
          <motion.span
            key={word}
            className="col-start-1 row-start-1"
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
