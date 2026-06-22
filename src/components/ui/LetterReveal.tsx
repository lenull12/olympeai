"use client";

import { motion, useReducedMotion } from "framer-motion";

type LetterRevealProps = {
  text: string;
  className?: string;
  delayStart?: number;
  staggerMs?: number;
};

/**
 * Affiche un texte lettre par lettre avec un effet de révélation séquentiel.
 * Les espaces sont préservés (insécables) pour garder le tracking large.
 */
export default function LetterReveal({
  text,
  className,
  delayStart = 0,
  staggerMs = 0.035,
}: LetterRevealProps) {
  const reduced = useReducedMotion();
  const letters = text.split("");

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden="true"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delayStart + i * staggerMs,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
