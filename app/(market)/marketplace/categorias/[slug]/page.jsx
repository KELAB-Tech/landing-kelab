import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { categories } from "@/app/(market)/marketplace/data/categories";
import { products } from "@/app/(market)/marketplace/data/products";
import { companies } from "@/app/(market)/marketplace/data/companies";

// 🔑 esto fuerza a Next a aceptar slugs dinámicos
export const dynamicParams = true;

export default function CategorySlugPage({ params }) {
  const slug = params.slug; // ← NO validar antes

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const filteredProducts = products.filter((p) => p.category === slug);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      <header>
        <p className="text-sm uppercase tracking-widest text-[#45C93E]">
          Categoría
        </p>
        <h1 className="text-4xl font-extrabold text-[#000180] mt-2">
          {category.name}
        </h1>
      </header>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No hay productos en esta categoría.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const company = companies.find((c) => c.id === product.companyId);

            return (
              <Link
                key={product.id}
                href={`/marketplace/company/${company?.slug}/${slug}`}
                className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{company?.name}</p>
                  <p className="font-bold text-[#45C93E]">${product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
