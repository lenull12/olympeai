'use client';

import Reveal from '@/components/ui/Reveal';

export default function HeroAvocats() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-glow opacity-40" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card px-4 py-1.5 text-xs font-medium text-foreground-alt">
            ⚖️ Pour les avocats
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 text-balance text-4xl font-medium tracking-tightest sm:text-5xl md:text-6xl">
            Votre assistant juridique.
            <br />
            <span className="text-foreground-alt">Disponible 24/24, sur WhatsApp.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-alt sm:text-lg">
            Veille, relances, réponses clients, résumés. Tout ce qu&apos;un assistant ferait — sans recruter.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            >
              Réserver un appel
            </a>
            <a
              href="#fonctionnalites"
              className="text-sm text-foreground-alt transition-colors hover:text-white"
            >
              Voir les fonctionnalités ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
