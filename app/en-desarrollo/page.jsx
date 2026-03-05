"use client";

import { motion } from "framer-motion";

export default function EnConstruccion() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white via-[#f4f8ff] to-[#eef9f1]">
      <div className="text-center max-w-3xl">
        {/* Línea superior elegante */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full shadow-md"
        />

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight"
        >
          🚧 Página en construcción 🚧
        </motion.h1>

        {/* Texto descriptivo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-600 leading-relaxed mb-10"
        >
          Estamos trabajando para ofrecerte una experiencia completa. Esta
          sección estará disponible próximamente con contenido actualizado.
        </motion.p>

        {/* Loader animado */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin shadow-lg" />
        </motion.div>

        {/* CTA de retorno */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        ></motion.div>
      </div>
    </section>
  );
}
