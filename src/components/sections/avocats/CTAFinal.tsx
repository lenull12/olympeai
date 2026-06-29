'use client';

import Reveal from '@/components/ui/Reveal';

export default function CTAFinal() {
  return (
    <section id="contact" className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="text-5xl">🐉</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Offre Fondateur — 5 cabinets pilotes
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-foreground-alt sm:text-lg">
            <strong className="text-white">15 jours entièrement gratuits</strong>. Configuration personnalisée incluse. <strong className="text-white">Aucun engagement.</strong>
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            >
              🐉 Réserver ma place
            </a>
            <p className="text-xs text-foreground-alt">
              Pas de carte bancaire. Pas d&apos;engagement. Vous testez, vous décidez.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
