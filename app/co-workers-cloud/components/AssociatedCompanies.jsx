"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import "swiper/css";

const companies = [
  { name: "GRI Consultores", logo: "/marketplace/logos/gri.png" },
  { name: "DP Watering SAS", logo: "/marketplace/logos/dpwatering.png" },
  { name: "Soluciones Ambientales", logo: "/marketplace/logos/soluciones.png" },
];

export default function AssociatedCompanies() {
  const shouldLoop = companies.length > 4;

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000180]">
            Conoce nuestras{" "}
            <span className="text-[#45C93E]">empresas asociadas</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Organizaciones que hacen parte del centro comercial digital
            Co-Workers Cloud, impulsando la economía circular desde un solo
            ecosistema.
          </p>
        </motion.div>

        {/* CARRUSEL LOGOS */}
        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={4000} // velocidad del desplazamiento
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            slidesPerView="auto"
            spaceBetween={64}
            className="py-6"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/co-workers-cloud/empresas"
            className="inline-flex items-center gap-2 rounded-xl border border-[#000180]/20 px-7 py-3 font-semibold text-[#000180] hover:bg-[#000180]/5 transition"
          >
            Ver todas las empresas →
          </Link>
        </div>
      </div>
    </section>
  );
}
