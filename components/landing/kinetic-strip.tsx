"use client";

import { motion } from "framer-motion";

const words = [
  "MURALISMO CONTEMPORÁNEO",
  "✦",
  "IDENTIDAD VISUAL",
  "✦",
  "ARTE QUE HABITA ESPACIOS",
  "✦",
  "PIURA · HUANCABAMBA",
  "✦",
  "EDGAR MAURIOLA",
  "✦",
  "RETRATOS · ANIME · PEDIDOS",
  "✦",
];

const doubled = [...words, ...words];

export function KineticStrip() {
  return (
    <div className="relative overflow-hidden border-y border-white/8 py-3.5" style={{ background: "rgba(8, 8, 12, 0.55)" }}>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[oklch(0.07_0.006_50)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[oklch(0.07_0.006_50)] to-transparent" />

      <motion.div
        className="flex min-w-max items-center gap-8 px-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((word, i) => (
          <span
            key={i}
            className={
              word === "✦"
                ? "text-[oklch(0.55_0.22_25)]/60 text-xs"
                : "text-[10px] font-medium uppercase tracking-[0.38em] text-foreground/40 md:text-[11px]"
            }
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}


