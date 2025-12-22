"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Trámites Ambientales Para La Industria",
    slug: "tramites-ambientales",
    description:
      "Más de 15 años de experiencia en trámites ambientales para los sectores de hidrocarburos y alimentos.",
    image: "/services/service3.webp",
  },
  {
    title: "Plan Colectivo De Envases y Empaques CLEAN PACK",
    slug: "clean-pack",
    description:
      "Un colectivo que marca la diferencia y ofrece seguridad y confianza a sus afiliados.",
    image: "/services/service1.webp",
  },
  {
    title: "Co-Workers Cloud",
    slug: "co-workers-cloud",
    description:
      "Plataforma virtual de residuos aprovechables. Todos en un solo lugar.",
    image: "/services/service4.webp",
  },
  {
    title: "Sostenibilidad y Economía Circular",
    slug: "economia-circular",
    description:
      "Integramos la economía circular en cada uno de nuestros servicios, aportando al reporte de sostenibilidad.",
    image: "/services/service2.webp",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative text-white overflow-hidden"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* TITLE */}
      <div className="w-full text-center py-10 bg-[#000180] shadow-md">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold tracking-wide"
          itemProp="name"
        >
          <span className="text-white">NUESTROS </span>
          <span className="text-[#45C93E]">SERVICIOS</span>
        </motion.h2>

        <p
          className="mt-2 font-light max-w-3xl mx-auto text-base md:text-lg text-gray-300"
          itemProp="description"
        >
          Somos una agencia de consultoría integral en innovación, planificación
          estratégica, gestión ambiental y economía circular. Analizamos,
          asesoramos y creamos soluciones ambientales con precisión técnica y
          alto impacto.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[minmax(250px,_1fr)]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px]"
            itemScope
            itemType="https://schema.org/Service"
          >
            {/* IMAGE */}
            <Image
              src={service.image}
              alt={`Servicio de ${service.title}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000180cc] via-[#00006999] to-[#45C93E55] transition-opacity duration-500 group-hover:opacity-0" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col items-start justify-end text-left px-5 md:px-8 pb-6 md:pb-8 transition-all duration-500 group-hover:scale-105">
              <h3
                className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 drop-shadow-lg"
                itemProp="name"
              >
                {service.title}
              </h3>

              <p
                className="text-gray-200 text-xs sm:text-sm md:text-base mb-4 leading-relaxed max-w-md drop-shadow-md"
                itemProp="description"
              >
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="inline-block bg-[#45C93E] hover:bg-[#399334] text-white font-semibold px-4 py-2 text-sm rounded-lg transition-colors"
                itemProp="url"
              >
                Ver más
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
