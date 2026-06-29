'use client';

import Reveal from '@/components/ui/Reveal';
import DossierDashboard from './mocks/DossierDashboard';
import VeilleEmailMock from './mocks/VeilleEmailMock';
import WhatsAppQualifMock from './mocks/WhatsAppQualifMock';
import ProductiviteMock from './mocks/ProductiviteMock';

const features = [
  {
    title: 'Vos dossiers, sous contrôle',
    text: 'Relances automatiques aux confrères, alertes d\'échéances, résumé quotidien de l\'activité. Vous savez toujours où en est chaque dossier.',
    bullets: ['Relances confrères', 'Alertes échéances procédurales', 'Chronométrage dossiers', 'Résumé quotidien'],
    mock: <DossierDashboard />,
    reverse: false,
  },
  {
    title: 'La veille juridique, livrée chaque lundi',
    text: 'Jurisprudence, doctrine, évolutions législatives — filtrées par votre domaine et vos dossiers en cours.',
    bullets: ['Veille jurisprudence', 'Analyse de contrats (PDF)', 'Recherche doctrinale', 'Alertes législatives'],
    mock: <VeilleEmailMock />,
    reverse: true,
  },
  {
    title: 'Vos clients ont une réponse, vous gardez la main',
    text: 'Questions fréquentes, prises de rendez-vous, points d\'avancement. L\'assistant répond et vous validez ce qui compte.',
    bullets: ['Réponse < 2 min, 24/7', 'Qualification automatique', 'Prise de RDV intégrée', 'Validation avant envoi sensible'],
    mock: <WhatsAppQualifMock />,
    reverse: false,
  },
  {
    title: 'Dictée, résumés, relectures — sans lever les yeux',
    text: 'Dictée vocale par WhatsApp, résumés automatiques de vos emails, relecture de conclusions. Votre temps est pour le fond, pas la forme.',
    bullets: ['Dictée vocale → note', 'Assistant email', 'Relecture conclusions', 'Résumé quotidien'],
    mock: <ProductiviteMock />,
    reverse: true,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="fonctionnalites" className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Fonctionnalités
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Tout ce qu&apos;un assistant juridique ferait.{' '}
            <span className="text-foreground-alt">En continu.</span>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${f.reverse ? 'lg:[direction:rtl]' : ''}`}>
                <div className={f.reverse ? 'lg:[direction:ltr]' : ''}>
                  <h3 className="text-xl font-medium tracking-tightest sm:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-alt">
                    {f.text}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground-alt">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-white" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={f.reverse ? 'lg:[direction:ltr]' : ''}>
                  {f.mock}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
