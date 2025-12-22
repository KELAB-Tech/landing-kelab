import Image from "next/image";
import { FileCheck } from "lucide-react";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

// ===================== META SEO ======================
export const metadata = {
  title:
    "Plan de Manejo Ambiental | Requisitos, Documentos y Trámite | Clean Pack",
  description:
    "Conoce qué es un Plan de Manejo Ambiental, quiénes deben tramitarlo y qué documentos son necesarios según el Decreto 1076 de 2015.",
  keywords:
    "plan de manejo ambiental, PMA, Decreto 1076 de 2015, requisitos PMA, normativa ambiental Colombia, documentos PMA, impacto ambiental, Clean Pack",

  openGraph: {
    title: "Plan de Manejo Ambiental | Clean Pack",
    description:
      "Guía completa sobre qué es un Plan de Manejo Ambiental y qué documentos exige la normativa ambiental colombiana.",
    url: "https://www.tu-dominio.com/blogs/plan-manejo-ambiental",
    type: "article",
    images: [
      {
        url: "https://www.tu-dominio.com/static/plan-manejo-ambiental.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Plan de Manejo Ambiental | Clean Pack",
    description:
      "Requisitos, documentos y trámite de un Plan de Manejo Ambiental según el Decreto 1076 de 2015.",
    images: ["https://www.tu-dominio.com/static/plan-manejo-ambiental.jpg"],
  },

  alternates: {
    canonical: "https://www.tu-dominio.com/blogs/plan-manejo-ambiental",
  },
};

// ===================== PAGE CONTENT ======================
export default function ManejoAmbiental() {
  return (
    <section className="bg-white text-[#000000] py-0 px-0">
      {/* ------------------ BANNER ------------------ */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/blogs/tramitesA/manejoA/ingenieros.webp"
          alt="Plan de Manejo Ambiental"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000180] via-[#00016a77] to-[#45C93E]" />

        <h1 className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl font-extrabold text-center px-4 text-white">
          Plan de Manejo Ambiental
        </h1>
      </div>

      <div className="max-w-5xl mx-auto py-10 px-5">
        {/* ------------------ INTRO ------------------ */}
        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            Es el conjunto detallado de actividades orientadas a prevenir,
            mitigar, corregir o compensar los impactos ambientales generados por
            un proyecto, obra o actividad. Incluye planes de seguimiento,
            monitoreo, contingencia y abandono según la naturaleza del proyecto
            (Decreto 1220 de 2015).
          </p>

          <p className="font-semibold text-red-600">
            ¡Evita sanciones como multas, cierre del establecimiento, caducidad
            de la licencia ambiental, demolición de la obra y más!
          </p>
        </div>

        {/* ------------------ NORMATIVA ------------------ */}
        <div className="mt-10 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#001a8a] mb-4">
            ¿Quiénes deben tramitarlo?
          </h2>
          <p>
            Según el Decreto 1076 de 2015 (artículo 2.2.2.3.2.3), ciertos
            proyectos, obras y actividades deben presentar un Plan de Manejo
            Ambiental ante la autoridad ambiental competente.
          </p>
        </div>

        {/* ------------------ DOCUMENTOS ------------------ */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#001a8a] mb-6">
            ¿Qué documentos necesitas para tramitar tu Plan de Manejo Ambiental?
          </h2>

          {/* LISTA GRAFICA */}
          <div className="grid gap-6">
            {[
              "Política ambiental",
              "Datos generales de la organización",
              "Antecedentes",
              "Identificación y evaluación de impactos",
              "Sistema de indicadores ambientales",
              "Programas de mitigación",
              "Programas de compensación",
              "Programas de contingencia y riesgos",
              "Programas de seguimiento, evaluación y control",
              "Programas de capacitación",
              "Administración del plan de manejo ambiental",
              "Costos y cronograma de trabajo",
              "Sistema de informes sobre el plan de trabajo",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-[#001a8a] text-white p-5 rounded-xl shadow-lg gap-4"
              >
                <FileCheck className="w-7 h-7 text-[#45C93E]" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------ ANEXOS ------------------ */}
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-justify">
          <p>Además, se deben incluir anexos como:</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Planos de soporte</li>
            <li>Costo estimado del proyecto</li>
            <li>Documento de existencia</li>
            <li>Formato aprobado por la autoridad ambiental</li>
            <li>Entre otros</li>
          </ul>

          <p>
            Para evitar este proceso complejo, contáctanos y deja que nuestro
            equipo experto se encargue del trámite completo para la aprobación
            de tu Plan de Manejo Ambiental.
          </p>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
