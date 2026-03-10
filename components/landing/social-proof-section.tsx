"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/landing/reveal";
import { metrics, testimonials } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SocialProofSection() {
  return (
    <section
      id="resultados"
      className="overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <div className="container-shell flex min-h-[100svh] flex-col justify-center py-20 lg:py-24">
        {/* Label */}
        <Reveal>
          <p className="mb-14 text-[10px] uppercase tracking-[0.5em] text-foreground/38">
            Resultados
          </p>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          {/* Left: big metrics */}
          <div className="space-y-0 divide-y divide-white/8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
                className="py-8 first:pt-0 last:pb-0"
              >
                <p className="font-display text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
                  {metric.value}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.38em] text-foreground/40">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: testimonials as elegant blockquotes */}
          <div className="flex flex-col justify-center space-y-10 lg:space-y-12">
            <Reveal delay={0.1}>
              <p className="mb-2 text-[10px] uppercase tracking-[0.5em] text-foreground/38">
                Lo que dicen
              </p>
            </Reveal>
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.author}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
                className="border-l-2 border-[oklch(0.55_0.22_25)]/40 pl-6"
              >
                <p className="text-[15px] leading-relaxed text-foreground/72 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="font-display text-lg text-foreground">
                    {item.author}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/38">
                    {item.project} · {item.location}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
