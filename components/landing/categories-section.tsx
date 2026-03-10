"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal } from "@/components/landing/reveal";
import { categories } from "@/data/landing-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CategoriesSection() {
    return (
        <section
            id="categorias"
            className="overflow-hidden"
            style={{ minHeight: "100svh" }}
        >
            <div className="container-shell flex min-h-[100svh] flex-col justify-center py-20 lg:py-24">
                {/* Header */}
                <Reveal>
                    <div className="mb-12 lg:mb-16">
                        <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-foreground/38">
                            Disciplinas
                        </p>
                        <h2 className="font-display text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-[3.6rem]">
                            Categorías de obra
                        </h2>
                    </div>
                </Reveal>

                {/* Categories grid — 2x2 */}
                <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.65, delay: index * 0.08, ease: EASE }}
                            className="group relative overflow-hidden rounded-2xl"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[3/2]">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                            </div>

                            {/* Content overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
                                <p className="text-[10px] uppercase tracking-[0.38em] text-white/45">
                                    {cat.count}
                                </p>
                                <h3 className="mt-1.5 font-display text-3xl leading-tight text-white sm:text-4xl">
                                    {cat.title}
                                </h3>
                                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/65 opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                                    {cat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
