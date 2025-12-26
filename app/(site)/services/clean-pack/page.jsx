import CleanPackClient from "@/app/(site)/components/CleanPackClient";

// ===================== META SEO NIVEL DIOS =====================
export const metadata = {
  title: "Plan Colectivo CLEAN PACK | Gestión Integral de Residuos | Colombia",
  description:
    "Clean Pack es el plan colectivo líder en gestión integral de residuos para empresas en Colombia, promoviendo trazabilidad, reciclaje y economía circular.",
  keywords: [
    "clean pack",
    "plan colectivo residuos",
    "gestión residuos Colombia",
    "trazabilidad de residuos",
    "aprovechamiento de residuos",
    "reciclaje empresarial",
    "economía circular",
    "responsabilidad ambiental",
  ],
  openGraph: {
    title: "Plan Colectivo CLEAN PACK | Gestión de Residuos | Colombia",
    description:
      "Plan colectivo especializado en gestión integral, trazabilidad y aprovechamiento de residuos para empresas en Colombia.",
    type: "article",
    url: "https://kelab.com.co/servicios/clean-pack",
    images: [
      {
        url: "https://kelab.com.co/static/logos/Cleanpack.svg",
        width: 1200,
        height: 630,
        alt: "Plan Colectivo Clean Pack – Gestión de Residuos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan Colectivo CLEAN PACK | Gestión de Residuos | Colombia",
    description:
      "Conoce Clean Pack, el plan colectivo líder en gestión integral de residuos, trazabilidad y economía circular para empresas en Colombia.",
    images: ["https://kelab.com.co/static/logos/Cleanpack.svg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/servicios/clean-pack",
  },
  // Extras para SEO avanzado
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Servicios, Gestión de Residuos, Economía Circular",
};

export default function CleanPackPage() {
  return <CleanPackClient />;
}
