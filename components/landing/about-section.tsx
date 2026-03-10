"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ArtistSignature } from "@/components/landing/artist-signature";
import { Reveal } from "@/components/landing/reveal";
import { artistInfo } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const dataPoints = [
  { label: "Origen", value: "Piura, Huancabamba" },
  { label: "Disciplina", value: "Pintura · Mural · Retrato" },
  { label: "Enfoque", value: "Arte personalizado" },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <div
        className="grid min-h-[100svh] lg:grid-cols-2"
      >
        {/* ── Left: full-height image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative min-h-[55vw] lg:min-h-0"
        >
          <Image
            src="/images/artworks/artwork-04.webp"
            alt="Edgar Mauriola trabajando"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Gradient fade to right on desktop, bottom on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 lg:bg-gradient-to-r lg:from-transparent lg:to-background/60" />

          {/* Corner label */}
          <p className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.5em] text-white/45 md:left-8 md:top-8">
            El artista
          </p>
        </motion.div>

        {/* ── Right: editorial text ── */}
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24">
          <Reveal>
            <h2 className="font-display text-[2.6rem] leading-[0.9] text-foreground sm:text-5xl lg:text-[3.4rem] xl:text-[4rem] 2xl:text-[4.5rem]">
              Arte que nace
              <br />
              <em className="text-[oklch(0.55_0.22_25)]">de la emoción</em>
              <br />
              y habita el espacio.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/62 lg:text-[17px]">
              Firma artística de Edgar Mauriola. Desarrolla retratos, dibujos
              por encargo, pintura artística, murales e intervenciones con raíz
              cultural peruana y enfoque emocional.
            </p>
          </Reveal>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-10 inline-flex items-center gap-3"
          >
            <span className="inline-flex items-center justify-center rounded-md bg-white px-3 py-1.5 shadow-md">
              <ArtistSignature
                className="h-7 w-16"
                imageClassName="object-contain"
                fallbackClassName="font-display text-xl italic text-black/80"
              />
            </span>
            <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/38">
              {artistInfo.name}
            </p>
          </motion.div>

          {/* Data strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
          >
            {dataPoints.map((d) => (
              <div key={d.label}>
                <p className="text-[9px] uppercase tracking-[0.35em] text-foreground/35">
                  {d.label}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-foreground/75">
                  {d.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
