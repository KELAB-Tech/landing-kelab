import Link from "next/link";
import { Users, Truck, Factory } from "lucide-react";

const categories = [
  {
    title: "Asociaciones de Reciclaje",
    description:
      "Organizaciones y cooperativas que recuperan, clasifican y comercializan materiales reciclables.",
    icon: Users,
    href: "/co-workers-cloud/categorias/asociaciones",
    accent: "#45C93E",
  },
  {
    title: "Gestores Ambientales",
    description:
      "Empresas especializadas en recolección, transporte y gestión integral de residuos.",
    icon: Truck,
    href: "/co-workers-cloud/categorias/gestores",
    accent: "#000180",
  },
  {
    title: "Transformadores",
    description:
      "Industrias que convierten residuos en nuevos productos y materias primas.",
    icon: Factory,
    href: "/co-workers-cloud/categorias/transformadores",
    accent: "#2c2f9e",
  },
  {
    title: "Empresas Transportadoras",
    description:
      "Empresas dedicadas al transporte especializado de materiales reciclables y residuos.",
    icon: Truck,
    href: "/co-workers-cloud/categorias/transportadoras",
    accent: "#45C93E",
  },
];

export default function CloudCategoriesGrid() {
  return (
    <section className="py-24 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="group rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#45C93E]/10 flex items-center justify-center">
              <cat.icon className="w-7 h-7 text-[#45C93E]" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#000180]">
              {cat.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 flex-grow">
              {cat.description}
            </p>

            <span className="mt-6 font-semibold text-sm text-[#000180] group-hover:text-[#45C93E] transition">
              Ver categoría →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
