"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Innovation() {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden text-white py-28 bg-[length:200%_200%] animate-gradientMove"
    >
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .circuit-line {
          position: absolute;
          width: 2px;
          height: 180px;
          background: linear-gradient(to bottom, #45c93e, #000180);
          opacity: 0.35;
          animation: floatLine 6s linear infinite;
        }
        @keyframes floatLine {
          0% {
            transform: translateY(-200px);
          }
          100% {
            transform: translateY(400px);
          }
        }
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulseGlow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-[#45C93E] via-[#2ca54e] to-[#000180] opacity-90" />

      {/* Circuit lines */}
      <span className="circuit-line left-1/3"></span>
      <span className="circuit-line left-2/3 delay-700"></span>
      <span className="circuit-line left-1/5 delay-500"></span>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-10">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
        >
          Innovación que Transforma el Futuro
        </motion.h2>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-emerald-50 text-lg md:text-xl leading-relaxed mb-6">
            En <span className="font-semibold text-white">R&R Kelab S.A.S</span>{" "}
            desarrollamos soluciones que fusionan
            <span className="text-white font-semibold">
              {" "}
              tecnología, ciencia y sostenibilidad
            </span>{" "}
            con el propósito de impactar positivamente nuestro entorno.
          </p>

          <p className="text-emerald-50 text-lg md:text-xl leading-relaxed mb-8">
            Nuestro proyecto destacado,{" "}
            <span className="font-semibold text-white">Waste Store</span>, es
            una plataforma de economía circular donde podrás publicar,
            intercambiar y comercializar materiales aprovechables y servicios
            ambientales. Una forma inteligente y moderna de generar valor a
            partir de los residuos.
          </p>

          {/* Botón con Glow */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative bg-white text-[#000180] px-8 py-4 rounded-full font-bold shadow-xl text-lg transition hover:bg-emerald-100 overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-[#45C93E] to-[#000180] opacity-60 animate-pulseGlow"></span>
            <span className="relative z-10">Explorar Waste Store</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
