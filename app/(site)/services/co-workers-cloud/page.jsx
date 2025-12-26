import ServiceCoworkersCloudClient from "@/app/(site)/components/ServiceCoworkersCloudClient";

export const metadata = {
  title:
    "Co-Workers Cloud | Plataforma de Comercialización y Gestión de Residuos | Colombia",
  description:
    "Co-Workers Cloud es el ecosistema tecnológico líder que transforma la comercialización, trazabilidad y gestión de residuos aprovechables en Colombia, impulsando la economía circular.",
  keywords: [
    "co-workers cloud",
    "gestión de residuos",
    "waste store",
    "plataforma residuos Colombia",
    "marketplace residuos",
    "economía circular",
    "trazabilidad de residuos",
    "comercialización de residuos",
    "gestión ambiental",
  ],
  openGraph: {
    title:
      "Co-Workers Cloud | Plataforma de Comercialización de Residuos | Clean Pack",
    description:
      "Plataforma innovadora para la trazabilidad, comercialización y gestión integral de residuos aprovechables en Colombia.",
    type: "article",
    url: "https://kelab.com.co/servicios/co-workers-cloud",
    images: [
      {
        url: "https://kelab.com.co/static/logos/WS.svg",
        width: 1200,
        height: 630,
        alt: "Co-Workers Cloud – Gestión y Comercialización de Residuos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Co-Workers Cloud | Plataforma de Comercialización y Gestión de Residuos",
    description:
      "Descubre Co-Workers Cloud, la plataforma tecnológica que optimiza la comercialización y trazabilidad de residuos aprovechables en Colombia.",
    images: ["https://kelab.com.co/static/logos/WS.svg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/servicios/co-workers-cloud",
  },
  // Extras para SEO avanzado
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Servicios, Gestión de Residuos, Marketplace",
};

export default function Page() {
  return <ServiceCoworkersCloudClient />;
}
