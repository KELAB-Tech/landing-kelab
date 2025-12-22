// app/equipo/page.jsx
import TeamClient from "@/app/(site)/components/TeamClient";

export const metadata = {
  title: "Equipo | R&R Kelab – Expertos en Gestión Ambiental",
  description:
    "Conoce al equipo multidisciplinario de R&R Kelab: ingenieros ambientales, especialistas en residuos, recurso hídrico, química avanzada y dirección de proyectos.",
  keywords:
    "equipo ambiental, profesionales ambientales, ingenieros ambientales, especialistas en residuos, recurso hídrico, sostenibilidad, R&R Kelab",
  openGraph: {
    title: "Equipo | R&R Kelab",
    description:
      "Equipo multidisciplinario en gestión ambiental, residuos y recursos hídricos.",
    url: "https://www.tu-dominio.com/equipo",
    type: "website",
    images: ["/images/og-equipo.jpg"],
  },
};

export default function Page() {
  return <TeamClient />;
}
