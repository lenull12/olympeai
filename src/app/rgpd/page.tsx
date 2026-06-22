import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RGPD — OlympeAI",
  robots: { index: false, follow: false },
};

export default function RGPD() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-28 sm:px-8">
      <a
        href="/"
        className="text-sm text-foreground-alt transition-colors hover:text-foreground"
      >
        ← Retour à l&apos;accueil
      </a>

      <h1 className="mt-8 text-3xl font-medium tracking-tightest sm:text-4xl">
        Protection de vos données
      </h1>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-foreground-alt">
        <section>
          <h2 className="mb-2 text-base font-medium text-foreground">
            Hébergement en Europe
          </h2>
          <p>
            Toutes les données traitées par OlympeAI sont hébergées sur des
            serveurs situés en Europe, en conformité avec le RGPD.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-medium text-foreground">
            Aucune revente de données
          </h2>
          <p>
            Vos données et celles de vos clients ne sont jamais vendues,
            partagées ou utilisées à des fins publicitaires. Elles ne servent
            qu&apos;au fonctionnement de votre assistant.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-medium text-foreground">
            Secret professionnel
          </h2>
          <p>
            Pour les professions soumises au secret professionnel (avocats,
            experts-comptables), OlympeAI met en place des garanties
            adaptées afin de préserver la confidentialité des échanges et des
            dossiers.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-medium text-foreground">
            Vos droits
          </h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
            de rectification et de suppression de vos données. Pour exercer
            ces droits, contactez-nous à [email de contact à compléter].
          </p>
        </section>
      </div>
    </main>
  );
}
