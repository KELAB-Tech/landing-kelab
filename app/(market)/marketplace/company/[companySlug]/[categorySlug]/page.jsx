import Image from "next/image";
import Link from "next/link";

import { products } from "@/app/(market)/marketplace/data/products";
import { companies } from "@/app/(market)/marketplace/data/companies";
import { categories } from "@/app/(market)/marketplace/data/categories";

export default async function ProductsByCategoryPage({ params }) {
  const { companySlug, categorySlug } = await params;

  const company = companies.find((c) => c.slug === companySlug);
  const category = categories.find((c) => c.slug === categorySlug);

  const filteredProducts = products.filter(
    (p) => p.companyId === company?.id && p.category === categorySlug
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-10">
      <h1 className="text-3xl font-extrabold text-[#000180]">
        {category?.name} – {company?.name}
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/marketplace/${product.slug}`}
            className="bg-white rounded-3xl shadow hover:shadow-xl transition"
          >
            <div className="relative h-48 rounded-t-3xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-[#45C93E] font-bold mt-2">${product.price}</p>
            </div>
          </Link>
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-gray-500 col-span-full">
            No hay productos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}
