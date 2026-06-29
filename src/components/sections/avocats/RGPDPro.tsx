'use client';

import { Globe, Lock, EyeOff } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const cards = [
  {
    icon: Globe,
    title: 'Hébergement Europe',
    points: [
      'Serveurs Hetzner, Allemagne et Finlande',
      'Aucune donnée ne sort de l\'Union européenne',
      'Conforme RGPD dès le premier jour',
    ],
  },
  {
    icon: Lock,
    title: 'Isolation stricte',
    points: [
      'Votre cabinet a son propre espace isolé',
      'Terminal, mémoire, sessions — tout est séparé',
      'Un client ne voit jamais les données d\'un autre',
    ],
  },
  {
    icon: EyeOff,
    title: 'Secret professionnel',
    points: [
      'Chaque envoi sensible passe par votre validation',
      'Purge automatique des données sur demande',
      'DPA (Data Processing Agreement) fourni',
    ],
  },
];

export default function RGPDPro() {
  return (
    <section className="border-t border-border-subtle bg-background-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Conformité &amp; Sécurité
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Votre secret professionnel,{' '}
            <span className="text-foreground-alt">protégé.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-2xl border border-border-strong bg-card p-7 border-glow sm:p-8">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-foreground-alt transition-colors group-hover:text-white"
                  />
                  <h3 className="mt-6 text-xl font-medium tracking-tightest sm:text-2xl">
                    {card.title}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground-alt"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
