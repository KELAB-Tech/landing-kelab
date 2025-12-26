import Hero from "@/app/(site)/components/sections/Hero";
import About from "@/app/(site)/components/sections/About";
import Services from "@/app/(site)/components/sections/Services";
import Clients from "@/app/(site)/components/sections/Clients";
import Contact from "@/app/(site)/components/sections/Contact";
import Aliados from "@/app/(site)/components/sections/Aliados";
import Innovation from "@/app/(site)/components/sections/Innovation";

// ===================== META SEO HOME NIVEL DIOS =====================
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
        url: "https://kelab.com.co/preview.jpg",
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
    images: ["https://kelab.com.co/preview.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/",
  },
  publisher: "R&R Kelab",
  category:
    "Inicio, Servicios, Gestión de Residuos, Economía Circular, Consultoría Ambiental",
};

export default function Home() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "R&R Kelab S.A.S",
            url: "https://kelab.com.co",
            logo: "https://kelab.com.co/logo.png",
            sameAs: [
              "https://www.facebook.com/KelabCo",
              "https://www.linkedin.com/company/kelab/posts/?feedView=all",
              "https://twitter.com/KelabCo",
            ],
            description:
              "Soluciones ambientales innovadoras, sostenibles y completas para la gestión integral de residuos y economía circular en Colombia.",
          }),
        }}
      />

      <div className="relative min-h-screen bg-gradient-to-br from-emerald-700 to-sky-500 text-white">
        <Hero />
        <About />
        <Services />
        <Clients />
        <Aliados />
        <Contact />
      </div>
    </>
  );
}
