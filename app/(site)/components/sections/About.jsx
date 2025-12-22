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
            alt="Proyecto Co-workes-cloud"
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
            <span className="font-semibold">R&R KELAB S.A.S</span>, gracias a su
            compromiso con la <span className="font-semibold">innovación</span>,
            cuenta con una <span className="font-semibold">patente</span>{" "}
            registrada bajo el número{" "}
            <span className="font-semibold">NC2022/0007259</span>:
            <strong> Co-workes-cloud</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            Este proyecto de innovación digital revoluciona la{" "}
            <span className="font-semibold">
              comercialización de residuos aprovechables
            </span>{" "}
            en Colombia, integrando a todos los actores de la cadena en un solo
            espacio virtual.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            Introduce el concepto de un{" "}
            <span className="font-semibold">
              centro comercial digital de residuos
            </span>
            , un ecosistema integral que incluye materiales, servicios y
            maquinaria para una economía más sostenible.
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
