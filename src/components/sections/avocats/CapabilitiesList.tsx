'use client';

import {
  Scale, FileSearch, FileText, PenTool, Mail, Calendar, Mic, Timer,
  Bell, RefreshCw, BookOpen, Users, MessageCircle, BarChart, Phone, Shield,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const capabilities = [
  { icon: Scale, title: 'Veille juridique', desc: 'Jurisprudence et doctrine filtrées par votre domaine de droit.' },
  { icon: FileSearch, title: 'Analyse de jurisprudence', desc: 'Recherche ciblée sur vos dossiers en cours, arrêts pertinents.' },
  { icon: FileText, title: 'Analyse de contrats', desc: 'PDF uploadé → OCR → analyse clause par clause, risques identifiés.' },
  { icon: PenTool, title: 'Édition PDF', desc: 'Modifications, annotations, extraction de clauses, mise en forme.' },
  { icon: Mail, title: 'Assistant email', desc: 'Rédaction, tri, réponses automatiques, résumé de threads.' },
  { icon: Calendar, title: 'Agenda intelligent', desc: 'Google Calendar synchronisé, rappels programmés, gestion RDV.' },
  { icon: Mic, title: 'Dictée vocale', desc: 'Message vocal WhatsApp transcrit en note structurée et rangée.' },
  { icon: Timer, title: 'Chronométrage dossiers', desc: 'Suivi du temps passé par dossier, rapport mensuel automatique.' },
  { icon: Bell, title: 'Relance échéances', desc: 'Alertes avant chaque délai procédural, plus rien ne glisse.' },
  { icon: RefreshCw, title: 'Relances automatiques', desc: 'Confrères en retard, clients sourds, pièces manquantes — relancés.' },
  { icon: BookOpen, title: 'Relecture conclusions', desc: 'Relecture et suggestions sur vos écrits, cohérence juridique.' },
  { icon: Users, title: 'Qualification prospects', desc: 'Triage automatique des demandes entrantes, type et urgence.' },
  { icon: MessageCircle, title: 'Réponses clients', desc: 'Réponse instantanée sur WhatsApp et email, 24/7.' },
  { icon: BarChart, title: 'Résumés d\'activité', desc: 'Synthèse quotidienne ou hebdomadaire de vos dossiers.' },
  { icon: Phone, title: 'Appels programmés', desc: 'Rappel automatique pour les urgences, coordination confrères.' },
  { icon: Shield, title: 'Validation sécurité', desc: 'Chaque envoi sensible passe par votre validation avant envoi.' },
];

export default function CapabilitiesList() {
  return (
    <section className="border-t border-border-subtle bg-background-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Capacités complètes
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Tout ce que votre assistant sait faire.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal key={cap.title} delay={i * 0.03}>
                <div className="group flex items-start gap-4 rounded-xl border border-border-subtle bg-card p-5 transition-colors hover:border-border-strong">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-foreground-alt transition-colors group-hover:text-white"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-white">{cap.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-foreground-alt">{cap.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
