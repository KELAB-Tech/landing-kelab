import ServiciosAmbientalesClient from "@/app/(site)/components/ServiciosAmbientalesClient";

// ===================== META SEO OPTIMIZADO =====================
export const metadata = {
  title:
    "Servicios Ambientales Integrales para Empresas | Trámites, Monitoreo e Ingeniería en Colombia",
  description:
    "Brindamos servicios ambientales integrales para empresas en Colombia: trámites ambientales, monitoreo, permisos, ingeniería sanitaria y gestión de residuos con cumplimiento normativo.",
  keywords: [
    "servicios ambientales empresas",
    "trámites ambientales colombia",
    "permisos ambientales",
    "monitoreo ambiental",
    "ingeniería sanitaria",
    "caracterización de residuos",
    "consultoría ambiental",
    "gestión ambiental empresarial",
    "cumplimiento normativo ambiental",
  ],
  openGraph: {
    title:
      "Servicios Ambientales Integrales para Empresas | Cumplimiento y Sostenibilidad",
    description:
      "Servicios ambientales integrales para empresas: trámites, permisos, monitoreo e ingeniería ambiental para garantizar cumplimiento normativo y sostenibilidad en Colombia.",
    type: "article",
    url: "https://kelab.com.co/services/tramites-ambientales",
    images: [
      {
        url: "https://kelab.com.co/static/ambiental-banner.webp",
        width: 1200,
        height: 630,
        alt: "Servicios Ambientales Integrales para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Servicios Ambientales Integrales para Empresas | Cumplimiento Ambiental",
    description:
      "Soluciones ambientales completas para empresas en Colombia: trámites, monitoreo, ingeniería y consultoría ambiental.",
    images: ["https://kelab.com.co/static/ambiental-banner.webp"],
  },
  alternates: {
    canonical: "https://kelab.com.co/services/tramites-ambientales",
  },
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Servicios Ambientales, Consultoría, Ingeniería Ambiental",
};

export default function ServiciosAmbientalesPage() {
  return (
    <>
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Servicios Ambientales Integrales",
            description:
              "Servicios ambientales integrales para empresas, incluyendo trámites ambientales, permisos, monitoreo, ingeniería sanitaria y gestión de residuos con cumplimiento normativo.",
            serviceType: "Servicios Ambientales y Cumplimiento Normativo",
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

      <ServiciosAmbientalesClient />
    </>
  );
}
