"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ArtistSignature } from "@/components/landing/artist-signature";
import { manifestoText } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ManifestoSection() {
  return (
    <section className="section-space overflow-hidden flex items-center" style={{ minHeight: "100svh" }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative flex items-center overflow-hidden rounded-2xl border border-white/10 min-h-[62svh] sm:min-h-[68svh] lg:min-h-[74svh]"
        >
          <Image
            src="/images/artworks/artwork-11.webp"
            alt="Manifiesto Edgar Mauriola"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 96vw, 1840px"
          />

          <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(7,6,10,0.95)_0%,rgba(7,6,10,0.78)_60%,rgba(7,6,10,0.92)_100%)]" />

          <div className="pointer-events-none absolute left-6 top-6 md:left-10 md:top-10">
            <div className="absolute left-0 top-0 h-7 w-px bg-[oklch(0.55_0.22_25)]/40" />
            <div className="absolute left-0 top-0 h-px w-7 bg-[oklch(0.55_0.22_25)]/40" />
          </div>
          <div className="pointer-events-none absolute bottom-6 right-6 md:bottom-10 md:right-10">
            <div className="absolute bottom-0 right-0 h-7 w-px bg-[oklch(0.55_0.22_25)]/40" />
            <div className="absolute bottom-0 right-0 h-px w-7 bg-[oklch(0.55_0.22_25)]/40" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute right-6 top-6 h-10 w-16 md:right-10 md:top-10 md:h-14 md:w-24"
          >
            <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-white/92 px-1 py-0.5">
              <ArtistSignature
                className="h-full w-full"
                imageClassName="object-contain"
                fallbackClassName="font-display text-5xl italic text-black/75"
              />
            </span>
          </motion.div>

          <div className="relative z-10 px-5 py-9 sm:px-7 sm:py-11 md:px-10 md:py-12 lg:px-14 lg:py-12 xl:px-16 xl:py-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-[10px] uppercase tracking-[0.5em] text-white/35"
            >
              Manifiesto
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-5 max-w-[1180px] font-display text-[1.7rem] leading-[1.16] text-white sm:text-[2.15rem] md:text-[2.75rem] lg:text-[3.35rem]"
            >
              &ldquo;{manifestoText}&rdquo;
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.45 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="h-px w-10 bg-[oklch(0.55_0.22_25)]/50" />
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.34em] text-white/40">
                <span>Edgar Mauriola · Piura, Perú</span>
                <span className="inline-flex items-center justify-center rounded-sm bg-white px-1 py-0.5">
                  <ArtistSignature className="h-4 w-7" imageClassName="object-contain" />
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


