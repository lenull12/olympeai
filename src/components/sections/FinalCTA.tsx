"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    // Remplacer par la vraie clé d'accès Web3Forms avant mise en production
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-medium tracking-tightest sm:text-5xl">
            Combien vous coûte un prospect qui n&apos;a pas eu de réponse avant minuit&nbsp;?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-balance text-base text-foreground-alt sm:text-lg">
            Réservez 30 minutes. On calcule avec vous ce qu&apos;OlympeAI peut
            vous faire récupérer chaque semaine.
          </p>
        </Reveal>

        {/* Bloc d'intégration Cal.com — remplacer data-cal-link par votre lien réel */}
        <Reveal delay={0.15} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-border-strong bg-card">
            <div className="flex min-h-[320px] flex-col items-center justify-center gap-5 p-8 sm:p-12">
              <p className="text-sm text-foreground-alt">
                Choisissez un créneau directement ci-dessous
              </p>
              <a
                href="https://cal.com/olympeai/decouverte"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
                data-cal-link="olympeai/decouverte"
              >
                Réserver mon appel découverte
              </a>
              <span className="text-xs text-foreground-alt">
                30 minutes · visioconférence ou téléphone
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-10">
          <p className="text-sm text-foreground-alt">
            Vous préférez être recontacté ? Laissez-nous vos coordonnées.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Adresse email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="vous@cabinet.fr"
              className="w-full flex-1 rounded-full border border-border-strong bg-card px-5 py-3 text-sm text-foreground placeholder:text-foreground-alt focus:border-foreground-alt"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03] disabled:opacity-60"
            >
              {status === "sending" ? "Envoi..." : "Être rappelé"}
            </button>
          </form>

          {status === "sent" && (
            <p className="mt-3 text-sm text-foreground-alt">
              Merci, nous vous recontactons très vite.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-foreground-alt">
              Une erreur est survenue. Réessayez ou écrivez-nous directement.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
