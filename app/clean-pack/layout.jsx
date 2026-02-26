import NavbarCleanPack from "./components/NavbarCleanPack";
import Footer from "@/app/(site)/components/sections/Footer";
import SocialBar from "@/app/(site)/components/SocialBar";

// ===================== META SEO CLEAN PACK =====================
export const metadata = {
  title:
    "Clean Pack | Plataforma REP para Cumplimiento de Envases y Empaques en Colombia",
  description:
    "Clean Pack es la solución especializada de R&R Kelab para el cumplimiento de la Resolución 1407 de 2018 y normativa REP en Colombia. Gestiona trazabilidad, reportes y obligaciones ambientales de envases y empaques de forma simple y segura.",
  keywords: [
    "Clean Pack",
    "Resolución 1407 de 2018",
    "REP Colombia",
    "Responsabilidad Extendida del Productor",
    "envases y empaques",
    "plan colectivo",
    "plan colectivo envases y empaques",
    "cumplimiento ambiental",
    "trazabilidad de residuos",
    "gestión REP",
    "plataforma ambiental",
    "R&R Kelab",
  ],
  authors: [{ name: "R&R Kelab S.A.S", url: "https://kelab.com.co" }],
  robots: "index, follow",
  openGraph: {
    title:
      "Clean Pack | Cumplimiento REP y Gestión de Envases y Empaques en Colombia",
    description:
      "Optimiza el cumplimiento de la normativa REP con Clean Pack. Plataforma especializada para empresas que deben cumplir la Resolución 1407 de 2018 en Colombia.",
    url: "https://kelab.com.co/clean-pack",
    type: "website",
    images: [
      {
        url: "https://kelab.com.co/cleanpack-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Clean Pack - Plataforma REP Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Pack | Plataforma REP para Envases y Empaques en Colombia",
    description:
      "Cumple con la Resolución 1407 de 2018 de forma estratégica, segura y trazable con Clean Pack.",
    images: ["https://kelab.com.co/cleanpack-preview.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/clean-pack",
  },
  publisher: "R&R Kelab S.A.S",
  category:
    "REP, Resolución 1407 de 2018, Envases y Empaques, Cumplimiento Ambiental, Colombia",
};

export default function CleanPackLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavbarCleanPack />
      <SocialBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
