"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LetterReveal from "@/components/ui/LetterReveal";

/* ─── 1. Live status indicator ─── */
function LiveStatus() {
  const [counters, setCounters] = useState({ clients: 0, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters((c) => ({
        clients: Math.min(c.clients + 1, 3),
        seconds: c.seconds >= 47 ? 1 : c.seconds + 1,
      }));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mb-6 flex flex-wrap items-center justify-center gap-2 text-xs text-foreground-alt sm:gap-3"
    >
      <span className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        Système actif
      </span>
      <span className="text-border-subtle">·</span>
      <span>{counters.clients} cabinets connectés</span>
      <span className="text-border-subtle hidden sm:inline">·</span>
      <span className="hidden sm:inline">
        dernière réponse il y a {counters.seconds}s
      </span>
    </motion.div>
  );
}

/* ─── 2. Floating WhatsApp bubbles (décoratif) ─── */
function FloatingBubbles() {
  return (
    <>
      {/* Bulle haut-droite */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.12, x: 0 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="pointer-events-none absolute top-[14%] right-[-3%] z-0 hidden max-w-[240px] rotate-2 blur-[1px] sm:right-[2%] md:block"
      >
        <div className="rounded-2xl rounded-br-sm bg-[#005c4b] px-4 py-3 text-[13px] leading-snug text-white shadow-2xl">
          <p className="text-[10px] text-white/60 mb-1">Maître Dupont</p>
          Bonjour, mon client demande où en est son dossier de divorce.
        </div>
      </motion.div>

      {/* Bulle bas-gauche */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.2, delay: 2.5 }}
        className="pointer-events-none absolute bottom-[22%] left-[-3%] z-0 hidden max-w-[260px] -rotate-2 blur-[1px] sm:left-[2%] md:block"
      >
        <div className="rounded-2xl rounded-bl-sm bg-[#1f1f1f] px-4 py-3 text-[13px] leading-snug text-white shadow-2xl">
          <p className="text-[10px] text-white/40 mb-1">Assistant OlympeAI</p>
          Dossier Durand : audience fixée au 14 mars. Je relance le confrère pour les pièces manquantes.
        </div>
      </motion.div>
    </>
  );
}

/* ─── 3. Terminal log teaser ─── */
function LogTeaser() {
  const logs = [
    { prefix: ">", text: " relance envoyée — dossier Martin" },
    { prefix: ">", text: " résumé généré — 3 messages traités" },
    { prefix: ">", text: " veille programmée — lundi 8h00" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.35 }}
      transition={{ duration: 1, delay: 2.8 }}
      className="pointer-events-none relative z-10 mt-12 font-mono text-[11px] leading-relaxed text-foreground-alt sm:text-xs"
    >
      {logs.map((log, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.8 + i * 0.15 }}
          className="whitespace-pre"
        >
          <span className="text-white/70">{log.prefix}</span>
          {log.text}
        </motion.div>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="ml-1 inline-block h-3 w-1.5 animate-blink bg-white/50 align-middle"
        aria-hidden="true"
      />
    </motion.div>
  );
}

/* ─── 4. Animated grid background ─── */
function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 animate-grid-drift"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 65%)",
        }}
      />
    </div>
  );
}

/* ─── 5. Stats mini-cards ─── */
const stats = [
  { value: "99€", label: "par mois", icon: "€" },
  { value: "48h", label: "mise en place", icon: "⏱" },
  { value: "24/7", label: "disponibilité sans interruption", icon: "●" },
];

function StatCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="relative z-10 mt-14 grid w-full max-w-sm grid-cols-3 gap-3 sm:max-w-lg sm:gap-4"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.6 + i * 0.1 }}
          className="group flex flex-col items-center rounded-xl border border-border-subtle bg-card/40 px-3 py-4 backdrop-blur-sm transition-all hover:border-border-strong hover:bg-card/60 sm:px-5 sm:py-5"
        >
          <span className="mb-2 text-xs text-foreground-alt opacity-60">
            {stat.icon}
          </span>
          <div className="text-xl font-semibold tracking-tightest sm:text-2xl">
            {stat.value}
          </div>
          <div className="mt-1 text-center text-[10px] text-foreground-alt sm:text-xs">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-32 pb-20 text-center sm:px-8">
      {/* 4. Grille animée */}
      <AnimatedGrid />

      {/* Lueur radiale */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-glow" />

      {/* 2. Bulles WhatsApp flottantes */}
      <FloatingBubbles />

      {/* 1. Statut système actif */}
      <LiveStatus />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mb-8 inline-flex items-center gap-2 rounded-full border border-border-strong bg-card px-4 py-1.5"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="text-xs text-foreground-alt">
          Assistant IA pour professionnels
        </span>
      </motion.div>

      {/* H1 */}
      <h1 className="relative z-10 max-w-4xl text-balance text-4xl font-medium leading-[1.1] tracking-tightest sm:text-6xl">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="block text-foreground-alt"
        >
          Un collègue qui
        </motion.span>
        <span className="my-2 block text-2xl font-semibold tracking-[0.15em] sm:my-4 sm:text-5xl sm:tracking-widest2">
          <LetterReveal text="NE DORT JAMAIS" delayStart={0.5} />
        </span>
      </h1>

      {/* H2 */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="relative z-10 mt-7 max-w-xl text-balance text-base text-foreground-alt sm:text-lg"
      >
        <span className="text-gradient block">
          Déjà dans vos e-mails et sur WhatsApp
        </span>
        <span className="mt-2 block">
          Rien à installer, rien à configurer. OlympeAI s&apos;occupe de vos
          dossiers là où vous êtes déjà.
        </span>
      </motion.h2>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.25 }}
        className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href="#contact"
          className="w-full rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.03] sm:w-auto"
        >
          Réserver un appel découverte
        </a>
        <a
          href="#fonctionnement"
          className="w-full rounded-full border border-border-strong px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground-alt sm:w-auto"
        >
          Voir le fonctionnement
        </a>
      </motion.div>

      {/* Offre Fondateur — teaser */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="relative z-10 mt-6"
      >
        <a
          href="#tarifs"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs text-foreground-alt backdrop-blur-sm transition-colors hover:border-white/30 hover:text-foreground"
        >
          <span className="text-[10px]">🐉</span>
          5 cabinets pilotes — <strong className="text-white">15 jours gratuits</strong> · Config incluse · Sans engagement
          <span className="text-[10px]">→</span>
        </a>
      </motion.div>

      {/* 5. Stats mini-cards */}
      <StatCards />

      {/* 3. Log terminal teaser */}
      <LogTeaser />
    </section>
  );
}
