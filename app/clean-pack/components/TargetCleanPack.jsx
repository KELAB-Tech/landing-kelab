"use client";

import Image from "next/image";
import {
  Factory,
  Droplets,
  Sparkles,
  Milk,
  Wine,
  Candy,
  Package,
  ShoppingCart,
} from "lucide-react";

export default function TargetCleanPack() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-white via-[#f4f8ff] to-white">
      {/* Fondos decorativos suaves */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-[#45C93E]/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-[#000180]/5 rounded-full blur-[150px] animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-24 relative">
          {/* Ardillita decorativa */}
          <div className="absolute -right-16 -top-10 hidden md:block">
            <Image
              src="/marketplace/mascota/eco1.png" // ajusta ruta
              alt="Mascota Clean Pack"
              width={90}
              height={90}
              className="animate-bounce-slow"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#000180] leading-tight">
            ¿Su empresa está obligada a cumplir con la REP?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Clean Pack está diseñado para fabricantes, importadores y
            comercializadores que ponen en el mercado productos en envases o
            empaques de un solo uso, conforme a la Resolución 803 de 2024.
          </p>
        </div>

        {/* Grid sectores mejorado */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-28">
          <Sector icon={<Droplets size={26} />} label="Productos de aseo" />
          <Sector icon={<Sparkles size={26} />} label="Cosméticos" />
          <Sector icon={<Milk size={26} />} label="Lácteos" />
          <Sector icon={<Wine size={26} />} label="Bebidas y licores" />
          <Sector icon={<Candy size={26} />} label="Snacks y confitería" />
          <Sector icon={<Factory size={26} />} label="Alimentos empacados" />
          <Sector
            icon={<ShoppingCart size={26} />}
            label="Retail / marca propia"
          />
          <Sector icon={<Package size={26} />} label="Importadores" />
        </div>

        {/* Card materiales mejorada */}
        <div className="relative bg-white border border-gray-200 rounded-3xl p-14 text-center max-w-4xl mx-auto shadow-lg hover:shadow-xl transition duration-500">
          <div className="h-1 w-24 bg-gradient-to-r from-[#45C93E] to-[#000180] rounded-full mx-auto mb-8" />

          <h3 className="text-xl font-semibold text-[#000180] mb-8">
            Tipos de envases y materiales cubiertos
          </h3>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {["Plástico", "Cartón", "Papel", "Vidrio", "Metal"].map((item) => (
              <span
                key={item}
                className="px-5 py-2 rounded-full bg-[#45C93E]/10 text-[#000180] border border-[#45C93E]/20"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Aplicable a envases primarios y secundarios puestos en el mercado
            nacional bajo marca propia o importación directa.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Card sector mejorado */
function Sector({ icon, label }) {
  return (
    <div className="group text-center transition-all duration-300 hover:-translate-y-2">
      <div className="mx-auto w-18 h-18 flex items-center justify-center rounded-2xl bg-white border border-gray-200 text-[#45C93E] mb-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[#000180]/30">
        {icon}
      </div>

      <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-[#000180] transition">
        {label}
      </span>
    </div>
  );
}
