"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const prenom = formData.get("prenom") as string;

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          prenom,
          token: turnstileToken,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTurnstileToken(null);
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

        <Reveal delay={0.25} className="mt-10">
          <p className="text-sm text-foreground-alt">
            Laissez-nous vos coordonnées, on vous rappelle sous 24h.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3"
          >
            <label htmlFor="prenom" className="sr-only">
              Prénom
            </label>
            <input
              id="prenom"
              type="text"
              name="prenom"
              placeholder="Votre prénom"
              className="w-full rounded-full border border-border-strong bg-card px-5 py-3 text-sm text-foreground placeholder:text-foreground-alt focus:border-foreground-alt"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
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
                disabled={status === "sending" || !turnstileToken}
                className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03] disabled:opacity-60"
              >
                {status === "sending" ? "Envoi..." : "Être rappelé"}
              </button>
            </div>

            <div className="flex justify-center">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken(null)}
              />
            </div>
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
