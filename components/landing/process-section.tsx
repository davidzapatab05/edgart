"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal } from "@/components/landing/reveal";
import { processSteps } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProcessSection() {
    return (
        <section
            id="proceso"
            className="overflow-hidden"
            style={{ minHeight: "100svh" }}
        >
            <div className="container-shell flex min-h-[100svh] flex-col justify-center py-20 lg:py-24">
                {/* Header */}
                <Reveal>
                    <div className="mb-14 max-w-2xl lg:mb-16">
                        <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-foreground/38">
                            Proceso creativo
                        </p>
                        <h2 className="font-display text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-[3.6rem]">
                            Del concepto
                            <br />
                            <em className="text-[oklch(0.55_0.22_25)]">a la obra final.</em>
                        </h2>
                    </div>
                </Reveal>

                {/* Steps — alternating layout on desktop */}
                <div className="space-y-16 lg:space-y-20">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.phase}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, ease: EASE }}
                            className={`grid gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                                <div className="overflow-hidden rounded-2xl">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={720}
                                        height={480}
                                        className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div
                                className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:[direction:ltr]" : ""
                                    }`}
                            >
                                <p className="font-mono text-[11px] uppercase tracking-[0.45em] text-[oklch(0.55_0.22_25)]/70">
                                    {step.phase}
                                </p>
                                <h3 className="mt-4 font-display text-3xl leading-[0.95] text-foreground sm:text-4xl lg:text-[2.6rem]">
                                    {step.title}
                                </h3>
                                <div className="mt-1 h-px w-10 bg-[oklch(0.55_0.22_25)]/40" />
                                <p className="mt-6 text-[15px] leading-relaxed text-foreground/60 lg:text-base">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
