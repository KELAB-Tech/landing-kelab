import Hero from "@/app/(site)/components/sections/Hero";
import About from "@/app/(site)/components/sections/About";
import Services from "@/app/(site)/components/sections/Services";
import Clients from "@/app/(site)/components/sections/Clients";
import Contact from "@/app/(site)/components/sections/Contact";
import Aliados from "@/app/(site)/components/sections/Aliados";
import Innovation from "@/app/(site)/components/sections/Innovation";

// Metadata completo para App Router
export const metadata = {
  title: "Inicio | R&R Kelab S.A.S",
  description:
    "R&R Kelab S.A.S ofrece soluciones sostenibles para la gestión de residuos, economía circular y cumplimiento normativo en Colombia.",
  keywords:
    "gestión de residuos, economía circular, sostenibilidad, reciclaje, responsabilidad extendida, Colombia, R&R Kelab",
  authors: [{ name: "R&R Kelab S.A.S" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "R&R Kelab S.A.S | Gestión Integral de Residuos",
    description:
      "Soluciones ambientales sostenibles para empresas en Colombia.",
    url: "https://kelab.com.co/",
    type: "website",
    images: ["https://kelab.com.co/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "R&R Kelab S.A.S | Gestión Integral de Residuos",
    description:
      "Soluciones ambientales sostenibles para empresas en Colombia.",
    images: ["https://kelab.com.co/preview.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/",
  },
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
              "Soluciones ambientales innovadoras y sostenibles para la gestión de residuos en Colombia.",
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
