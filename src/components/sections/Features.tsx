"use client";

import { Crosshair, FolderOpen, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const blocks = [
  {
    icon: Crosshair,
    title: "Ne perdez plus un prospect",
    points: [
      "Réponse en moins de 2 minutes, jour et nuit",
      "Qualification automatique du dossier (type, urgence)",
      "Proposition de créneau directement dans la conversation",
    ],
  },
  {
    icon: FolderOpen,
    title: "Reprenez la main sur vos dossiers",
    points: [
      "Relances automatiques (confrères, clients, pièces manquantes)",
      "Résumé quotidien de l'activité de vos dossiers",
      "Alertes sur échéances et délais de procédure",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Protégez votre cabinet",
    points: [
      "Secret professionnel respecté, hébergement Europe",
      "Vous validez chaque envoi sensible avant qu'il parte",
      "Aucune donnée partagée ou revendue",
    ],
  },
];

export default function Features() {
  return (
    <section className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Ce que ça change pour vous
          </span>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Votre métier, assisté.{" "}
            <span className="text-foreground-alt">Pas remplacé.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-2xl border border-border-strong bg-card p-7 border-glow sm:p-8">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-foreground-alt transition-colors group-hover:text-foreground"
                  />
                  <h3 className="mt-6 text-xl font-medium tracking-tightest sm:text-2xl">
                    {block.title}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {block.points.map((point) => (
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
