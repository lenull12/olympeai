'use client';

import { motion } from 'framer-motion';

const dossiers = [
  { nom: 'Martin c/ Petit', statut: 'Audience fixée', echeance: '14 mars · J-5', action: '✓ Relance envoyée', actionColor: 'text-white' },
  { nom: 'Durand (divorce)', statut: 'En attente pièces', echeance: '28 mars', action: '⏳ Relance programmée', actionColor: 'text-foreground-alt' },
  { nom: 'Affaire X', statut: 'Conclusions', echeance: '5 avril', action: '📝 Relecture demandée', actionColor: 'text-foreground-alt' },
  { nom: 'Sté Martin SARL', statut: 'Signification', echeance: '12 avril', action: '📋 En attente', actionColor: 'text-foreground-alt' },
];

export default function DossierDashboard() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-black">
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="ml-3 text-xs text-foreground-alt">Tableau de bord — 4 dossiers actifs</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[11px] sm:text-xs">
          <thead>
            <tr className="border-b border-border-subtle text-left text-foreground-alt">
              <th className="px-4 py-2.5 font-medium">Dossier</th>
              <th className="px-4 py-2.5 font-medium">Statut</th>
              <th className="px-4 py-2.5 font-medium">Échéance</th>
              <th className="px-4 py-2.5 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            {dossiers.map((d, i) => (
              <motion.tr
                key={d.nom}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="border-b border-border-subtle last:border-0"
              >
                <td className="px-4 py-2.5 text-white">{d.nom}</td>
                <td className="px-4 py-2.5 text-foreground-alt">{d.statut}</td>
                <td className="px-4 py-2.5 text-foreground-alt">{d.echeance}</td>
                <td className={`px-4 py-2.5 ${d.actionColor}`}>{d.action}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
