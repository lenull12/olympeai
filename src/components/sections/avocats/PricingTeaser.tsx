'use client';

import { Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const plans = [
  {
    name: "L'Assistant",
    price: '99€',
    cadence: '/mois',
    description: 'Pour démarrer sereinement.',
    features: ['WhatsApp', 'Email', 'Configuration incluse', 'Veille juridique', 'Relances automatiques'],
    cta: 'Commencer',
    popular: true,
  },
  {
    name: 'Le Pro',
    price: '199€',
    cadence: '/mois',
    description: 'Pour ne manquer aucune demande.',
    features: ['WhatsApp', 'Email', 'SMS', 'Téléphone', 'Analyse de contrats', 'Dictée vocale'],
    cta: 'Réserver un appel',
    popular: false,
  },
  {
    name: 'Le Cabinet',
    price: '349€',
    cadence: '/mois',
    description: "Pour toute l'équipe.",
    features: ['Tous les canaux', 'Sessions collaborateur', 'Support prioritaire', 'DPA inclus', 'Configuration avancée'],
    cta: 'Réserver un appel',
    popular: false,
  },
];

export default function PricingTeaser() {
  return (
    <section className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Tarifs
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Simple. Sans engagement.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-foreground-alt leading-relaxed">
            Paiement mensuel. Résiliez quand vous voulez. Pas de frais cachés.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={0.1 + i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  plan.popular
                    ? 'border-white bg-card'
                    : 'border-border-strong bg-card border-glow'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                    Le plus choisi
                  </span>
                )}

                <h3 className="text-lg font-medium">{plan.name}</h3>
                <p className="mt-1 text-sm text-foreground-alt">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tightest">{plan.price}</span>
                  <span className="text-sm text-foreground-alt">{plan.cadence}</span>
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-foreground-alt">
                      <Check size={16} className="shrink-0 text-white" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-medium transition-transform hover:scale-[1.02] ${
                    plan.popular
                      ? 'bg-white text-black'
                      : 'border border-border-strong text-foreground hover:border-foreground-alt'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-foreground-alt">
          Pas de frais d&apos;installation. Sans engagement. Résiliez quand vous voulez.
        </p>
      </div>
    </section>
  );
}
