import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

export const metadata = {
  title:
    "Responsabilidad Extendida del Productor | Subsanación y Cumplimiento | Clean Pack",
  description:
    "Aprende cómo subsanar vigencias pasadas y cumplir con la Responsabilidad Extendida del Productor (REP) mediante planes individuales o colectivos como Clean Pack, siguiendo la normativa ambiental colombiana.",
  keywords: [
    "responsabilidad extendida del productor",
    "plan individual",
    "plan colectivo Clean Pack",
    "resolución 1407 de 2018",
    "resolución 1342 de 2020",
    "resolución 803 de 2024",
    "vigencias pasadas",
    "ANLA",
    "gestión de residuos",
    "envases y empaques",
    "economía circular",
    "reciclaje Colombia",
  ],
  openGraph: {
    title:
      "Responsabilidad Extendida del Productor – Subsanación y Cumplimiento | Clean Pack",
    description:
      "Guía completa sobre cómo cumplir con la Responsabilidad Extendida del Productor (REP) en Colombia, incluyendo planes individuales y colectivos de Clean Pack para envases y empaques.",
    type: "article",
    url: "https://kelab.com.co/blog/responsabilidad-extendida",
    images: [
      {
        url: "https://kelab.com.co/static/og/responsabilidad-extendida.jpg",
        width: 1200,
        height: 630,
        alt: "Responsabilidad Extendida del Productor Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Responsabilidad Extendida del Productor | Subsanación y Cumplimiento | Clean Pack",
    description:
      "Conoce cómo subsanar vigencias pasadas y cumplir normativamente con la Responsabilidad Extendida del Productor mediante planes individuales o colectivos Clean Pack.",
    images: ["https://kelab.com.co/static/og/responsabilidad-extendida.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/blog/responsabilidad-extendida",
  },
  // Extras para SEO avanzado
  robots: "index, follow",
  authors: [{ name: "Clean Pack", url: "https://kelab.com.co" }],
  publisher: "Clean Pack",
  category: "Ambiental, Gestión de Residuos",
};

export default function ResponsabilidadExtendida() {
  return (
    <section className="bg-white text-[#000] leading-relaxed">
      {/* ------------------ BANNER ------------------ */}
      <div className="relative w-full h-[280px] md:h-[420px] flex items-center justify-center">
        <Image
          src="/blogs/cleanpack/responsabilidadE/normas.webp"
          alt="Normativa ambiental Clean Pack"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000180] via-[#00016a77] to-[#45C93E]" />

        <h1 className="relative text-xl sm:text-3xl md:text-5xl font-extrabold text-center px-4 z-10 leading-tight text-white">
          Lo que Debes Saber sobre el Cumplimiento Normativo de Vigencias
          Pasadas – Responsabilidad Extendida del Productor
        </h1>
      </div>

      {/* ------------------ CONTENIDO ------------------ */}
      <div className="max-w-5xl mx-auto py-10 px-5 md:px-6">
        {/* ------------------ SECCIÓN 1 ------------------ */}
        <div className="mt-8 space-y-6 text-justify text-[17px]">
          <p>
            La normativa colombiana en gestión de residuos de envases y empaques
            ha avanzado con fuerza para impulsar la sostenibilidad y reducir el
            impacto ambiental. “Con el objetivo de fomentar la economía circular
            y el crecimiento verde, el Ministerio de Ambiente y Desarrollo
            Sostenible reglamentó la gestión ambiental de los residuos de
            envases y empaques de papel, cartón, plástico, vidrio y metal”
            (Ministerio de Ambiente y Desarrollo Sostenible, 2024). Este marco
            regulatorio —con la Resolución 1407 de 2018, su modificación con la
            1342 de 2020 y la reciente Resolución 0803 de 2024— fija metas
            claras de recolección y aprovechamiento que aplican para las
            vigencias 2021, 2022, 2023, 2024, 2025 en adelante.
          </p>

          <div className="flex justify-center mt-6">
            <Image
              src="/blogs/cleanpack/responsabilidadE/objetos.webp"
              alt="Residuos sólidos en Colombia"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full sm:w-4/5 lg:w-3/5 object-contain"
            />
          </div>
        </div>

        {/* ------------------ SECCIÓN 2 ------------------ */}
        <div className="mt-16 space-y-7 text-[17px] text-justify">
          <h2 className="text-2xl font-bold text-[#45C93E]">
            Subsanación de Vigencias Pasadas: Opciones para Cumplir
          </h2>

          <p>
            Para cumplir con las obligaciones de la Responsabilidad Extendida
            del Productor, las empresas tienen dos alternativas: gestionar un
            plan individual o vincularse a un plan colectivo. Aunque ambos
            cumplen con la normatividad, cada uno implica niveles distintos de
            responsabilidad, costos y carga operativa. Aquí te dejamos una
            comparación clara para entender mejor las diferencias y elegir la
            opción que más se ajuste a las necesidades de tu empresa:
          </p>

          {/* ------------------ TABLA RESPONSIVA (SCROLL) ------------------ */}
          <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md mt-6">
            <table className="min-w-[750px] w-full text-sm md:text-base">
              <thead className="bg-[#001a8a] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">💡 Aspecto</th>
                  <th className="px-4 py-3 text-left">🧾 Plan Individual</th>
                  <th className="px-4 py-3 text-left">
                    🤝 Plan Colectivo (Clean Pack)
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-semibold">Gestión</td>
                  <td className="px-4 py-3">
                    Cada empresa asume todo el proceso sola.
                  </td>
                  <td className="px-4 py-3">
                    Los costos y la gestión se comparten entre afiliados.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Costos</td>
                  <td className="px-4 py-3">
                    Más altos por logística y certificaciones.
                  </td>
                  <td className="px-4 py-3">
                    Económicos gracias a la gestión conjunta.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-semibold">Acompañamiento</td>
                  <td className="px-4 py-3">Limitado.</td>
                  <td className="px-4 py-3">
                    Asesoría y acompañamiento constante.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Trazabilidad</td>
                  <td className="px-4 py-3">
                    A cargo exclusivo del productor.
                  </td>
                  <td className="px-4 py-3">
                    Garantizada por el operador del plan.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-semibold">Ventaja</td>
                  <td className="px-4 py-3">
                    Mayor autonomía, pero más carga.
                  </td>
                  <td className="px-4 py-3">
                    Cumplimiento fácil, sostenible y con respaldo técnico.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Después de revisar las diferencias entre el plan individual y el
            plan colectivo, es importante tener en cuenta que las empresas deben
            manejar dos escenarios distintos: las vigencias pasadas y la
            vigencia actual. Las vigencias pasadas (los años que la empresa no
            reportó ni se afilió a un plan colectivo) solo pueden ser subsanadas
            a través de un plan individual, porque la normatividad exige que
            cada empresa se haga responsable de los residuos de las vigencias
            anteriores. Por eso, en R&R KELAB SAS realizamos todo este proceso
            técnico y documental, asegurando que la empresa quede al día con la
            ANLA sin complicaciones.
          </p>

          {/* Imagen */}
          <div className="flex justify-center mt-8">
            <Image
              src="/blogs/cleanpack/responsabilidadE/normativo.webp"
              alt="Normatividad Clean Pack"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full sm:w-4/5 lg:w-3/5 object-contain"
            />
          </div>

          <p>
            Mientras se adelanta la subsanación mediante el plan individual, la
            empresa sí puede afiliarse al plan colectivo Clean Pack para cumplir
            la vigencia actual —es decir, el año en curso— de una manera más
            ágil, económica y acompañada. Esto evita retrasos, reduce la carga
            operativa y permite avanzar desde ya en el cumplimiento normativo.
            Vincularse a Clean Pack no es solo cumplir: es recibir beneficios
            reales que fortalecen el sistema de gestión ambiental de la empresa.
            A través del plan colectivo, las empresas pueden:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Delegar en Clean Pack toda la gestión ante la autoridad ambiental,
              somos su representación ante la ANLA y atendemos todos los
              requerimientos, y brindamos acompañamiento constante.
            </li>
            <li>
              Contar con un sistema de trazabilidad y certificación de los
              residuos confiable, garantizamos que sus residuos estén siendo
              aprovechados.
            </li>
            <li>
              Acceder a campañas de sensibilización ambiental e investigación en
              alianza con universidades para la mejora de procesos de empacado.
            </li>
            <li>
              Asegurar un cumplimiento integral que evita sanciones y mejora la
              reputación como empresa ambientalmente responsable.
            </li>
            <li>
              Participar activamente en un modelo de economía circular con
              impacto real, medimos la huella de carbono, dato importante para
              los reportes de sostenibilidad.
            </li>
          </ul>
          <p>
            En pocas palabras: el plan individual te pone al día; Clean Pack te
            mantiene cumpliendo y te acompaña estratégicamente hacia la
            sostenibilidad.
          </p>
        </div>

        {/* ------------------ SECCIÓN 3 ------------------ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-[17px] text-justify order-1 md:order-2">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Clean Pack: Un Aliado Estratégico para la Gestión Sostenible de
              Residuos
            </h2>
            <p>
              Clean Pack, gestionado por KELAB SAS, brinda un acompañamiento
              integral diseñado para facilitar la adaptación de las empresas a
              los requerimientos legales, transformando el cumplimiento
              normativo en una ventaja competitiva y un aporte tangible a la
              sostenibilidad. Elegir Clean Pack no solo garantiza un
              cumplimiento eficiente y responsable con las disposiciones de la
              Responsabilidad Extendida del Productor, sino que también permite
              a las empresas contribuir activamente a la economía circular,
              gestionando sus residuos de manera rentable y alineada con los
              principios de sostenibilidad empresarial.
            </p>

            {/* Imagen móvil */}
            <div className="flex justify-center mt-6 md:hidden">
              <Image
                src="/blogs/cleanpack/responsabilidadE/objetos.webp"
                alt="Clean Pack residuos aprovechables"
                width={800}
                height={500}
                className="rounded-lg shadow-md w-full sm:w-3/5 object-cover"
              />
            </div>
          </div>

          {/* Imagen desktop */}
          <div className="hidden md:flex justify-center order-2 md:order-1">
            <Image
              src="/blogs/cleanpack/responsabilidadE/Cleanpack.webp"
              alt="Clean Pack residuos aprovechables"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full md:w-3/4 lg:w-3/4 object-cover"
            />
          </div>
        </div>

        {/* ------------------ SECCIÓN COMPONENTES ------------------ */}
        <div className="mt-16 space-y-6 text-[17px] text-justify">
          <h2 className="text-2xl font-bold text-[#45C93E]">
            ¿Qué ofrece el plan colectivo Clean Pack dentro de sus componentes?
          </h2>
          <p>
            El plan colectivo Clean Pack reúne un conjunto de servicios
            diseñados para que las empresas cumplan con la normatividad de
            manera integral, sencilla y con acompañamiento experto en cada
            etapa. Al afiliarse, la empresa accede a un sistema completo de
            gestión, certificación, seguimiento y mejora continua dentro del
            marco de la Responsabilidad Extendida del Productor. Estos son sus
            principales componentes:
          </p>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <span className="font-semibold">
                Afiliación y vinculación formal al plan colectivo Clean Pack.
              </span>
              <br />
              La empresa queda registrada como parte del plan y obtiene acceso a
              todos los procesos, reportes, beneficios y herramientas de
              cumplimiento exigidos por la normativa vigente.
            </li>
            <li>
              <span className="font-semibold">
                Certificación, trazabilidad y gestión operativa de los residuos.
              </span>
              <br />
              El plan coordina la recolección, aprovechamiento y valoración de
              los residuos de envases y empaques a través de aliados
              estratégicos. Además, garantiza trazabilidad completa y
              certificaciones válidas ante la ANLA.
            </li>
            <li>
              <span className="font-semibold">
                Elaboración y radicación del informe anual de seguimiento.
              </span>
              <br />
              Clean Pack se encarga de preparar y presentar el informe que exige
              la autoridad ambiental, integrando la información del cliente, los
              avances de la operación y los certificados de aprovechamiento.
            </li>
            <li>
              <span className="font-semibold">
                Capacitaciones, sensibilización y programas de educación
                ambiental.
              </span>
              <br />
              El plan incluye campañas dirigidas al consumidor final y
              capacitación interna para la empresa, fomentando la correcta
              separación, entrega y gestión de residuos aprovechables. También
              se impulsa la cultura ambiental dentro y fuera de la organización.
            </li>
            <li>
              <span className="font-semibold">
                Investigación aplicada y ecodiseño para mejorar los envases.
              </span>
              <br />
              Clean Pack desarrolla estudios comparativos, análisis de
              materiales sostenibles y propuestas de reducción o sustitución de
              envases, ecoetiquetado, entre otros. Esto permite a las empresas
              innovar, disminuir su impacto ambiental y fortalecer su
              competitividad.
            </li>
            <li>
              <span className="font-semibold">
                Asesoría técnica, seguimiento continuo y respuesta a
                requerimientos de la ANLA.
              </span>
              <br />
              Nuestro equipo brinda acompañamiento continuo a la empresa durante
              todo el año, atendiendo requerimientos, solicitudes, dudas y
              cualquier comunicación por parte de la autoridad ambiental.
            </li>
            <li>
              <span className="font-semibold">
                Medición de huella de carbono.
              </span>
              <br />
              Clean Pack incluye la medición de las emisiones de carbono
              evitadas gracias al aprovechamiento de los residuos de envases y
              empaques gestionados dentro del plan colectivo. Es un insumo clave
              para fortalecer los reportes de sostenibilidad, demostrar avances
              en materia climática y evidenciar el impacto real de la gestión
              ambiental de la empresa.
            </li>
          </ol>
          <p>
            En conjunto, este plan está estructurado para garantizar un
            cumplimiento legal sólido mientras impulsa prácticas sostenibles,
            innovación en los materiales y una gestión más eficiente de los
            residuos. Además, ofrece beneficios estratégicos que fortalecen la
            competitividad y posicionan a la empresa dentro del modelo de
            economía circular del país.
          </p>
        </div>

        {/* ------------------ SECCIÓN: Referencias ------------------ */}
        <div className="mt-16 space-y-6 text-lg text-justify">
          <h2 className="text-2xl font-bold text-[#45C93E]">Referencias</h2>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              Ministerio de Ambiente y Desarrollo Sostenible. (2024, Agosto 5).
              <span className="italic">
                {" "}
                Minambiente reglamenta la gestión de residuos de envases y
                empaques en Colombia.
              </span>
              Ministerio de Ambiente y Desarrollo Sostenible.{" "}
              <a
                href="https://archivo.minambiente.gov.co/index.php/noticias-minambiente/4085-minambiente-reglamenta-la-gestion-de-residuos-de-envases-y-empaques-en-colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                https://archivo.minambiente.gov.co/index.php/noticias-minambiente/4085-minambiente-reglamenta-la-gestion-de-residuos-de-envases-y-empaques-en-colombia
              </a>
            </li>
            <li>
              R&amp;R Kelab SAS. (2024, Agosto 15).
              <span className="italic">
                {" "}
                Relación Plan Colectivo y Tienda Virtual.
              </span>
              R&amp;R Kelab SAS.
            </li>
          </ol>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
