"use client";

import { Check, Zap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const plans = [
  {
    name: "L'Assistant",
    price: "99€",
    cadence: "/mois",
    description: "Pour démarrer sereinement.",
    features: ["WhatsApp", "Email", "Configuration incluse"],
    cta: "Commencer",
    popular: true,
  },
  {
    name: "Le Pro",
    price: "199€",
    cadence: "/mois",
    description: "Pour ne manquer aucune demande.",
    features: ["WhatsApp", "Email", "SMS", "Téléphone"],
    cta: "Réserver un appel",
    popular: false,
  },
  {
    name: "Le Cabinet",
    price: "349€",
    cadence: "/mois",
    description: "Pour toute l'équipe.",
    features: ["Tous les canaux", "Sessions collaborateur", "Support prioritaire"],
    cta: "Réserver un appel",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Tarifs
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Choisissez votre plan
          </h2>
        </Reveal>

        {/* Offre Fondateur — 5 cabinets pilotes */}
        <Reveal delay={0.05}>
          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-card">
            <div className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:p-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black">
                <Zap size={18} strokeWidth={2} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-base font-medium">
                  🐉 Offre Fondateur — 5 cabinets pilotes
                </h3>
                <p className="mt-1 text-sm text-foreground-alt">
                  <strong className="text-white">15 jours entièrement gratuits</strong> · Configuration personnalisée incluse · <strong className="text-white">Aucun engagement</strong> — vous décidez après avoir vu ce que ça change
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-transform hover:scale-[1.03] whitespace-nowrap"
              >
                Je réserve ma place
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={0.1 + i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                  plan.popular
                    ? "border-white bg-card"
                    : "border-border-strong bg-card border-glow"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                    Le plus choisi
                  </span>
                )}

                <h3 className="text-lg font-medium">{plan.name}</h3>
                <p className="mt-1 text-sm text-foreground-alt">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tightest">
                    {plan.price}
                  </span>
                  <span className="text-sm text-foreground-alt">
                    {plan.cadence}
                  </span>
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-foreground-alt"
                    >
                      <Check size={16} className="shrink-0 text-white" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-medium transition-transform hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-white text-black"
                      : "border border-border-strong text-foreground hover:border-foreground-alt"
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
