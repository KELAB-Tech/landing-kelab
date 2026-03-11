"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import equipo from "@/public/about/about.webp";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#F8F9FB] text-gray-800 py-20 overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src={equipo}
            alt="Proyecto Co-workers Cloud"
            className="rounded-2xl shadow-lg object-cover w-full h-[450px]"
            itemProp="image"
            loading="lazy"
            decoding="async"
            width={800}
            height={450}
          />

          <div className="absolute inset-0 bg-[#45C93E]/10 rounded-2xl" />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#000180]"
            itemProp="department"
          >
            <span className="text-[#45C93E]">Innovación</span> que transforma
          </h2>

          <p
            className="text-gray-700 leading-relaxed text-lg text-justify"
            itemProp="description"
          >
            En <span className="font-semibold">R&R Kelab</span> impulsamos
            soluciones que integran
            <span className="font-semibold"> tecnología</span>,{" "}
            <span className="font-semibold">sostenibilidad</span>y{" "}
            <span className="font-semibold">articulación empresarial</span>.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            A través de <strong>Co Workers Cloud</strong>, estamos desarrollando
            un
            <span className="font-semibold"> ecosistema digital</span> que
            conecta a los actores de la cadena de residuos aprovechables,
            facilitando la{" "}
            <span className="font-semibold">logística inversa</span>, la{" "}
            <span className="font-semibold">trazabilidad</span> y la{" "}
            <span className="font-semibold">valorización de materiales </span>
            dentro de un mismo entorno.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            Esta innovación propone transformar la forma en que las
            organizaciones gestionan sus residuos, promoviendo modelos más
            eficientes y alineados con la{" "}
            <span className="font-semibold">economía circular</span>.
          </p>

          <a
            href="#services"
            className="inline-block bg-[#45C93E] hover:bg-[#399334] text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition-colors mt-6"
          >
            Conoce más sobre nuestros proyectos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
