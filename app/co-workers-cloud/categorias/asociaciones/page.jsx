import Link from "next/link";
import { Users, Recycle, Store, ArrowRight } from "lucide-react";

const asociacionesMock = [];

export const metadata = {
  title: "Asociaciones de Reciclaje | Co-Workers Cloud",
  description:
    "Asociaciones, cooperativas y fundaciones que comercializan materiales reciclables dentro de Co-Workers Cloud.",
};

export default function AsociacionesPage() {
  return (
    <main className="bg-[#f7f9fc]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(69,201,62,0.2),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(0,1,128,0.15),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#45C93E]/10 text-[#45C93E] text-xs font-semibold">
            <Users className="w-4 h-4" />
            Categoría
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000180]">
            Asociaciones de Reciclaje
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl">
            Organizaciones, cooperativas y fundaciones que recuperan, clasifican
            y comercializan materiales reciclables dentro del centro comercial
            digital Co-Workers Cloud.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/marketplace"
              className="inline-flex items-center justify-center gap-2 bg-[#45C93E] hover:bg-[#399334] text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Ver en Waste Store <ArrowRight size={18} />
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

      {/* QUÉ SON */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#000180]">
              ¿Quiénes hacen parte de esta categoría?
            </h2>

            <p className="mt-4 text-gray-600">
              Esta categoría agrupa a organizaciones de base comunitaria y
              asociaciones formales que trabajan en la recuperación de residuos
              aprovechables y su comercialización dentro de un entorno digital
              confiable.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>♻ Cooperativas de recicladores</li>
              <li>♻ Fundaciones ambientales</li>
              <li>♻ Asociaciones comunitarias</li>
              <li>♻ Organizaciones de economía solidaria</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-[#45C93E]/10 p-10">
            <Recycle className="w-16 h-16 text-[#45C93E]" />
            <p className="mt-6 text-gray-700">
              Todas las asociaciones cuentan con su propia{" "}
              <strong>tienda digital</strong>, inventario actualizado y acceso
              directo al marketplace Waste Store.
            </p>
          </div>
        </div>
      </section>

      {/* SUBCATEGORÍAS */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#000180] text-center">
            Materiales más comercializados
          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Plástico",
              "Cartón y papel",
              "Vidrio",
              "Metales",
              "Residuos aprovechables",
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

      {/* TIENDAS (MOCK) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[#000180] text-center">
            Algunas asociaciones en Co-Workers Cloud
          </h3>

          {asociacionesMock.map((asociacion) => (
            <div
              key={asociacion.nombre}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Logo / Cover */}
              <div className="h-24 rounded-xl bg-gradient-to-br from-[#45C93E]/20 to-[#000180]/20 mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-[#000180]" />
              </div>

              <h4 className="font-bold text-[#000180]">{asociacion.nombre}</h4>

              <p className="mt-2 text-sm text-gray-600">
                {asociacion.descripcion}
              </p>

              <span className="mt-3 inline-block text-xs font-medium text-[#45C93E]">
                {asociacion.ubicacion}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="crear-tienda"
        className="py-24 bg-[#000180] text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">
          ¿Eres una asociación de reciclaje?
        </h2>

        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Crea tu tienda digital, gestiona tu inventario y vende dentro del
          centro comercial Co-Workers Cloud.
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
