"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamClient() {
  const team = [
    {
      name: "Mario Antonio Ruiz Vargas",
      role: "Gerente General",
      img: "/equipo/mario.webp",
      description:
        "Investigador Junior reconocido por Colciencias en temas de Redes de Corrupción y Ética, Conducta y Comportamiento Organizacional. Más de 15 años de experiencia en el sector educativo y empresarial. Conferencista en Corporate Governance, Gerencia y Gestión del Conocimiento. Docente en Estrategia, Prospectiva y Proyectos",
    },
    {
      name: "Adriana Arevalo Molina",
      role: "Directora de Proyectos",
      img: "/equipo/adriana.webp",
      description:
        "Ingeniera ambiental con experiencia en gestión de residuos posconsumo, peligrosos y RCD. Experta en planes de manejo ambiental y gerencia de recursos naturales.",
    },
    {
      name: "Juan David Romero Sanchez",
      role: "Líder Recurso Hídrico",
      img: "/equipo/juan.webp",
      description:
        "Ingeniero ambiental con experiencia en gestión de recursos hídricos, permisos de vertimientos, reuso de aguas, riesgos ambientales y análisis de calidad de agua, aire y suelo.",
    },
    {
      name: "Stefanny Quiza Veru",
      role: "Profesional Línea de Residuos",
      img: "/equipo/stefanny.webp",
      description:
        "Administradora Ambiental con conocimientos en SIG, producción limpia, economía circular, educación ambiental y formulación de proyectos sostenibles.",
    },
    {
      name: "Moisés Ruiz Soracá",
      role: "Auxiliar Tecnología – Sistemas",
      img: "/equipo/moises.webp",
      description:
        "Desarrollador de Software con experiencia en tecnologías backend y frontend. Enfocado en arquitectura modular, calidad del código y desarrollo de soluciones escalables.",
    },
    {
      name: "Astrid Roxanna Moreno Marenco",
      role: "Profesional Especializado",
      img: "/equipo/astrid.webp",
      description:
        "Profesional en Química con Maestría y Doctorado. Investigadora Junior Minciencias en materiales adsorbentes. Autora y evaluadora de artículos científicos. Docente universitaria en química orgánica, alimentos, análisis instrumental y química general.",
    },
  ];

  return (
    <div className="w-full text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#00134f] via-[#001a8a] to-[#003a6b] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Nuestro <span className="text-[#45C93E]">Equipo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg opacity-90 max-w-2xl mx-auto"
          >
            Un equipo multidisciplinario que transforma la bioseguridad, los
            residuos sólidos y los recursos hídricos en soluciones reales.
          </motion.p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {team.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
            >
              {/* FOTO */}
              <div className="w-full h-64 relative">
                <Image
                  src={person.img}
                  alt={`Foto de ${person.name}, ${person.role}`}
                  fill
                  className="object-cover object-top rounded-t-2xl"
                />
              </div>

              {/* TEXTO */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-[#001a8a]">
                  {person.name}
                </h3>
                <p className="text-[#003a6b] font-semibold mb-3 text-center">
                  {person.role}
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {person.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
