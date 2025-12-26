import ServiciosAmbientalesClient from "@/app/(site)/components/ServiciosAmbientalesClient";

export const metadata = {
  title:
    "Servicios Ambientales Integrales | Trámites, Monitoreo e Ingeniería | Clean Pack",
  description:
    "Ofrecemos soluciones ambientales técnicas, operativas y estratégicas para empresas en Colombia, garantizando sostenibilidad, cumplimiento normativo y eficiencia en la gestión de residuos.",
  keywords: [
    "servicios ambientales",
    "trámites ambientales",
    "monitoreo ambiental",
    "ingeniería sanitaria",
    "caracterización de residuos",
    "permisos ambientales",
    "consultoría ambiental",
    "gestión de residuos",
    "sostenibilidad",
    "Clean Pack",
  ],
  openGraph: {
    title:
      "Servicios Ambientales Integrales | Trámites, Monitoreo e Ingeniería | Clean Pack",
    description:
      "Servicios ambientales integrales para empresas: trámites, monitoreo, permisos, ingeniería y consultoría para garantizar sostenibilidad y cumplimiento normativo.",
    type: "article",
    url: "https://kelab.com.co/servicios/tramites-ambientales",
    images: [
      {
        url: "https://kelab.com.co/static/ambiental-banner.webp",
        width: 1200,
        height: 630,
        alt: "Servicios Ambientales Integrales – Clean Pack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Servicios Ambientales Integrales | Trámites, Monitoreo e Ingeniería | Clean Pack",
    description:
      "Soluciones ambientales completas para empresas: trámites, monitoreo, ingeniería y consultoría para garantizar eficiencia y cumplimiento normativo en Colombia.",
    images: ["https://kelab.com.co/static/ambiental-banner.webp"],
  },
  alternates: {
    canonical: "https://kelab.com.co/servicios/tramites-ambientales",
  },
  // Extras para SEO avanzado
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Servicios, Ambientales, Consultoría, Ingeniería",
};

export default function ServiciosAmbientalesPage() {
  return <ServiciosAmbientalesClient />;
}
