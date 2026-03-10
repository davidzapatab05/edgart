"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type AnimatedDividerProps = {
  delay?: number;
};

export function AnimatedDivider({ delay = 0 }: AnimatedDividerProps) {
  return (
    <div className="container-shell">
      <motion.div
        className="h-px w-full origin-left bg-gradient-to-r from-transparent via-zinc-200/12 to-transparent"
        initial={{ opacity: 0, scaleX: 0.35 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-140px" }}
        transition={{ duration: 0.85, delay, ease: EASE }}
      />
    </div>
  );
}
