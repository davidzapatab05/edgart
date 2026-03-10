import { AboutSection } from "@/components/landing/about-section";
import { BackgroundLayer } from "@/components/landing/background-layer";
import { CategoriesSection } from "@/components/landing/categories-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { HeroSection } from "@/components/landing/hero-section";
import { KineticStrip } from "@/components/landing/kinetic-strip";
import { ManifestoSection } from "@/components/landing/manifesto-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ScrollToTopButton } from "@/components/landing/scroll-to-top-button";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { SpecialtiesSection } from "@/components/landing/specialties-section";
import { StructuredData } from "@/components/landing/structured-data";

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip">
      <StructuredData />
      <BackgroundLayer />
      <main>
        {/* 1. Hero fullscreen */}
        <HeroSection />
        <KineticStrip />

        {/* 2. Sobre el artista */}
        <AboutSection />

        {/* 3. Galería destacada */}
        <GallerySection />

        {/* 4. Categorías de obra */}
        <CategoriesSection />

        {/* 5. Obras / Especialidades */}
        <SpecialtiesSection />

        {/* 6. Proceso creativo */}
        <ProcessSection />

        {/* Social proof */}
        <SocialProofSection />

        {/* 7. CTA final de contacto */}
        <FinalCtaSection />

        {/* Manifiesto */}
        <ManifestoSection />
      </main>
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
}
