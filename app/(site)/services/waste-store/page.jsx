import WasteStoreClient from "@/app/(site)/components/WasteStoreClient";

// ===================== META SEO NIVEL DIOS =====================
export const metadata = {
  title:
    "Waste Store | Plataforma de Comercialización de Residuos | Clean Pack",
  description:
    "Waste Store es la tienda virtual líder para la comercialización de residuos aprovechables en Colombia, promoviendo trazabilidad, sostenibilidad y economía circular.",
  keywords: [
    "waste store",
    "comercialización de residuos",
    "plataforma residuos Colombia",
    "economía circular",
    "gestión de residuos",
    "trazabilidad de residuos",
    "Clean Pack",
    "residuos aprovechables",
  ],
  openGraph: {
    title:
      "Waste Store | Plataforma de Comercialización de Residuos | Clean Pack",
    description:
      "Conoce Waste Store, la plataforma innovadora para la trazabilidad y comercialización de residuos aprovechables en Colombia.",
    type: "website",
    url: "https://kelab.com.co/servicios/waste-store",
    images: [
      {
        url: "https://kelab.com.co/static/logos/WS.svg",
        width: 1200,
        height: 630,
        alt: "Waste Store – Comercialización de Residuos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Waste Store | Plataforma de Comercialización de Residuos | Clean Pack",
    description:
      "Plataforma líder en comercialización de residuos aprovechables, trazabilidad y economía circular en Colombia.",
    images: ["https://kelab.com.co/static/logos/WS.svg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/servicios/waste-store",
  },
  // Extras para SEO avanzado
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Servicios, Waste Store, Gestión de Residuos, Economía Circular",
};

export default function WasteStorePage() {
  return <WasteStoreClient />;
}
