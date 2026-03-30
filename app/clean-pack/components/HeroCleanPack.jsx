"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, BarChart3, Handshake } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroCleanPack() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/cleanpack/hero/Empresa_manufacturera.jpg",
      title: (
        <>
          Plan Colectivo de{" "}
          <span className="text-[#45C93E]">Envases y Empaques</span>
        </>
      ),
      subtitle:
        "Cumpla con la Responsabilidad Extendida del Productor (REP) sin riesgos legales ni complicaciones técnicas.",
    },
    {
      id: 2,
      image: "/cleanpack/hero/Planta_industrial.jpg",
      title: (
        <>
          Subsanación de{" "}
          <span className="text-[#45C93E]">vigencias 2021–2025</span>
        </>
      ),
      subtitle:
        "Regularice su situación frente a la Resolución 803 de 2024 con acompañamiento técnico especializado.",
    },
  ];

  return (
    <section className="relative w-full">
      {/* ================= HERO 60% ================= */}
      <div className="relative h-[60vh] min-h-[520px] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[60vh] min-h-[520px] flex items-center">
                <Image
                  src={slide.image}
                  alt="Imagen institucional Clean Pack"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Overlay institucional */}
                <div className="absolute inset-0 bg-[#000180]/50" />

                <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl text-left"
                      >
                        <h1 className="text-4xl sm:text-5xl mt-6 md:text-6xl font-bold text-white leading-tight">
                          {slide.title}
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-white/90">
                          {slide.subtitle}
                        </p>

                        <div className="mt-10 flex gap-5">
                          <a
                            href="/"
                            className="px-8 py-4 bg-[#45C93E] hover:bg-[#399334] transition text-white font-semibold rounded-2xl shadow-xl text-lg"
                          >
                            Afiliar mi empresa
                          </a>

                          <a
                            href="/services/clean-pack"
                            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#000180] transition font-semibold rounded-2xl text-lg"
                          >
                            Conocer más
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= CARDS MÁS GRANDES ================= */}
      <div className="relative -mt-10 z-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-[#45C93E]/10 p-4 rounded-2xl">
                <ShieldCheck className="w-10 h-10 text-[#45C93E]" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-[#000180] mb-4">
              Cumplimiento Normativo
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Alineado con la Resolución 803 de 2024 y el esquema REP vigente en
              Colombia.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-[#45C93E]/10 p-4 rounded-2xl">
                <BarChart3 className="w-10 h-10 text-[#45C93E]" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-[#000180] mb-4">
              Reducción de Costos
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Modelo colectivo eficiente que reduce costos frente a un plan
              individual.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-[#45C93E]/10 p-4 rounded-2xl">
                <Handshake className="w-10 h-10 text-[#45C93E]" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-[#000180] mb-4">
              Acompañamiento Técnico
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Soporte especializado durante todo el proceso de afiliación y
              cumplimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
