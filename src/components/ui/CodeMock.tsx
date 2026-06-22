"use client";

import { motion } from "framer-motion";

const lines: { text: string; color?: string; indent?: number }[] = [
  { text: "// configuration.assistant", color: "text-foreground-alt" },
  { text: "cabinet: \"Maître Lefèvre — Avocat\"", indent: 1 },
  { text: "canaux: [\"whatsapp\", \"email\"]", indent: 1 },
  { text: "ton: \"confraternel, précis\"", indent: 1 },
  { text: "" },
  { text: "// statut", color: "text-foreground-alt" },
  { text: "secret_professionnel: true", indent: 1, color: "text-white" },
  { text: "hebergement: \"europe\"", indent: 1 },
  { text: "mise_en_place: \"48h\"", indent: 1 },
  { text: "" },
  { text: "> assistant prêt ✓", color: "text-white" },
];

export default function CodeMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-strong bg-card shadow-[0_0_60px_-15px_rgba(255,255,255,0.08)]">
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="ml-3 text-xs text-foreground-alt">
          olympeai.config
        </span>
      </div>

      <div className="px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.09 }}
            className={`whitespace-pre ${line.color ?? "text-foreground-alt"} ${
              line.indent ? "pl-4" : ""
            }`}
          >
            {line.text || "\u00A0"}
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: lines.length * 0.09 + 0.2 }}
          className="ml-1 inline-block h-3.5 w-1.5 animate-blink bg-white align-middle"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
