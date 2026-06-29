'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const faqs = [
  {
    q: 'Est-ce que ça respecte le secret professionnel ?',
    a: 'Oui. Hébergement exclusif en Europe (Hetzner), isolation stricte par cabinet (sessions, mémoire, terminal Docker séparés), et chaque envoi sensible passe par votre validation avant expédition. Un DPA (Data Processing Agreement) est fourni.',
  },
  {
    q: 'Je ne suis pas technique, comment ça se passe ?',
    a: 'Rien à installer, rien à configurer. On vous connecte WhatsApp en 48h. Vous envoyez des messages à votre assistant comme vous le feriez avec un collègue. C\'est tout.',
  },
  {
    q: 'Ça remplace un vrai secrétariat ?',
    a: 'Non, ça le complète. L\'assistant gère les tâches répétitives (relances, résumés, veille, réponses clients). Votre secrétariat se concentre sur l\'essentiel : l\'accueil, le relationnel, les urgences.',
  },
  {
    q: 'Et si l\'assistant se trompe ?',
    a: 'Chaque action importante passe par votre validation. Il prépare, vous validez. Les envois sensibles (emails clients, relances confrères) ne partent jamais sans votre accord explicite.',
  },
  {
    q: 'Quels types de dossiers ça gère ?',
    a: 'Droit de la famille, pénal, civil, commercial, prud\'homme — l\'assistant s\'adapte à votre spécialité. La veille juridique est filtrée par domaine, et les modèles de communication s\'ajustent à votre pratique.',
  },
  {
    q: 'Je peux arrêter quand je veux ?',
    a: 'Oui. Sans engagement, paiement mensuel. Vous résiliez en un message, vos données sont purgées sous 30 jours. Aucune question posée.',
  },
];

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium sm:text-lg">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-foreground-alt transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 max-w-2xl text-balance text-sm leading-relaxed text-foreground-alt sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAvocats() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border-subtle bg-background-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Questions fréquentes
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Avocats — vos questions
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div>
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
