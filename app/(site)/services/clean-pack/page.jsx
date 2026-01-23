import CleanPackClient from "@/app/(site)/components/CleanPackClient";

// ===================== META SEO OPTIMIZADO =====================
export const metadata = {
  title:
    "Plan Colectivo Clean Pack | Gestión Integral de Residuos para Empresas en Colombia",
  description:
    "Clean Pack es un plan colectivo de gestión integral de residuos para empresas en Colombia. Garantizamos trazabilidad, aprovechamiento, cumplimiento normativo y economía circular.",
  keywords: [
    "plan colectivo clean pack",
    "gestión integral de residuos",
    "gestión de residuos empresas colombia",
    "plan colectivo residuos colombia",
    "trazabilidad de residuos",
    "aprovechamiento de residuos",
    "economía circular empresas",
    "responsabilidad ambiental empresarial",
  ],
  openGraph: {
    title:
      "Plan Colectivo Clean Pack | Gestión Integral de Residuos en Colombia",
    description:
      "Plan colectivo especializado en gestión integral, trazabilidad y aprovechamiento de residuos para empresas en Colombia.",
    type: "website",
    url: "https://kelab.com.co/services/clean-pack",
    images: [
      {
        url: "https://kelab.com.co/static/logos/Cleanpack.svg",
        width: 1200,
        height: 630,
        alt: "Plan Colectivo Clean Pack – Gestión Integral de Residuos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Plan Colectivo Clean Pack | Gestión Integral de Residuos en Colombia",
    description:
      "Conoce Clean Pack, el plan colectivo para la gestión integral de residuos empresariales, trazabilidad y economía circular en Colombia.",
    images: ["https://kelab.com.co/static/logos/Cleanpack.svg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/services/clean-pack",
  },
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Servicios, Gestión de Residuos, Economía Circular",
};

export default function CleanPackPage() {
  return (
    <>
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://kelab.com.co/services/clean-pack#service",
            name: "Plan Colectivo Clean Pack",
            description:
              "Plan colectivo de gestión integral de residuos de envases y empaques para empresas en Colombia.",
            url: "https://kelab.com.co/services/clean-pack",
            provider: {
              "@type": "Organization",
              name: "R&R Kelab S.A.S.",
              url: "https://kelab.com.co",
            },
            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },
            serviceType: "Gestión Integral de Residuos",
          }),
        }}
      />

      <CleanPackClient />
    </>
  );
}
