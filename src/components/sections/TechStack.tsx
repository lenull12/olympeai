"use client";

import Reveal from "@/components/ui/Reveal";

const capabilities = [
  {
    num: "01",
    title: "Mémoire persistante",
    text: "Il retient les préférences de votre cabinet et de vos clients.",
  },
  {
    num: "02",
    title: "Compétences auto-générées",
    text: "Il construit ses propres méthodes à partir de ce qu'il observe.",
  },
  {
    num: "03",
    title: "Automatisation programmée",
    text: "Relances, résumés, alertes — sans intervention de votre part.",
  },
];

export default function TechStack() {
  return (
    <section className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card px-4 py-1.5 text-xs text-foreground-alt">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            open source · MIT license
          </span>

          <h2 className="mx-auto mt-6 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Une infrastructure d&apos;agent reconnue
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground-alt sm:text-base">
            OlympeAI s&apos;appuie sur{" "}
            <a
              href="https://hermes-agent.nousresearch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Hermes Agent
            </a>
            , un agent open source développé par Nous Research. Une technologie
            puissante — mais qui demande des semaines de configuration
            (compétences, API, hébergement, passerelles). C&apos;est exactement ce
            qu&apos;on fait pour vous, en 48h.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-border-strong bg-card p-6 border-glow sm:p-7">
                <span className="font-mono text-sm text-foreground-alt">
                  {c.num}
                </span>
                <h3 className="mt-4 text-lg font-medium tracking-tightest sm:text-xl">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-alt">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
