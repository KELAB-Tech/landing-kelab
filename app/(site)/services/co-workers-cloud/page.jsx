import ServiceCoworkersCloudClient from "@/app/(site)/components/ServiceCoworkersCloudClient";

export const metadata = {
  title: "Co-Workers Cloud | Plataforma de Comercialización de Residuos",
  description:
    "Co-Workers Cloud es el ecosistema tecnológico que transforma la comercialización y trazabilidad de residuos aprovechables en Colombia.",
  keywords:
    "co-workers cloud, gestión residuos, waste store, economía circular, plataforma residuos colombia, marketplace residuos",
  openGraph: {
    title: "Co-Workers Cloud",
    description:
      "Plataforma innovadora para la trazabilidad, comercialización y gestión de residuos aprovechables.",
    url: "https://www.tu-dominio.com/servicios/co-workers-cloud",
    type: "article",
    images: ["/logos/WS.svg"],
  },
};

export default function Page() {
  return <ServiceCoworkersCloudClient />;
}
