"use client";

import { motion } from "framer-motion";
import { FileCheck, Droplets, Wrench, Recycle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

export default function ServiciosAmbientalesClient() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO */}
      <section
        aria-label="Hero - Servicios Ambientales"
        className="relative text-white py-28 md:py-36 px-6 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/ambiental-banner.webp')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#00134fcc] via-[#001a8acc] to-[#45C93E77]" />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl"
          >
            <span className="text-white">SERVICIOS AMBIENTALES </span>
            <span className="text-[#45C93E]">INTEGRALES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-gray-200 drop-shadow-lg"
          >
            Soluciones técnicas, operativas y estratégicas para garantizar
            sostenibilidad, cumplimiento normativo y eficiencia ambiental.
          </motion.p>
        </div>
      </section>

      {/* 1. Permisos */}
      <section className="bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#001a8a] font-bold mb-4">
                Gestión de Permisos y Trámites Ambientales
              </h2>

              <p className="mb-6 text-gray-700 text-justify">
                Cumplimiento normativo completo ante autoridades ambientales.
                Acompañamos el proceso técnico y administrativo hasta la
                obtención del permiso.
              </p>

              <ul className="space-y-3 text-gray-700">
                {[
                  "Permisos de vertimientos a fuentes hídricas y al suelo.",
                  "Permisos de reuso de aguas residuales.",
                  "Permisos de concesión de aguas.",
                  "Permisos de ocupación de cauce.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <FileCheck className="w-6 h-6 text-[#0f766e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg relative h-72 md:h-full"
            >
              <Image
                src="/services/tramites/tramites.webp"
                alt="Gestión de permisos"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Consultoría */}
      <section className="bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg relative h-72 md:h-full"
            >
              <Image
                src="/services/tramites/planificacion.webp"
                alt="Consultoría ambiental"
                fill
                className="object-cover"
              />
            </motion.div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                <span className="text-white">Consultoría y </span>
                <span className="text-[#45C93E]">Planificación Ambiental</span>
              </h2>

              <ul className="space-y-3 text-gray-100">
                {[
                  "Planes de contingencia para hidrocarburos.",
                  "Planes de Manejo Ambiental (PMA).",
                  "Sistemas de Gestión Ambiental – ISO 14001.",
                  "Modelaciones ambientales técnicas.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <FileCheck className="w-6 h-6 text-[#aee3b4]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Monitoreo */}
      <section className="bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#001a8a] font-bold mb-4">
                Monitoreo, Caracterización y Estudios Ambientales
              </h2>

              <ul className="space-y-3 text-gray-700">
                {[
                  "Caracterización de aguas y suelos.",
                  "Estudios hidrogeológicos.",
                  "Modelaciones de acuíferos y sistemas subterráneos.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Droplets className="w-6 h-6 text-[#0f766e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg relative h-72 md:h-full"
            >
              <Image
                src="/services/tramites/monitoreo.webp"
                alt="Monitoreo ambiental"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Ingeniería */}
      <section className="bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg relative h-72 md:h-full"
            >
              <Image
                src="/services/tramites/pozos.webp"
                alt="Infraestructura sanitaria"
                fill
                className="object-cover"
              />
            </motion.div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                <span className="text-white">Diseño e Ingeniería de </span>
                <span className="text-[#45C93E]">
                  Infraestructura Sanitaria
                </span>
              </h2>

              <ul className="space-y-3 text-gray-100">
                {[
                  "Diseños hidrosanitarios.",
                  "Tanques sépticos y trampas de grasas.",
                  "Perforación y mantenimiento de pozos.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Wrench className="w-6 h-6 text-[#aee3b4]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Operación */}
      <section className="bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#001a8a] font-bold mb-4">
                Operación, Mantenimiento y Gestión de Residuos
              </h2>

              <ul className="space-y-3 text-gray-700">
                {[
                  "Lavado y mantenimiento de tanques y pozos.",
                  "Manejo y disposición de lodos y aguas residuales.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Recycle className="w-6 h-6 text-[#0f766e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg relative h-72 md:h-full"
            >
              <Image
                src="/services/tramites/mantenimiento.webp"
                alt="Operación y mantenimiento"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactoBlog />

      {/* BLOGS RELACIONADOS */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl text-[#001a8a] font-bold mb-6">
            Conoce también sobre:
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Licenciamiento ambiental",
                link: "/blog/licencia-ambiental",
              },
              {
                title: "Plan de manejo ambiental",
                link: "/blog/manejo-ambiental",
              },
              {
                title: "Plan de contingencia",
                link: "/blog/plan-de-contingencia",
              },
              {
                title: "Trámites y permisos ambientales",
                link: "/blog/tramites-permisos-ambientales",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition"
              >
                <p className="font-semibold text-lg text-gray-700">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
