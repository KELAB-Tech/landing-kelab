import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ===================== META SEO CO-WORKERS CLOUD =====================
export const metadata = {
  title:
    "Co-Workers Cloud | Centro Comercial Digital de Residuos Aprovechables en Colombia",
  description:
    "Co-Workers Cloud es el primer ecosistema digital en Colombia para la comercialización de residuos aprovechables. Conecta asociaciones, gestores y empresas transformadoras con autonomía, trazabilidad y seguridad transaccional.",
  keywords: [
    "Co-Workers Cloud",
    "residuos aprovechables",
    "economía circular",
    "plataforma digital residuos",
    "centro comercial digital",
    "gestión de residuos",
    "logística de reciclaje",
    "trazabilidad residuos",
    "bodegas virtuales",
    "marketplace residuos",
    "reciclaje Colombia",
    "R&R Kelab",
    "consultoría ambiental",
    "seguridad transaccional residuos",
    "transformación sostenible",
  ],
  authors: [{ name: "R&R Kelab S.A.S", url: "https://kelab.com.co" }],
  robots: "index, follow",
  openGraph: {
    title:
      "Co-Workers Cloud | Ecosistema Digital de Residuos Aprovechables en Colombia",
    description:
      "Conecte actores de la cadena de reciclaje en un ecosistema digital con autonomía, trazabilidad y seguridad. Co-Workers Cloud transforma la gestión de residuos en oportunidades de negocio.",
    url: "https://kelab.com.co/co-workers-cloud",
    type: "website",
    images: [
      {
        url: "https://kelab.com.co/co-workers/co-logo.svg",
        width: 1200,
        height: 630,
        alt: "Co-Workers Cloud - Plataforma digital de residuos aprovechables",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Co-Workers Cloud | Plataforma Digital de Residuos Aprovechables",
    description:
      "El primer centro comercial digital de residuos aprovechables en Colombia. Autonomía, trazabilidad y seguridad para asociaciones, gestores y empresas transformadoras.",
    images: ["https://kelab.com.co/co-workers/co-logo.svg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/co-workers-cloud",
  },
  publisher: "R&R Kelab S.A.S",
  category:
    "Residuos Aprovechables, Economía Circular, Plataforma Digital, Reciclaje, Colombia",
};

export default function CoWorkersCloudLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
