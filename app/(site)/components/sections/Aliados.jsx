"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
  "/aliados/3LUPZ.webp",
  "/aliados/cajaplast.webp",
  "/aliados/carbon-neutral.webp",
  "/aliados/cstar-logo.webp",
  "/aliados/ecopositiva.webp",
  "/aliados/huellanatural.webp",
  "/aliados/plasticolor.webp",
  "/aliados/tecova.webp",
];

export default function Aliados() {
  const [duration, setDuration] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      setDuration(window.innerWidth < 768 ? 15 : 25);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="aliados"
      className="bg-gradient-to-b from-white to-[#f9fafb] py-5"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#000180] mb-6">
          Nuestros <span className="text-[#45C93E]">Aliados Estratégicos</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Colaboramos con empresas y organizaciones que comparten nuestro
          compromiso con la sostenibilidad, la innovación y la responsabilidad
          ambiental.
        </p>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-12 items-center will-change-transform"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ ease: "linear", duration, repeat: Infinity }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-40 h-24 grayscale hover:grayscale-0 transition duration-300"
              >
                <Image
                  src={logo}
                  alt={`Logo aliado ${i + 1}`}
                  width={160}
                  height={96}
                  className="object-contain w-full h-full opacity-80 hover:opacity-100 transition"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
