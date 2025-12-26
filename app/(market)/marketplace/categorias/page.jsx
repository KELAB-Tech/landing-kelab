import Image from "next/image";
import Link from "next/link";

import { products } from "@/app/(market)/marketplace/data/products";
import { categories } from "@/app/(market)/marketplace/data/categories";

export default function CategoriasPage({ searchParams }) {
  const slug = searchParams?.slug;

  const category = slug ? categories.find((c) => c.slug === slug) : null;

  const filteredProducts = slug
    ? products.filter((p) => p.category === slug)
    : [];

  // 👉 LISTADO GENERAL
  if (!slug) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-extrabold text-[#000180] mb-10">
          Categorías
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/marketplace/categorias?slug=${cat.slug}`}
              className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition"
            >
              <p className="font-semibold text-[#45C93E]">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  // 👉 CATEGORÍA GLOBAL
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-10">
      <h1 className="text-3xl font-extrabold text-[#000180]">
        {category?.name}
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
