import EconomiaCircularClient from "@/app/(site)/components/EconomiaCircularClient";

export const metadata = {
  title: "Economía Circular | Gestión de Residuos y Sostenibilidad",
  description:
    "La economía circular transforma la forma en que producimos, usamos y reintroducimos los materiales. Conoce cómo aporta a las empresas y al país.",
  keywords: [
    "economía circular",
    "sostenibilidad",
    "gestión de residuos",
    "Colombia",
    "reciclaje",
    "7Rs",
  ],
  openGraph: {
    title: "Economía Circular | Gestión de Residuos y Sostenibilidad",
    url: "https://www.kelab.com.co/servicios/economia-circular",
    type: "article",
    images: ["/servicios/sostenibilidad/Imagen1.webp"],
  },
};

export default function Page() {
  return <EconomiaCircularClient />;
}
