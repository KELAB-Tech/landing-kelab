import Link from "next/link";
import {
  Factory,
  Settings,
  Recycle,
  ArrowRight,
  Store,
  Layers,
} from "lucide-react";

const transformadoresMock = [
  {
    nombre: "DPWateringSAS",
    descripcion: "Innovación en tratamiento de fluidos.",
    ubicacion: "Itagüí, Antioquia",
  },
];

export const metadata = {
  title: "Transformadores | Co-Workers Cloud",
  description:
    "Empresas transformadoras que convierten residuos en nuevos productos dentro del centro comercial digital Co-Workers Cloud.",
};

export default function TransformadoresPage() {
  return (
    <main className="bg-[#f7f9fc]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(69,201,62,0.18),transparent_45%),radial-gradient(circle_at_75%_80%,rgba(0,1,128,0.18),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#45C93E]/10 text-[#45C93E] text-xs font-semibold">
            <Factory className="w-4 h-4" />
            Categoría
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000180]">
            Transformadores
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl">
            Empresas que convierten residuos en nuevos productos, materias
            primas o insumos industriales, generando valor dentro de la economía
            circular.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/marketplace"
              className="inline-flex items-center justify-center gap-2 bg-[#45C93E] hover:bg-[#399334] text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Ver productos transformados <ArrowRight size={18} />
            </Link>

            <Link
              href="/pqrs"
              className="inline-flex items-center justify-center gap-2 border border-[#000180]/20 text-[#000180] px-7 py-3 rounded-xl font-semibold hover:bg-[#000180]/5 transition"
            >
              Crear mi planta digital <Store size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUÉ HACEN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#000180]">
              ¿Qué hacen los transformadores?
            </h2>

            <p className="mt-4 text-gray-600">
              Los transformadores reciben materiales aprovechables y los
              convierten en productos, insumos o materias primas reutilizables,
              cerrando el ciclo productivo.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>🏭 Procesamiento industrial de residuos</li>
              <li>⚙ Transformación en nuevos productos</li>
              <li>📦 Venta de materiales procesados</li>
              <li>📈 Escalamiento productivo y comercial</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-[#45C93E]/10 p-10">
            <Layers className="w-16 h-16 text-[#45C93E]" />
            <p className="mt-6 text-gray-700">
              Cada transformador cuenta con una{" "}
              <strong>vitrina industrial digital</strong>, donde exhibe
              productos, gestiona pedidos y conecta con compradores B2B y B2C.
            </p>
          </div>
        </div>
      </section>

      {/* TIPOS DE TRANSFORMACIÓN */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#000180] text-center">
            Tipos de transformación
          </h3>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Recycle, label: "Plásticos reciclados" },
              { icon: Settings, label: "Procesos industriales" },
              { icon: Factory, label: "Manufactura sostenible" },
              { icon: Layers, label: "Materia prima secundaria" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition text-center"
              >
                <Icon className="w-10 h-10 mx-auto text-[#000180]" />
                <p className="mt-4 font-semibold text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRESAS (MOCK) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#000180] text-center">
            Transformadores activos
          </h3>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {transformadoresMock.map((transformador) => (
              <Link
                key={transformador.nombre}
                href={`/marketplace/company/${transformador.nombre
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg transition"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#45C93E]/15 flex items-center justify-center">
                    <Factory className="w-5 h-5 text-[#000180]" />
                  </div>

                  <h4 className="font-semibold text-[#000180] leading-tight">
                    {transformador.nombre}
                  </h4>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {transformador.descripcion}
                </p>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#45C93E]">
                    {transformador.ubicacion}
                  </span>

                  <span className="text-xs font-semibold text-[#000180] opacity-0 group-hover:opacity-100 transition">
                    Ver perfil →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="crear-tienda"
        className="py-24 bg-[#000180] text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">
          ¿Transformas residuos en valor?
        </h2>

        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Publica tus productos, gestiona pedidos y escala tu operación dentro
          del ecosistema Co-Workers Cloud.
        </p>

        <Link
          href="/marketplace"
          className="inline-block mt-8 bg-[#45C93E] hover:bg-[#399334] text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
        >
          Crear mi vitrina industrial
        </Link>
      </section>
    </main>
  );
}
