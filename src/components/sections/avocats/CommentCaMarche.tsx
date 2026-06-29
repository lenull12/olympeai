'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    num: '01',
    title: 'Vous parlez, il écoute',
    desc: 'Envoyez un message vocal ou texte par WhatsApp. Pas d\'app, pas de login, rien à installer.',
    messages: [
      { from: 'client' as const, text: '🎤 Message vocal · 0:15' },
      { from: 'assistant' as const, text: 'Bien reçu. Je prépare le résumé du dossier Martin. Vous le recevrez par email à 8h.' },
    ],
  },
  {
    num: '02',
    title: 'Il travaille, vous validez',
    desc: 'Il prépare, relance, rédige. Vous validez ce qui compte avant l\'envoi.',
    messages: [
      { from: 'assistant' as const, text: 'Résumé prêt. Je l\'envoie par email à 8h ou vous le relisez d\'abord ?' },
      { from: 'client' as const, text: 'Envoie-le directement.' },
      { from: 'assistant' as const, text: 'C\'est fait. Email programmé pour demain 8h.' },
    ],
  },
  {
    num: '03',
    title: 'C\'est fait, vous êtes notifié',
    desc: 'Email envoyé, relance faite, RDV confirmé. Vous recevez une confirmation.',
    messages: [
      { from: 'assistant' as const, text: '✅ Résumé envoyé à Mme Durand par email.\n✅ Relance Me. Dubois envoyée.\n📋 2 actions terminées aujourd\'hui.' },
    ],
  },
];

function StepMock({ messages }: { messages: typeof steps[0]['messages'] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [visibleCount, setVisibleCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || visibleCount >= messages.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 300 : 900
    );
    return () => clearTimeout(timer);
  }, [inView, visibleCount, messages.length]);

  return (
    <div ref={ref} className="mt-5 flex min-h-[120px] flex-col gap-2 rounded-xl border border-border-strong bg-black p-3">
      {messages.map((m, i) => {
        const isClient = m.from === 'client';
        return (
          <motion.div
            key={i}
            initial={reduced ? false : { opacity: 0, x: isClient ? 12 : -12 }}
            animate={i < visibleCount ? { opacity: 1, x: 0 } : reduced ? { opacity: 0 } : { opacity: 0, x: isClient ? 12 : -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`flex ${isClient ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] rounded-lg px-3 py-1.5 text-[11px] leading-snug whitespace-pre-line ${isClient ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black'}`}>
              {m.text}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function CommentCaMarche() {
  return (
    <section className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Comment ça marche
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Trois étapes.{' '}
            <span className="text-foreground-alt">Zéro friction.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <div className="flex h-full flex-col">
                <span className="text-xs font-medium text-foreground-alt">{step.num}</span>
                <h3 className="mt-2 text-lg font-medium tracking-tightest">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-alt">{step.desc}</p>
                <StepMock messages={step.messages} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
