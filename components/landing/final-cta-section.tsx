"use client";

import { motion } from "framer-motion";
import { Instagram, Store } from "lucide-react";
import type { SVGProps } from "react";

import { ArtistSignature } from "@/components/landing/artist-signature";
import { instagramProfiles, whatsappHref } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.77 11.77 0 0012.04 0C5.5 0 .17 5.33.17 11.87c0 2.09.55 4.13 1.59 5.93L0 24l6.39-1.67a11.8 11.8 0 005.65 1.44h.01c6.54 0 11.87-5.33 11.87-11.87 0-3.17-1.23-6.15-3.4-8.42zm-8.48 18.3h-.01a9.84 9.84 0 01-5.02-1.38l-.36-.21-3.79.99 1.01-3.69-.24-.38a9.83 9.83 0 01-1.5-5.24c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 012.89 6.97c0 5.44-4.42 9.86-9.86 9.86zm5.41-7.39c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35z" />
    </svg>
  );
}

export function FinalCtaSection() {
  return (
    <section
      id="contacto"
      className="overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <div className="container-shell flex min-h-[100svh] flex-col items-center justify-center py-20 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] uppercase tracking-[0.5em] text-foreground/38"
        >
          ¿Tienes un proyecto?
        </motion.p>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="mt-8 font-display text-[2.8rem] leading-[0.88] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
        >
          ¿Listo para crear
          <br />
          <em className="text-[oklch(0.6_0.22_25)]">tu próxima obra?</em>
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mx-auto mt-8 max-w-md text-base leading-relaxed text-foreground/55 md:text-lg"
        >
          Si buscas un retrato, mural o intervención personalizada,
          conversemos y te comparto una propuesta clara.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[13px] font-semibold text-black transition hover:bg-white/90"
          >
            <WhatsAppIcon className="size-4" />
            Escribir por WhatsApp
          </a>
          <a
            href="#galeria"
            className="inline-flex items-center rounded-full border border-white/22 px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] text-white/70 transition hover:border-white/45 hover:text-white"
          >
            Ver galería
          </a>
        </motion.div>

        {/* Social + signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 flex items-center gap-4 border-t border-white/8 pt-10"
        >
          <span className="inline-flex items-center justify-center rounded-md bg-white px-2 py-1">
            <ArtistSignature className="h-6 w-12" imageClassName="object-contain" />
          </span>
          <div className="h-4 w-px bg-white/12" />
          {instagramProfiles.map((profile, index) => (
            <a
              key={profile.href}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              aria-label={profile.label}
              className="text-foreground/45 transition hover:text-white"
            >
              {index === 0 ? <Instagram className="size-4" /> : <Store className="size-4" />}
            </a>
          ))}
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/30">
            Respuesta en 24 h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
