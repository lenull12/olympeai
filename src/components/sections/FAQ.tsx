"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Mes données sont-elles protégées ?",
    a: "Oui. Hébergement en Europe, conformité RGPD, et aucune donnée n'est jamais revendue ou partagée avec un tiers.",
  },
  {
    q: "Je n'y connais rien en informatique...",
    a: "Ce n'est pas un problème : on configure tout pour vous. Vous n'avez rien à installer, rien à paramétrer.",
  },
  {
    q: "Combien de temps pour se lancer ?",
    a: "48h maximum entre notre échange et la mise en route de votre assistant.",
  },
  {
    q: "Puis-je résilier quand je veux ?",
    a: "L'engagement initial est de 3 mois. Passé ce délai, vous êtes libre de résilier à tout moment.",
  },
  {
    q: "Vais-je perdre la main sur mes dossiers ?",
    a: "Non. Vous validez tout. L'assistant prépare et propose, la décision finale reste toujours la vôtre.",
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
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border-subtle bg-background-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            FAQ
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Questions fréquentes
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
