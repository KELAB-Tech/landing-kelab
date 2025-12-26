"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Search,
  ChevronDown,
  Recycle,
  Wrench,
  Factory,
  HelpCircle,
  Phone,
  Store,
} from "lucide-react";

import { useCartStore } from "@/app/(market)/marketplace/store/cartStore";
/* ================= SEARCH ================= */
import { useMarketplaceSearch } from "../hooks/useMarketplaceSearch";
import { products } from "../data/products";

export default function NavbarMarketplace() {
  const [openCategorias, setOpenCategorias] = useState(false);
  const [openMas, setOpenMas] = useState(false);
  const { query, setQuery, results } = useMarketplaceSearch(products);

  const items = useCartStore((s) => s.items);

  /* ================= CART COUNT ================= */
  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const closeMenus = () => {
    setOpenCategorias(false);
    setOpenMas(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
        {/* ================= LOGO ================= */}
        <Link
          href="/marketplace"
          onClick={closeMenus}
          className="flex items-center gap-0 whitespace-nowrap"
        >
          <Image
            src="/co-workers/co-logo.svg"
            alt="WasteStore Logo"
            width={70}
            height={70}
            priority
            className="-mr-1 -ml-5"
          />
          <span className="text-2xl font-bold text-[#000180] leading-none">
            Co-Workers <span className="text-[#45C93E]">Cloud</span>
          </span>
        </Link>

        {/* ================= CATEGORÍAS ================= */}
        <div className="relative">
          <button
            onClick={() => {
              setOpenCategorias((v) => !v);
              setOpenMas(false);
            }}
            className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#000180]"
          >
            Categorías
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openCategorias ? "rotate-180" : ""
              }`}
            />
          </button>

          {openCategorias && (
            <div className="absolute top-full mt-3 w-72 bg-white border rounded-2xl shadow-xl overflow-hidden">
              <Link
                onClick={closeMenus}
                href="/marketplace/materiales"
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <Recycle className="w-5 h-5 text-[#45C93E]" />
                Asociaciones de Reciclaje
              </Link>

              <Link
                onClick={closeMenus}
                href="/marketplace/servicios"
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <Wrench className="w-5 h-5 text-[#45C93E]" />
                Empresas Gestoras
              </Link>

              <Link
                onClick={closeMenus}
                href="/marketplace/transformadores"
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <Factory className="w-5 h-5 text-[#45C93E]" />
                Empresas Transformadoras
              </Link>

              <Link
                onClick={closeMenus}
                href="/marketplace/transportadores"
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <Factory className="w-5 h-5 text-[#45C93E]" />
                Empresas Transportadoras
              </Link>
            </div>
          )}
        </div>

        {/* ================= MÁS ================= */}
        <div className="relative">
          <button
            onClick={() => {
              setOpenMas((v) => !v);
              setOpenCategorias(false);
            }}
            className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#000180]"
          >
            Más
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openMas ? "rotate-180" : ""
              }`}
            />
          </button>

          {openMas && (
            <div className="absolute top-full mt-3 w-64 bg-white border rounded-2xl shadow-xl overflow-hidden">
              <Link
                onClick={closeMenus}
                href="/faq"
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <HelpCircle className="w-5 h-5 text-[#45C93E]" />
                Preguntas frecuentes
              </Link>

              <Link
                onClick={closeMenus}
                href="/contacto"
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <Phone className="w-5 h-5 text-[#45C93E]" />
                Contacto
              </Link>

              <Link
                onClick={closeMenus}
                href="https://kelab.com.co/paginas/inicio"
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50"
              >
                <Store className="w-5 h-5 text-[#45C93E]" />
                Administre su tienda
              </Link>
            </div>
          )}
        </div>

        {/* ================= SEARCH ================= */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Buscar materiales, maquinaria o servicios..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#45C93E]"
          />

          {/* RESULTS */}
          {results.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white border rounded-xl shadow-xl z-50 overflow-hidden">
              {results.map((r) => (
                <Link
                  key={r.id}
                  href={r.href}
                  onClick={closeMenus}
                  className="block px-4 py-3 hover:bg-gray-50"
                >
                  <p className="font-semibold text-gray-800">{r.title}</p>
                  <p className="text-xs text-gray-500">
                    {r.category} • {r.company}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ================= CART ================= */}
        <Link
          href="/marketplace/checkout"
          onClick={closeMenus}
          className="relative p-2 rounded-lg hover:bg-gray-100"
        >
          <ShoppingCart className="w-6 h-6 text-[#000180]" />

          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#45C93E] text-white text-xs min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
