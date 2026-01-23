import EconomiaCircularClient from "@/app/(site)/components/EconomiaCircularClient";

// ===================== META SEO OPTIMIZADO =====================
export const metadata = {
  title:
    "Economía Circular para Empresas | Gestión de Residuos y Sostenibilidad en Colombia",
  description:
    "Implementamos estrategias de economía circular para empresas en Colombia, optimizando la gestión de residuos, sostenibilidad, reutilización y aprovechamiento de materiales.",
  keywords: [
    "economía circular empresas",
    "gestión de residuos colombia",
    "sostenibilidad empresarial",
    "reciclaje empresarial",
    "7Rs economía circular",
    "reducción de residuos",
    "aprovechamiento de residuos",
    "estrategias de sostenibilidad",
  ],
  openGraph: {
    title:
      "Economía Circular para Empresas | Gestión de Residuos y Sostenibilidad",
    description:
      "Estrategias de economía circular para empresas: gestión eficiente de residuos, reutilización de materiales y sostenibilidad en Colombia.",
    type: "article",
    url: "https://kelab.com.co/services/economia-circular",
    images: [
      {
        url: "https://kelab.com.co/static/servicios/sostenibilidad/Imagen1.webp",
        width: 1200,
        height: 630,
        alt: "Economía Circular aplicada a empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Economía Circular para Empresas | Gestión de Residuos y Sostenibilidad",
    description:
      "Descubre cómo implementar economía circular en tu empresa para mejorar sostenibilidad, eficiencia y gestión de residuos en Colombia.",
    images: [
      "https://kelab.com.co/static/servicios/sostenibilidad/Imagen1.webp",
    ],
  },
  alternates: {
    canonical: "https://kelab.com.co/services/economia-circular",
  },
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Servicios, Economía Circular, Sostenibilidad Empresarial",
};

export default function EconomiaCircularPage() {
  return (
    <>
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Economía Circular para Empresas",
            description:
              "Servicio de implementación de estrategias de economía circular para empresas, enfocado en gestión de residuos, sostenibilidad y aprovechamiento de materiales.",
            serviceType: "Economía Circular y Sostenibilidad Empresarial",
            provider: {
              "@type": "Organization",
              name: "R&R Kelab S.A.S.",
              url: "https://kelab.com.co",
            },
            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },
          }),
        }}
      />

      <EconomiaCircularClient />
    </>
  );
}
