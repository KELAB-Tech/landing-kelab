import ServiciosAmbientalesClient from "@/app/(site)/components/ServiciosAmbientalesClient";

export const metadata = {
  title: "Servicios Ambientales Integrales | Trámites, Monitoreo, Ingeniería",
  description:
    "Soluciones ambientales técnicas, operativas y estratégicas para garantizar sostenibilidad, cumplimiento normativo y eficiencia en Colombia.",
  keywords:
    "servicios ambientales, trámites ambientales, monitoreo, ingeniería sanitaria, caracterización, permisos ambientales",
  openGraph: {
    title: "Servicios Ambientales Integrales",
    description:
      "Servicios ambientales para empresas: monitoreo, permisos, ingeniería y consultoría.",
    url: "https://www.tu-dominio.com/servicios/tramites-ambientales",
    type: "article",
    images: ["/ambiental-banner.webp"],
  },
};

export default function ServiciosAmbientalesPage() {
  return <ServiciosAmbientalesClient />;
}
