"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Truck, MapPin, ShieldCheck } from "lucide-react";

export default function TransportadorasPage() {
  return (
    <section className="relative min-h-screen py-28 bg-[#f7f9fc] overflow-hidden">
      {/* Fondo difuminado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(69,201,62,0.14),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(0,1,128,0.14),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#45C93E]/10 text-[#45C93E] text-xs font-semibold tracking-wide">
            Categoría
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000180]">
            Empresas <span className="text-[#45C93E]">Transportadoras</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 text-justify">
            Conecta con empresas especializadas en el transporte de materiales
            reciclables y residuos. Garantiza logística segura, trazabilidad y
            cumplimiento ambiental dentro del centro comercial digital de
            Co-Workers Cloud.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <Feature
            icon={Truck}
            title="Transporte especializado"
            text="Flotas adecuadas para el manejo de materiales reciclables y residuos bajo estándares ambientales."
          />
          <Feature
            icon={MapPin}
            title="Cobertura y trazabilidad"
            text="Seguimiento de rutas, puntos de carga y descarga con control logístico en tiempo real."
          />
          <Feature
            icon={ShieldCheck}
            title="Cumplimiento normativo"
            text="Empresas alineadas con la normativa ambiental y de transporte vigente."
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <Link
            href="/co-workers-cloud/empresas?categoria=transportadoras"
            className="inline-flex items-center rounded-xl bg-[#45C93E] px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#399334] transition"
          >
            Ver empresas transportadoras →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- COMPONENTE FEATURE ---------- */

function Feature({ icon: Icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white/90 backdrop-blur border border-gray-200 shadow-lg p-8"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#000180]/10 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-[#000180]" />
      </div>

      <h3 className="text-xl font-bold text-[#000180]">{title}</h3>
      <p className="mt-3 text-gray-600 text-sm text-justify">{text}</p>
    </motion.div>
  );
}
