"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: "/carrusel/portada1.jpg",
      text: (
        <>
          Consultoría en{" "}
          <span className="px-2 bg-[#45C93E] text-white rounded-md">
            Sostenibilidad
          </span>{" "}
          y Economía Circular
        </>
      ),
      p: "Somos una firma de consultoría comprometida con la calidad y la sostenibilidad en cada proyecto.",
    },
    {
      id: 2,
      image: "/carrusel/portada2.webp",
      text: (
        <>
          Soluciones para un Futuro{" "}
          <span className="px-2 bg-[#45C93E] text-white rounded-md">
            Sostenible
          </span>
        </>
      ),
      p: "Creamos proyectos con visión de futuro, orientados al desarrollo sostenible y al progreso de las comunidades.",
    },
  ];

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-8 h-1 rounded-full bg-white/40 inline-block mx-1"></span>`,
        }}
        loop
        className="!overflow-hidden w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex flex-col justify-center overflow-hidden">
              <Image
                src={slide.image}
                alt="Imagen del slide"
                fill
                priority={slide.id === 1}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 md:px-16 max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
                  {slide.text}
                </h1>
                <p className="mt-6 text-base sm:text-lg md:text-2xl font-normal drop-shadow-md">
                  {slide.p}
                </p>
              </div>

              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
                <a
                  href="#contact"
                  className="bg-[#45C93E] hover:bg-[#399334] transition-colors px-8 py-3 rounded-lg font-semibold text-lg shadow-lg"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#45C93E]/80 transition-all cursor-pointer">
          <ChevronLeft className="text-white w-6 h-6" />
        </div>

        <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#45C93E]/80 transition-all cursor-pointer">
          <ChevronRight className="text-white w-6 h-6" />
        </div>

        <div className="swiper-pagination !bottom-6 !left-1/2 !-translate-x-1/2 !w-auto flex justify-center"></div>
      </Swiper>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    </section>
  );
}
