"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CTACleanPack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);
  const target = 128; // 🔹 Ajustable

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-br from-white via-[#f4f8ff] to-[#eef9f1] overflow-hidden"
    >
      {/* Línea superior elegante */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-[#45C93E] to-[#000180] rounded-full" />

      {/* Patrón técnico sutil */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#000180_1px,transparent_0)] bg-[size:28px_28px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Contador dinámico */}
        <p className="text-sm tracking-wide text-gray-500 mb-4">
          +{count} empresas han evaluado su cumplimiento con Clean Pack
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#000180] leading-tight">
          ¿Su empresa ya evaluó su nivel de cumplimiento REP?
        </h2>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Determine en pocos minutos si su organización presenta obligaciones
          frente a la Resolución 1407 de 2018 y la Resolución 803 de 2024.
          Obtenga una evaluación preliminar con enfoque técnico y confidencial.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Link
              href="/clean-pack/diagnostico-rep"
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-[#45C93E] text-white font-semibold shadow-lg hover:bg-[#3daa34] transition-all duration-300 text-lg"
            >
              Evaluar cumplimiento ahora
            </Link>
          </motion.div>

          <Link
            href="/en-desarrollo"
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl border border-[#000180] text-[#000180] font-semibold hover:bg-[#000180]/5 transition-all duration-300 text-lg"
          >
            Conocer cómo funciona
          </Link>
        </div>

        {/* Sello institucional */}
        <div className="mt-10 inline-block px-6 py-2 border border-[#000180]/20 rounded-full text-sm text-[#000180] bg-white shadow-sm">
          Plan colectivo estructurado conforme a normativa ambiental vigente
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Diagnóstico preliminar sin costo · Información tratada con
          confidencialidad
        </p>
      </motion.div>
    </section>
  );
}
