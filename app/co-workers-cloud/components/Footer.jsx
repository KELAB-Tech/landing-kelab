"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">CoWorkersCloud</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Infraestructura digital para la economía circular empresarial.
            Plataforma impulsada por{" "}
            <span className="text-white font-semibold">R&R KELAB S.A.S.</span>{" "}
            con más de una década de experiencia técnica en consultoría
            ambiental e implementación de soluciones sostenibles.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            Preparado para expansión LATAM y mercados internacionales.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">
            Plataforma
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="#benefits"
                className="hover:text-[#45C93E] transition"
              >
                Beneficios
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="hover:text-[#45C93E] transition"
              >
                Características
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-[#45C93E] transition">
                Planes
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-[#45C93E] transition">
                Preguntas
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">
            Contacto
          </h4>

          <div className="space-y-3 text-sm text-gray-400">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Línea Principal
              </p>
              <p className="text-white">300 401 4299</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Líneas Secundaria
              </p>
              <p className="text-white">318 665 9462 — 313 671 5765</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Email
              </p>
              <p className="text-white">ambiental@kelab.com.co</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Ubicación
              </p>
              <p className="text-white">Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        {/* Institucional */}
        <div>
          <h4 className="text-white font-semibold mb-5 tracking-wide">
            Institucional
          </h4>

          <p className="text-sm text-gray-400 leading-relaxed">
            Tecnología aplicada bajo estándares de seguridad digital,
            trazabilidad estructurada y cumplimiento normativo ambiental.
          </p>

          <div className="mt-6 text-xs text-gray-500">
            Infraestructura empresarial para mercados circulares | LATAM ·
            Global Ready
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-14 border-t border-white/5 pt-6 text-center text-xs text-gray-500">
        © 2026 CoWorkersCloud <br />
        R&R KELAB S.A.S. — Todos los derechos reservados.
      </div>
    </footer>
  );
}
