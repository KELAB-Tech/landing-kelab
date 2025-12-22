import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

// IMPORTA LAS IMÁGENES (Next las optimiza)

// -------------------- SEO NATIVO NEXT.JS --------------------
export const metadata = {
  title: "¿Mi actividad requiere una licencia ambiental? | Clean Pack",
  description:
    "Aprende cuándo un proyecto, obra o actividad necesita licencia ambiental según el Decreto 1076 de 2015. Conoce sectores regulados, requisitos y el proceso para obtenerla.",
  keywords:
    "licencia ambiental, Decreto 1076 de 2015, trámites ambientales, proyectos que requieren licencia ambiental, normativa ambiental Colombia, EIA, diagnóstico ambiental, Clean Pack",

  openGraph: {
    title: "¿Mi actividad requiere una licencia ambiental? | Clean Pack",
    description:
      "Guía para identificar si un proyecto requiere licencia ambiental según el Decreto 1076 de 2015.",
    url: "https://www.tu-dominio.com/blogs/licencia-ambiental",
    type: "article",
    images: [
      {
        url: "https://www.tu-dominio.com/static/licencia-ambiental.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "¿Mi actividad requiere una licencia ambiental?",
    description:
      "Identifica si tu proyecto necesita licencia ambiental según el Decreto 1076 de 2015.",
    images: ["https://www.tu-dominio.com/static/licencia-ambiental.jpg"],
  },

  alternates: {
    canonical: "https://www.tu-dominio.com/blogs/licencia-ambiental",
  },
};

// ======================================================
//                     PAGE CONTENT
// ======================================================

export default function LicenciaAmbiental() {
  return (
    <section className="bg-white text-[#000000] py-0 px-0">
      {/* ------------------ BANNER ------------------ */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/blogs/tramitesA/licenciaA/licenciaAmbiental.webp"
          alt="Trámite de licencia ambiental"
          fill
          className="rounded-2xl object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000180] via-[#00016a77] to-[#45C93E]" />

        {/* Texto */}
        <h1 className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl font-extrabold text-center px-4 text-white">
          ¿Cómo saber si mi actividad requiere de una licencia ambiental?
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        {/* ------------------ INTRO ------------------ */}
        <div className="space-y-6 text-lg leading-relaxed text-justify mt-10">
          <p>
            La licencia ambiental es un permiso otorgado para la ejecución de
            proyectos, obras o actividades que pueden ocasionar una afectación
            grave a los recursos naturales. Esta autorización debe obtenerse{" "}
            <strong>antes de iniciar el proyecto</strong>.
          </p>

          <p>
            Una licencia ambiental se otorga por la{" "}
            <strong>vida útil del proyecto</strong> y cubre todas sus fases:
            construcción, operación, mantenimiento, desmantelamiento, y más.
          </p>
        </div>

        {/* ------------------ SECCIÓN 1 ------------------ */}
        <div className="mt-16 text-lg leading-relaxed text-justify space-y-6">
          <h2 className="text-2xl font-bold text-[#000180]">Norma</h2>

          <div className="flex justify-center">
            <Image
              src="/blogs/tramitesA/licenciaA/licenciaAmbiental2.webp"
              alt="Trámite de licencia ambiental"
              width={800}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>

          <p>
            Según el <strong>Decreto 1076 de 2015</strong>, requieren licencia
            ambiental actividades como:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Sector hidrocarburos</li>
            <li>Sector minero</li>
            <li>Obras públicas</li>
            <li>Proyectos de red vial</li>
            <li>Obras en red fluvial nacional</li>
            <li>Distritos de riego &gt; 20.000 hectáreas</li>
            <li>Sistemas de tratamiento de aguas residuales</li>
            <li>Infraestructura en áreas protegidas</li>
          </ul>

          <p>Entre otras actividades descritas en la normativa.</p>
        </div>

        {/* ------------------ SECCIÓN 2 ------------------ */}
        <div className="mt-16 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-6">
            ¿Cuál es el trámite para obtener la licencia ambiental?
          </h2>

          <div className="flex justify-center mb-6">
            <Image
              src="/blogs/tramitesA/licenciaA/diagrama.webp"
              alt="Proceso de trámite de licencia ambiental"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full md:w-4/5 lg:w-3/5 h-auto object-contain"
            />
          </div>

          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>DAA:</strong> Diagnóstico Ambiental de Alternativas
            </li>
            <li>
              <strong>EIA:</strong> Estudio de Impacto Ambiental
            </li>
          </ul>
        </div>

        {/* ------------------ SECCIÓN 3 ------------------ */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-[#000180] mb-4">
            ¿Cómo podemos ayudarlo?
          </h3>

          <p className="text-lg text-justify">
            En <strong>R&R KELAB S.A.S</strong> contamos con profesionales
            expertos en estudios ambientales para tramitar la licencia que su
            proyecto necesita.
          </p>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
