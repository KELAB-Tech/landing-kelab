import EconomiaCircularClient from "@/app/(site)/components/EconomiaCircularClient";

export const metadata = {
  title:
    "Economía Circular | Gestión de Residuos, Sostenibilidad y Empresas | Clean Pack",
  description:
    "Descubre cómo la economía circular transforma la producción y uso de materiales, fomentando la sostenibilidad y gestión eficiente de residuos en empresas y en Colombia.",
  keywords: [
    "economía circular",
    "gestión de residuos",
    "sostenibilidad",
    "reciclaje",
    "7Rs",
    "producción responsable",
    "reutilización",
    "reducción de residuos",
    "Clean Pack",
    "Colombia",
  ],
  openGraph: {
    title:
      "Economía Circular | Gestión de Residuos y Sostenibilidad | Clean Pack",
    description:
      "Guía completa sobre economía circular: cómo ayuda a las empresas y al país en la gestión de residuos, sostenibilidad y reutilización de materiales.",
    type: "article",
    url: "https://kelab.com.co/servicios/economia-circular",
    images: [
      {
        url: "https://kelab.com.co/static/servicios/sostenibilidad/Imagen1.webp",
        width: 1200,
        height: 630,
        alt: "Economía Circular y Gestión de Residuos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Economía Circular | Gestión de Residuos y Sostenibilidad | Clean Pack",
    description:
      "Conoce cómo la economía circular fomenta la sostenibilidad y la gestión eficiente de residuos en empresas y en Colombia.",
    images: [
      "https://kelab.com.co/static/servicios/sostenibilidad/Imagen1.webp",
    ],
  },
  alternates: {
    canonical: "https://kelab.com.co/servicios/economia-circular",
  },
  // Extras para SEO avanzado
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Servicios, Economía Circular, Sostenibilidad",
};

export default function Page() {
  return <EconomiaCircularClient />;
}
