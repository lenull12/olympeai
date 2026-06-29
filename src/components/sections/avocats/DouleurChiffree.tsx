'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '@/components/ui/Reveal';

const stats = [
  { value: 4, suffix: 'h', label: 'Répondre aux emails clients', detail: 'Questions répétitives, relances, confirmations' },
  { value: 2, suffix: 'h', label: 'Relancer confrères et pièces', detail: 'Pièces manquantes, délais non respectés' },
  { value: 1, suffix: 'h', label: 'Chercher la jurisprudence', detail: 'Veille, recherche doctrinale, analyse' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.span
      ref={ref}
      className="text-5xl font-semibold tracking-tightest sm:text-6xl"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {value}{suffix}
    </motion.span>
  );
}

export default function DouleurChiffree() {
  return (
    <section className="border-t border-border-subtle bg-background-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Le coût caché
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Un avocat solo perd en moyenne{' '}
            <span className="text-white">7h par semaine</span>{' '}
            sur des tâches répétitives.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="group flex flex-col items-center rounded-2xl border border-border-strong bg-card p-7 text-center border-glow sm:p-8">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <span className="mt-3 text-sm font-medium text-white">
                  {stat.label}
                </span>
                <span className="mt-1.5 text-xs text-foreground-alt">
                  {stat.detail}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10 text-center">
          <p className="text-sm text-foreground-alt">
            Votre assistant prend le relais.{' '}
            <span className="text-white">Vous récupérez votre temps.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
