"use client";

import { motion } from "framer-motion";
import { Instagram, Store } from "lucide-react";

import { ArtistSignature } from "@/components/landing/artist-signature";
import { artistInfo, instagramProfiles } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FooterSection() {
  return (
    <motion.footer
      className="relative border-t border-white/8 bg-[linear-gradient(180deg,rgba(8,8,12,0.05)_0%,rgba(8,8,12,0.24)_100%)] py-3 sm:py-3.5 md:py-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, ease: EASE }}
    >
      <div className="container-shell grid gap-2.5 text-center sm:gap-3 md:grid-cols-[auto_1fr_auto] md:items-center md:text-left">
        <motion.div
          className="flex items-center justify-center gap-2.5 md:justify-start"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
        >
          <p className="font-display text-2xl leading-none text-foreground sm:text-[2rem] md:text-[2.15rem]">
            {artistInfo.name}
          </p>
          <motion.div
            className="h-7 w-[4.4rem] sm:h-8 sm:w-[4.9rem]"
            animate={{ y: [0, -1, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-white px-1 py-0.5">
              <ArtistSignature
                className="h-full w-full"
                imageClassName="object-contain"
                fallbackClassName="font-display text-xl italic text-black/80"
              />
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-[10px] uppercase tracking-[0.24em] text-foreground/40 sm:text-[11px] sm:tracking-[0.3em] md:text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
        >
          Piura · Huancabamba · Perú
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-1.5 md:items-end"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <div className="flex items-center gap-2">
            {instagramProfiles.map((profile, index) => (
              <a
                key={profile.href}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                aria-label={profile.label}
                title={profile.label}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/18 text-foreground/72 transition-colors hover:border-white/40 hover:text-white"
              >
                {index === 0 ? <Instagram className="size-3.5" /> : <Store className="size-3.5" />}
                <span className="sr-only">{profile.label}</span>
              </a>
            ))}
            <span className="hidden h-4 w-px bg-white/12 md:inline-block" />
            <p className="hidden text-[10px] leading-none text-foreground/46 md:block">
              © 2026 Edgar Mauriola
            </p>
          </div>

          <p className="text-[10px] leading-none text-foreground/46 md:hidden">
            © 2026 Edgar Mauriola
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

