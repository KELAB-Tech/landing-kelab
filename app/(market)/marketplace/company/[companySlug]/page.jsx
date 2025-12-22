import Image from "next/image";
import Link from "next/link";

import { companies } from "@/app/(market)/marketplace/data/companies";
import { categories } from "@/app/(market)/marketplace/data/categories";

export default async function CompanyProfilePage({ params }) {
  const { companySlug } = await params;

  const company = companies.find((c) => c.slug === companySlug);

  if (!company) {
    return <div className="py-20 text-center">Empresa no encontrada</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      {/* Header */}
      <div className="flex items-center gap-6">
        <Image
          src={company.logo}
          alt={company.name}
          width={100}
          height={100}
          className="rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-extrabold text-[#000180]">
            {company.name}
          </h1>
          <p className="text-gray-600 mt-2">{company.description}</p>
        </div>
      </div>

      {/* Categorías */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Categorías</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {company.categories.map((catSlug) => {
            const cat = categories.find((c) => c.slug === catSlug);

            return (
              <Link
                key={catSlug}
                href={`/marketplace/company/${company.slug}/${catSlug}`}
                className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition"
              >
                <p className="font-semibold text-[#45C93E]">
                  {cat?.name || catSlug}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
