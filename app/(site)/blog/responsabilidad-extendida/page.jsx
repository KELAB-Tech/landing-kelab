import Image from "next/image";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";

export const metadata = {
  title: "Responsabilidad Extendida del Productor | Subsanación y Cumplimiento",
  description:
    "Aprende cómo subsanar vigencias pasadas y cumplir con la Responsabilidad Extendida del Productor mediante planes individuales o colectivos como Clean Pack.",
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
  ],
  openGraph: {
    title:
      "Responsabilidad Extendida del Productor – Subsanación de Vigencias Pasadas",
    description:
      "Guía sobre cumplimiento, planes individuales y plan colectivo Clean Pack para envases y empaques.",
    url: "https://www.tu-dominio.com/blog/responsabilidad-extendida",
    type: "article",
    images: [
      {
        url: "/og/responsabilidad-extendida.jpg",
        width: 1200,
        height: 630,
        alt: "Responsabilidad Extendida del Productor Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Responsabilidad Extendida del Productor | Cumplimiento y Vigencias Pasadas",
    description:
      "Cómo subsanar vigencias pasadas y cumplir normativamente con Clean Pack.",
    images: ["/og/responsabilidad-extendida.jpg"],
  },
  alternates: {
    canonical: "https://www.tu-dominio.com/blog/responsabilidad-extendida",
  },
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
            ha avanzado con fuerza para impulsar la sostenibilidad...
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
            Para cumplir con la Responsabilidad Extendida del Productor, las
            empresas tienen dos alternativas...
          </p>

          {/* TABLA */}
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
                    La gestión se comparte entre afiliados.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Costos</td>
                  <td className="px-4 py-3">Más altos por logística.</td>
                  <td className="px-4 py-3">
                    Económicos por gestión conjunta.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3 font-semibold">Acompañamiento</td>
                  <td className="px-4 py-3">Limitado.</td>
                  <td className="px-4 py-3">Constante asesoría técnica.</td>
                </tr>
              </tbody>
            </table>
          </div>

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
            Mientras se adelanta la subsanación con el plan individual, la
            empresa puede afiliarse al plan colectivo...
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Delegar toda la gestión ante la ANLA.</li>
            <li>Sistema de trazabilidad y certificación.</li>
            <li>Capacitaciones y campañas ambientales.</li>
            <li>Aprovechamiento garantizado.</li>
          </ul>
        </div>

        {/* ------------------ SECCIÓN 3 ------------------ */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-[17px] text-justify order-1 md:order-2">
            <h2 className="text-2xl font-bold text-[#45C93E]">
              Clean Pack: Un Aliado Estratégico
            </h2>
            <p>
              Clean Pack brinda acompañamiento integral para facilitar el
              cumplimiento normativo y promover la sostenibilidad...
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
            ¿Qué ofrece el plan colectivo Clean Pack?
          </h2>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Afiliación y vinculación formal.</strong> Acceso completo
              al plan colectivo.
            </li>
            <li>
              <strong>Certificación y trazabilidad.</strong> Gestión y
              aprovechamiento garantizado.
            </li>
            <li>
              <strong>Informe anual de seguimiento.</strong> Radicado ante ANLA.
            </li>
            <li>
              <strong>Capacitaciones y sensibilización.</strong>
            </li>
            <li>
              <strong>Investigación y ecodiseño.</strong>
            </li>
            <li>
              <strong>Asesoría técnica permanente.</strong>
            </li>
            <li>
              <strong>Medición de huella de carbono.</strong>
            </li>
          </ol>
        </div>

        {/* ------------------ REFERENCIAS ------------------ */}
        <div className="mt-16 space-y-6 text-lg text-justify">
          <h2 className="text-2xl font-bold text-[#45C93E]">Referencias</h2>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              Ministerio de Ambiente y Desarrollo Sostenible (2024) — Gestión de
              residuos de envases y empaques.
            </li>
            <li>
              R&R Kelab SAS (2024) — Relación Plan Colectivo y Tienda Virtual.
            </li>
          </ol>
        </div>
      </div>

      <ContactoBlog />
    </section>
  );
}
