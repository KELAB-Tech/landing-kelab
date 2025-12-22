import HeroMarketplace from "./components/HeroMarketplace";
import OfertasDelDia from "./components/OfertasDelDia";
import CategoriasDestacadas from "./components/CategoríasDestacadas";
import TiendasDestacadas from "./components/TiendasDestacadas";
import ExplorarCategorias from "./components/ExplorarCategorias";
import ComoFunciona from "./components/ComoFunciona";
import Beneficios from "./components/Beneficios";
import UltimosProductos from "./components/UltimosProductos";

// Metadata completo para App Router
export const metadata = {
  title: "Marketplace | Waste Store – R&R Kelab S.A.S",
  description:
    "Marketplace digital para la comercialización segura de materiales aprovechables, maquinaria y servicios. Descubra cómo funcionará Waste Store.",
  keywords:
    "marketplace residuos, reciclaje digital, materiales aprovechables, economía circular, Waste Store, Colombia",
  authors: [{ name: "R&R Kelab S.A.S" }],
  robots: "index, follow",
  openGraph: {
    title: "Marketplace Waste Store | R&R Kelab S.A.S",
    description:
      "Comercialice y adquiera materiales aprovechables de forma segura y ágil en el marketplace de Waste Store.",
    url: "https://kelab.com.co/marketplace",
    type: "website",
    images: ["https://kelab.com.co/preview-marketplace.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace Waste Store",
    description:
      "Ejemplo del funcionamiento del marketplace digital de Waste Store.",
    images: ["https://kelab.com.co/preview-marketplace.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/marketplace",
  },
};

export default function MarketplacePage() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <HeroMarketplace />
        <OfertasDelDia />
        <CategoriasDestacadas />
        <TiendasDestacadas />
        <ExplorarCategorias />
        <ComoFunciona />
        <Beneficios />
        <UltimosProductos />
      </div>
    </main>
  );
}
