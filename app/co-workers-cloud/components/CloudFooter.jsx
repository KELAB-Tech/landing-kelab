"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function CloudFooter() {
  return (
    <footer className="bg-[#0b0f3b] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 lg:grid-cols-4">
        {/* BRAND */}
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-white">
            Co-Workers <span className="text-[#45C93E]">Cloud</span>
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Centro comercial digital donde asociaciones, gestores y
            transformadores operan, venden y escalan dentro de un ecosistema
            conectado.
          </p>
        </div>

        {/* EMPRESAS */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Empresas</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <p className="text-gray-400 leading-relaxed">
                <strong className="text-gray-200">
                  R&R Knowledge, Engineering & Lab S.A.S
                </strong>{" "}
                es una firma de consultoría integral en el campo de la gestión
                ambiental y la gestión del conocimiento e innovación.
              </p>
            </li>
            <li>
              <p className="text-gray-400 leading-relaxed">
                <strong className="text-gray-200">R&R KELAB S.A.S</strong>{" "}
                genera información confiable y ofrece soluciones innovadoras y
                sostenibles que impulsan el mejoramiento continuo y la
                competitividad de sus clientes.
              </p>
            </li>
          </ul>
        </div>

        {/* ENLACES */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Plataforma</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/co-workers-cloud"
                className="hover:text-white transition"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/marketplace" className="hover:text-white transition">
                Waste Store
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Beneficios
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link href="/pqrs" className="hover:text-white transition">
                PQRS
              </Link>
            </li>
          </ul>
        </div>

        {/* REDES */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Síguenos</h4>

          <div className="flex gap-4">
            <SocialLink
              href="https://www.linkedin.com/company/kelab/posts/?feedView=all"
              icon={<Linkedin size={18} />}
            />
            <SocialLink
              href="https://www.instagram.com/kelabco/"
              icon={<Instagram size={18} />}
            />
            <SocialLink
              href="https://www.facebook.com/KelabCo"
              icon={<Facebook size={18} />}
            />
            <SocialLink
              href="https://x.com/KelabCo"
              icon={<Twitter size={18} />}
            />
            <SocialLink
              href="https://www.youtube.com/@KelabCo"
              icon={<Youtube size={18} />}
            />
          </div>

          <p className="mt-6 text-xs text-gray-400 max-w-xs">
            Conectamos sostenibilidad, innovación y tecnología para transformar
            la gestión ambiental.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Co-Workers Cloud · Todos los derechos
            reservados
          </p>

          <p>
            Powered by{" "}
            <span className="text-gray-200 font-medium">R&R KELAB S.A.S</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* -------- helper -------- */

function SocialLink({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Red social"
      className="w-10 h-10 flex items-center justify-center rounded-full
                 bg-white/10 hover:bg-[#45C93E]
                 text-white transition
                 hover:scale-110"
    >
      {icon}
    </a>
  );
}
