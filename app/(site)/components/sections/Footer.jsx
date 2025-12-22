import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#00084D] to-[#000033] text-gray-200 pt-20 pb-10 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 will-change-transform">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#45C93E]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#45C93E]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 border-b border-[#45C93E]/30 pb-10">
        {/* Logo y descripción */}
        <div>
          <h3 className="text-2xl font-extrabold text-white mb-4">
            R&R Kelab S.A.S
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Consultoría especializada en sostenibilidad, innovación e
            investigación aplicada al desarrollo ambiental y empresarial en
            Colombia.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Nuestra Firma", href: "#about" },
              { name: "Servicios", href: "#services" },
              { name: "Innovación", href: "#innovation" },
              { name: "Clientes", href: "#clients" },
              { name: "Contáctanos", href: "#contact" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  aria-label={`Ir a ${link.name}`}
                  className="hover:text-[#45C93E] transition-colors block py-2"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <Link
                href="/pqrs"
                aria-label="Ir a PQRS"
                className="flex items-center gap-2 font-semibold text-[#45C93E] hover:text-white transition-all py-2"
              >
                <FileText className="w-4 h-4" />
                PQRS
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/faq"
                aria-label="Ir a FAQ"
                className="flex items-center gap-2 font-semibold text-[#45C93E] hover:text-white transition-all py-2"
              >
                <HelpCircle className="w-4 h-4" />
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#45C93E]" />
                <span className="font-semibold text-white">Línea Aguas:</span>
              </div>
              <span className="ml-6 text-gray-300">300 401 4299</span>
            </li>

            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#45C93E]" />
                <span className="font-semibold text-white">
                  Línea Residuos:
                </span>
              </div>
              <span className="ml-6 text-gray-300">
                318 665 9462 — 313 671 5765
              </span>
            </li>

            <li className="flex items-center gap-2 mt-2">
              <Mail className="w-4 h-4 text-[#45C93E]" />
              <span>ambiental@kelab.com.co</span>
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#45C93E]" />
              <span>Bogotá, Colombia</span>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Síguenos</h4>
          <div className="flex gap-4">
            {[
              {
                icon: Facebook,
                href: "https://www.facebook.com/KelabCo",
                label: "Facebook",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/company/kelab/posts/?feedView=all",
                label: "LinkedIn",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/kelabco/",
                label: "Instagram",
              },
              {
                icon: Youtube,
                href: "https://www.youtube.com/@KelabCo",
                label: "YouTube",
              },
              {
                icon: Twitter,
                href: "https://x.com/KelabCo",
                label: "Twitter",
              },
            ].map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visítanos en ${label}`}
                className="p-3 bg-white/10 rounded-full hover:bg-[#45C93E]/20 transition transform hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="relative max-w-7xl mx-auto px-6 mt-8 text-center text-sm text-gray-400">
        <div className="h-px bg-gradient-to-r from-transparent via-[#45C93E]/40 to-transparent mb-4"></div>
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">R&R Kelab S.A.S</span> —
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
