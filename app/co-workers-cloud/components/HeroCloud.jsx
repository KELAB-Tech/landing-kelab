"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/css";

const slides = [
  {
    title: "Waste Store",
    description:
      "Compra y vende materiales reciclables dentro del centro comercial digital.",
    tag: "Marketplace",
  },
  {
    title: "Bodegas Virtuales",
    description:
      "Inventario digital con fotos, cantidades y precios en tiempo real.",
    tag: "Gestión",
  },
  {
    title: "Comercio a tu Medida",
    description: "Catálogo y precios personalizados para cada cliente.",
    tag: "Ventas",
  },
  {
    title: "Todo en la Nube",
    description: "Un solo sistema para operar, vender y escalar.",
    tag: "Ecosistema",
  },
];

export default function HeroCloud() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f9fc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(69,201,62,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(0,1,128,0.18),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 lg:pt-36 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#45C93E]/10 text-[#45C93E] text-xs font-semibold">
            Centro Comercial Digital
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#000180] leading-tight">
            Co-Workers <span className="text-[#45C93E]">Cloud</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            El ecosistema donde asociaciones, gestores y transformadores crean
            su tienda, administran inventarios y venden dentro de un centro
            comercial 100% digital.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="https://marketplace-kelab-b4si.vercel.app/"
              className="bg-[#45C93E] hover:bg-[#399334] text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Entrar a Waste Store
            </Link>

            <Link
              href="#beneficios"
              className="border border-[#000180]/20 text-[#000180] px-7 py-3 rounded-xl font-semibold hover:bg-[#000180]/5 transition"
            >
              Explorar beneficios
            </Link>
          </div>
        </motion.div>

        {/* CARRUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1} // 📱 MOBILE
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2 }, // 🖥️ DESKTOP INTACTO
            }}
            loop
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="h-72 lg:h-64 rounded-2xl bg-white/90 border border-gray-200 shadow-lg p-6 flex flex-col justify-between">
                  <span className="text-xs font-semibold uppercase text-[#45C93E]">
                    {slide.tag}
                  </span>

                  <div>
                    <h3 className="mt-3 text-xl font-bold text-[#000180]">
                      {slide.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {slide.description}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-[#000180]">
                    Explorar →
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
