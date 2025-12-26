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
      "Guía completa sobre qué es un Plan de Contingencia, su contenido mínimo y ante qué autoridad ambiental debe presentarse en Colombia.",
    type: "article",
    url: "https://kelab.com.co/blog/plan-de-contingencia",
    images: [
      {
        url: "https://kelab.com.co/static/plan-de-contingencia.jpg",
        width: 1200,
        height: 630,
        alt: "Plan de Contingencia Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Plan de Contingencia | Qué es, Contenido y Presentación | Clean Pack",
    description:
      "Conoce la importancia de un Plan de Contingencia, su contenido obligatorio y cómo presentarlo ante la autoridad ambiental en Colombia.",
    images: ["https://kelab.com.co/static/plan-de-contingencia.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/blog/plan-de-contingencia",
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
            situación de riesgo previamente identificada. Antes, cuando ocurrían
            accidentes o desastres naturales, las organizaciones sufrían
            pérdidas humanas y económicas difíciles de recuperar, incluso
            llevando al cese de operaciones.
          </p>
          <p>
            Estas situaciones se presentaban a causa de que no se había previsto
            la ocurrencia de un accidente, en la actualidad, las organizaciones
            prefieren planificar todo muy bien desde antes de iniciar operación
            con el fin de que no sean advertidos por situaciones inesperadas en
            las cuales no haya respuesta.
          </p>
          <p>
            Los Planes de Contingencia permiten recopilar información de todos
            los procesos de la organización y determinar mediante un estudio
            realizado por expertos, cuáles de ellos deben priorizarse de acuerdo
            con el porcentaje de ocurrencia. Una vez priorizados se realiza el
            plan para cada uno de ellos.
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
            ambiental donde se realicen las actividades con el fin de que éstas
            lo conozcan y hagan seguimiento y en caso dado soliciten los
            respectivos ajustes al mismo. El Plan de contingencia es exigido por
            las autoridades ambientales regionales, cada una de ellas fija los
            lineamientos que deben seguirse para la implementación del mismo,
            por lo que el usuario debe mantener informada a la autoridad
            respetiva sobre los pormenores del trámite.
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
              Exploren, exploten, manufacturen, refinen, transformen, procesen,
              transporten o almacenen hidrocarburos o sustancias nocivas para la
              salud y para los recursos hidrobiológicos.
            </li>
            <li>
              Actividades sujetas a licenciamiento ambiental o Plan de Manejo
              Ambiental.
            </li>
          </ul>

          <p className="mt-6">
            Si su organización aún no cuenta con un Plan de Contingencia que le
            permita asegurar la continuidad del negocio en caso de que se
            materialice una situación de riesgo, consúltenos, aquí le
            brindaremos asesoría especializada.
          </p>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
