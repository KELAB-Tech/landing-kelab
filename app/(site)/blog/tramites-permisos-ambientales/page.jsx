import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

export const metadata = {
  title:
    "Trámites Ambientales en Colombia | Tipos, Permisos y Requisitos | Clean Pack",
  description:
    "Conoce qué son los trámites ambientales, por qué son necesarios y cuáles permisos exige la autoridad ambiental según el Decreto 1076 de 2015. Resumen de los principales trámites como vertimientos, planes de manejo y más.",
  keywords:
    "trámites ambientales, permisos ambientales, Decreto 1076 de 2015, autoridad ambiental Colombia, permiso de vertimientos, plan de manejo ambiental, requisitos ambientales, Clean Pack",
  openGraph: {
    title:
      "Trámites Ambientales en Colombia | Tipos, Permisos y Requisitos | Clean Pack",
    description:
      "Guía clara sobre los trámites ambientales en Colombia, su importancia, requisitos y ejemplos como vertimientos y planes de manejo ambiental.",
    type: "article",
    url: "https://www.tu-dominio.com/blog/tramites-ambientales",
    images: [
      {
        url: "https://www.tu-dominio.com/static/tramites-ambientales.jpg",
      },
    ],
  },
};

export default function TramitesAmbientalesBlog() {
  return (
    <section className="bg-white text-[#000000]">
      {/* ------------------ BANNER ------------------ */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/blogs/tramitesA/planC/banner.webp"
          alt="Trámites Ambientales"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#000180] via-[#00016a77] to-[#45C93E]" />

        <h1 className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl font-extrabold text-center text-white px-4 z-10">
          Trámites Ambientales
        </h1>
      </div>

      {/* ------------------ CONTENIDO ------------------ */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            Los <strong>trámites o permisos ambientales</strong> son los
            requisitos exigidos por la <strong>autoridad ambiental</strong> de
            orden nacional, distrital y/o municipal a todo aquel que desea
            aprovechar, impactar o construir obras y/o proyectos que afecten el
            medio ambiente y los <strong>recursos naturales</strong>.
          </p>

          <p>
            Los trámites ambientales se encuentran compilados bajo el{" "}
            <strong>Decreto 1076 de 2015</strong>, considerado el marco
            principal para consultar los requisitos, procesos y lineamientos
            para gestionar un <strong>permiso ambiental</strong>.
          </p>
        </div>

        {/* ------------------ PERMISO DE VERTIMIENTOS ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Permiso de vertimientos a fuente superficial y al suelo
          </h2>
          <p>
            El permiso aplica a toda persona que genere vertimientos de agua
            residual doméstica o no doméstica hacia una fuente superficial o al
            suelo. Requiere modelación, evaluación del sistema de tratamiento,
            plan de riesgo y otros estudios técnicos. Tiene una vigencia de 10
            años.
          </p>
        </div>

        {/* ------------------ PLAN DE MANEJO AMBIENTAL ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Plan de Manejo Ambiental
          </h2>
          <p>
            Este trámite es posterior al Estudio de Impacto Ambiental.
            Identifica las actividades críticas del proyecto y define medidas y
            procedimientos para prevenir y controlar afectaciones sobre el
            ambiente.
          </p>
        </div>

        {/* ------------------ CONCESIÓN DE AGUAS ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Concesión de aguas
          </h2>
          <p>
            Requerido cuando una empresa capta agua superficial o subterránea
            fuera de cobertura de acueducto. Necesita estudios hidrológicos,
            diseños y evaluación de alternativas que minimicen el impacto.
          </p>
        </div>

        {/* ------------------ PERMISO DE REÚSO ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Permiso de Reúso de agua residual tratada
          </h2>
          <p>
            Aplica cuando el usuario desea reutilizar agua residual tratada para
            riego o recirculación en procesos industriales. Requiere estudios de
            suelos, análisis fisicoquímicos y viabilidad técnica.
          </p>
        </div>

        {/* ------------------ LICENCIA AMBIENTAL ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Licencia Ambiental
          </h2>
          <p>
            Es el permiso más completo. Analiza integralmente los impactos de un
            proyecto y establece las condiciones para su ejecución y operación.
            Es obligatorio para proyectos de gran escala.
          </p>
        </div>

        {/* ------------------ ESTUDIO SOCIOAMBIENTAL ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Estudio Socioambiental
          </h2>
          <p>
            Evalúa el contexto social y ambiental del área de influencia del
            proyecto. Busca garantizar que la comunidad sea tenida en cuenta
            desde la planificación.
          </p>
        </div>

        {/* ------------------ PLAN DE CONTINGENCIA ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Plan de Contingencia
          </h2>
          <p>
            Permite garantizar la respuesta ante emergencias y asegurar la
            continuidad operativa del proyecto. Debe estar actualizado y
            socializado con el personal.
          </p>
        </div>

        {/* ------------------ LÍNEA BASE AMBIENTAL ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Levantamiento de Línea Base Ambiental
          </h2>
          <p>
            Comprende el estudio de matrices como suelo, agua superficial, agua
            subterránea y aire. Determina la condición del ecosistema antes de
            la intervención.
          </p>
        </div>

        {/* ------------------ CARACTERIZACIÓN DE AGUAS ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Caracterización de aguas
          </h2>
          <p>
            Debe realizarse anualmente para verificar cumplimiento de la
            normatividad de vertimientos. La caracterización permite evaluar si
            el proceso genera impactos significativos.
          </p>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
