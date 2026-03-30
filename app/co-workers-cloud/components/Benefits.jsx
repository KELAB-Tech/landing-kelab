"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // solo una vez
        }
      },
      { threshold: 0.5 }, // cuando 50% esté visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [startAnimation, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-[#45C93E]">
      {count}
      {suffix}
    </span>
  );
}
export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-44 px-6 bg-gradient-to-b from-[#000180] to-[#000000] text-white overflow-hidden"
    >
      {/* Divisor superior estratégico */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.29,22,98.73,29.05,146,17C230,43,284,7,339,1c54-6,108,21,162,30,54,9,108-3,162-17,54-14,108-28,162-21,54,7,108,35,162,41,54,6,108-12,162-29V0Z"
            fill="#000180"
          />
        </svg>
      </div>

      {/* Glow superior institucional */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(69,201,62,0.12),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-[#45C93E] font-semibold mb-6">
            Impacto Estratégico Global
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
            Infraestructura digital diseñada
            <br className="hidden md:block" />
            para escalar en mercados regionales
          </h2>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed">
            Nuestra arquitectura transforma residuos aprovechables en activos
            estratégicos, integrando empresas dentro de una red estructurada,
            trazable y preparada para expansión LATAM y mercados
            internacionales.
          </p>
        </motion.div>

        {/* Métricas institucionales con contador */}
        <div className="grid md:grid-cols-3 gap-16 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Counter value={40} suffix="%" />
            <p className="mt-4 text-white/60">
              Incremento proyectado en eficiencia operativa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Counter value={30} suffix="%" />
            <p className="mt-4 text-white/60">
              Reducción estimada en costos logísticos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Counter value={100} suffix="%" />
            <p className="mt-4 text-white/60">
              Trazabilidad estructurada en operaciones
            </p>
          </motion.div>
        </div>

        {/* Bloque final psicológico */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 border-t border-white/10 pt-16"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Preparados para expansión LATAM / Global
          </h3>
          <p className="text-white/60 max-w-3xl mx-auto">
            Infraestructura tecnológica diseñada para crecer, integrarse
            multi-país y operar con estándares empresariales internacionales.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
