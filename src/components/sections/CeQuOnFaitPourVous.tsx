"use client";

import { BookOpen, ShieldCheck, Wrench } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const points = [
  {
    icon: BookOpen,
    title: "Pack de compétences juridiques prêt à l'emploi",
    text: "On configure dès le premier jour un pack de compétences pensé pour les avocats : veille, relances, vocabulaire métier, modèles de réponse. Vous n'avez rien à paramétrer.",
  },
  {
    icon: ShieldCheck,
    title: "Hébergement conforme RGPD",
    text: "Vos données et celles de vos clients sont hébergées en Europe, dans le respect du secret professionnel. On s'occupe de la conformité.",
  },
  {
    icon: Wrench,
    title: "Choix et gestion des connexions techniques",
    text: "Modèles, API, passerelles de messagerie : on sélectionne et on maintient tout ce qui fait fonctionner votre assistant, sans que vous ayez à y penser.",
  },
];

export default function CeQuOnFaitPourVous() {
  return (
    <section className="border-t border-border-subtle bg-background-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Ce qu&apos;on fait pour vous
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            La technologie est ouverte.{" "}
            <span className="text-foreground-alt">
              La mise en place ne l&apos;est pas.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-2xl border border-border-strong bg-card p-7 border-glow sm:p-8">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-foreground-alt transition-colors group-hover:text-foreground"
                  />
                  <h3 className="mt-6 text-lg font-medium tracking-tightest sm:text-xl">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-alt">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
