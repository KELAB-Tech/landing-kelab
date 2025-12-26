// app/equipo/page.jsx
import TeamClient from "@/app/(site)/components/TeamClient";

export const metadata = {
  title: "Equipo | R&R Kelab – Expertos en Gestión Ambiental",
  description:
    "Conoce al equipo multidisciplinario de R&R Kelab: ingenieros ambientales, especialistas en residuos, recurso hídrico, química avanzada y dirección de proyectos, comprometidos con la sostenibilidad y la economía circular en Colombia.",
  keywords: [
    "equipo ambiental",
    "profesionales ambientales",
    "ingenieros ambientales",
    "especialistas en residuos",
    "recurso hídrico",
    "sostenibilidad",
    "economía circular",
    "R&R Kelab",
    "gestión ambiental",
  ],
  openGraph: {
    title: "Equipo | R&R Kelab – Expertos en Gestión Ambiental",
    description:
      "Conoce al equipo multidisciplinario de R&R Kelab, expertos en gestión ambiental, residuos y recursos hídricos, comprometidos con la sostenibilidad en Colombia.",
    type: "website",
    url: "https://kelab.com.co/equipo",
    images: [
      {
        url: "https://kelab.com.co/static/images/og-equipo.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo R&R Kelab – Expertos en Gestión Ambiental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipo | R&R Kelab – Expertos en Gestión Ambiental",
    description:
      "Descubre al equipo de R&R Kelab: ingenieros ambientales y especialistas en residuos y recursos hídricos, comprometidos con la sostenibilidad en Colombia.",
    images: ["https://kelab.com.co/static/images/og-equipo.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/equipo",
  },
  // Extras para SEO avanzado
  robots: "index, follow",
  authors: [{ name: "R&R Kelab", url: "https://kelab.com.co" }],
  publisher: "R&R Kelab",
  category: "Equipo, Gestión Ambiental, Sostenibilidad",
};

export default function Page() {
  return <TeamClient />;
}
