"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  ShieldCheck,
  Recycle,
  Globe,
  Leaf,
  LineChart,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const MotionLink = motion(Link);
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

export default function ServiceCoworkersCloudClient() {
  return (
    <div className="w-full text-gray-800">
      {/* Next.js Metadata se declara en layout o en page con export const metadata */}

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#00134f] via-[#001a8a] to-[#003a6b] text-white py-24 px-6">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
          <Image
            src="/logos/WS.svg"
            alt="Marca de agua Co-Workers Cloud"
            width={800}
            height={800}
            className="w-[90%] opacity-40 blur-[1px] max-w-full h-auto"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            <span className="text-white">Co-Workers </span>
            <span className="text-[#45C93E]">Cloud</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
          >
            Ecosistema digital para la articulación de la cadena de residuos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="https://cloud.kelab.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#45C93E] hover:bg-[#399334] text-[#00134f] px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition"
            >
              Explorar el ecosistema
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué es Co-Workers Cloud? */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#001a8a] mb-4">
              ¿Qué es Co-Workers Cloud?
            </h2>

            <p className="text-gray-700 leading-relaxed text-justify">
              Co Workers Cloud es un ecosistema digital desarrollado por R&R
              Kelab que integra a productores, gestores y transformadores en un
              solo entorno, facilitando la conexión, el aprovechamiento de
              materiales y la gestión sostenible de residuos.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Este modelo nace como una solución innovadora para fortalecer la
              economía circular, permitiendo que los actores del sector
              interactúen, generen oportunidades y optimicen sus procesos en un
              mismo espacio digital
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src="/services/cloud/ecosistema.png"
              alt="Plataforma cloud"
              width={500}
              height={300}
              className="w-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Waste Store */}
      <section className="bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-8">
          <span className="text-white">¿Qué puedes encontrar en el </span>
          <span className="text-[#45C93E]">
            ecosistema digital Co Workers Cloud?
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <Image
            src="/services/cloud/wastes.png"
            alt="Waste Store"
            width={800}
            height={600}
            className="w-full max-w-xl mx-auto mb-10 rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Cards */}
        <h3 className="text-xl font-bold mt-12 mb-6">
          Co Workers Cloud brinda diferentes servicios cómo:
        </h3>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-justify">
          {[
            {
              icon: <Recycle className="w-8 h-8 text-[#003a6b]" />,
              title: "Plan Colectivo",
              text: "Permite a las empresas cumplir con la normativa ambiental de manera articulada, facilitando la gestión de sus obligaciones frente a residuos a través de un sistema colectivo.",
            },
            {
              icon: <LineChart className="w-8 h-8 text-[#003a6b]" />,
              title: "Marketplace de residuos",
              text: "Espacio donde productores, gestores y transformadores pueden conectarse para la compra, venta y aprovechamiento de materiales reciclables, así como la oferta de servicios asociados dentro de la cadena de residuos.",
            },
            {
              icon: <ShoppingBag className="w-8 h-8 text-[#003a6b]" />,
              title: "Sostenibilidad",
              text: "Incluye herramientas para la gestión ambiental empresarial, como informes de sostenibilidad y medición de huella de carbono CO2, permitiendo a las organizaciones fortalecer su desempeño ambiental.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white text-[#001a8a] p-5 rounded-xl shadow-lg flex gap-4 ${
                i === 2 ? "md:col-span-2 md:max-w-xl mx-auto" : ""
              }`}
            >
              {item.icon}
              <div>
                <p className="font-bold mb-1">{item.title}:</p>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Respaldo Tecnológico */}
      <section className="bg-white text-center py-20 px-6">
        <ShieldCheck className="w-16 h-16 text-[#001a8a] mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-[#001a8a] mb-4">
          Respaldo Tecnológico
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Waste Store está protegido bajo la patente:
          <br />
          <strong>
            “Método para la articulación de las organizaciones en la cadena de
            residuos sólidos” (NC2022/0007259)
          </strong>
        </p>
      </section>

      {/* Beneficios */}
      <section className="bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 text-center">
            Beneficios de la Plataforma
          </h2>

          <p className="text-center mb-12 opacity-90 max-w-2xl mx-auto">
            Un ecosistema digital diseñado para conectar actores del sector y
            potenciar la economía circular.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Beneficios generales",
                icon: <Globe className="w-10 h-10 text-[#aee3b4]" />,
                items: [
                  "Articulación de la cadena de residuos en un solo entorno",
                  "Optimización de la logística inversa",
                  "Generación de oportunidades de negocio",
                  "Fortalecimiento de la economía circular",
                ],
              },
              {
                title: "Para productores",
                icon: <Leaf className="w-10 h-10 text-[#aee3b4]" />,
                items: [
                  "Cumplimiento de la normativa ambiental de forma articulada",
                  "Acceso a herramientas de sostenibilidad (informes y huella de carbono)",
                  "Gestión y aprovechamiento de residuos en un solo lugar",
                  "Conexión con gestores y actores del sector",
                ],
              },
              {
                title: "Para gestores",
                icon: <Recycle className="w-10 h-10 text-[#aee3b4]" />,
                items: [
                  "Mayor visibilidad de sus servicios",
                  "Acceso a nuevos clientes y oportunidades de negocio",
                  "Conexión directa con productores y transformadores",
                  "Participación en un ecosistema digital del sector",
                ],
              },
              {
                title: "Para transformadores",
                icon: <RefreshCw className="w-10 h-10 text-[#aee3b4]" />,
                items: [
                  "Acceso a materiales aprovechables",
                  "Conexión con recicladores, gestores y productores",
                  "Oportunidades de abastecimiento continuo",
                  "Mayor visibilidad dentro del mercado",
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  {section.icon}
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>

                <ul className="space-y-3 text-sm opacity-90">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#aee3b4]">•</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economía Circular */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-extrabold text-[#001a8a] text-center mb-8">
          ¿Cómo Aportamos a la Economía Circular?
        </h2>

        <p className="text-center max-w-3xl mx-auto text-gray-600 leading-relaxed mb-14">
          Co-Workers Cloud impulsa la transición hacia un modelo circular,
          prolongando la vida útil de los materiales y reduciendo el impacto
          ambiental.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Recycle className="w-12 h-12 text-[#003a6b] mb-4" />,
              title: "Reintroducción al Sistema Productivo",
              text: "Los residuos recuperados vuelven al ciclo económico.",
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-[#003a6b] mb-4" />,
              title: "Menor Presión Ambiental",
              text: "Disminuye el impacto negativo sobre los recursos naturales.",
            },
            {
              icon: <ShoppingBag className="w-12 h-12 text-[#003a6b] mb-4" />,
              title: "Conexión Estratégica",
              text: "Mejor conexión entre oferta y demanda de materiales aprovechables.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-7 shadow-lg hover:shadow-xl transition"
            >
              {card.icon}
              <h3 className="font-bold text-xl mb-3 text-[#001a8a]">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="innovation"
        className="relative overflow-hidden text-white py-28 bg-[length:200%_200%] animate-gradientMove"
      >
        <style jsx>{`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .circuit-line {
            position: absolute;
            width: 2px;
            height: 180px;
            background: linear-gradient(to bottom, #45c93e, #000180);
            opacity: 0.35;
            animation: floatLine 6s linear infinite;
          }
          @keyframes floatLine {
            0% {
              transform: translateY(-200px);
            }
            100% {
              transform: translateY(400px);
            }
          }
          @keyframes pulseGlow {
            0%,
            100% {
              opacity: 0.4;
            }
            50% {
              opacity: 1;
            }
          }
          .animate-pulseGlow {
            animation: pulseGlow 2s ease-in-out infinite;
          }
        `}</style>

        <div className="absolute inset-0 bg-gradient-to-br from-[#45C93E] via-[#2ca54e] to-[#000180] opacity-90" />

        {/* Circuit lines */}
        <span className="circuit-line left-1/3"></span>
        <span className="circuit-line left-2/3 delay-700"></span>
        <span className="circuit-line left-1/5 delay-500"></span>

        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-10">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
          >
            Innovación que Transforma el Futuro
          </motion.h2>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-emerald-50 text-lg md:text-xl leading-relaxed mb-6">
              En{" "}
              <span className="font-semibold text-white">R&R Kelab S.A.S</span>{" "}
              desarrollamos soluciones que fusionan
              <span className="text-white font-semibold">
                {" "}
                tecnología, ciencia y sostenibilidad
              </span>{" "}
              con el propósito de impactar positivamente nuestro entorno.
            </p>

            <p className="text-emerald-50 text-lg md:text-xl leading-relaxed mb-8">
              Nuestro proyecto destacado,{" "}
              <span className="font-semibold text-white">Waste Store</span>, es
              una plataforma de economía circular donde podrás publicar,
              intercambiar y comercializar materiales aprovechables y servicios
              ambientales. Una forma inteligente y moderna de generar valor a
              partir de los residuos.
            </p>

            {/* Botón con Glow */}
            <MotionLink
              href="https://cloud.kelab.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-block bg-white text-[#000180] px-8 py-4 rounded-full font-bold shadow-xl text-lg transition hover:bg-emerald-100 overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-[#45C93E] to-[#000180] opacity-60 animate-pulseGlow"></span>
              <span className="relative z-10">Explorar Waste Store</span>
            </MotionLink>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <ContactoBlog />
    </div>
  );
}
