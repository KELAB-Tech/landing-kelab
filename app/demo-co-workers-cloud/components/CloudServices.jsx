"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

const services = [
  {
    title: "Gestión de tiendas",
    description:
      "Administra tu tienda digital, productos y precios desde un solo panel centralizado, diseñado para facilitar la operación diaria.",
  },
  {
    title: "Bodegas virtuales",
    description:
      "Controla inventario, cantidades y disponibilidad en tiempo real, reduciendo errores y mejorando la trazabilidad.",
  },
  {
    title: "Visibilidad comercial",
    description:
      "Tu empresa hace parte de un centro comercial digital con mayor alcance y exposición dentro del ecosistema.",
  },
  {
    title: "Comercio personalizado",
    description:
      "Catálogos y precios adaptados a cada tipo de cliente, permitiendo estrategias comerciales más efectivas.",
  },
  {
    title: "Eficiencia operativa",
    description:
      "Centraliza procesos, optimiza tiempos y reduce fricción en tu operación diaria dentro de un solo sistema.",
  },
  {
    title: "Soporte y acompañamiento",
    description:
      "Te acompañamos en cada etapa del crecimiento digital con soporte cercano y orientación estratégica.",
  },
];

export default function CloudServices() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* FONDO PREMIUM */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000180] via-[#000180]/95 to-[#000180]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(69,201,62,0.15),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        {/* TEXTO SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#45C93E]">
            Servicios
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
            Maximizamos tu comodidad <br />
            <span className="text-[#45C93E]">con los mejores servicios</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-white/85 text-justify">
            En Co-Workers Cloud, todo está diseñado para que operar dentro del
            centro comercial digital sea simple, eficiente y escalable. Nuestros
            servicios garantizan una experiencia fluida y profesional para cada
            empresa del ecosistema.
          </p>
        </motion.div>

        {/* CARRUSEL DE SERVICIOS */}
        <div className="mt-20">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="h-full rounded-2xl bg-white/95 backdrop-blur border border-white/20 shadow-xl p-8 text-[#000180]"
                >
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-sm text-gray-600 text-justify">
                    {service.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* FADE INFERIOR */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
