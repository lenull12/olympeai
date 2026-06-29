'use client';

import { motion } from 'framer-motion';
import { Mic, Mail } from 'lucide-react';

function DicteeMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-black p-4">
      <div className="mb-3 flex items-center gap-2 text-xs text-foreground-alt">
        <Mic size={12} strokeWidth={1.5} />
        <span>Dictée vocale → WhatsApp</span>
      </div>
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex justify-end"
        >
          <div className="max-w-[80%] rounded-xl bg-[#1f1f1f] px-3 py-2 text-[11px] leading-snug text-white">
            🎤 Message vocal · 0:23
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-start"
        >
          <div className="max-w-[85%] rounded-xl bg-white px-3 py-2 text-[11px] leading-snug text-black">
            Note enregistrée : « Préparer un mémoire en défense pour le dossier Martin. Points clés : prescription, bonne foi, préjudice moral. Me le rappeler demain 9h. »
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ResumeEmailMock() {
  const lines = [
    { label: 'De', value: 'Dupont <dupont@cabinet.fr>' },
    { label: 'Objet', value: 'RE : Pièces dossier Durand' },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-card p-4">
      <div className="mb-3 flex items-center gap-2 text-xs text-foreground-alt">
        <Mail size={12} strokeWidth={1.5} />
        <span>Résumé automatique</span>
      </div>
      <div className="space-y-1.5 font-mono text-[11px]">
        {lines.map((l) => (
          <motion.div
            key={l.label}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35 }}
          >
            <span className="text-foreground-alt">{l.label} : </span>
            <span className="text-white">{l.value}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-3 border-t border-border-subtle pt-2"
        >
          <p className="text-foreground-alt">Résumé :</p>
          <ul className="mt-1 space-y-1">
            <li className="text-white">• Pièces jointes reçues (3 fichiers)</li>
            <li className="text-foreground-alt">• Demande de confirmation pour envoi au tribunal</li>
            <li className="text-foreground-alt">• Délai : avant le 28 juin</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProductiviteMock() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <DicteeMock />
      <ResumeEmailMock />
    </div>
  );
}
