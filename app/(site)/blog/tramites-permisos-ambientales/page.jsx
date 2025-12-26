import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

export const metadata = {
  title:
    "Trámites Ambientales en Colombia | Tipos, Permisos y Requisitos | Clean Pack",
  description:
    "Descubre qué son los trámites ambientales en Colombia, por qué son necesarios y cuáles permisos exige la autoridad ambiental según el Decreto 1076 de 2015. Incluye vertimientos, planes de manejo y otros trámites clave.",
  keywords: [
    "trámites ambientales",
    "permisos ambientales",
    "Decreto 1076 de 2015",
    "autoridad ambiental Colombia",
    "permiso de vertimientos",
    "plan de manejo ambiental",
    "requisitos ambientales",
    "gestión ambiental",
    "sostenibilidad",
    "Clean Pack",
  ],
  openGraph: {
    title:
      "Trámites Ambientales en Colombia | Tipos, Permisos y Requisitos | Clean Pack",
    description:
      "Guía completa sobre trámites ambientales en Colombia: tipos, permisos, requisitos y ejemplos como vertimientos y planes de manejo ambiental.",
    type: "article",
    url: "https://kelab.com.co/blog/tramites-ambientales",
    images: [
      {
        url: "https://kelab.com.co/static/tramites-ambientales.jpg",
        width: 1200,
        height: 630,
        alt: "Trámites ambientales en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Trámites Ambientales en Colombia | Tipos, Permisos y Requisitos | Clean Pack",
    description:
      "Aprende sobre los trámites ambientales en Colombia, sus permisos, requisitos y ejemplos como vertimientos y planes de manejo ambiental.",
    images: ["https://kelab.com.co/static/tramites-ambientales.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/blog/tramites-ambientales",
  },
  // Extras para SEO avanzado
  robots: "index, follow",
  authors: [{ name: "Clean Pack", url: "https://kelab.com.co" }],
  publisher: "Clean Pack",
  category: "Ambiental, Gestión de Residuos, Trámites",
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
            Los <strong>trámites o permisos ambientales </strong> son los
            requisitos exigidos por la <strong>autoridad ambiental </strong> de
            orden nacional, distrital y/o municipal a todo aquel que desea
            aprovechar, impactar o construir obras y/o proyectos que de alguna
            manera afecten el medio ambiente y los{" "}
            <strong>recursos naturales</strong>. La finalidad de los permisos es
            garantizar un ambiente sano para todos los ciudadanos, permitir las
            actividades de manera que se minimice al máximo los efectos
            negativos que pudieran generarse sobre el ambiente.
          </p>

          <p>
            Los Trámites ambientales se encuentran compilados bajo el{" "}
            <strong>Decreto 1076 de 2015</strong> expedido por el Gobierno de
            Colombia, aunque las normas que integran este decreto siguen estando
            vigentes así como las facultades derivadas de las mismas, el decreto
            se puede considerar como el marco principal de referencia para que
            los ciudadanos consulten el paso a paso a seguir a la hora de
            gestionar un <strong>permiso ambiental</strong>. A continuación se
            presenta un pequeño resumen para algunos trámites ambientales, si
            deseas mayor detalle sobre uno de ellos visita el blog de tu interés
            y al final déjanos tus comentarios.
          </p>
        </div>

        {/* ------------------ PERMISO DE VERTIMIENTOS ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Permiso de vertimientos a fuente superficial y al suelo
          </h2>
          <p>
            El permiso de vertimientos es aplicable a toda persona que genere
            vertimientos de agua residual doméstica y no doméstica sobre una
            fuente superficial o el suelo. El interesado en tramitar un permiso
            de vertimientos debe solicitar mediante el formulario unico de
            solicitud de permiso de vertimientos a la autoridad ambiental
            correspondiente para que esta realice las visitas de campo
            respectivas y de su concepto. Este permiso conlleva estudios muy
            específicos como evaluación de sistema de tratamiento, modelación de
            vertimiento, plan de riesgo, entre otros, los cuales permiten
            validar el impacto ambiental que se genera sobre los recursos. El
            permiso tiene una vigencia de 10 años, una vez se cumpla este plazo
            se debe presentar solicitud para renovación, por otro lado, si se
            cambia alguna de las condiciones iniciales por medio de las cuales
            fue otorgado el permiso la primera vez el trámite que le surte es
            una modificación al permiso actual.
          </p>
        </div>

        {/* ------------------ PLAN DE MANEJO AMBIENTAL ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Plan de Manejo Ambiental
          </h2>
          <p>
            Este trámite es posterior al estudio de impacto ambiental, en el
            cual se identifican las actividades que mayor riesgo van a causar al
            ambiente por la construcción y/u operación del proyecto, obra o
            actividad. Estas actividades criticas deben ser evaluadas mediante
            una metodología específica a criterio del profesional y determinar
            mediante fichas técnicas el paso a paso a seguir para la ejecución
            de la actividad. La autoridad ambiental permite bajo ciertos
            criterios que se ejecuten y desarrollen los proyectos siempre y
            cuando la afectación ambiental sea planificada, gestionada y
            controlada mediante los planes de manejo ambiental. El usuario puede
            proponer el plan de manejo ambiental de acuerdo con un estudio
            realizado a las futuras instalaciones y debe validar que se siga y
            se comunique el plan con el fin de prevenir afectaciones graves a
            los recursos.
          </p>
        </div>

        {/* ------------------ CONCESIÓN DE AGUAS ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Concesión de aguas
          </h2>
          <p>
            Este trámite es aplicable cuando las instalaciones de la empresa se
            encuentran fuera del alcance o cobertura del acueducto de la región
            y se ven obligados a captar agua de una fuente superficial y/o
            subterránea para su abastecimiento. Las obras de captación deben
            garantizar la disponibilidad y calidad del recurso para poblaciones
            aguas abajo, para lograr esta determinación es necesario realizar
            una serie de estudios ambientales, como estudios hidrológicos que
            deben ser desarrollados por una forma de consultoría especializada,
            además se deben presentar los diseños y la información relevante
            para que la autoridad emita un concepto aprobatorio. Siempre se
            deben evaluar diferentes alternativas y elegir la mejor en lo que
            respecta a la fuente de la cual se va a extraer el agua, la elección
            de la alternativa dependerá entre muchos otros factores de la
            alternativa que menor impacto le genere al ambiente.
          </p>
        </div>

        {/* ------------------ PERMISO DE REÚSO ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Permiso de Reúso de agua residual tratada
          </h2>
          <p>
            Este permiso cuenta con regulación vigente expedida apenas el año
            pasado, este trámite es aplicable cuando el usuario cuenta o
            proyecta una concesión de aguas para desarrollo de su actividad, si
            el usuario desea reutilizar el agua residual tratada generada en su
            proceso para un uso específico debe adelantar el permiso
            correspondiente. El agua puede usarse para riego de jardines, riego
            de cultivo, sin que se vea afectada el área de disposición, lo cual
            se determina mediante un estudio de suelos y prueba de infiltración.
            Por su parte, si después de un análisis fisicoquímico, el agua puede
            ser recirculada para ser incorporada nuevamente al proceso también
            lo puede hacer y con esto contribuir al uso eficiente del recurso
            hídrico.
          </p>
        </div>

        {/* ------------------ LICENCIA AMBIENTAL ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Licencia Ambiental
          </h2>
          <p>
            Este trámite se adelanta desde la planificación de la construcción
            del proyecto, obra o actividad y se enfoca en un estudio integral de
            los recursos que van a ser impactados por la obra, esta licencia
            permite que la autoridad ambiental avale la puesta en marcha de las
            obras. Aquí se especifican las condiciones bajo las cuales se
            permite la construcción y operación del establecimiento. Además de
            que las medidas y obras ejecutadas van a ser las que a consideración
            representan el menor impacto al ambiente.
          </p>
        </div>

        {/* ------------------ ESTUDIO SOCIOAMBIENTAL ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Estudio Socioambiental
          </h2>
          <p>
            Lo primordial de este tipo de estudios es caracterizar y poner en
            contexto a la comunidad aledaña del proyecto, obra o actividad que
            se planifique, ya que, serán los directamente impactados bien sea
            positiva o negativamente con la ejecución de las obras. La comunidad
            forma parte de los actores principales del proyecto, bien pueden
            constituir un detractor o por el contrario un defensor del proyecto
            es por ello que antes de iniciar la fase de ejecución se debe hacer
            un análisis Socioambiental del área a intervenir.
          </p>
        </div>

        {/* ------------------ PLAN DE CONTINGENCIA ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Plan de Contingencia
          </h2>
          <p>
            Este trámite es de suma importancia para la operación del proyecto,
            obra o actividad ya que no solo le permite responder ante una
            situación de emergencia sino que además asegura que la operación y
            funcionamiento del negocio no se vaya a ver afectado, por ello este
            plan debe mantenerse actualizado y constantemente socializado al
            personal.
          </p>
        </div>

        {/* ------------------ LÍNEA BASE AMBIENTAL ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Levantamiento de Línea Base Ambiental
          </h2>
          <p>
            Este trámite va inmerso dentro del estudio de impacto ambiental, el
            cual implica hacer un levantamiento de información primaria base
            para determinar los recursos que serán impactados con la
            construcción del proyecto, obra o actividad, su gravedad y medidas
            de mitigación y/o compensación necesarias para reducir el riesgo de
            contaminación. El levantamiento de línea base comprende el estudio
            de las diferentes matrices que conforman el ecosistema, matriz de
            suelo, matriz agua subterránea, matriz agua superficial y matriz
            aire. A pesar de que por lo general es un trámite que se surte en la
            etapa de planificación del proyecto, una vez construida y en
            operación, la obra puede requerir el levantamiento de línea base
            ambiental para corroborar que tal cual lo planificado, se siguen
            preservando los recursos mediante las acciones enfocadas en la
            protección del ambiente.
          </p>
        </div>

        {/* ------------------ CARACTERIZACIÓN DE AGUAS ------------------ */}
        <div className="mt-20 text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold text-[#000180] mb-4">
            Caracterización de aguas
          </h2>
          <p>
            Este trámite se debe adelantar una vez cada año y reportar ante la
            respectiva autoridad ambiental, la caracterización anual permite
            confirmar que los valores de los parámetros fisicoquímicos de los
            vertimientos se encuentren por debajo de la normatividad de
            vertimientos vigente y aplicable y que de esta manera no generan
            daños graves al ambiente. El dueño del proceso debe asesorarse antes
            de realizar su caracterización para establecer la norma de
            vertimientos que le aplica. Si no sabes que{" "}
            <strong>permiso ambiental</strong> te corresponde adelantar ni ante
            que autoridad ambiental. Consúltanos. Sin importar la autoridad
            ambiental competente estamos para asesorarlo.
          </p>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
