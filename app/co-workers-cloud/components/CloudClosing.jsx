"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CloudClosing() {
  return (
    <section className="relative py-36 overflow-hidden bg-[#000180]">
      {/* FONDO ANIMADO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(69,201,62,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(69,201,62,0.08),transparent_50%)] animate-[pulse_14s_ease-in-out_infinite]" />

      {/* BLOBS */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#45C93E]/25 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#45C93E]/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        {/* TITULO */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight"
        >
          <span className="relative inline-block">
            Un ecosistema
            <span className="absolute -inset-2 rounded-xl bg-[#45C93E]/20 blur-xl animate-pulse" />
          </span>{" "}
          lleno de oportunidades
        </motion.h2>

        {/* TAG */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="block mt-6 text-xs uppercase tracking-[0.3em] text-[#45C93E]"
        >
          @coworkerscloud
        </motion.span>

        {/* TEXTO */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
        >
          En <span className="text-white font-semibold">Co-Workers Cloud</span>,
          todo está diseñado para que las empresas crezcan dentro de un centro
          comercial digital moderno, eficiente y conectado. Creamos experiencias
          que impulsan la colaboración, la visibilidad y el desarrollo
          sostenible en cada interacción.
        </motion.p>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/co-workers-cloud/empresas"
            className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#000180] bg-[#45C93E] shadow-lg hover:shadow-xl transition-all"
          >
            Haz parte del ecosistema
            <span className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition" />
          </Link>
        </motion.div>
      </div>

      {/* FADE FINAL */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#000180] to-transparent" />
    </section>
  );
}
