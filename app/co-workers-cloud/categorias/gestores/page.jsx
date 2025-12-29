import Link from "next/link";
import { Truck, Recycle, ClipboardList, ArrowRight, Store } from "lucide-react";

const gestoresMock = [
  {
    nombre: "GRI Consultores",
    descripcion:
      "Empresa especializada en gestión ambiental, transporte y valorización de residuos.",
    ubicacion: "Bogotá, Colombia",
  },
  {
    nombre: "Soluciones Ambientales SAS",
    descripcion:
      "Gestión integral de residuos y soluciones ambientales sostenibles",
    ubicacion: "Medellín, Colombia",
  },
];

export const metadata = {
  title: "Gestores Ambientales | Co-Workers Cloud",
  description:
    "Empresas gestoras ambientales que prestan servicios de recolección, transporte y gestión integral de residuos en Co-Workers Cloud.",
};

export default function GestoresPage() {
  return (
    <main className="bg-[#f7f9fc]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,1,128,0.18),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(69,201,62,0.15),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#000180]/10 text-[#000180] text-xs font-semibold">
            <Truck className="w-4 h-4" />
            Categoría
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000180]">
            Gestores Ambientales
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl">
            Empresas especializadas en la recolección, transporte, clasificación
            y gestión integral de residuos, conectadas dentro del centro
            comercial digital Co-Workers Cloud.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/marketplace"
              className="inline-flex items-center justify-center gap-2 bg-[#45C93E] hover:bg-[#399334] text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Ver servicios en Waste Store <ArrowRight size={18} />
            </Link>

            <Link
              href="/pqrs"
              className="inline-flex items-center justify-center gap-2 border border-[#000180]/20 text-[#000180] px-7 py-3 rounded-xl font-semibold hover:bg-[#000180]/5 transition"
            >
              Crear mi tienda <Store size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUIÉNES SON */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#000180]">
              ¿Qué hacen los gestores ambientales?
            </h2>

            <p className="mt-4 text-gray-600">
              Los gestores ambientales son responsables de garantizar el manejo
              adecuado de los residuos, cumpliendo la normativa ambiental y
              optimizando los procesos logísticos dentro de la economía
              circular.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>🚚 Recolección y transporte especializado</li>
              <li>📋 Gestión documental y trazabilidad</li>
              <li>♻ Clasificación y pretratamiento</li>
              <li>📊 Reportes ambientales y cumplimiento normativo</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-[#000180]/10 p-10">
            <ClipboardList className="w-16 h-16 text-[#000180]" />
            <p className="mt-6 text-gray-700">
              Cada gestor cuenta con una <strong>tienda de servicios</strong>,
              donde puede ofrecer soluciones ambientales, gestionar solicitudes
              y conectar con clientes desde un solo sistema.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS PRINCIPALES */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#000180] text-center">
            Servicios más demandados
          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Recolección de residuos",
              "Transporte autorizado",
              "Gestión integral",
              "Trazabilidad",
              "Gestión documental",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRESAS (MOCK) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#000180] text-center">
            Gestores ambientales en la plataforma
          </h3>

          {gestoresMock.map((gestor) => (
            <Link
              key={gestor.nombre}
              href="https://marketplace-kelab-b4si.vercel.app/categorias"
              className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#000180]/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#000180]" />
                </div>

                <h4 className="font-semibold text-[#000180] leading-tight">
                  {gestor.nombre}
                </h4>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {gestor.descripcion}
              </p>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[#45C93E]">
                  {gestor.ubicacion}
                </span>

                <span className="text-xs font-semibold text-[#000180] opacity-0 group-hover:opacity-100 transition">
                  Ver perfil →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="crear-tienda"
        className="py-24 bg-[#000180] text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">
          ¿Eres un gestor ambiental?
        </h2>

        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Digitaliza tus servicios, gestiona clientes y escala tu operación
          dentro de Co-Workers Cloud.
        </p>

        <Link
          href="/marketplace"
          className="inline-block mt-8 bg-[#45C93E] hover:bg-[#399334] text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
        >
          Crear mi tienda
        </Link>
      </section>
    </main>
  );
}
