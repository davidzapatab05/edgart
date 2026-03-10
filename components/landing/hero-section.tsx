"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { SVGProps } from "react";
import { Images, Instagram, Store } from "lucide-react";

import { ArtistSignature } from "@/components/landing/artist-signature";
import { artistInfo, heroCopy, instagramProfiles, whatsappHref } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;
function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.77 11.77 0 0012.04 0C5.5 0 .17 5.33.17 11.87c0 2.09.55 4.13 1.59 5.93L0 24l6.39-1.67a11.8 11.8 0 005.65 1.44h.01c6.54 0 11.87-5.33 11.87-11.87 0-3.17-1.23-6.15-3.4-8.42zm-8.48 18.3h-.01a9.84 9.84 0 01-5.02-1.38l-.36-.21-3.79.99 1.01-3.69-.24-.38a9.83 9.83 0 01-1.5-5.24c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 012.89 6.97c0 5.44-4.42 9.86-9.86 9.86zm5.41-7.39c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35z" />
    </svg>
  );
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 70]);
  const textY = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100svh" }}>
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
        <Image
          src="/images/artworks/artwork-15.webp"
          alt="Edgar Mauriola - obra principal"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/92 via-[#0a0806]/34 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806]/58 to-transparent" />
      </motion.div>

      <div className="relative z-10 flex items-center justify-between px-5 pt-6 sm:px-7 md:px-12 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-[10px] uppercase tracking-[0.42em] text-white/65"
        >
          {heroCopy.eyebrow}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="h-8 w-16 md:h-10 md:w-20"
        >
          <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-white/95 px-1">
            <ArtistSignature
              className="h-full w-full"
              imageClassName="object-contain"
              fallbackClassName="font-display text-xl italic text-black/80"
              priority
            />
          </span>
        </motion.div>
      </div>

      <motion.div
        style={{ y: textY }}
        className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-10 sm:px-7 sm:pb-12 md:px-12 md:pb-14 lg:px-16 lg:pb-16"
      >
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: EASE }}
          className="font-display text-[2.65rem] leading-[0.9] text-white sm:text-5xl md:text-6xl lg:text-[5.2rem] xl:text-[6.2rem]"
        >
          {artistInfo.name}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="my-4 h-px max-w-xl bg-white/28 sm:my-5"
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:justify-between xl:grid-cols-[minmax(0,780px)_auto]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="space-y-3 xl:space-y-3.5"
          >
            <p className="max-w-[52rem] text-base leading-tight text-white/92 sm:text-xl md:text-2xl">
              {heroCopy.headline}
            </p>
            <p className="max-w-[52rem] text-sm leading-relaxed text-white/72 sm:text-[15px] md:text-base xl:text-[1.02rem]">
              {heroCopy.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
            className="flex flex-wrap items-center gap-3 lg:max-w-[36rem] lg:justify-end"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Solicitar una obra por WhatsApp"
              title="WhatsApp"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white text-[#0a0806] transition hover:bg-white/90"
            >
              <WhatsAppIcon className="size-4" />
              <span className="sr-only">Solicitar una obra por WhatsApp</span>
            </a>

            <a
              href="#galeria"
              aria-label="Ir a la galería"
              title="Galería"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/85 backdrop-blur transition hover:border-white/55 hover:text-white"
            >
              <Images className="size-4" />
              <span className="sr-only">Ver galería</span>
            </a>

            {instagramProfiles.map((profile, index) => (
              <a
                key={profile.href}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                aria-label={profile.label}
                title={profile.label}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/80 backdrop-blur transition hover:border-white/50 hover:text-white"
              >
                {index === 0 ? <Instagram className="size-4" /> : <Store className="size-4" />}
                <span className="sr-only">{profile.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-5 text-[10px] uppercase tracking-[0.34em] text-white/38"
        >
          Piura · Huancabamba · Perú
        </motion.p>
      </motion.div>
    </section>
  );
}


