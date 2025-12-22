import CleanPackClient from "@/app/(site)/components/CleanPackClient";

export const metadata = {
  title: "Plan Colectivo CLEAN PACK | Gestión de Residuos",
  description:
    "Clean Pack es el plan colectivo líder en gestión integral de residuos para empresas en Colombia.",
  keywords:
    "clean pack, plan colectivo residuos, gestión residuos colombia, economía circular",
  openGraph: {
    title: "Plan Colectivo CLEAN PACK",
    description:
      "Plan colectivo especializado en gestión, trazabilidad y aprovechamiento de residuos.",
    url: "https://www.tu-dominio.com/servicios/clean-pack",
    type: "article",
    images: ["/logos/Cleanpack.svg"],
  },
};

export default function CleanPackPage() {
  return <CleanPackClient />;
}
