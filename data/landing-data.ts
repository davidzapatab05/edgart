export type ArtworkItem = {
  id: string;
  src: string;
  title: string;
  category: string;
};

export type SpecialtyItem = {
  title: string;
  description: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  project: string;
  location: string;
};

export type CaseStudyItem = {
  title: string;
  summary: string;
  result: string;
};

export type CtaStepItem = {
  title: string;
  description: string;
};

export const artistInfo = {
  name: "Edgar Mauriola",
  signature: "3J",
  signatureImage: "/logo.png",
  origin: "Piura, Huancabamba - Perú",
  whatsappNumber: "+51 930 141 543",
  whatsappMessage: "Hola Edgar, vi tu trabajo artístico y me gustaría recibir una propuesta para mi obra.",
  email: "edgartmauriola@gmail.com",
};

export const artistEmail = "edgartmauriola@gmail.com";

export const whatsappHref = `https://wa.me/51930141543?text=${encodeURIComponent(artistInfo.whatsappMessage)}`;

export const instagramProfiles = [
  { label: "Instagram principal", handle: "@edgart_3j", href: "https://www.instagram.com/edgart_3j/" },
  { label: "Instagram tienda", handle: "@edgart.store", href: "https://www.instagram.com/edgart.store/" },
] as const;

export const heroCopy = {
  eyebrow: "Exposición digital",
  headline: "Obras con identidad, técnica y emoción para espacios que quieren destacar.",
  description:
    "Edgar Mauriola desarrolla retratos, dibujos por pedido, pintura artística y murales personalizados. Cada obra se diseña para contar una historia única.",
};

export const aboutHighlights = [
  {
    label: "Procedencia",
    value: "Piura, provincia de Huancabamba",
  },
  {
    label: "Firma",
    value: "Identidad 3J",
  },
  {
    label: "Disciplinas",
    value: "Retrato, dibujo, pintura, mural e intervención artística",
  },
  {
    label: "Enfoque",
    value: "Arte personalizado con identidad cultural contemporánea",
  },
];

export const artworks: ArtworkItem[] = [
  { id: "artwork-01", src: "/images/artworks/artwork-01.webp", title: "Raíces Vivas", category: "Dibujo" },
  { id: "artwork-02", src: "/images/artworks/artwork-02.webp", title: "Pulso Urbano", category: "Dibujo" },
  { id: "artwork-03", src: "/images/artworks/artwork-03.webp", title: "Luz del Norte", category: "Dibujo" },
  { id: "artwork-04", src: "/images/artworks/artwork-04.webp", title: "Trama Ancestral", category: "Pintura" },
  { id: "artwork-05", src: "/images/artworks/artwork-05.webp", title: "Memoria Expandida", category: "Mural" },
  { id: "artwork-06", src: "/images/artworks/artwork-06.webp", title: "Resonancia", category: "Pintura" },
  { id: "artwork-07", src: "/images/artworks/artwork-07.webp", title: "Territorio Emocional", category: "Mural" },
  { id: "artwork-08", src: "/images/artworks/artwork-08.webp", title: "Ritmo y Matiz", category: "Pintura" },
  { id: "artwork-09", src: "/images/artworks/artwork-09.webp", title: "Diálogo de Color", category: "Pintura" },
  { id: "artwork-10", src: "/images/artworks/artwork-10.webp", title: "Fragmento Vivo", category: "Mural" },
  { id: "artwork-11", src: "/images/artworks/artwork-11.webp", title: "Materia y Gesto", category: "Pintura" },
  { id: "artwork-12", src: "/images/artworks/artwork-12.webp", title: "Travesía Interior", category: "Mural" },
  { id: "artwork-13", src: "/images/artworks/artwork-13.webp", title: "Origen en Movimiento", category: "Pintura" },
  { id: "artwork-14", src: "/images/artworks/artwork-14.webp", title: "Mirada Colectiva", category: "Pintura" },
  { id: "artwork-15", src: "/images/artworks/artwork-15.webp", title: "Frontera Sensible", category: "Retrato" },
  { id: "artwork-16", src: "/images/artworks/artwork-16.webp", title: "Núcleo 3J", category: "Pintura" },
];

export const specialties: SpecialtyItem[] = [
  {
    title: "Retratos",
    description: "Retratos artísticos con expresión, carácter y tratamiento cromático personalizado.",
  },
  {
    title: "Dibujos por pedido",
    description: "Piezas por encargo en distintos estilos, formatos y niveles de detalle.",
  },
  {
    title: "Pintura artística",
    description: "Obras en color con lenguaje propio para espacios personales, comerciales o culturales.",
  },
  {
    title: "Murales e intervenciones",
    description: "Trabajo en gran formato para transformar muros en composiciones vivas con identidad.",
  },
  {
    title: "Arte personalizado",
    description: "Desarrollo creativo integral desde concepto inicial hasta la pieza final.",
  },
];

export const metrics: MetricItem[] = [
  { value: "60+", label: "encargos realizados" },
  { value: "+5 años", label: "de experiencia continua" },
  { value: "24 h", label: "de respuesta inicial" },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Le encargamos un mural para nuestro local y la transformación fue total. El espacio ahora tiene identidad propia.",
    author: "María del Pilar R.",
    project: "Mural comercial",
    location: "Piura",
  },
  {
    quote:
      "El retrato superó nuestras expectativas. Captó la expresión exacta y cuidó cada detalle del color.",
    author: "Kevin A.",
    project: "Retrato personalizado",
    location: "Huancabamba",
  },
  {
    quote:
      "Trabajar con Edgar fue ordenado, rápido y profesional. Entregó propuesta, avance y resultado final impecable.",
    author: "Rosa M.",
    project: "Intervención mural",
    location: "Sullana",
  },
];

export const caseStudies: CaseStudyItem[] = [
  {
    title: "Mural para fachada gastronómica",
    summary: "Diseño conceptual + ejecución completa en muro principal de atención al público.",
    result: "Mayor recordación visual y más interacción de clientes en redes sociales.",
  },
  {
    title: "Serie de retratos por encargo",
    summary: "Producción de piezas personalizadas para regalo familiar con lineamiento cromático definido.",
    result: "Entrega en tiempo, alta satisfacción y recomendación directa a nuevos clientes.",
  },
  {
    title: "Intervención artística institucional",
    summary: "Propuesta visual para revitalizar un entorno comunitario con narrativa local.",
    result: "Espacio renovado con identidad cultural y alto impacto en percepción del lugar.",
  },
];

export const ctaSteps: CtaStepItem[] = [
  {
    title: "Cuéntame tu idea",
    description: "Definimos estilo, objetivo del espacio, referencias y presupuesto estimado.",
  },
  {
    title: "Recibe propuesta visual",
    description: "Te comparto una ruta creativa clara con alcance, tiempos y costo.",
  },
  {
    title: "Producción y entrega",
    description: "Ejecución profesional con seguimiento hasta la entrega final de la obra.",
  },
];

export const manifestoText =
  "Crear arte no es solo pintar un muro: es dibujar emociones, retratar memorias y transformar cada espacio en color con identidad.";

export type CategoryItem = {
  title: string;
  description: string;
  image: string;
  count: string;
};

export const categories: CategoryItem[] = [
  {
    title: "Retratos",
    description: "Expresión, carácter y alma capturados en cada trazo.",
    image: "/images/artworks/artwork-15.webp",
    count: "20+ obras",
  },
  {
    title: "Murales",
    description: "Gran formato que transforma espacios con identidad visual.",
    image: "/images/artworks/artwork-10.webp",
    count: "15+ intervenciones",
  },
  {
    title: "Pintura",
    description: "Obras en color con lenguaje propio y presencia duradera.",
    image: "/images/artworks/artwork-09.webp",
    count: "25+ piezas",
  },
  {
    title: "Dibujo",
    description: "Técnica precisa y detalle narrativo en cada pieza por pedido.",
    image: "/images/artworks/artwork-02.webp",
    count: "30+ encargos",
  },
];

export type ProcessStepItem = {
  phase: string;
  title: string;
  description: string;
  image: string;
};

export const processSteps: ProcessStepItem[] = [
  {
    phase: "01 — Boceto",
    title: "La idea toma forma",
    description:
      "Todo comienza con una conversación. Entiendo el espacio, el estilo y la emoción que quieres transmitir. Luego traduzco eso a un boceto inicial que define la composición y el lenguaje visual.",
    image: "/images/artworks/artwork-05.webp",
  },
  {
    phase: "02 — Avance",
    title: "La obra cobra vida",
    description:
      "Con el boceto aprobado, inicio la producción. Trabajo por etapas, compartiendo avances para que veas cómo evoluciona la pieza y puedas dar feedback en el momento justo.",
    image: "/images/artworks/artwork-11.webp",
  },
  {
    phase: "03 — Resultado",
    title: "La entrega final",
    description:
      "La obra terminada es más que el resultado de una técnica: es una pieza con narrativa, carácter y presencia propia. Lista para habitar tu espacio y contar una historia.",
    image: "/images/artworks/artwork-16.webp",
  },
];
