import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { RegisterServiceWorker } from "@/components/pwa/register-service-worker";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Edgar Mauriola | Arte visual 3J",
    template: "%s | Edgar Mauriola",
  },
  description:
    "Retratos, dibujos por pedido, pintura artística y murales personalizados de Edgar Mauriola (3J), desde Piura y Huancabamba para todo Perú.",
  applicationName: "Edgar Mauriola",
  keywords: [
    "Edgar Mauriola",
    "artista visual",
    "muralista en Piura",
    "retratos por encargo",
    "arte personalizado Perú",
    "murales artísticos",
  ],
  authors: [{ name: "Edgar Mauriola" }],
  creator: "Edgar Mauriola",
  publisher: "Edgar Mauriola",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    title: "Edgar Mauriola | Arte visual 3J",
    description:
      "Portafolio artístico con retratos, murales e intervenciones visuales. Encargos personalizados con identidad cultural.",
    siteName: "Edgar Mauriola",
    images: [
      {
        url: "/images/artworks/artwork-15.webp",
        width: 1200,
        height: 630,
        alt: "Obra principal de Edgar Mauriola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edgar Mauriola | Arte visual 3J",
    description:
      "Retratos, murales e intervenciones artísticas personalizadas desde Piura, Huancabamba.",
    images: ["/images/artworks/artwork-15.webp"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Edgar Mauriola",
  },
  icons: {
    icon: [{ url: "/favicon.ico?v=4", type: "image/x-icon" }],
    shortcut: [{ url: "/favicon.ico?v=4", type: "image/x-icon" }],
    apple: [{ url: "/pwa/icons/apple-touch-icon.png?v=4", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/pwa/icons/maskable-512x512.png?v=4",
        color: "#0b0c0e",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        {children}
        <RegisterServiceWorker />
      </body>
    </html>
  );
}
