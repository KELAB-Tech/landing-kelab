import ServiceCoworkersCloudClient from "@/app/(site)/components/ServiceCoworkersCloudClient";

// ===================== META SEO OPTIMIZADO =====================
export const metadata = {
  title:
    "Co-Workers Cloud | Plataforma Tecnológica para la Gestión y Comercialización de Residuos en Colombia",
  description:
    "Co-Workers Cloud es una plataforma tecnológica que optimiza la trazabilidad, comercialización y gestión de residuos aprovechables en Colombia, impulsando la economía circular.",
  keywords: [
    "co-workers cloud",
    "plataforma gestión de residuos",
    "marketplace de residuos colombia",
    "comercialización de residuos",
    "trazabilidad de residuos",
    "economía circular",
    "gestión ambiental digital",
    "residuos aprovechables",
  ],
  openGraph: {
    title: "Co-Workers Cloud | Plataforma Tecnológica de Gestión de Residuos",
    description:
      "Ecosistema tecnológico para la trazabilidad, comercialización y gestión integral de residuos aprovechables en Colombia.",
    type: "article",
    url: "https://kelab.com.co/services/co-workers-cloud",
    images: [
      {
        url: "https://kelab.com.co/static/logos/WS.svg",
        width: 1200,
        height: 630,
        alt: "Co-Workers Cloud – Plataforma de Gestión de Residuos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Co-Workers Cloud | Plataforma Tecnológica de Gestión de Residuos",
    description:
      "Descubre Co-Workers Cloud, la plataforma que conecta trazabilidad, comercialización y economía circular para residuos en Colombia.",
    images: ["https://kelab.com.co/static/logos/WS.svg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/services/co-workers-cloud",
  },
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Servicios, Tecnología Ambiental, Economía Circular",
};

export default function CoWorkersCloudPage() {
  return (
    <>
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Co-Workers Cloud",
            description:
              "Plataforma tecnológica para la gestión, trazabilidad y comercialización de residuos aprovechables en Colombia.",
            serviceType: "Plataforma tecnológica de gestión de residuos",
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

      <ServiceCoworkersCloudClient />
    </>
  );
}
