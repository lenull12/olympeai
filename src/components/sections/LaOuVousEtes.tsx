"use client";

import Reveal from "@/components/ui/Reveal";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Channel = {
  name: string;
  icon: string;
  included: boolean;
  note?: string;
};

const channels: Channel[] = [
  { name: "WhatsApp", icon: "💬", included: true },
  { name: "Email", icon: "✉️", included: true },
  { name: "SMS", icon: "📱", included: false, note: "palier Pro" },
  { name: "Téléphone", icon: "📞", included: false, note: "palier Pro" },
  { name: "Telegram", icon: "✈️", included: false, note: "sur demande" },
  { name: "Slack", icon: "💼", included: false, note: "palier Cabinet" },
];

export default function LaOuVousEtes() {
  return (
    <section className="border-t border-border-subtle px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest2 text-foreground-alt">
            Là où vous êtes déjà
          </span>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-medium tracking-tightest sm:text-4xl">
            Pas une nouvelle app.{" "}
            <span className="text-foreground-alt">Vos outils, augmentés.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-foreground-alt leading-relaxed">
            WhatsApp, Email, SMS — et bien d&apos;autres canaux si votre cabinet
            en a besoin.
          </p>
        </Reveal>

        {/* Badges canaux — version desktop */}
        <Reveal delay={0.1} className="mt-12">
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-3">
            {channels.map((ch) => (
              <div
                key={ch.name}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                  ch.included
                    ? "border-white/30 bg-card text-white"
                    : "border-border-strong bg-background-alt text-foreground-alt"
                }`}
              >
                <span>{ch.icon}</span>
                <span>{ch.name}</span>
                {ch.note && (
                  <span className="text-[10px] text-foreground-alt">
                    ({ch.note})
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Badges canaux — version mobile (stack) */}
        <Reveal delay={0.1} className="mt-12 sm:hidden">
          <div className="flex flex-col gap-2">
            {channels.map((ch) => (
              <div
                key={ch.name}
                className={`inline-flex items-center justify-between rounded-full border px-4 py-2.5 text-sm ${
                  ch.included
                    ? "border-white/30 bg-card text-white"
                    : "border-border-strong bg-background-alt text-foreground-alt"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{ch.icon}</span>
                  <span>{ch.name}</span>
                </span>
                {ch.note && (
                  <span className="text-[10px] text-foreground-alt">
                    {ch.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Texte de clôture */}
        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-foreground-alt">
            Votre cabinet utilise un autre outil ? Hermes Agent, la
            technologie qui propulse OlympeAI, se connecte à plus de 20
            plateformes. On configure celle qu&apos;il vous faut.
          </p>
        </Reveal>

        {/* 4 platform mockups */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-3 text-center text-sm font-semibold text-white">WhatsApp</p>
            <WhatsAppPlatformMock />
          </div>
          <div>
            <p className="mb-3 text-center text-sm font-semibold text-white">iMessage</p>
            <IMessagePlatformMock />
          </div>
          <div>
            <p className="mb-3 text-center text-sm font-semibold text-white">Telegram</p>
            <TelegramPlatformMock />
          </div>
          <div>
            <p className="mb-3 text-center text-sm font-semibold text-white">Slack</p>
            <SlackPlatformMock />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Shared message types ---------- */

type MockMsg = { from: "avocat" | "assistant"; text: string };

/* ---------- WhatsApp Platform Mock ---------- */

function WhatsAppPlatformMock() {
  const messages: MockMsg[] = [
    { from: "avocat", text: "Rappelle-moi l'échéance du dossier Martin." },
    { from: "assistant", text: "Audience fixée au 14 mars. J-5. Je relance le confrère pour les pièces." },
    { from: "avocat", text: "Fais un point à 18h." },
    { from: "assistant", text: "Noté. Résumé envoyé par email à 18h." },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [visibleCount, setVisibleCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || visibleCount >= messages.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 400 : 1200
    );
    return () => clearTimeout(timer);
  }, [inView, visibleCount]);

  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-[#0b141a]">
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#202c33] px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00a884] text-sm font-semibold text-white">
          O
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-[#e9edef]">OlympeAI</div>
          <div className="text-[10px] text-[#8696a0]">en ligne</div>
        </div>
        <div className="flex gap-2">
          <svg className="h-5 w-5 text-[#8696a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <svg className="h-5 w-5 text-[#8696a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </div>
      </div>

      {/* Messages */}
      <div ref={ref} className="flex min-h-[260px] flex-col gap-2 bg-[#0b141a] px-3 py-4">
        {messages.map((m, i) => {
          const isAvocat = m.from === "avocat";
          return (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, x: isAvocat ? 16 : -16 }}
              animate={
                i < visibleCount
                  ? { opacity: 1, x: 0 }
                  : reduced
                    ? { opacity: 0 }
                    : { opacity: 0, x: isAvocat ? 16 : -16 }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`flex ${isAvocat ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-3 py-2 text-[13px] leading-snug ${
                  isAvocat
                    ? "bg-[#005c4b] text-[#e9edef]"
                    : "bg-[#202c33] text-[#e9edef]"
                }`}
              >
                {m.text}
                <div
                  className={`mt-0.5 text-[10px] ${
                    isAvocat ? "text-[#7ecfaa]" : "text-[#8696a0]"
                  }`}
                >
                  {i < visibleCount ? `${10 + i}:${String(15 + i * 2).padStart(2, "0")}` : ""}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- iMessage Platform Mock ---------- */

function IMessagePlatformMock() {
  const messages: MockMsg[] = [
    { from: "avocat", text: "Tu peux me trouver la jurisprudence sur la garde alternée ?" },
    { from: "assistant", text: "CA Paris, 17 juin — rythme 3/4 jours validé. Lien : juri.olympeai.fr/garde-3-4" },
    { from: "avocat", text: "Envoie ça au client par email." },
    { from: "assistant", text: "Email envoyé. Relance programmée dans 7 jours si pas de réponse." },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [visibleCount, setVisibleCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || visibleCount >= messages.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 400 : 1200
    );
    return () => clearTimeout(timer);
  }, [inView, visibleCount]);

  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-black">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 bg-black px-4 py-3">
        <svg className="h-4 w-4 text-[#0b93f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-xs text-[#0b93f6]">Messages</span>
        <div className="flex-1 text-center">
          <div className="text-sm font-semibold text-white">OlympeAI</div>
        </div>
        <div className="w-16" />
      </div>
      <div className="h-px bg-[#333]" />

      {/* Messages */}
      <div ref={ref} className="flex min-h-[260px] flex-col gap-1.5 bg-black px-3 py-4">
        {messages.map((m, i) => {
          const isAvocat = m.from === "avocat";
          return (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, x: isAvocat ? 16 : -16 }}
              animate={
                i < visibleCount
                  ? { opacity: 1, x: 0 }
                  : reduced
                    ? { opacity: 0 }
                    : { opacity: 0, x: isAvocat ? 16 : -16 }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`flex ${isAvocat ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-snug ${
                  isAvocat
                    ? "bg-[#0b93f6] text-white"
                    : "bg-[#333333] text-white"
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

/* ---------- Telegram Platform Mock ---------- */

function TelegramPlatformMock() {
  const messages: MockMsg[] = [
    { from: "avocat", text: "Résumé du dossier Durand pour demain." },
    { from: "assistant", text: "Divorce contentieux. Garde contestée. Pièces manquantes côté défendeur. J'ai tout synthétisé ici : t.me/olympe/durand" },
    { from: "avocat", text: "Prépare l'assignation." },
    { from: "assistant", text: "Première version prête. Je vous l'envoie par email dans 20 min." },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [visibleCount, setVisibleCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || visibleCount >= messages.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 400 : 1200
    );
    return () => clearTimeout(timer);
  }, [inView, visibleCount]);

  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-[#0e1621]">
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#17212b] px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2b5278] text-sm font-semibold text-[#f5f5f5]">
          O
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#f5f5f5]">OlympeAI</span>
            <span className="h-2 w-2 rounded-full bg-[#00a884]" />
          </div>
          <div className="text-[10px] text-[#6c7883]">en ligne</div>
        </div>
        <svg className="h-5 w-5 text-[#6c7883]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </div>

      {/* Messages */}
      <div ref={ref} className="flex min-h-[260px] flex-col gap-1 bg-[#0e1621] px-3 py-4">
        {messages.map((m, i) => {
          const isAvocat = m.from === "avocat";
          return (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, x: isAvocat ? 16 : -16 }}
              animate={
                i < visibleCount
                  ? { opacity: 1, x: 0 }
                  : reduced
                    ? { opacity: 0 }
                    : { opacity: 0, x: isAvocat ? 16 : -16 }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`flex ${isAvocat ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-3 py-2 text-[13px] leading-snug ${
                  isAvocat
                    ? "bg-[#2b5278] text-[#f5f5f5]"
                    : "bg-[#182533] text-[#f5f5f5]"
                }`}
              >
                {m.text}
                <div className="mt-0.5 text-right text-[9px] text-[#6c7883]">
                  {i < visibleCount ? `${14 + i}:${String(30 + i * 5).padStart(2, "0")}` : ""}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Slack Platform Mock ---------- */

function SlackPlatformMock() {
  const messages: MockMsg[] = [
    { from: "avocat", text: "@olympe tu suis le dossier Petit ? Échéance cette semaine." },
    { from: "assistant", text: "Oui. Conclusions à déposer avant vendredi. J'ai préparé un draft, lien : [docs.olympe.ai/petit]" },
    { from: "avocat", text: "Relance le client pour les pièces." },
    { from: "assistant", text: "Fait. Email envoyé à 14h30. Thread : #dossier-petit" },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [visibleCount, setVisibleCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || visibleCount >= messages.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 400 : 1200
    );
    return () => clearTimeout(timer);
  }, [inView, visibleCount]);

  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-[#1a1d21]">
      {/* Header */}
      <div className="flex items-center gap-2 bg-[#222529] px-4 py-3">
        <span className="text-xs font-semibold text-[#e8e8e8]">#</span>
        <span className="text-sm font-semibold text-[#e8e8e8]">olympeai-assistant</span>
        <svg className="ml-auto h-4 w-4 text-[#6d7175]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </div>

      {/* Messages */}
      <div ref={ref} className="flex min-h-[260px] flex-col gap-3 bg-[#1a1d21] px-3 py-4">
        {messages.map((m, i) => {
          const isAvocat = m.from === "avocat";
          return (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={
                i < visibleCount
                  ? { opacity: 1, y: 0 }
                  : reduced
                    ? { opacity: 0 }
                    : { opacity: 0, y: 12 }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3 px-1"
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white ${
                  isAvocat ? "bg-[#6c47a8]" : "bg-[#00a884]"
                }`}
              >
                {isAvocat ? "M" : "O"}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className={`text-[13px] font-semibold ${isAvocat ? "text-[#6c47a8]" : "text-[#00a884]"}`}>
                    {isAvocat ? "Me. Dupont" : "OlympeAI"}
                  </span>
                  <span className="text-[10px] text-[#6d7175]">
                    {i < visibleCount ? `${9 + i}:${String(45 + i * 3).padStart(2, "0")}` : ""}
                  </span>
                </div>
                <p className="mt-0.5 text-[13px] leading-snug text-[#d1d5db]">
                  {m.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
