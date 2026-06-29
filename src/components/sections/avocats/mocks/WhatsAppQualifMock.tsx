'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Msg = { from: 'client' | 'assistant'; text: string };

const messages: Msg[] = [
  { from: 'client', text: 'Bonjour, je suis Mme Fernandez. J\'ai une question sur mon divorce.' },
  { from: 'assistant', text: 'Bonjour Mme Fernandez. Je peux vous aider. Il s\'agit d\'un divorce par consentement mutuel ou contentieux ?' },
  { from: 'client', text: 'Contentieux. Mon mari conteste la garde.' },
  { from: 'assistant', text: 'C\'est noté. Je transmets à Maître. Souhaitez-vous un rendez-vous cette semaine ? Mardi 15h ou mercredi 10h sont disponibles.' },
];

export default function WhatsAppQualifMock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [visibleCount, setVisibleCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || visibleCount >= messages.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 400 : 1200
    );
    return () => clearTimeout(timer);
  }, [inView, visibleCount]);

  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-black">
      <div className="flex items-center gap-3 border-b border-border-subtle bg-[#0d0d0d] px-4 py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-black">AI</div>
        <div className="text-xs font-medium text-white">Assistant</div>
        <div className="ml-auto text-[10px] text-foreground-alt">Réponse en 47 sec</div>
      </div>
      <div ref={ref} className="flex min-h-[220px] flex-col gap-2.5 px-3 py-4">
        {messages.map((m, i) => {
          const isClient = m.from === 'client';
          return (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, x: isClient ? 16 : -16 }}
              animate={i < visibleCount ? { opacity: 1, x: 0 } : reduced ? { opacity: 0 } : { opacity: 0, x: isClient ? 16 : -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`flex ${isClient ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] rounded-xl px-3 py-2 text-[11px] leading-snug ${isClient ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black'}`}>
                {m.text}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
