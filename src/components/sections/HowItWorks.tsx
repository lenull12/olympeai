"use client";

import Reveal from "@/components/ui/Reveal";
import CodeMock from "@/components/ui/CodeMock";

const steps = [
  {
    num: "I",
    title: "On vous configure",
    text: "On adapte l'assistant à votre cabinet, votre vocabulaire et vos habitudes. Vous n'avez rien à installer.",
  },
  {
    num: "II",
    title: "Vous lui parlez sur WhatsApp",
    text: "Pas de logiciel à apprendre. Vous écrivez comme à un confrère, depuis l'application que vous utilisez déjà.",
  },
  {
    num: "III",
    title: "Il travaille pour vous",
    text: "Réponses aux clients, relances, organisation des dossiers : vos dossiers avancent même la nuit.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="fonctionnement"
      className="border-t border-border-subtle bg-background-alt px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Fonctionnement
          </span>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Trois étapes. Votre assistant prêt.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="flex gap-5">
                  <span className="font-mono text-sm text-foreground-alt">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="mt-2 max-w-md text-balance text-sm leading-relaxed text-foreground-alt">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <CodeMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
