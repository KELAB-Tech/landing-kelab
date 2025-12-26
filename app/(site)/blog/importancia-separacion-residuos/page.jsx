import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

const ruta = "blogs/cleanpack/separacionR/";

// Metadata optimizada para el blog
export const metadata = {
  title: "Importancia de la Separación de Residuos | Clean Pack",
  description:
    "Conoce por qué separar los residuos sólidos es clave para la economía circular, la sostenibilidad y la gestión ambiental responsable en Colombia.",
  keywords:
    "separación de residuos, residuos sólidos, reciclaje en Colombia, economía circular, sostenibilidad, residuos aprovechables, residuos orgánicos, residuos peligrosos",
  openGraph: {
    title: "Importancia de la Separación de Residuos | Clean Pack",
    description:
      "Aprende cómo la separación de residuos sólidos en la fuente contribuye a la sostenibilidad y al cuidado del medio ambiente en Colombia.",
    type: "article",
    url: "https://kelab.com.co/blogs/importancia-separacion-residuos",
    images: [
      {
        url: "https://kelab.com.co/static/separacion-residuos.jpg",
        width: 1200,
        height: 630,
        alt: "Separación de residuos sólidos en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Importancia de la Separación de Residuos | Clean Pack",
    description:
      "Descubre cómo separar residuos sólidos mejora la economía circular y la sostenibilidad ambiental en Colombia.",
    images: ["https://kelab.com.co/static/separacion-residuos.jpg"],
  },
};

export default function Page() {
  return (
    <section className="bg-white text-[#000000]">
      {/* ------------------ BANNER ------------------ */}
      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${ruta}Separacion.webp)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#000180] via-[#00016a77] to-[#45C93E]" />

        <h1 className="relative text-2xl md:text-5xl font-extrabold text-white text-center px-4 z-10">
          Importancia de la Separación de Residuos Sólidos en nuestro país
        </h1>
      </div>

      <div className="max-w-5xl mx-auto py-10 px-6">
        {/* ------------------ SECCIÓN 1 ------------------ */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-lg text-justify order-1 md:order-2">
            <p>
              Se estima que en el 2050 la producción mundial de residuos sea de
              3.400 millones de toneladas, de los cuales el 38% son residuos
              aprovechables, los cuales se categorizan en: papel, cartón, vidrio
              y metal.
            </p>

            {/* Imagen móvil */}
            <div className="flex justify-center md:hidden mt-6">
              <Image
                src="/blogs/cleanpack/separacionR/Imagen1.webp"
                width={500}
                height={400}
                alt="Residuos sólidos en Colombia"
                className="rounded-lg shadow-lg object-cover w-full sm:w-3/4"
              />
            </div>
          </div>

          {/* Imagen escritorio */}
          <div className="hidden md:flex justify-center order-2 md:order-1">
            <Image
              src="/blogs/cleanpack/separacionR/Imagen1.webp"
              width={500}
              height={400}
              alt="Residuos sólidos en Colombia"
              className="rounded-lg shadow-lg object-cover w-full md:w-3/5 lg:w-2/4"
            />
          </div>
        </div>
        {/* ------------------ SECCIÓN 2 ------------------ */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-lg text-justify">
            <p>
              Colombia pretende fomentar el reciclaje y las buenas prácticas
              alrededor de esta actividad, para alcanzar o cumplir el marco de
              los Objetivos de Desarrollo Sostenible del año 2015.
            </p>

            {/* Imagen móvil */}
            <div className="md:hidden flex justify-center mt-6">
              <Image
                src="/blogs/cleanpack/separacionR/Imagen2.webp"
                width={500}
                height={400}
                alt="Oportunidad de empleo en gestión de envases"
                className="rounded-lg shadow-lg object-cover w-full sm:w-3/4"
              />
            </div>
          </div>

          {/* Imagen escritorio */}
          <div className="hidden md:flex justify-center">
            <Image
              src="/blogs/cleanpack/separacionR/Imagen2.webp"
              width={500}
              height={400}
              alt="Oportunidad de empleo en gestión de envases"
              className="rounded-lg shadow-lg object-cover w-full md:w-3/5 lg:w-2/4"
            />
          </div>
        </div>
        {/* ------------------ SECCIÓN 3 ------------------ */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-lg text-justify order-1 md:order-2">
            <p>
              La separación en la fuente es una actividad o práctica necesaria
              para incorporar materiales en la creación de nuevos productos.
              Este concepto da inicio o pie a la economía circular, y así mismo
              maximiza el valor agregado de los sistemas.
            </p>

            <div className="md:hidden flex justify-center mt-6">
              <Image
                src="/blogs/cleanpack/separacionR/Imagen3.webp"
                width={500}
                height={400}
                alt="Residuos sólidos en Colombia"
                className="rounded-lg shadow-lg object-cover w-full sm:w-3/4"
              />
            </div>
          </div>

          <div className="hidden md:flex justify-center order-2 md:order-1">
            <Image
              src="/blogs/cleanpack/separacionR/Imagen3.webp"
              width={500}
              height={400}
              alt="Residuos sólidos en Colombia"
              className="rounded-lg shadow-lg object-cover w-full md:w-3/5 lg:w-2/4"
            />
          </div>
        </div>
        {/* ------------------ SECCIÓN DE BENEFICIOS ------------------ */}
        <div className="mt-16 space-y-5 text-lg text-justify">
          <h2 className="text-2xl font-bold text-[#45C93E]">
            Beneficios de la separación en la fuente
          </h2>

          <p>
            La Gestión Integral de los Residuos Sólidos requiere de la
            colaboración y participación de todos los ciudadanos colombianos,
            para una correcta separación en la fuente, con el fin de que la
            recuperación de materiales aprovechables sea mayor y los impactos
            sociales y ambientales negativos sean reducidos. Igualmente, el
            destino que le demos a los materiales que pueden ser reciclados o
            reutilizados, aumentarán la vida útil de los rellenos sanitarios de
            nuestro país, logrando así disminuir grandes impactos ambientales y
            aumentando el uso de nuevas tecnologías que permitan tratar los
            residuos urbanos que se generan en nuestro territorio de maneras más
            eficientes y sostenibles. (DNP, 2022)
          </p>

          <div className="flex justify-center my-6">
            <Image
              src="/blogs/cleanpack/separacionR/image.webp"
              width={700}
              height={600}
              alt="Diagrama separación en la fuente"
              className="rounded-lg shadow-lg object-contain w-full sm:w-4/5"
            />
          </div>
        </div>

        {/* ------------------ SECCIÓN 4 ------------------ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto a la izquierda en desktop, primero en móvil */}
          <div className="space-y-5 text-lg text-justify order-1 md:order-2">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Residuos aprovechables:
            </h2>
            <p>
              Son todos los residuos que por sus características se logran
              reintroducir a la cadena de valor (productiva) o aquellos que se
              les puede dar un uso diferente. La finalidad de estos residuos es
              que puedan ser reutilizados y reciclados.
            </p>

            {/* Imagen dentro del bloque de texto en móvil */}
            <div className="flex justify-center mt-6 md:hidden">
              <img
                src="/blogs/cleanpack/separacionR/Imagen5.webp"
                loading="lazy"
                decoding="async"
                alt="Residuos aprovechables"
                className="rounded-lg shadow-lg w-full sm:w-2/4 object-cover"
              />
            </div>
          </div>

          {/* Imagen a la derecha en desktop */}
          <div className="flex justify-center order-2 md:order-1 hidden md:flex">
            <img
              src="/blogs/cleanpack/separacionR/Imagen5.webp"
              loading="lazy"
              decoding="async"
              alt="Residuos aprovechables"
              className="rounded-lg shadow-lg w-full md:w-3/5 lg:w-2/4 object-cover"
            />
          </div>
        </div>
        {/* ------------------ SECCIÓN 4 ------------------ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto a la derecha en desktop, primero en móvil */}
          <div className="space-y-5 text-lg text-justify order-1 md:order-2">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Residuos no aprovechables:
            </h2>
            <p>
              Son aquellos residuos que por sus características no pueden ser
              aprovechados, por lo tanto, debe darse una disposición final
              adecuada y controlada, con el fin de evitar que esta disposición
              afecte al medio ambiente y a la salud pública de los ciudadanos
              del territorio.
            </p>

            {/* Imagen dentro del bloque de texto en móvil */}
            <div className="flex justify-center mt-6 md:hidden">
              <img
                src="/blogs/cleanpack/separacionR/Imagen6.webp"
                loading="lazy"
                decoding="async"
                alt="Residuos no aprovechables"
                className="rounded-lg shadow-lg w-full sm:w-3/4 object-cover"
              />
            </div>
          </div>

          {/* Imagen a la izquierda en desktop */}
          <div className="flex justify-center order-2 md:order-1 hidden md:flex">
            <img
              src="/blogs/cleanpack/separacionR/Imagen6.webp"
              loading="lazy"
              decoding="async"
              alt="Residuos no aprovechables"
              className="rounded-lg shadow-lg w-full md:w-4/5 lg:w-2/4 object-cover"
            />
          </div>
        </div>
        {/* ------------------ SECCIÓN 4 ------------------ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto a la derecha en desktop, primero en móvil */}
          <div className="space-y-5 text-lg text-justify order-1 md:order-2">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Residuos orgánicos aprovechables:
            </h2>
            <p>
              Son residuos biodegradables los cuales se componen naturalmente y
              tienen la propiedad de poder desintegrarse o degradarse
              rápidamente, transformándose en otra materia orgánica. La
              finalidad de estos residuos en el mercado es la elaboración de
              compostas, abonos y gas natural a través de la biotecnología.
            </p>

            {/* Imagen dentro del bloque de texto en móvil */}
            <div className="flex justify-center mt-6 md:hidden">
              <img
                src="/blogs/cleanpack/separacionR/Imagen7.webp"
                loading="lazy"
                decoding="async"
                alt="Residuos orgánicos aprovechables"
                className="rounded-lg shadow-lg w-full sm:w-3/4 object-cover"
              />
            </div>
          </div>

          {/* Imagen a la izquierda en desktop */}
          <div className="flex justify-center order-2 md:order-1 hidden md:flex">
            <img
              src="/blogs/cleanpack/separacionR/Imagen7.webp"
              loading="lazy"
              decoding="async"
              alt="Residuos orgánicos aprovechables"
              className="rounded-lg shadow-lg w-full md:w-4/5 lg:w-2/4 object-cover"
            />
          </div>
        </div>
        {/* ------------------ SECCIÓN 4 ------------------ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto a la izquierda en desktop, primero en móvil */}
          <div className="space-y-5 text-lg text-justify order-1 md:order-2">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Residuos Peligrosos:
            </h2>
            <p>
              Los residuos peligrosos o también identificados como RESPEL son
              materiales que llegan a causar efectos indeseados a la salud
              pública y el ambiente, debido a sus peligros intrínsecos. Se
              encuentran en estado sólido, semisólidos, líquidos o gases
              contenidos en recipientes. (Min ambiente, 2022)
            </p>

            {/* Imagen dentro del bloque de texto en móvil */}
            <div className="flex justify-center mt-6 md:hidden">
              <img
                src="/blogs/cleanpack/separacionR/Imagen8.webp"
                loading="lazy"
                decoding="async"
                alt="Residuos sólidos en Colombia"
                className="rounded-lg shadow-lg w-full sm:w-3/4 object-cover"
              />
            </div>
          </div>

          {/* Imagen a la izquierda en desktop */}
          <div className="flex justify-center order-2 md:order-1 hidden md:flex">
            <img
              src="/blogs/cleanpack/separacionR/Imagen8.webp"
              loading="lazy"
              decoding="async"
              alt="Residuos sólidos en Colombia"
              className="rounded-lg shadow-lg w-full md:w-2/5 lg:w-2/4 object-cover"
            />
          </div>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
