"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

export default function CloudCategories() {
  return (
    <section id="categorias" className="relative py-28 overflow-hidden">
      {/* FONDO DIFUMINADO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(69,201,62,0.12),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(0,1,128,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#45C93E]/10 text-[#45C93E] text-xs font-semibold tracking-wide">
            Categorías
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000180]">
            Explora nuestro ecosistema
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg">
            Conecta con asociaciones, gestores y transformadores dentro del
            centro comercial digital de la economía circular.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-gray-200/70 bg-white/90 backdrop-blur shadow-md hover:shadow-xl transition-all"
            >
              <div className="p-8 flex flex-col h-full">
                {/* ICON */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${cat.accent}18` }}
                >
                  <cat.icon className="w-7 h-7" style={{ color: cat.accent }} />
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-bold text-[#000180]">
                  {cat.title}
                </h3>

                <p className="mt-4 text-sm text-gray-600 text-justify flex-grow">
                  {cat.description}
                </p>

                <Link
                  href={cat.href}
                  className="mt-8 inline-flex items-center font-semibold text-sm text-[#000180] group-hover:text-[#45C93E] transition"
                >
                  Explorar categoría →
                </Link>
              </div>

              {/* GLOW SUAVE */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                style={{
                  boxShadow: `0 0 0 1px ${cat.accent}30, 0 24px 48px -24px ${cat.accent}40`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FADE INFERIOR */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
