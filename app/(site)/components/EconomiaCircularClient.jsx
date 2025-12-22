"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, XCircle, Recycle } from "lucide-react";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

export default function EconomiaCircularClient() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO */}
      <section className="relative text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000180d9] via-[#00016acc] to-[#45C93E88]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-xl"
          >
            <span className="text-white">¿Qué es la </span>
            <span className="text-[#45C93E]">Economía Circular?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200 drop-shadow-lg"
          >
            Estrategia innovadora de diseño, producción y creación de valor que
            transforma el modelo económico tradicional.
          </motion.p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg text-justify">
        <p>
          La Economía Circular reemplaza el modelo lineal de “tomar, producir y
          desechar”. En su lugar, propone diseñar productos con ciclos de vida
          más largos, maximizar el aprovechamiento de materiales y reducir el
          impacto ambiental (Colombia Productiva, 2018).
        </p>

        <ul className="list-disc list-inside mt-6 space-y-2 text-[#000180] font-medium">
          <li>
            Reducción del <strong>20%</strong> de emisiones de CO₂ al año 2030.
          </li>
          <li>
            Aprovechamiento del <strong>30%</strong> de envases y empaques para
            2030.
          </li>
          <li>
            Incremento del <strong>15%</strong> en productividad hídrica.
          </li>
        </ul>
      </section>

      {/* CICLO DE VIDA */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-justify">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Economía Lineal vs Economía Circular
            </h2>

            <p className="mb-4 text-gray-100">
              Mientras que la economía lineal se basa en extraer, producir,
              consumir y desechar; la economía circular promueve la eficiencia,
              la extensión de vida útil de los productos y la recirculación de
              materiales para reducir impactos ambientales y costos operativos.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/services/sostenibilidad/Imagen1.webp"
              alt="Ciclo de vida"
              width={700}
              height={500}
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 7 R'S */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001a8a] text-center mb-12">
          La Economía Circular se basa en 7 R’s
        </h2>

        {[
          {
            img: "Imagen2",
            title: "Rediseñar",
            desc: "Diseñar productos más duraderos...",
          },
          {
            img: "Imagen3",
            title: "Reducir",
            desc: "Cambiar hábitos de consumo...",
          },
          {
            img: "Imagen4",
            title: "Reutilizar",
            desc: "Usar nuevamente productos...",
          },
          {
            img: "Imagen5",
            title: "Reparar",
            desc: "Extender la vida útil...",
          },
          { img: "Imagen6", title: "Renovar", desc: "Actualizar productos..." },
          {
            img: "Imagen7",
            title: "Reciclar",
            desc: "Transformar residuos...",
          },
          {
            img: "Imagen8",
            title: "Recuperar",
            desc: "Aprovechar materiales...",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-6 items-center ${
              i > 0 ? "mt-10" : ""
            }`}
          >
            <Image
              src={`/services/sostenibilidad/${item.img}.webp`}
              alt={item.title}
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full md:w-64"
            />
            <p className="text-lg leading-relaxed text-justify">
              <strong>{item.title}:</strong> {item.desc}
            </p>
          </div>
        ))}

        <p className="mt-12 text-lg leading-relaxed text-justify">
          El Ministerio de Ambiente agregó dos conceptos adicionales:{" "}
          <strong>Remanufacturar</strong> y <strong>Re-proponer</strong>.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Beneficios de la Economía Circular (Repsol, 2023)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {[9, 10, 11].map((num) => (
              <Image
                key={num}
                src={`/services/sostenibilidad/Imagen${num}.webp`}
                alt="beneficio"
                width={400}
                height={300}
                className="rounded-lg shadow-lg h-32 mx-auto object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001a8a] mb-10">
            Ventajas empresariales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-6">
            {[
              "Mayor competitividad y sostenibilidad",
              "Mayor eficiencia y productividad",
              "Imagen corporativa ambiental",
              "Valor agregado",
            ].map((text, i) => (
              <div key={i}>
                <Image
                  src={`/services/sostenibilidad/Imagen${12 + i}.webp`}
                  alt={text}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg h-32 mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium text-black">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RETOS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001a8a] text-center mb-5">
          Retos de la economía lineal
        </h2>

        <ul className="list-disc list-inside space-y-2 text-lg text-[#000000] font-medium max-w-3xl mx-auto">
          <li>Escasez de recursos y volatilidad de precios.</li>
          <li>Energía basada en fuentes finitas.</li>
          <li>Productos diseñados para desecharse rápidamente.</li>
          <li>Alto impacto ambiental.</li>
        </ul>
      </section>

      {/* SOLUCIONES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001a8a] text-center mb-5">
          Soluciones de la economía circular
        </h2>

        <ul className="list-disc list-inside space-y-2 text-lg text-[#000000] font-medium max-w-3xl mx-auto">
          <li>Recirculación de materiales.</li>
          <li>Energías renovables.</li>
          <li>Cero desperdicios.</li>
          <li>Productos diseñados para recuperarse.</li>
          <li>Regeneración ambiental.</li>
        </ul>
      </section>

      {/* DATOS CURIOSOS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001a8a] text-center mb-12">
          Datos curiosos sobre economía circular
        </h2>

        {[16, 17, 18, 19].map((num, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-6 items-center ${
              i > 0 ? "mt-10" : ""
            }`}
          >
            <Image
              src={`/services/sostenibilidad/Imagen${num}.webp`}
              alt="dato"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full md:w-64"
            />
            <p className="text-lg leading-relaxed text-justify">
              {
                [
                  "En 1990 se formuló el concepto de economía circular.",
                  "Sus campos de actuación incluyen extraer, transformar, distribuir, consumir y reintroducir.",
                  "Europa ha invertido más de 5.500 millones de euros en investigación.",
                  "Colombia es pionera en América Latina con una Estrategia Nacional de Economía Circular.",
                ][i]
              }
            </p>
          </div>
        ))}
      </section>

      {/* CONTACTO */}
      <ContactoBlog />

      {/* BLOGS */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#001a8a] mb-6">
            Conoce también:
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Importancia de la separación de residuos",
                link: "/blogs/importancia-separacion-residuos",
              },
              { title: "Planes Colectivos", link: "/blogs/planes-colectivos" },
              {
                title: "Responsabilidad Extendida del Productor",
                link: "/blogs/responsabilidad-extendida-productor",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition"
              >
                <p className="font-semibold text-lg text-gray-700">
                  {item.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
