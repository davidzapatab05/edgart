export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Edgar Mauriola",
    alternateName: "3J",
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    description:
      "Artista visual peruano especializado en retratos, dibujos por pedido, pintura artística y murales personalizados.",
    jobTitle: "Artista visual y muralista",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Huancabamba",
      addressRegion: "Piura",
      addressCountry: "PE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+51 930 141 543",
      availableLanguage: ["es"],
    },
    sameAs: ["https://wa.me/51930141543", "https://www.instagram.com/edgart_3j/", "https://www.instagram.com/edgart.store/"],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Edgar Mauriola | 3J",
    url: siteUrl,
    image: `${siteUrl}/pwa/icons/icon-512x512.png`,
    description:
      "Servicios de arte personalizado: retratos, murales e intervenciones artísticas para espacios comerciales y personales.",
    telephone: "+51 930 141 543",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Huancabamba",
      addressRegion: "Piura",
      addressCountry: "PE",
    },
    areaServed: ["Piura", "Perú"],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([person, localBusiness]),
      }}
    />
  );
}
