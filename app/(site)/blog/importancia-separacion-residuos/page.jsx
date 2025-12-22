import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

// IMÁGENES EN PUBLIC (se cargan con rutas absolutas)
const ruta = "/blogs/separacion/";

// Metadata optimizada
export const metadata = {
  title: "Importancia de la Separación de Residuos | Clean Pack",
  description:
    "Aprende por qué la separación de residuos sólidos es clave para la economía circular, la sostenibilidad y la correcta gestión ambiental en Colombia.",
  keywords:
    "separación de residuos, residuos sólidos, reciclaje en Colombia, economía circular, sostenibilidad, residuos aprovechables, residuos orgánicos, residuos peligrosos",
  openGraph: {
    title: "Importancia de la Separación de Residuos | Clean Pack",
    description:
      "Descubre la importancia de la separación de residuos sólidos en la fuente para mejorar la sostenibilidad en Colombia.",
    type: "article",
    url: "https://www.tu-dominio.com/blogs/importancia-separacion-residuos",
    images: [
      {
        url: "https://www.tu-dominio.com/static/separacion-residuos.jpg",
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
              aprovechables...
            </p>

            {/* Imagen móvil */}
            <div className="flex justify-center md:hidden mt-6">
              <Image
                src={`${ruta}Imagen1.webp`}
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
              src={`${ruta}Imagen1.webp`}
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
              para cumplir los Objetivos de Desarrollo Sostenible...
            </p>

            {/* Imagen móvil */}
            <div className="md:hidden flex justify-center mt-6">
              <Image
                src={`${ruta}Imagen2.webp`}
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
              src={`${ruta}Imagen2.webp`}
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
              La separación en la fuente es clave para introducir materiales en
              nuevos procesos productivos...
            </p>

            <div className="md:hidden flex justify-center mt-6">
              <Image
                src={`${ruta}Imagen3.webp`}
                width={500}
                height={400}
                alt="Residuos sólidos en Colombia"
                className="rounded-lg shadow-lg object-cover w-full sm:w-3/4"
              />
            </div>
          </div>

          <div className="hidden md:flex justify-center order-2 md:order-1">
            <Image
              src={`${ruta}Imagen3.webp`}
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
            participación de todos los ciudadanos...
          </p>

          <div className="flex justify-center my-6">
            <Image
              src={`${ruta}image.webp`}
              width={700}
              height={600}
              alt="Diagrama separación en la fuente"
              className="rounded-lg shadow-lg object-contain w-full sm:w-4/5"
            />
          </div>
        </div>

        {/* ------------------ RESTO DE SECCIONES (5, 6, 7, 8) ------------------ */}
        {[
          { img: "Imagen5.webp", title: "Residuos aprovechables" },
          { img: "Imagen6.webp", title: "Residuos no aprovechables" },
          { img: "Imagen7.webp", title: "Residuos orgánicos aprovechables" },
          { img: "Imagen8.webp", title: "Residuos peligrosos" },
        ].map((sec, index) => (
          <div
            key={index}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-5 text-lg text-justify order-1 md:order-2">
              <h2 className="text-2xl font-bold text-[#45C93E]">{sec.title}</h2>
              <p>
                {/* Puedes personalizar según cada sección */}
                Información correspondiente a {sec.title.toLowerCase()}...
              </p>
              <div className="md:hidden flex justify-center mt-6">
                <Image
                  src={`${ruta}${sec.img}`}
                  width={500}
                  height={400}
                  alt={sec.title}
                  className="rounded-lg shadow-lg object-cover w-full sm:w-3/4"
                />
              </div>
            </div>

            <div className="hidden md:flex justify-center order-2 md:order-1">
              <Image
                src={`${ruta}${sec.img}`}
                width={500}
                height={400}
                alt={sec.title}
                className="rounded-lg shadow-lg object-cover w-full md:w-4/5 lg:w-2/4"
              />
            </div>
          </div>
        ))}
      </div>

      <ContactoBlog />
    </section>
  );
}
