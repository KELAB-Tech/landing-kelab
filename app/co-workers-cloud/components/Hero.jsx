"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 md:pt-32 pb-20 overflow-hidden"
    >
      {/* Degradado base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00214A]/15 via-[#00214A]/5 to-white" />

      {/* Radiales suaves */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(69,201,62,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,33,74,0.08),transparent_50%)]" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        {/* LOGO */}
        <Link
          href="/co-workers-cloud"
          className="mb-3 md:mb-4 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/co-workers/co-logo.svg"
            alt="CoWorkersCloud"
            width={140}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#00214A] leading-tight mb-5"
        >
          El primer gran ecosistema digital
          <br className="hidden md:block" />
          de residuos aprovechables en Colombia.
        </motion.h1>

        {/* SUBTITULO */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mb-10"
        >
          Un ecosistema empresarial con autonomía operativa, trazabilidad
          estructurada y tecnología aplicada para impulsar la economía circular
          a nivel nacional y regional.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#45C93E] text-white font-semibold text-base md:text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#3bb833]"
          >
            Únete a la transformación
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
