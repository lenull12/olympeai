"use client";

import Reveal from "@/components/ui/Reveal";

type Channel = {
  name: string;
  icon: string;
  included: boolean;
  note?: string;
};

const channels: Channel[] = [
  { name: "WhatsApp", icon: "💬", included: true },
  { name: "Email", icon: "✉️", included: true },
  { name: "SMS", icon: "📱", included: false, note: "palier Pro" },
  { name: "Téléphone", icon: "📞", included: false, note: "palier Pro" },
  { name: "Telegram", icon: "✈️", included: false, note: "sur demande" },
  { name: "Slack", icon: "💼", included: false, note: "palier Cabinet" },
];

export default function LaOuVousEtes() {
  return (
    <section className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Là où vous êtes déjà
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Pas une nouvelle app.{" "}
            <span className="text-foreground-alt">Vos outils, augmentés.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-foreground-alt leading-relaxed">
            WhatsApp, Email, SMS — et bien d&apos;autres canaux si votre cabinet
            en a besoin.
          </p>
        </Reveal>

        {/* Badges canaux — version desktop */}
        <Reveal delay={0.1} className="mt-12">
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-3">
            {channels.map((ch) => (
              <div
                key={ch.name}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                  ch.included
                    ? "border-white/30 bg-card text-white"
                    : "border-border-strong bg-background-alt text-foreground-alt"
                }`}
              >
                <span>{ch.icon}</span>
                <span>{ch.name}</span>
                {ch.note && (
                  <span className="text-[10px] text-foreground-alt">
                    ({ch.note})
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Badges canaux — version mobile (stack) */}
        <Reveal delay={0.1} className="mt-12 sm:hidden">
          <div className="flex flex-col gap-2">
            {channels.map((ch) => (
              <div
                key={ch.name}
                className={`inline-flex items-center justify-between rounded-full border px-4 py-2.5 text-sm ${
                  ch.included
                    ? "border-white/30 bg-card text-white"
                    : "border-border-strong bg-background-alt text-foreground-alt"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{ch.icon}</span>
                  <span>{ch.name}</span>
                </span>
                {ch.note && (
                  <span className="text-[10px] text-foreground-alt">
                    {ch.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Texte de clôture */}
        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-foreground-alt">
            Votre cabinet utilise un autre outil ? Hermes Agent, la
            technologie qui propulse OlympeAI, se connecte à plus de 20
            plateformes. On configure celle qu&apos;il vous faut.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
