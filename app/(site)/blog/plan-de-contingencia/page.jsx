import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Plan de Contingencia | Qué es, Contenido y Presentación | Clean Pack",
  description:
    "Aprende qué es un Plan de Contingencia, su importancia, cuál es su contenido obligatorio y ante qué autoridad debe presentarse según la normativa ambiental en Colombia.",
  keywords:
    "plan de contingencia, gestión del riesgo, normativa ambiental Colombia, contenido del plan de contingencia, riesgos operacionales, autoridad ambiental, Clean Pack",
  openGraph: {
    title:
      "Plan de Contingencia | Qué es, Contenido y Presentación | Clean Pack",
    description:
      "Guía completa sobre qué es un Plan de Contingencia, cuál es su contenido mínimo y ante qué autoridad ambiental debe ser presentado.",
    type: "article",
    url: "https://www.tu-dominio.com/blog/plan-de-contingencia",
    images: [
      {
        url: "https://www.tu-dominio.com/static/plan-de-contingencia.jpg",
      },
    ],
  },
};

export default function PlanDeContingencia() {
  return (
    <section className="bg-white text-[#000000]">
      {/* ------------------ BANNER ------------------ */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/blogs/tramitesA/planC/gasolinera.webp"
          alt="Plan de Contingencia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000180] via-[#00016a77] to-[#45C93E]"></div>

        <h1 className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl font-extrabold z-10 text-white text-center px-4">
          Plan de Contingencia
        </h1>
      </div>

      <div className="max-w-5xl mx-auto py-20 px-6">
        {/* ------------------ INTRO ------------------ */}
        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            Tal como su nombre lo indica, el Plan de Contingencias corresponde a
            una serie de pasos a seguir en caso de que se materialice una
            situación de riesgo previamente identificada...
          </p>
          <p>
            Estas situaciones se presentaban a causa de que no se había previsto
            la ocurrencia de un accidente...
          </p>
          <p>
            Los Planes de Contingencia permiten recopilar información de todos
            los procesos de la organización...
          </p>
        </div>

        {/* ------------------ CONTENIDO DEL PLAN ------------------ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-[#000180] mb-6">
            ¿Cuál es el contenido del Plan de Contingencia?
          </h2>

          <div className="grid gap-4">
            {[
              "Descripción general de los procesos de la organización",
              "Descripción del personal expuesto al riesgo",
              "Responsables de los procesos",
              "Actividades críticas que aseguran la operación o restablecimiento",
              "Riesgos o accidentes asociados a actividades críticas",
              "Respuesta o plan de acción ante la materialización del riesgo",
              "Contacto de organismos de atención a emergencias",
              "Contactos primarios, secundarios y terciarios",
              "Programa de socialización del plan",
              "Programa de control y seguimiento",
              "Responsable del plan",
              "Entre otros",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-[#001a8a] text-white p-5 rounded-xl shadow-lg gap-4"
              >
                <Shield className="w-7 h-7 text-[#45C93E]" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------ PRESENTACIÓN A AUTORIDADES ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            ¿Ante quien se presenta el Plan de Contingencia?
          </h2>
          <p>
            El plan de Contingencia debe ser presentado ante la autoridad
            ambiental donde se realicen las actividades...
          </p>
        </div>

        {/* ------------------ QUIÉNES DEBEN REALIZARLO ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            ¿Quiénes deben realizar un Plan de Contingencia?
          </h2>

          <p>
            De acuerdo con el Decreto 50 de 2018, deben elaborar y presentar
            para aprobación ante la autoridad ambiental el Plan de Contingencia
            los usuarios que:
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>
              Exploren, exploten, manufacturen, refinen, transformen, procesen…
            </li>
            <li>
              Actividades sujetas a licenciamiento ambiental o Plan de Manejo
              Ambiental.
            </li>
          </ul>

          <p className="mt-6">
            Si su organización aún no cuenta con un Plan de Contingencia…
          </p>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
