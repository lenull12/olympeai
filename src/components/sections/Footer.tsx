export default function Footer() {
  return (
    <footer className="border-t border-border-subtle px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-foreground-alt">OlympeAI © 2026</p>
          <p className="text-xs text-foreground-alt/60 mt-1">SIRET : 10602520800013</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          <li>
            <a
              href="/mentions-legales"
              className="text-sm text-foreground-alt transition-colors hover:text-foreground"
            >
              Mentions légales
            </a>
          </li>
          <li>
            <a
              href="/rgpd"
              className="text-sm text-foreground-alt transition-colors hover:text-foreground"
            >
              RGPD
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm text-foreground-alt transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
