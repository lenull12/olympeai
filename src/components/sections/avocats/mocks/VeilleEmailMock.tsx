'use client';

import { motion } from 'framer-motion';
import { Mail, Clock } from 'lucide-react';

const lines = [
  { text: 'De : OlympeAI veille <veille@olympeai.fr>', color: 'text-foreground-alt' },
  { text: 'Objet : Veille juridique — semaine du 23 juin 2026', color: 'text-white' },
  { text: '' },
  { text: 'Bonjour Maître,', color: 'text-foreground-alt' },
  { text: '' },
  { text: '▸ Cass. civ. 1re, 19 juin 2026 — Révision de pension', color: 'text-white' },
  { text: '  alimentaire : l\'enfant majeur en formation ne', color: 'text-foreground-alt' },
  { text: '  peut pas invoquer l\'autonomie financière.', color: 'text-foreground-alt' },
  { text: '' },
  { text: '▸ CA Paris, 17 juin 2026 — Garde alternée : le', color: 'text-white' },
  { text: '  rythme 3/4 jours validé quand les parents', color: 'text-foreground-alt' },
  { text: '  habitent à 8 km l\'un de l\'autre.', color: 'text-foreground-alt' },
  { text: '' },
  { text: '▸ TC Nanterre, 16 juin 2026 — Médiation obligatoire', color: 'text-white' },
  { text: '  avant assignation en divorce confirmée.', color: 'text-foreground-alt' },
  { text: '' },
  { text: 'Bonne semaine.', color: 'text-foreground-alt' },
];

export default function VeilleEmailMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-card">
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="ml-3 flex items-center gap-1.5 text-xs text-foreground-alt">
          <Mail size={12} strokeWidth={1.5} />
          boîte de réception
        </span>
      </div>
      <div className="px-5 py-5 font-mono text-[11px] leading-relaxed sm:text-xs">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className={`whitespace-pre ${line.color ?? 'text-foreground-alt'}`}
          >
            {line.text || '\u00A0'}
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-border-subtle px-5 py-2.5">
        <Clock size={12} strokeWidth={1.5} className="text-foreground-alt" />
        <span className="text-[10px] text-foreground-alt">Programmé · chaque lundi 8h00</span>
      </div>
    </div>
  );
}
