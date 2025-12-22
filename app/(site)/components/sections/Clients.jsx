"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
  "/clientes/biomax.webp",
  "/clientes/comercio.webp",
  "/clientes/olivos.webp",
  "/clientes/terpel.webp",
  "/clientes/Toyota.webp",
  "/clientes/coches.webp",
  "/clientes/Comapan.webp",
  "/clientes/consorcio.webp",
  "/clientes/dana.webp",
  "/clientes/deli.webp",
  "/clientes/carriel.webp",
  "/clientes/ejercito.webp",
  "/clientes/dorado.webp",
  "/clientes/caparrapi.webp",
  "/clientes/vidrio.webp",
  "/clientes/UniversidadElBosque.webp",
  "/clientes/unal.webp",
  "/clientes/tutaza.webp",
  "/clientes/transportesvalle.webp",
  "/clientes/Tecnoal.webp",
  "/clientes/Stodent.webp",
  "/clientes/sopas.webp",
  "/clientes/pamis.webp",
  "/clientes/openmarket.webp",
  "/clientes/Offset.webp",
  "/clientes/Mercadeo.webp",
  "/clientes/medicinalegal.webp",
  "/clientes/Johnson.webp",
  "/clientes/Hunterdouglas.webp",
  "/clientes/GSD.webp",
  "/clientes/Gourmet.webp",
  "/clientes/Flexopol.webp",
];

export default function Clients() {
  const [duration, setDuration] = useState(45);

  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 768 ? 20 : 45);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="clients"
      className="bg-gradient-to-b from-[#f9fafb] to-white py-10"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#000180] mb-6">
          Nuestros <span className="text-[#45C93E]">Clientes</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Empresas y organizaciones que confían en{" "}
          <span className="text-[#45C93E] font-semibold">R&R Kelab S.A.S</span>{" "}
          para el desarrollo de soluciones sostenibles.
        </p>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-12 items-center will-change-transform"
            animate={{ x: ["0%", "-450%"] }}
            transition={{
              ease: "linear",
              duration,
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-24 grayscale hover:grayscale-0 transition duration-300"
              >
                <Image
                  src={logo}
                  alt={`Logo cliente ${i + 1}`}
                  width={160}
                  height={96}
                  className="object-contain w-full h-full opacity-80 hover:opacity-100 transition"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
