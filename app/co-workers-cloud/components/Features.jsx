"use client";

import { motion } from "framer-motion";
import { Layers, Network, ShieldCheck } from "lucide-react";

const architecture = [
  {
    number: "01",
    title: "Capa Comercial",
    description:
      "Marketplace empresarial donde compañías publican, negocian y gestionan materiales sin intermediación centralizada, bajo un entorno estructurado que optimiza visibilidad, liquidez operativa y conexión directa entre oferta y demanda industrial.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Capa Operativa",
    description:
      "Bodegas virtuales, georreferenciación y logística integrada con trazabilidad estructurada en tiempo real, permitiendo control de inventario, seguimiento de movimientos y coordinación eficiente entre actores de la red.",
    icon: Network,
  },
  {
    number: "03",
    title: "Capa Transaccional",
    description:
      "Infraestructura de pagos, validaciones y protocolos de seguridad bajo estándares de ciberseguridad, diseñada para garantizar integridad contractual, protección de datos y cumplimiento normativo en cada operación.",
    icon: ShieldCheck,
  },
];

export default function Architecture() {
  return (
    <section
      id="caracteristica"
      className="relative py-44 px-6 bg-[#F4F7FA] overflow-hidden"
    >
      {/* Línea vertical central técnica */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#00214A]/20 to-transparent" />

      {/* Glow institucional superior */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,33,74,0.06),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-32">
          <p className="text-sm uppercase tracking-widest text-[#45C93E] font-semibold mb-4">
            Arquitectura del Sistema
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#00214A] leading-tight">
            Infraestructura tecnológica modular
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Diseño estructural por capas que integra comercio, operación y
            seguridad dentro de un ecosistema escalable.
          </p>
        </div>

        {/* Bloques */}
        <div className="space-y-40">
          {architecture.map((layer, i) => {
            const Icon = layer.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-20 items-center ${
                  isEven ? "" : "md:text-right"
                }`}
              >
                {/* Número flotante */}
                <div
                  className={`absolute text-[140px] md:text-[180px] font-bold text-[#00214A]/5 select-none ${
                    isEven
                      ? "-left-6 md:-left-24"
                      : "md:left-auto md:-right-24 -left-6"
                  } top-0`}
                >
                  {layer.number}
                </div>

                {/* Contenido izquierdo */}
                {isEven ? (
                  <>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#00214A]/5 flex items-center justify-center">
                          <Icon
                            size={26}
                            strokeWidth={1.6}
                            className="text-[#00214A]"
                          />
                        </div>

                        <h3 className="text-2xl font-semibold text-[#00214A]">
                          {layer.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {layer.description}
                      </p>
                    </div>

                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6 justify-end">
                        <h3 className="text-2xl font-semibold text-[#00214A]">
                          {layer.title}
                        </h3>

                        <div className="w-14 h-14 rounded-2xl bg-[#00214A]/5 flex items-center justify-center">
                          <Icon
                            size={26}
                            strokeWidth={1.6}
                            className="text-[#00214A]"
                          />
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {layer.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
