"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  TrendingUp,
  ShieldCheck,
  Wallet,
  Store,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import ContactoBlog from "./ContactoBlog";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const faqsHome = [
  {
    q: "¿Qué es Waste Store?",
    a: "Es una plataforma digital que conecta de forma segura a quienes compran y venden materiales aprovechables, servicios y maquinarias.",
  },
  {
    q: "¿Quiénes pueden usar la plataforma?",
    a: "Asociaciones de recicladores, empresas transformadoras, transportadoras y actores legalmente constituidos en Colombia.",
  },
  {
    q: "¿Es un entorno seguro y confiable?",
    a: "Sí. Waste Store promueve un mercado formal, organizado y con información verificable de los usuarios.",
  },
  {
    q: "¿Cómo puedo vincularme?",
    a: "Debe comunicarse con el área de Sostenibilidad y Economía Circular de R&R KELAB S.A.S.",
  },
];

export default function WasteStorePage() {
  const slides = [
    {
      id: 1,
      image: "/waste-store/Banner1.png",
      text: (
        <>
          Plataforma Virtual para la{" "}
          <span className="px-2 bg-[#45C93E] text-white rounded-md">
            Comercialización
          </span>{" "}
          de Residuos Aprovechables
        </>
      ),
      p: "Publica, compra y gestiona materiales aprovechables en un solo lugar, de forma rápida y segura.",
    },
    {
      id: 2,
      image: "/waste-store/Banner2.png",
      text: (
        <>
          El Gran Centro Comercial Virtual de{" "}
          <span className="px-2 bg-[#45C93E] text-white rounded-md">
            Residuos
          </span>
        </>
      ),
      p: "Conecta recicladores, gestores, transformadores y empresas para dinamizar la economía circular.",
    },
  ];

  return (
    <div className="w-full text-white">
      {/* 🔥 HERO / CARRUSEL */}
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

                <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 w-full px-4 sm:w-auto sm:px-0">
                  <a
                    href="/marketplace"
                    className="
                    block
                    w-full sm:w-auto
                    text-center
                    bg-[#45C93E] hover:bg-[#399334]
                    transition-colors
                    px-6 sm:px-8
                    py-3
                    rounded-lg
                    font-semibold
                    text-base sm:text-lg
                    shadow-lg
                    whitespace-nowrap
                  "
                  >
                    Ingresar a Waste Store
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Flechas */}
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

      {/* CONTENIDO INTERCALADO */}
      <div className="w-full">
        {/* 1️⃣ Degradado — ¿Qué es Waste Store? */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
              Comercialice y adquiera materiales aprovechables de forma segura,
              ágil y a un solo clic
            </h2>

            <p className="text-gray-100 leading-relaxed text-center md:text-lg max-w-4xl mx-auto mb-12">
              En un mercado de residuos en constante evolución, Waste Store
              integra tecnología y confianza para potenciar su negocio y
              facilitar cada proceso de comercialización.
            </p>

            {/* Beneficios */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl">
                <Globe className="w-7 h-7 text-[#45C93E] flex-shrink-0" />
                <span className="text-gray-100">
                  Publique materiales, maquinaria o servicios desde cualquier
                  lugar.
                </span>
              </li>

              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl">
                <TrendingUp className="w-7 h-7 text-[#45C93E] flex-shrink-0" />
                <span className="text-gray-100">
                  Amplíe el alcance y la visibilidad de su negocio.
                </span>
              </li>

              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl">
                <ShieldCheck className="w-7 h-7 text-[#45C93E] flex-shrink-0" />
                <span className="text-gray-100">
                  Fortalezca la seguridad en la comercialización de residuos.
                </span>
              </li>

              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-2xl">
                <Wallet className="w-7 h-7 text-[#45C93E] flex-shrink-0" />
                <span className="text-gray-100">
                  Optimice costos y reduzca gastos operativos.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Blanco — Problema / Oportunidad */}
        <section className="py-20 px-6 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center leading-tight">
              ¿Y si su negocio contara con una alternativa tecnológica diseñada
              para crecer con usted?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <span className="block text-4xl font-extrabold text-[#000180] mb-2">
                  + Alcance
                </span>
                <p className="text-gray-600">
                  Conecte con más compradores y vendedores sin límites
                  geográficos.
                </p>
              </div>

              <div className="text-center border-x border-gray-200 px-4">
                <span className="block text-4xl font-extrabold text-[#000180] mb-2">
                  + Seguridad
                </span>
                <p className="text-gray-600">
                  Procese sus operaciones con mayor confianza y respaldo
                  tecnológico.
                </p>
              </div>

              <div className="text-center">
                <span className="block text-4xl font-extrabold text-[#000180] mb-2">
                  + Rentabilidad
                </span>
                <p className="text-gray-600">
                  Optimice costos y aumente el potencial de sus ingresos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Afiliados */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 text-sm font-semibold text-[#45C93E] mb-6">
              <Store className="w-4 h-4" />
              Zona de afiliados
            </span>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              ¿Ya es afiliado a Waste Store?
            </h2>

            {/* Texto */}
            <p className="max-w-3xl mx-auto text-white/90 md:text-lg mb-10 leading-relaxed">
              Gestione su tienda virtual, publique materiales, servicios o
              maquinarias y administre su información desde un entorno seguro y
              diseñado para impulsar su negocio.
            </p>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Link
                href="https://kelab.com.co/paginas/inicio" // o /login /dashboard
                className="inline-flex items-center gap-3 bg-white text-[#000180] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-emerald-100 transition"
              >
                Administre su tienda
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 3️⃣ Degradado — Plataforma tecnológica */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#000169] via-[#000150] to-[#45C93E] text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div>
              <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-white/15 text-[#45C93E]">
                Innovación & Tecnología
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Impulsamos un sector de residuos más moderno, inclusivo y
                eficiente
              </h2>

              <p className="text-gray-100 leading-relaxed md:text-lg mb-8">
                Desde R&amp;R KELAB SAS desarrollamos Waste Store, una tienda
                virtual que redefine la comercialización de residuos
                aprovechables, integrando tecnología, confianza y acceso
                equitativo para todos los actores del sector.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-xl bg-white/10 text-sm">
                  Transformación digital
                </span>
                <span className="px-4 py-2 rounded-xl bg-white/10 text-sm">
                  Inclusión económica
                </span>
                <span className="px-4 py-2 rounded-xl bg-white/10 text-sm">
                  Mercado seguro
                </span>
              </div>
            </div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/services/cloud/store.webp"
                alt="Waste Store - Plataforma tecnológica"
                width={420}
                height={260}
                className="w-full object-contain rounded-3xl shadow-2xl bg-white p-6"
              />
            </motion.div>
          </div>
        </section>

        {/* Blanco — Propósito */}
        <section className="py-20 px-6 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
              Waste Store fue creada para simplificar la comercialización de
              materiales aprovechables
            </h2>

            <p className="text-gray-600 md:text-lg max-w-4xl mx-auto leading-relaxed">
              Sabemos que encontrar un entorno confiable para adquirir
              materiales, ofrecer servicios, comercializar maquinaria o vender
              residuos aprovechables no siempre es sencillo. Por eso,
              desarrollamos una plataforma que conecta oportunidades, genera
              confianza y facilita cada operación.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-gradient-to-b from-[#000150] via-[#000130] to-[#45C93E] text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div>
              <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-white/15 text-[#45C93E]">
                Plataforma confiable
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Un espacio confiable para conectar materiales, servicios y
                oportunidades
              </h2>

              <p className="text-gray-100 leading-relaxed md:text-lg">
                Waste Store responde a la necesidad de contar con un entorno
                seguro donde adquirir materiales aprovechables, ofrecer
                servicios, comercializar maquinaria y conectar con actores
                confiables del sector de residuos.
              </p>
            </div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/waste-store/pc.jpg"
                alt="Cobertura y alcance Waste Store"
                width={700}
                height={500}
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-center">
              Al unirse a Waste Store, usted accede a un ecosistema diseñado
              para hacer crecer su negocio
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">
                  Comercialización integral
                </h3>
                <p className="text-gray-600">
                  Publique y comercialice materiales aprovechables, servicios y
                  maquinaria desde una sola plataforma.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">Acceso a insumos</h3>
                <p className="text-gray-600">
                  Encuentre una oferta diversificada de insumos clave para el
                  desarrollo de su negocio.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">
                  Tienda virtual propia
                </h3>
                <p className="text-gray-600">
                  Cuente con su propia tienda virtual y gestione su oferta de
                  forma autónoma y eficiente.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">Mayor visibilidad</h3>
                <p className="text-gray-600">
                  Aumente su exposición ante clientes potenciales mediante el
                  sistema de localización integrado.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">Red de compradores</h3>
                <p className="text-gray-600">
                  Amplíe su red de compradores y aliados comerciales de manera
                  estratégica.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">Control y seguridad</h3>
                <p className="text-gray-600">
                  Gestione su mercado con mayor control, reduciendo costos y
                  operando con seguridad y confiabilidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Degradado — Convocatoria especial */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block mb-4 px-5 py-1 rounded-full text-sm font-semibold bg-white/15 text-[#45C93E]">
              Convocatoria especial
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Asociaciones de recicladores y empresas transformadoras
            </h2>

            <p className="text-gray-100 md:text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              Organizaciones legalmente reconocidas en todo el país pueden
              afiliarse a Waste Store y acceder, sin costo durante los primeros
              dos meses, a una plataforma diseñada para fortalecer su
              visibilidad, comercialización y crecimiento.
            </p>

            <span className="inline-block px-6 py-3 rounded-full bg-white text-[#000180] font-bold shadow-lg">
              Afiliación gratuita por tiempo limitado
            </span>
          </div>
        </section>

        {/* Cierre — Llamado a la innovación */}
        <section className="py-24 px-6 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
              Que lo desconocido no sea un límite, sino el punto de partida
              hacia nuevas oportunidades de negocio
            </h2>

            <p className="text-gray-600 md:text-lg max-w-4xl mx-auto leading-relaxed">
              Innovar es avanzar con visión, confianza y decisión. Waste Store
              nace para acompañarlo en ese camino, conectando tecnología,
              sostenibilidad y crecimiento en un solo lugar.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-center text-[#000180] mb-12"
            >
              Preguntas frecuentes
            </motion.h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {faqsHome.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="w-6 h-6 text-[#45C93E] flex-shrink-0" />
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.q}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>

            {/* Link a FAQ completa */}
            <div className="text-center">
              <Link
                href="/faq"
                className="inline-block font-semibold text-[#45C93E] hover:text-[#000180] transition"
              >
                Ver todas las preguntas frecuentes →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactoBlog />
      </div>
    </div>
  );
}
