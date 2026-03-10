"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal } from "@/components/landing/reveal";
import { specialties } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;

// Include "Proyecto completo" as the last item
const allServices = [
  ...specialties,
  {
    title: "Proyecto completo",
    description:
      "Resolución integral del proceso artístico: brief, propuesta visual, producción por etapas y entrega final.",
  },
];

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <div className="container-shell flex min-h-[100svh] flex-col justify-center py-20 lg:py-24">
        {/* Header */}
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:mb-16">
          <Reveal>
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-foreground/38">
              Enfoque artístico
            </p>
            <h2 className="font-display text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-[3.6rem]">
              Cada proyecto,
              <br />
              <em className="text-[oklch(0.55_0.22_25)]">una obra única.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/52 lg:text-right lg:text-[15px]">
              Servicios pensados para espacios personales, comerciales y
              culturales con identidad visual propia.
            </p>
          </Reveal>
        </div>

        {/* Body: list + image */}
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,380px)] lg:gap-16 xl:grid-cols-[1fr_minmax(0,420px)]">
          {/* Numbered service list */}
          <div className="divide-y divide-white/8">
            {allServices.map((svc, index) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.055, ease: EASE }}
                className="group grid grid-cols-[40px_1fr] gap-4 py-5 sm:py-6 lg:py-7"
              >
                <span className="pt-0.5 font-mono text-[11px] text-[oklch(0.55_0.22_25)]/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-foreground sm:text-[1.65rem] transition-colors duration-200 group-hover:text-[oklch(0.75_0.15_25)]">
                    {svc.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/52">
                    {svc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sticky artwork image */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: EASE }}
                className="overflow-hidden rounded-2xl"
              >
                <Image
                  src="/images/artworks/artwork-13.webp"
                  alt="Obra de Edgar Mauriola"
                  width={420}
                  height={560}
                  className="aspect-[3/4] w-full object-cover"
                  sizes="420px"
                />
              </motion.div>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.4em] text-foreground/30">
                Muralismo · Intervención artística
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
