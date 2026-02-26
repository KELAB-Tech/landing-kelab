import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import SocialBar from "./components/SocialBar";

export const metadata = {
  title:
    "R&R Kelab S.A.S | Gestión Integral de Residuos y Sostenibilidad en Colombia",
  description:
    "R&R Kelab S.A.S ofrece soluciones sostenibles para la gestión de residuos, economía circular, cumplimiento normativo y consultoría ambiental en Colombia.",
  keywords: [
    "gestión de residuos",
    "economía circular",
    "sostenibilidad",
    "reciclaje",
    "responsabilidad extendida",
    "consultoría ambiental",
    "cumplimiento normativo",
    "R&R Kelab",
    "innovación ambiental",
    "trazabilidad de residuos",
  ],
  authors: [{ name: "R&R Kelab S.A.S", url: "https://kelab.com.co" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "R&R Kelab S.A.S | Gestión Integral de Residuos y Economía Circular",
    description:
      "Soluciones ambientales sostenibles, innovadoras y completas para empresas en Colombia, optimizando la gestión de residuos y la economía circular.",
    url: "https://kelab.com.co/",
    type: "website",
    images: [
      {
        url: "https://kelab.com.co/logo.png",
        width: 1200,
        height: 630,
        alt: "R&R Kelab S.A.S – Gestión Integral de Residuos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R&R Kelab S.A.S | Gestión Integral de Residuos y Sostenibilidad",
    description:
      "Soluciones sostenibles e innovadoras para la gestión integral de residuos y economía circular en Colombia.",
    images: ["https://kelab.com.co/logo.png"],
  },
  alternates: {
    canonical: "https://kelab.com.co/",
  },
  publisher: "R&R Kelab",
  category:
    "Inicio, Servicios, Gestión de Residuos, Economía Circular, Consultoría Ambiental",
};

export default function LandingLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <SocialBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
