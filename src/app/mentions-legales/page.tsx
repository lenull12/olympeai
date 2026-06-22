import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — OlympeAI",
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-28 sm:px-8">
      <a
        href="/"
        className="text-sm text-foreground-alt transition-colors hover:text-foreground"
      >
        ← Retour à l&apos;accueil
      </a>

      <h1 className="mt-8 text-3xl font-medium tracking-tightest sm:text-4xl">
        Mentions légales
      </h1>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-foreground-alt">
        <section>
          <h2 className="mb-2 text-base font-medium text-foreground">
            Éditeur du site
          </h2>
          <p>
            OlympeAI — [Forme juridique à compléter]
            <br />
            [Adresse du siège à compléter]
            <br />
            [Numéro SIREN/SIRET à compléter]
            <br />
            Contact : [email de contact à compléter]
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-medium text-foreground">
            Hébergement
          </h2>
          <p>
            Le site olympeai.fr est hébergé par Cloudflare, Inc., sur des
            infrastructures situées en Europe.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-medium text-foreground">
            Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, visuels,
            logo) est la propriété d&apos;OlympeAI, sauf mention contraire.
            Toute reproduction sans autorisation préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-medium text-foreground">
            Données personnelles
          </h2>
          <p>
            Pour toute information relative au traitement de vos données
            personnelles, consultez notre page{" "}
            <a
              href="/rgpd"
              className="text-foreground underline underline-offset-2"
            >
              RGPD
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
