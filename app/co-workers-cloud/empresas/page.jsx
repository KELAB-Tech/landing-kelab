import Image from "next/image";
import Link from "next/link";
import { companies } from "@/app/(market)/marketplace/data/companies";

export const metadata = {
  title: "Empresas asociadas | Co-Workers Cloud",
  description:
    "Conoce las empresas que hacen parte del centro comercial digital Co-Workers Cloud.",
};

export default function CloudEmpresasPage() {
  return (
    <main className="bg-[#f7f9fc]">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000180] to-[#000180]/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Empresas Asociadas
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Descubre las organizaciones que hacen parte del centro comercial
            digital Co-Workers Cloud.
          </p>
        </div>
      </section>

      {/* LISTADO */}
      <section className="-mt-16 relative z-20 max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <Link
              key={company.id}
              href={`/co-workers-cloud/empresas/${company.slug}`}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-[#f7f9fc] rounded-2xl flex items-center justify-center mb-6">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                  />
                </div>

                <h3 className="text-xl font-bold text-[#000180] group-hover:text-[#45C93E] transition">
                  {company.name}
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  {company.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-[#45C93E]">
                  Ver perfil →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
