"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/landing/reveal";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { artworks } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function GallerySection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedArtwork = useMemo(
    () => artworks.find((a) => a.id === selectedId) ?? null,
    [selectedId],
  );

  return (
    <section id="galeria" className="section-space overflow-hidden" style={{ minHeight: "100svh" }}>
      <div className="container-shell space-y-10 py-20 lg:space-y-12 lg:py-24">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-white/38">Colección</p>
            <h2 className="font-display text-4xl leading-[0.9] text-white sm:text-5xl md:text-6xl">
              Sala de
              <br />
              <em style={{ color: "oklch(0.58 0.2 25)" }}>Exhibición</em>
            </h2>
          </div>
          <div className="sm:text-right">
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              Haz clic en cualquier pieza para verla en detalle.
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/30">
              {artworks.length} obras
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4 2xl:grid-cols-5 2xl:gap-5">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: (index % 5) * 0.05, ease: EASE }}
            >
              <button
                type="button"
                onClick={() => setSelectedId(artwork.id)}
                className="group block w-full text-left"
                aria-label={`Ver ${artwork.title}`}
              >
                <div
                  className="overflow-hidden bg-white"
                  style={{
                    padding: "7px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.6), 0 20px 60px rgba(0,0,0,0.35)",
                  }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={artwork.src}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 20vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/24">
                      <span className="translate-y-2 rounded-full bg-white/95 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-black opacity-0 shadow-xl transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                        Ampliar
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#0b0a0d",
                      borderTop: "2px solid white",
                      padding: "7px 6px 6px",
                    }}
                  >
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/42">{artwork.category}</p>
                    <p className="mt-1 font-display text-lg leading-snug text-white">{artwork.title}</p>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(selectedArtwork)} onOpenChange={(open) => !open && setSelectedId(null)}>
        <DialogContent
          showCloseButton={false}
          className="!flex h-[94vh] w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] flex-col overflow-hidden border-white/10 p-3 text-white sm:w-[96vw] sm:max-w-[96vw] md:h-[95vh] md:p-5 lg:w-[92vw] lg:max-w-[1600px]"
          style={{ background: "#0d0c10" }}
        >
          {selectedArtwork && (
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="mb-3 flex items-start justify-between gap-4 md:mb-5">
                <div>
                  <DialogTitle className="font-display text-2xl text-white md:text-3xl">
                    {selectedArtwork.title}
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-[10px] uppercase tracking-[0.32em] text-white/46">
                    {selectedArtwork.category} · Edgar Mauriola
                  </DialogDescription>
                </div>
                <DialogClose className="shrink-0 rounded-full border border-white/15 p-2.5 text-white/60 transition hover:border-white/35 hover:bg-white/5 hover:text-white">
                  <X className="size-4" />
                  <span className="sr-only">Cerrar</span>
                </DialogClose>
              </div>

              <motion.div
                key={selectedArtwork.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="relative min-h-0 flex-1 overflow-hidden rounded-md border border-white/10 bg-black/65 p-2 md:p-3"
              >
                <div className="relative h-full w-full overflow-hidden rounded-sm bg-black">
                  <Image
                    src={selectedArtwork.src}
                    alt={selectedArtwork.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 94vw, 90vw"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}


