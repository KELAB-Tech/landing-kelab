"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "¿Qué es Waste Store?",
    a: "Es una plataforma innovadora en Colombia que transforma las prácticas informales del mercado de residuos en un entorno virtual formal, organizado y seguro.",
  },
  {
    q: "¿Para qué sirve Waste Store?",
    a: "Permite comprar y vender materiales aprovechables, servicios y maquinarias dentro de una plataforma confiable.",
  },
  {
    q: "¿Cuál es su propósito?",
    a: "Articular a los actores del sector de residuos aprovechables, brindando mayor visibilidad y regulación en un mercado formal.",
  },
  {
    q: "¿Quiénes pueden ser usuarios?",
    a: "Asociaciones de recicladores, empresas transformadoras, transportadoras y actores legalmente constituidos.",
  },
  {
    q: "¿Se aceptan empresas informales?",
    a: "No. Es obligatorio estar legalmente constituido y registrado en la Cámara de Comercio.",
  },
  {
    q: "¿Cómo funciona la plataforma?",
    a: "A través de la tienda virtual y material explicativo disponible en el canal oficial de YouTube de R&R KELAB S.A.S.",
  },
  {
    q: "¿Qué materiales se pueden comercializar?",
    a: "Papel, cartón, metal, vidrio, plástico, además de servicios y maquinarias relacionadas.",
  },
  {
    q: "¿Cómo puedo vincularme?",
    a: "Comunicándose con el área de Sostenibilidad y Economía Circular de R&R KELAB S.A.S.",
  },
  {
    q: "¿Cómo puedo desvincularme?",
    a: "Debe realizar la solicitud por los canales oficiales de contacto de R&R KELAB S.A.S.",
  },
];

export default function FaqClient() {
  return (
    <>
      {/* Banner */}
      <section
        className="
    relative
    w-full
    min-h-[50vh]
    md:min-h-[60vh]
    lg:min-h-[70vh]
    flex
    items-center
    justify-center
    bg-no-repeat
    bg-center
    bg-contain
  "
        style={{
          backgroundImage: "url('/waste-store/faqs.jpg')",
        }}
      ></section>

      {/* FAQ Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all bg-white"
            >
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-[#45C93E] flex-shrink-0" />
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.q}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
