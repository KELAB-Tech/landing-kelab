import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

// -------------------- SEO NATIVO NEXT.JS --------------------
export const metadata = {
  title: "¿Mi actividad requiere una licencia ambiental? | Clean Pack",
  description:
    "Descubre cuándo un proyecto, obra o actividad necesita licencia ambiental según el Decreto 1076 de 2015. Aprende sobre sectores regulados, requisitos y el proceso para obtenerla en Colombia.",
  keywords:
    "licencia ambiental, Decreto 1076 de 2015, trámites ambientales, proyectos que requieren licencia ambiental, normativa ambiental Colombia, EIA, diagnóstico ambiental, Clean Pack",
  openGraph: {
    title: "¿Mi actividad requiere una licencia ambiental? | Clean Pack",
    description:
      "Guía completa para saber si tu proyecto requiere licencia ambiental según el Decreto 1076 de 2015 en Colombia.",
    url: "https://kelab.com.co/blogs/licencia-ambiental",
    type: "article",
    images: [
      {
        url: "https://kelab.com.co/static/licencia-ambiental.jpg",
        width: 1200,
        height: 630,
        alt: "Licencia ambiental en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Mi actividad requiere una licencia ambiental? | Clean Pack",
    description:
      "Aprende si tu proyecto necesita licencia ambiental según el Decreto 1076 de 2015 y cómo gestionarla en Colombia.",
    images: ["https://kelab.com.co/static/licencia-ambiental.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/blogs/licencia-ambiental",
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
            proyectos, obras o actividades que, según los lineamientos
            normativos vigentes, pueden ocasionar una afectación y deterioro
            grave a los recursos naturales o generar modificaciones
            significativas en el paisaje. Esta autorización es otorgada por la
            autoridad ambiental competente y debe obtenerse{" "}
            <strong>antes de iniciar el proyecto</strong>.
          </p>

          <p>
            Cualquier actividad, obra o proyecto no requiere más de una licencia
            ambiental. Esta se otorga por la{" "}
            <strong>vida útil del proyecto</strong> y cubre todas sus fases:
            construcción, montaje, operación, mantenimiento, desmantelamiento,
            restauración final, abandono y/o terminación.
          </p>
        </div>

        {/* ------------------ SECCIÓN 1 ------------------ */}
        <div className="mt-16 text-lg leading-relaxed text-justify space-y-6">
          {/* Título */}
          <h2 className="text-2xl font-bold text-[#000180]">Norma</h2>

          {/* Imagen debajo del título */}
          <div className="flex justify-center">
            <img
              src="/blogs/tramitesA/licenciaA/licenciaAmbiental2.webp"
              loading="lazy"
              decoding="async"
              alt="Trámite de licencia ambiental"
              className="rounded-lg shadow-lg max-h-[400px] w-full sm:w-4/5 lg:w-3/5 object-cover"
            />
          </div>

          {/* Texto justificado */}
          <p>
            Según el decreto único reglamentario de sector ambiente, el
            <strong> Decreto 1076 de 2015</strong>, requieren de licencia
            ambiental las actividades, obras o proyectos relacionados con:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Sector hidrocarburo.</li>
            <li>Sector minero.</li>
            <li>Ejecución de obras públicas.</li>
            <li>Proyectos de red vial.</li>
            <li>
              Ejecución de obras de carácter privado en la red fluvial nacional.
            </li>
            <li>
              Construcción y operación de distritos de riego con coberturas
              superiores a 20.000 hectáreas.
            </li>
            <li>
              Construcción y operación de sistemas de tratamiento de aguas
              residuales.
            </li>
            <li>
              Construcción de infraestructura o agroindustria en áreas
              protegidas públicas.
            </li>
          </ul>

          <p>
            Entre otras actividades descritas en el numeral 2.2.2.3.2.3 del
            decreto.
          </p>
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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-0 gap-10 items-center">
          <div className="space-y-5 text-lg text-justify">
            <h3 className="text-2xl font-bold text-[#000180]">
              Cómo podemos ayudarlo?
            </h3>
            <p>
              En <strong>R&R KELAB S.A.S</strong> podemos asesorarlo. Contamos
              con un equipo de profesionales altamente calificados y con amplia
              experiencia en la elaboración de los estudios ambientales
              necesarios para tramitar la licencia ambiental que su proyecto
              requiere.
            </p>
          </div>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
