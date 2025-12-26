import CloudCategoriesGrid from "../components/CloudCategoriesGrid";

export const metadata = {
  title: "Categorías | Co-Workers Cloud",
  description:
    "Explora las categorías del centro comercial digital Co-Workers Cloud.",
};

export default function CategoriesPage() {
  return (
    <main className="bg-[#f7f9fc]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(69,201,62,0.18),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(0,1,128,0.18),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#45C93E]/10 text-[#45C93E] text-xs font-semibold tracking-wide">
            Categorías
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000180]">
            El ecosistema que impulsa la economía circular
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Co-Workers Cloud organiza a los actores de la economía circular en
            categorías claras para facilitar la conexión, el comercio y la
            colaboración dentro del centro comercial digital.
          </p>
        </div>
      </section>

      {/* GRID DE CATEGORÍAS */}
      <CloudCategoriesGrid />

      {/* CÓMO FUNCIONA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#000180]">
              ¿Cómo funciona Co-Workers Cloud?
            </h2>
            <p className="mt-4 text-gray-600">
              Un modelo simple, centralizado y diseñado para escalar.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <Step
              number="01"
              title="Explora categorías"
              text="Identifica asociaciones, gestores o transformadores según tu necesidad."
            />
            <Step
              number="02"
              title="Conecta con tiendas"
              text="Cada empresa cuenta con su propia tienda dentro de Waste Store."
            />
            <Step
              number="03"
              title="Compra, vende y gestiona"
              text="Todo el proceso ocurre dentro de un solo sistema en la nube."
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-[#000180] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Descubre el centro comercial digital
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Accede a Waste Store y conecta con empresas de toda la cadena de
            valor de la economía circular.
          </p>

          <a
            href="/marketplace"
            className="inline-block mt-8 bg-[#45C93E] hover:bg-[#399334] text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
          >
            Entrar a Waste Store
          </a>
        </div>
      </section>
    </main>
  );
}

/* ---------- helpers ---------- */

function Step({ number, title, text }) {
  return (
    <div className="text-center">
      <span className="text-5xl font-extrabold text-[#45C93E]/30">
        {number}
      </span>
      <h3 className="mt-4 text-xl font-bold text-[#000180]">{title}</h3>
      <p className="mt-3 text-sm text-gray-600 max-w-sm mx-auto">{text}</p>
    </div>
  );
}
