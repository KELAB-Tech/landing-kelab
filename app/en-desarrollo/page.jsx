"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EnDesarrollo() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white via-[#f4f8ff] to-[#eef9f1]">
      <div className="text-center max-w-2xl">
        {/* Línea superior elegante */}
        <div className="w-16 h-1 bg-[#45C93E] mx-auto mb-8 rounded-full" />

        {/* Animación principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-[#000180] mb-6"
        >
          Estamos construyendo esta sección
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mb-10"
        >
          Esta categoría hace parte del ecosistema Clean Pack y estará
          disponible próximamente con información técnica y estratégica
          especializada.
        </motion.p>

        {/* Loader minimalista */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-10 h-10 border-4 border-[#45C93E] border-t-transparent rounded-full animate-spin" />
        </motion.div>

        {/* CTA de retorno */}
        <Link
          href="/clean-pack"
          className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-[#000180] text-white font-semibold shadow-md hover:bg-[#000180]/90 transition"
        >
          Volver a Clean Pack
        </Link>
      </div>
    </section>
  );
}
