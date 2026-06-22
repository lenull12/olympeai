"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function TimeCalculator() {
  const [messagesPerWeek, setMessagesPerWeek] = useState(50);

  // Hypothèse : 3,5 min par message (réponse manuelle)
  const MINUTES_PER_MESSAGE = 5;
  const hoursPerWeek = (messagesPerWeek * MINUTES_PER_MESSAGE) / 60;
  const hoursPerYear = hoursPerWeek * 52;
  const daysPerYear = hoursPerYear / 8; // 8h par journée de travail

  return (
    <section className="border-t border-border-subtle bg-background-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Temps récupéré
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Combien de temps perdez-vous à répondre&nbsp;?
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-2xl border border-border-strong bg-card p-8 sm:p-10">
            <label
              htmlFor="messages-slider"
              className="text-sm text-foreground-alt"
            >
              Combien de messages clients recevez-vous par semaine&nbsp;?
            </label>

            <div className="mt-6 flex items-center justify-center gap-4">
              <input
                id="messages-slider"
                type="range"
                min={5}
                max={100}
                step={5}
                value={messagesPerWeek}
                onChange={(e) => setMessagesPerWeek(Number(e.target.value))}
                className="flex-1 accent-white"
              />
              <span className="min-w-[3.5rem] text-right text-2xl font-semibold tracking-tightest">
                {messagesPerWeek}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border-subtle bg-background-alt p-5">
                <div className="flex items-center justify-center gap-2 text-foreground-alt">
                  <Clock size={16} strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-wider">Par semaine</span>
                </div>
                <div className="mt-2 text-center text-2xl font-semibold tracking-tightest">
                  {hoursPerWeek.toFixed(1)}h
                </div>
              </div>
              <div className="rounded-xl border border-border-subtle bg-background-alt p-5">
                <div className="flex items-center justify-center gap-2 text-foreground-alt">
                  <Clock size={16} strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-wider">Par an</span>
                </div>
                <div className="mt-2 text-center text-2xl font-semibold tracking-tightest">
                  {Math.round(hoursPerYear)}h
                </div>
              </div>
              <div className="rounded-xl border border-white/20 bg-background-alt p-5">
                <div className="flex items-center justify-center gap-2 text-foreground-alt">
                  <Clock size={16} strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-wider">Journées complètes</span>
                </div>
                <div className="mt-2 text-center text-2xl font-semibold tracking-tightest">
                  {Math.round(daysPerYear)}j
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-foreground-alt">
              Estimation basée sur ~5 min par message (lecture + réponse + recherche dossier).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
