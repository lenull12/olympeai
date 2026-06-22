"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Clock, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

/* ──────────────────────────────────────
   Carte 1 — Veille juridique (mock email)
   ────────────────────────────────────── */

const veilleLines = [
  { text: "De : OlympeAI veille <veille@olympeai.fr>", color: "text-foreground-alt" },
  { text: "Objet : Veille juridique — semaine du 16 juin 2026", color: "text-white" },
  { text: "" },
  { text: "Bonjour Maître,", color: "text-foreground-alt" },
  { text: "" },
  { text: "▸ Cass. civ. 1re, 12 juin 2026 — Révision de pension", color: "text-white" },
  { text: "  alimentaire : l'enfant majeur en formation ne", color: "text-foreground-alt" },
  { text: "  peut pas invoquer l'autonomie financière.", color: "text-foreground-alt" },
  { text: "" },
  { text: "▸ CA Paris, 10 juin 2026 — Garde alternée : le", color: "text-white" },
  { text: "  rythme 3/4 jours validé quand les parents", color: "text-foreground-alt" },
  { text: "  habitent à 8 km l'un de l'autre.", color: "text-foreground-alt" },
  { text: "" },
  { text: "▸ TC Nanterre, 9 juin 2026 — Médiation obligatoire", color: "text-white" },
  { text: "  avant assignation en divorce confirmée.", color: "text-foreground-alt" },
  { text: "" },
  { text: "Bonne semaine.", color: "text-foreground-alt" },
];

function VeilleMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-card">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="ml-3 flex items-center gap-1.5 text-xs text-foreground-alt">
          <Mail size={12} strokeWidth={1.5} />
          boîte de réception
        </span>
      </div>
      {/* Body */}
      <div className="px-5 py-5 font-mono text-[11px] leading-relaxed sm:text-xs">
        {veilleLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className={`whitespace-pre ${line.color ?? "text-foreground-alt"}`}
          >
            {line.text || "\u00A0"}
          </motion.div>
        ))}
      </div>
      {/* Badge cron */}
      <div className="flex items-center gap-2 border-t border-border-subtle px-5 py-2.5">
        <Clock size={12} strokeWidth={1.5} className="text-foreground-alt" />
        <span className="text-[10px] text-foreground-alt">
          Programmé · chaque lundi 8h00
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────
   Carte 2 — Réponses WhatsApp (réduit)
   ────────────────────────────────────── */

type Message = { from: "client" | "assistant"; text: string };

const whatsappMessages: Message[] = [
  { from: "client", text: "Bonjour, mon client Durand demande où en est son dossier." },
  { from: "assistant", text: "Dossier Durand : audience fixée au 14 mars. Je relance le confrère pour les pièces manquantes." },
  { from: "client", text: "Prépare-moi un résumé pour demain matin." },
  { from: "assistant", text: "C'est noté. Vous le recevrez par email à 8h." },
];

function WhatsAppMini() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [visibleCount, setVisibleCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (visibleCount >= whatsappMessages.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 400 : 1000
    );
    return () => clearTimeout(timer);
  }, [inView, visibleCount]);

  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-black">
      <div className="flex items-center gap-3 border-b border-border-subtle bg-[#0d0d0d] px-4 py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-black">
          AI
        </div>
        <div className="text-xs font-medium text-white">Assistant</div>
      </div>
      <div ref={ref} className="flex min-h-[200px] flex-col gap-2.5 px-3 py-4">
        {whatsappMessages.map((m, i) => {
          const isClient = m.from === "client";
          return (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, x: isClient ? 16 : -16 }}
              animate={
                i < visibleCount
                  ? { opacity: 1, x: 0 }
                  : reduced
                  ? { opacity: 0 }
                  : { opacity: 0, x: isClient ? 16 : -16 }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`flex ${isClient ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-3 py-2 text-[11px] leading-snug ${
                  isClient ? "bg-[#1f1f1f] text-white" : "bg-white text-black"
                }`}
              >
                {m.text}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────
   Carte 3 — Relances (mock log d'activité)
   ────────────────────────────────────── */

const logEntries = [
  { icon: "✓", text: "Relance envoyée à Me. Dubois — pièces dossier Martin", date: "12 juin", done: true },
  { icon: "✓", text: "Rappel client Durand — RDV à confirmer", date: "14 juin", done: true },
  { icon: "⏳", text: "Relance programmée — délai dossier Petit (J-3)", date: "à venir", done: false },
];

function RelancesMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-card px-5 py-5">
      <div className="font-mono text-[11px] leading-relaxed sm:text-xs">
        {logEntries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className={`flex items-start gap-2.5 py-2 ${
              i < logEntries.length - 1 ? "border-b border-border-subtle" : ""
            }`}
          >
            <span
              className={`mt-0.5 shrink-0 ${
                entry.done ? "text-white" : "text-foreground-alt"
              }`}
            >
              {entry.icon}
            </span>
            <span className="flex-1 text-foreground-alt">{entry.text}</span>
            <span className="shrink-0 text-[10px] text-foreground-alt">
              {entry.date}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────
   Carte 4 — Résumés d'activité (dashboard)
   ────────────────────────────────────── */

const summaryStats = [
  { value: "3", label: "messages traités" },
  { value: "1", label: "relance envoyée" },
  { value: "5j", label: "avant échéance" },
];

function ResumeMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-card px-5 py-5">
      <div className="mb-4 text-xs font-medium text-foreground-alt">
        Résumé — lundi 16 juin
      </div>
      <div className="grid grid-cols-3 gap-3">
        {summaryStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-2xl font-semibold tracking-tightest">
              {s.value}
            </div>
            <div className="mt-1 text-[10px] text-foreground-alt">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────
   Section A — Cartes
   ────────────────────────────────────── */

const cards = [
  {
    title: "Veille juridique, livrée le lundi à 8h",
    text: "Chaque semaine, un résumé de la jurisprudence pertinente pour vos dossiers en cours arrive directement dans votre boîte mail.",
    mock: <VeilleMock />,
  },
  {
    title: "Vos clients ont une réponse, vous gardez la main",
    text: "Questions fréquentes, points d'avancement, prises de rendez-vous : il répond, vous validez ce qui compte.",
    mock: <WhatsAppMini />,
  },
  {
    title: "Les relances qui ne se font jamais oublier",
    text: "Pièces manquantes, confrères en retard, échéances procédurales : il relance à votre place, au bon moment.",
    mock: <RelancesMock />,
  },
  {
    title: "Un résumé, pas une boîte mail à trier",
    text: "Chaque jour ou chaque semaine, l'essentiel de l'activité de vos dossiers, condensé en quelques lignes.",
    mock: <ResumeMock />,
  },
];

export default function CeQuIlFait() {
  return (
    <section className="border-t border-border-subtle bg-background-alt px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Ce qu&apos;il fait
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Tout ce qu&apos;un assistant juridique ferait.{" "}
            <span className="text-foreground-alt">En continu.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-foreground-alt leading-relaxed">
            Quatre capacités, quatre formats. Toujours opérationnel.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-2xl border border-border-strong bg-card p-6 border-glow sm:p-7">
                <h3 className="text-lg font-medium tracking-tightest sm:text-xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-alt">
                  {card.text}
                </p>
                <div className="mt-5 flex-1">{card.mock}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
