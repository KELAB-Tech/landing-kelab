import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";
import { Leaf } from "lucide-react";

export const metadata = {
  title: "Planes Colectivos de Envases y Empaques en Colombia | Clean Pack",
  description:
    "Conoce qué son los Planes Colectivos de Envases y Empaques en Colombia, su origen, regulación, operación y cómo contribuyen al reciclaje, la responsabilidad compartida y la economía circular.",
  keywords:
    "planes colectivos, envases y empaques, resolución 1407, reciclaje, aprovechamiento de residuos, economía circular, responsabilidad extendida del productor, REP, Clean Pack",
  openGraph: {
    title: "Planes Colectivos de Envases y Empaques en Colombia | Clean Pack",
    description:
      "Conoce qué son los Planes Colectivos de Envases y Empaques en Colombia, su origen, regulación, operación y cómo contribuyen al reciclaje, la responsabilidad compartida y la economía circular.",
    type: "article",
    url: "https://www.tu-dominio.com/blogs/planes-colectivos",
    images: [
      {
        url: "https://www.tu-dominio.com/static/planes-colectivos.jpg",
      },
    ],
  },
};

export default function Page() {
  return (
    <section className="bg-white text-[#000000]">
      {/* ------------------ BANNER ------------------ */}
      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${"/blogs/tramitesA/licenciaA/licenciaAmbiental.webp"})`,
        }}
      >
        {/* Overlay con gradiente para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000180] via-[#00016a77] to-[#45C93E] "></div>

        <h1 className="relative text-2xl md:text-5xl font-extrabold text-center px-4 z-10 text-white">
          <span>Planes Colectivos</span> <span>de Envases y Empaques</span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto py-10 px-6">
        {/* ------------------ INTRO ------------------ */}
        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            En Colombia se producen alrededor de{" "}
            <strong>25.000 toneladas de residuos sólidos al día</strong>, de los
            cuáles únicamente el 13% se recupera y solo el 7% llega a ser
            comercializado por recicladores de oficio.
          </p>

          {/* Imagen central entre párrafos */}
          <div className="flex justify-center my-6">
            <img
              src="/blogs/cleanpack/planesColectivos/mujer.webp"
              loading="lazy"
              decoding="async"
              alt="Residuos sólidos en Colombia"
              className="rounded-lg shadow-lg w-full md:w-3/5 lg:w-2/5 object-contain"
            />
          </div>

          <p>
            Para abordar esta problemática, el Ministerio de Ambiente emitió la
            <strong> Resolución 1407 de 2018</strong>, posteriormente modificada
            por la <strong> Resolución 1342 de 2020</strong> y actualizada por
            la
            <strong> Resolución 803 de 2024</strong>.
          </p>

          <p>
            Estas normas establecen los criterios y responsabilidades para la
            gestión ambiental de envases y empaques de papel, cartón, plástico,
            vidrio y metal, promoviendo su <strong>reciclaje</strong>,{" "}
            <strong>aprovechamiento</strong> y reincorporación en la cadena
            productiva.
          </p>
        </div>
        {/* ------------------ SECCIÓN 1 ------------------ */}
        <div className="mt-16 grid gap-10 items-center">
          <div className="space-y-4 text-lg text-justify">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Origen de los Planes Colectivos de envases y empaques
            </h2>
            <p>
              Los planes colectivos de envases y empaques surgieron como una
              respuesta a la necesidad de mejorar la gestión de estos residuos
              aprovechables en Colombia. La alta generación de envases y
              empaques, así como su impacto en el medio ambiente, dan paso a la
              creación y operación de estos planes, con el objetivo de fomentar:
            </p>

            {/* Imágenes con texto debajo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 text-center">
              <div>
                <img
                  src="/blogs/cleanpack/planesColectivos/economia-circular.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Economía circular"
                  className="rounded-lg shadow-lg h-32 w-auto mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  LA ECONOMÍA CIRCULAR
                </p>
              </div>
              <div>
                <img
                  src="/blogs/cleanpack/planesColectivos/responsabilidad.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Responsabilidad ambiental"
                  className="rounded-lg shadow-lg h-32 w-auto mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  LA RESPONSABILIDAD COMPARTIDA
                </p>
              </div>
              <div>
                <img
                  src="/blogs/cleanpack/planesColectivos/responsabilidad2.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Responsabilidad social"
                  className="rounded-lg shadow-lg h-32 w-auto mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  LA PARTICIPACIÓN DE LOS DIFERENTES ACTORES INVOLUCRADOS.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------ SECCIÓN 2 ------------------ */}
        <div className="mt-16 grid gap-10 items-center">
          <div className="space-y-4 text-lg text-justify">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Origen de los Planes Colectivos de envases y empaques
            </h2>
            <p>
              Los planes colectivos son esquemas que agrupan a diferentes
              empresas, importadores, fabricantes, ensambladores o
              remanufacturadores de bienes, que hacen uso de envases y empaques
              de papel, cartón, plástico, vidrio y metal, con el fin de cumplir
              con las metas de gestión y aprovechamiento integral establecidas
              por la Resolución 1407 de 2018, su modificatoria 1342 de 2020 y la
              norma vigente 803 de 2024. Estos planes operan a través de la
              conformación de:
            </p>

            {/* Imágenes con texto debajo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 my-6 text-center">
              <div>
                <img
                  src="/blogs/cleanpack/planesColectivos/reciclaje4.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Economía circular"
                  className="rounded-lg shadow-lg h-28 w-auto mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  PUNTOS DE ACOPIO DE RESIDUOS APROVECHABLES
                </p>
              </div>
              <div>
                <img
                  src="/blogs/cleanpack/planesColectivos/reciclar.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Responsabilidad ambiental"
                  className="rounded-lg shadow-lg h-28 w-auto mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  SISTEMAS DE RECOLECCIÓN, CLASIFICACIÓN Y PESAJE
                </p>
              </div>
              <div>
                <img
                  src="/blogs/cleanpack/planesColectivos/camion-basura.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Gestión de residuos"
                  className="rounded-lg shadow-lg h-28 w-auto mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  TRANSPORTE
                </p>
              </div>
              <div>
                <img
                  src="/blogs/cleanpack/planesColectivos/transformacion.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Transformación de materiales"
                  className="rounded-lg shadow-lg h-28 w-auto mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  SISTEMAS DE TRANSFORMACIÓN DE RESIDUOS APROVECHABLES
                </p>
              </div>
              <div>
                <img
                  src="/blogs/cleanpack/planesColectivos/transformar.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Reincorporación productiva"
                  className="rounded-lg shadow-lg h-28 w-auto mx-auto object-cover"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  TRANSFORMACIÓN DEL RESIDUO EN MATERIA PRIMA Y/O PRODUCTO FINAL
                </p>
              </div>
            </div>

            <p>
              Con el objetivo de reducir el impacto ambiental de estos residuos
              en el medio ambiente y promover su reincorporación en la cadena
              productiva como materiales reutilizables o como materia prima para
              la fabricación de nuevos productos.
            </p>

            {/* Imagen central entre párrafos */}
            <div className="flex justify-center my-6">
              <img
                src="/blogs/cleanpack/planesColectivos/botellas.webp"
                loading="lazy"
                decoding="async"
                alt="Residuos sólidos en Colombia"
                className="rounded-lg shadow-lg w-full md:w-3/5 lg:w-2/5 object-contain"
              />
            </div>
          </div>
        </div>

        {/* ------------------ SECCIÓN 3 ------------------ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-[#45C93E] mb-6">
            Avances en Colombia
          </h2>

          <p className="text-lg leading-relaxed text-justify mb-6">
            Desde la implementación de la Resolución 1407 de 2018, la 1342 de
            2020 y con el fortalecimiento normativo de la 803 de 2024, se han
            logrado importantes avances en la gestión de envases y empaques en
            Colombia. Actualmente existen numerosos planes colectivos de envases
            y empaques en funcionamiento, que han permitido:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Incrementar las tasas de reciclaje.",
              "Mejorar la gestión de estos materiales en diferentes regiones del país.",
              "Promover la creación de alianzas estratégicas entre los diferentes actores involucrados.",
              "Implementación de tecnologías y prácticas más eficientes en la gestión y transformación de los envases y empaques.",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#001a8a] text-white p-5 rounded-xl shadow-lg flex gap-3"
              >
                <Leaf className="w-7 h-7 text-[#45C93E] flex-shrink-0" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-5">
            Las principales ciudades que han funcionado como eje central para la
            implementación y desarrollo de los planes colectivos son: Bogotá,
            Medellín, Cali, Barranquilla y Bucaramanga, los cuales abarcan
            diversos sectores industriales. Estos planes colectivos han sido
            creados con el objetivo de abordar la gestión y transformación
            integral de envases y empaques de distintos materiales, como:
          </p>

          {/* Imágenes con texto debajo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 my-6 text-center">
            <div>
              <img
                src="/blogs/cleanpack/planesColectivos/el-plastico.webp"
                loading="lazy"
                decoding="async"
                alt="Plástico"
                className="rounded-lg shadow-lg h-32 w-auto mx-auto object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">PLÁSTICO</p>
            </div>
            <div>
              <img
                src="/blogs/cleanpack/planesColectivos/contenedor-de-vidrio.webp"
                loading="lazy"
                decoding="async"
                alt="Vidrio"
                className="rounded-lg shadow-lg h-32 w-auto mx-auto object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">VIDRIO</p>
            </div>
            <div>
              <img
                src="/blogs/cleanpack/planesColectivos/caja-de-carton.webp"
                loading="lazy"
                decoding="async"
                alt="Cartón"
                className="rounded-lg shadow-lg h-32 w-auto mx-auto object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">CARTÓN</p>
            </div>
            <div>
              <img
                src="/blogs/cleanpack/planesColectivos/content.webp"
                loading="lazy"
                decoding="async"
                alt="Metal"
                className="rounded-lg shadow-lg h-32 w-auto mx-auto object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">CARTÓN</p>
            </div>
            <div>
              <img
                src="/blogs/cleanpack/planesColectivos/alimentos-enlatados.webp"
                loading="lazy"
                decoding="async"
                alt="Alimentos enlatados"
                className="rounded-lg shadow-lg h-32 w-auto mx-auto object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">METAL</p>
            </div>
          </div>
          <p>
            Con el fin de maximizar su valorización y minimizar su impacto
            ambiental.
          </p>
        </div>

        {/* ------------------ SECCIÓN 4 ------------------ */}
        <div className="mt-20 grid  gap-10 items-center">
          <div className="space-y-5 text-lg text-justify">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Beneficios de los Planes Colectivos de envases y empaques
            </h2>
            <p>
              La implementación de los planes colectivos de envases y empaques
              en Colombia ha traído consigo diversos beneficios, entre los
              cuales se destacan:
            </p>
          </div>
        </div>
        {/* ------------------ SECCIÓN 4 ------------------ */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Imagen a la izquierda */}
          <div className="flex justify-center">
            <img
              src="/blogs/cleanpack/planesColectivos/reciclaje.webp"
              loading="lazy"
              decoding="async"
              alt="Residuos sólidos en Colombia"
              className="rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/4 object-cover"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="space-y-5 text-lg text-justify">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Gestión integral de los envases y empaques:
            </h2>
            <p>
              Los planes colectivos permiten una gestión más eficiente y
              coordinada de los envases y empaques a lo largo de su ciclo de
              vida, desde su producción hasta su disposición final. Esto implica
              una mayor recolección, clasificación, transporte, reciclaje y
              transformación de estos materiales, lo cual contribuye a reducir
              su impacto ambiental y promover su reincorporación en la cadena
              productiva.
            </p>
          </div>
        </div>

        {/* ------------------ SECCIÓN 4 ------------------ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto a la izquierda */}
          <div className="space-y-5 text-lg text-justify">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Responsabilidad compartida:
            </h2>
            <p>
              Los planes colectivos promueven la responsabilidad compartida
              entre los diferentes actores involucrados en el uso de envases y
              empaques, incluyendo a las empresas, importadores, fabricantes,
              ensambladores o remanufacturadores de bienes. Esto implica que
              todos los involucrados asumen parte de la responsabilidad y los
              costos asociados a la gestión de los envases y empaques, lo cual
              fomenta una mayor conciencia y compromiso en la reducción de su
              impacto ambiental.
            </p>
          </div>

          {/* Imagen a la derecha */}
          <div className="flex justify-center">
            <img
              src="/blogs/cleanpack/planesColectivos/reciclaje2.webp"
              loading="lazy"
              decoding="async"
              alt="Responsabilidad compartida en gestión de envases"
              className="rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/4 object-cover"
            />
          </div>
        </div>

        {/* ------------------ SECCIÓN 4 ------------------ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Imagen a la izquierda */}
          <div className="flex justify-center">
            <img
              src="/blogs/cleanpack/planesColectivos/ambiental2.webp"
              loading="lazy"
              decoding="async"
              alt="Residuos sólidos en Colombia"
              className="rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/4 object-cover"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="space-y-5 text-lg text-justify">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Economía circular:
            </h2>
            <p>
              Los planes colectivos impulsan la economía circular al promover la
              reincorporación de los envases y empaques en la cadena productiva
              como materiales reutilizables o como materia prima para la
              fabricación de nuevos productos. Esto contribuye a reducir la
              demanda de recursos naturales y energía en la producción de nuevos
              envases y empaques, así como a disminuir la generación de residuos
              y la contaminación ambiental.
            </p>
          </div>
        </div>
        {/* ------------------ SECCIÓN 4 ------------------ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto a la izquierda */}
          <div className="space-y-5 text-lg text-justify">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Oportunidad de empleo:
            </h2>
            <p>
              La implementación de los planes colectivos ha generado
              oportunidades de empleo en la cadena de valor de los envases y
              empaques, desde la recolección, clasificación hasta el reciclaje,
              la transformación y la disposición final. Esto contribuye al
              desarrollo local y a la generación de empleo en las comunidades
              cercanas a los puntos de gestión y transformación de estos
              materiales.
            </p>
          </div>

          {/* Imagen a la derecha */}
          <div className="flex justify-center">
            <img
              src="/blogs/cleanpack/planesColectivos/reciclaje3.webp"
              loading="lazy"
              decoding="async"
              alt="Oportunidad de empleo en gestión de envases"
              className="rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/4 object-cover"
            />
          </div>
        </div>

        {/* ------------------ SECCIÓN 5 – Evolución normativa ------------------ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-[#45C93E] mb-6">
            Evolución normativa:
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-justify">
            <p>
              La <strong>Resolución 1407 de 2018</strong> fue la norma base que
              estableció por primera vez en Colombia los lineamientos para la
              gestión ambiental de envases y empaques de papel, cartón,
              plástico, vidrio y metal. Esta resolución introdujo obligaciones
              nuevas para los productores, como la presentación de planes de
              gestión, el cumplimiento de metas de aprovechamiento, la
              participación activa de recicladores y gestores dentro de la
              cadena, y el reporte obligatorio de información ante la ANLA.
              Representó el punto de partida normativo para estructurar la
              responsabilidad extendida del productor en este sector.
            </p>

            <p>
              Posteriormente, la <strong>Resolución 1342 de 2020</strong>{" "}
              modificó y amplió varios de los requisitos establecidos en la 1407
              de 2018, clarificando aspectos técnicos, roles y responsabilidades
              de los productores. Esta actualización ajustó plazos de reporte,
              definió metodologías de aprovechamiento, incorporó criterios más
              específicos para la operación de los planes colectivos y
              estableció parámetros para la verificación y certificación del
              material aprovechado. Su objetivo fue fortalecer la operatividad
              del sistema y mejorar la precisión de la información reportada.
            </p>

            <p>
              Finalmente, la <strong>Resolución 803 de 2024</strong>,
              actualmente vigente, reemplaza y actualiza el marco regulatorio
              anterior, consolidando y reforzando los requerimientos de la
              Responsabilidad Extendida del Productor (REP) para envases y
              empaques. Esta resolución fortalece la trazabilidad obligatoria,
              la validez y auditoría de los certificados de aprovechamiento, la
              operación formal de los planes colectivos y las metas y exigencias
              de reporte aplicables a los productores. Además, aporta mayor
              claridad sobre la responsabilidad legal de cada actor que
              participa en la cadena de gestión de residuos.
            </p>
          </div>
        </div>
      </div>
      <ContactoBlog />
    </section>
  );
}
