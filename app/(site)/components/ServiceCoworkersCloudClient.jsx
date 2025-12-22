"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  ShieldCheck,
  Recycle,
  MapPin,
  LineChart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
            La plataforma que está revolucionando la comercialización de
            residuos aprovechables en Colombia.
          </motion.p>
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
              En R&R KE-LAB S.A.S. sabemos que la gestión de residuos sólidos es
              un reto, pero también una oportunidad para la Economía Circular.
              Por eso creamos Co-Workers Cloud, el ecosistema tecnológico que
              transforma la cadena de gestión de residuos en Colombia.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src="/services/cloud/store.webp"
              alt="Plataforma cloud"
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Waste Store */}
      <section className="bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-8">
          <span className="text-white">¿Qué es </span>
          <span className="text-[#45C93E]">Waste Store?</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <Image
            src="/services/cloud/waste.webp"
            alt="Waste Store"
            width={800}
            height={600}
            className="w-full max-w-xl mx-auto mb-10 rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto text-justify space-y-6">
          <p>
            Marketplace de residuos aprovechables, bodegas virtuales,
            trazabilidad logística, paneles administrativos y módulos para
            recicladores, gestores y empresas.
          </p>

          <p>
            Soluciona la desconexión entre actores, falta de información y altos
            costos logísticos.
          </p>

          <p>
            Presenta arquitectura, procesos, roadmap, costos y beneficios del
            sistema nacional de economía circular.
          </p>
        </div>

        {/* Cards */}
        <h3 className="text-xl font-bold mt-12 mb-6">
          Cada actor del ecosistema tiene su propio espacio:
        </h3>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-justify">
          {[
            {
              icon: <ShoppingBag className="w-8 h-8 text-[#003a6b]" />,
              text: "Tu propia tienda: asociaciones, gestores y transformadores pueden vender dentro de la plataforma.",
            },
            {
              icon: <LineChart className="w-8 h-8 text-[#003a6b]" />,
              text: "Bodegas virtuales con inventario digital, fotos, cantidades y precios.",
            },
            {
              icon: <ShoppingBag className="w-8 h-8 text-[#003a6b]" />,
              text: "Comercio a tu medida: catálogo y precios personalizados.",
            },
            {
              icon: <Recycle className="w-8 h-8 text-[#003a6b]" />,
              text: "Eficiencia total: todo centralizado en un solo sistema.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-[#001a8a] p-5 rounded-xl shadow-lg flex gap-4"
            >
              {item.icon}
              <p>{item.text}</p>
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              <span className="text-white">Beneficios de Suscribirte</span>
            </h2>

            <p className="mb-6 opacity-90">
              Obtienes tu tienda virtual Waste Store y beneficios reales para tu
              operación.
            </p>

            <ul className="space-y-5 text-justify">
              {[
                {
                  icon: <LineChart className="w-8 h-8 text-[#aee3b4]" />,
                  text: "Amplía tu mercado a nivel nacional.",
                },
                {
                  icon: <Recycle className="w-8 h-8 text-[#aee3b4]" />,
                  text: "Mejora procesos de gestión y transporte de residuos.",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-[#aee3b4]" />,
                  text: "Mayor seguridad y confianza en las transacciones.",
                },
                {
                  icon: <MapPin className="w-8 h-8 text-[#aee3b4]" />,
                  text: "Ubicación rápida gracias a la georreferenciación.",
                },
                {
                  icon: <LineChart className="w-8 h-8 text-[#aee3b4]" />,
                  text: "Incrementa tu productividad y tasa de aprovechamiento.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  {item.icon}
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src="/services/cloud/beneficios.webp"
              alt="Beneficios Waste Store"
              width={700}
              height={500}
              className="w-full object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
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
            <Link href="/services/waste-store" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-block bg-white text-[#000180] px-8 py-4 rounded-full font-bold shadow-xl text-lg transition hover:bg-emerald-100 overflow-hidden"
              >
                <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-[#45C93E] to-[#000180] opacity-60 animate-pulseGlow"></span>
                <span className="relative z-10">Explorar Waste Store</span>
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <ContactoBlog />
    </div>
  );
}
