"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

// Rutas desde /public
const cicloImg = "/services/cleanpack/ciclo.webp";
const cleanpackLogo = "/logos/Cleanpack.svg";

export default function CleanPackClient() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO */}
      <section className="relative text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000180d9] via-[#00016acc] to-[#45C93E88]" />

        {/* Marca de agua */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <Image
            src={cleanpackLogo}
            alt="Marca de agua Clean Pack"
            fill
            className="opacity-40 blur-[1px] object-contain w-[80%] mx-auto"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-xl"
          >
            CLEAN <span className="text-[#45C93E]">PACK</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200"
          >
            El plan colectivo de envases y empaques que impulsa la
            sostenibilidad empresarial.
          </motion.p>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg text-justify">
        <p>
          Somos un Plan Colectivo de Residuos de Envases y Empaques administrado
          por <strong>R&R Kelab S.A.S.</strong>, creado para dar cumplimiento a
          la legislación ambiental vigente.
        </p>
        <br />
        <p>
          Agrupamos empresas para minimizar costos y presentar un solo informe
          ante la ANLA. Nuestro plan asegura trazabilidad real, cobertura
          nacional y aliados autorizados.
        </p>
        <br />
        <p>
          Clean Pack garantiza certificación, sostenibilidad y circularidad en
          la gestión de residuos aprovechables.
        </p>
      </section>

      {/* CICLO DE VIDA */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-justify">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              El Ciclo de Vida{" "}
              <span className="text-[#45C93E]">del Envase y Empaque</span>
            </h2>

            <p className="mb-4 text-gray-100">
              Cada envase o empaque pasa por producción, uso y disposición. Una
              mala gestión afecta ecosistemas y aumenta emisiones.
            </p>
            <p className="text-gray-100">
              Cerramos este ciclo mediante aprovechamiento, recolección,
              certificación y reintegración al ciclo productivo.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src={cicloImg}
              alt="Ciclo de vida del envase y empaque"
              width={800}
              height={450}
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ¿QUÉ OFRECE CLEAN PACK? */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001a8a] text-center mb-12">
          ¿Qué ofrece Clean Pack?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-lg">
          {[
            "Afiliación formal al plan colectivo.",
            "Certificación y trazabilidad real.",
            "Coordinación con aliados autorizados.",
            "Informe anual ante la ANLA.",
            "Capacitaciones sin costo.",
            "Optimización de envases y empaques.",
            "Acompañamiento continuo.",
            "Medición de Huella de Carbono.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-accent" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOLORES */}
      <section className="bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
            ¿Qué dolores evita{" "}
            <span className="text-[#45C93E]">Clean Pack?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 text-lg">
            {[
              "Riesgos legales y sanciones.",
              "Altos costos individuales.",
              "Dificultad para hallar aliados certificados.",
              "Pérdida de competitividad.",
              "Problemas de trazabilidad.",
              "Falta de tiempo para capacitaciones.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-400" />
                <p className="text-gray-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001a8a] text-center mb-12">
          Ganancias y Beneficios
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-lg">
          {[
            "Cumplimiento legal garantizado.",
            "Reducción de costos operativos.",
            "Asesoría técnica permanente.",
            "Certificados y trazabilidad real.",
            "Mejor reputación sostenible.",
            "Capacitaciones gratuitas.",
            "Aprovechamiento incrementado.",
            "Medición profesional de huella de carbono.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-accent" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-gray-100 text-[#001a8a] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Nuestros afiliados dicen:
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "⭐ “Recibimos acompañamiento constante y ágil.”",
              "⭐ “Las capacitaciones son muy útiles.”",
              "⭐ “Clean Pack nos da tranquilidad normativa.”",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-xl"
              >
                <p className="text-lg leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <ContactoBlog />

      {/* BLOGS RECOMENDADOS */}
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
              <Link
                key={i}
                href={item.link}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border border-gray-200"
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
