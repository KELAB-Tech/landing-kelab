"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "¿Qué gano con la prueba piloto?",
      a: "Validar sus canales de comercialización digital, acceder a trazabilidad estructurada y conectar con actores industriales sin inversión inicial en la plataforma.",
    },
    {
      q: "¿Cuánto tiempo dura?",
      a: "El periodo de prueba está diseñado para experimentar el ciclo completo de comercialización, validación operativa y trazabilidad durante un año estructurado.",
    },
    {
      q: "¿Qué pasa después de registrarme?",
      a: "Un asesor institucional de R&R KELAB validará su perfil organizacional y activará sus credenciales dentro del ecosistema empresarial.",
    },
  ];

  return (
    <section id="faq" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-[#000180] mb-4">
            Preguntas Estratégicas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Información clave sobre el proceso de integración dentro de nuestra
            red industrial estructurada.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-[#000180]/10 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg text-[#000180]">
                  {item.q}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index
                      ? "rotate-180 text-[#45C93E]"
                      : "text-gray-400"
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-400 text-sm">
          Plataforma diseñada para expansión LATAM y estándares internacionales.
        </div>
      </div>
    </section>
  );
}
