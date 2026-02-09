import Image from "next/image";
import Link from "next/link";
import ContactoBlog from "@/app/(site)/components/ContactoBlog";
import { CheckCircle, XCircle } from "lucide-react";

// ===================== META SEO OPTIMIZADO =====================
export const metadata = {
  title:
    "Plan Colectivo de Envases y Empaques en Colombia | Clean Pack - R&R Kelab",

  description:
    "Clean Pack es un plan colectivo para la gestión integral de residuos de envases y empaques en Colombia. Ayudamos a empresas a cumplir la normativa ambiental, REP, trazabilidad y economía circular con respaldo técnico y legal.",

  keywords: [
    // Core
    "plan colectivo envases y empaques",
    "plan colectivo residuos colombia",
    "gestión integral de residuos empresariales",
    "gestión de residuos empresas colombia",

    // Normativa / intención fuerte
    "cumplimiento normativa ambiental colombia",
    "responsabilidad extendida del productor rep",
    "plan colectivo rep colombia",
    "resolución envases y empaques colombia",

    // Valor agregado
    "trazabilidad de residuos",
    "aprovechamiento de residuos",
    "economía circular empresarial",
    "gestión ambiental empresarial",

    // Marca
    "clean pack kelab",
    "r&r kelab servicios ambientales",
  ],

  alternates: {
    canonical: "https://www.kelab.com.co/services/clean-pack",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// Rutas desde /public
const cicloImg = "/services/cleanpack/ciclo.webp";
const cleanpackLogo = "/logos/Cleanpack.svg";

export default function CleanPackPage() {
  return (
    <>
      {/* ===== Schema SEO ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            serviceType: "Plan Colectivo de Envases y Empaques",
            "@context": "https://schema.org",
            "@type": "BusinessAudience",
            "@id": "https://kelab.com.co/services/clean-pack#service",
            name: "Empresas obligadas a cumplir REP en Colombia",
            description:
              "Plan colectivo de gestión integral de residuos para empresas en Colombia.",
            url: "https://kelab.com.co/services/clean-pack",
            provider: {
              "@type": "Organization",
              name: "R&R Kelab S.A.S.",
              url: "https://kelab.com.co",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Colombia",
            },
            serviceType: "Plan Colectivo de Envases y Empaques",
          }),
        }}
      />

      <div className="w-full bg-white text-gray-800">
        {/* ===== HERO ===== */}
        <section className="relative text-white py-32 px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-[#000180d9] via-[#00016acc] to-[#45C93E88]" />

          {/* Marca de agua */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src={cleanpackLogo}
              alt="Marca de agua Clean Pack"
              fill
              className="opacity-40 blur-[1px] object-contain"
              priority
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
              Plan Colectivo de Envases y Empaques en Colombia{" "}
              <span className="text-[#45C93E]">- Clean Pack</span>
            </h1>

            <p className="md:text-2xl">
              Gestión de Residuos Empresariales en Colombia
            </p>
          </div>
        </section>

        {/* ===== DESCRIPCIÓN ===== */}
        <section className="max-w-5xl mx-auto px-6 py-16 leading-relaxed text-lg text-justify">
          <p className="mb-4">
            Somos un{" "}
            <strong>Plan Colectivo de Residuos de Envases y Empaques</strong>{" "}
            para empresas en Colombia, administrado por{" "}
            <strong>R&R Kelab S.A.S.</strong>, diseñado para garantizar el
            cumplimiento de la legislación ambiental vigente y la economía
            circular.
          </p>

          <p className="mb-4">
            Agrupamos empresas para minimizar costos y presentar un solo informe
            ante la ANLA, asegurando trazabilidad real, cobertura nacional y
            aliados autorizados.
          </p>

          <p>
            Clean Pack garantiza certificación, sostenibilidad y circularidad en
            la gestión de residuos aprovechables.
          </p>

          <Link
            href="/"
            className="inline-block mt-6 text-[#000180] font-semibold underline"
          >
            Conoce nuestros servicios ambientales
          </Link>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16 text-lg">
          <h2 className="text-2xl font-bold mb-4">
            Cumplimiento de la Responsabilidad Extendida del Productor (REP) en
            Colombia
          </h2>

          <p className="mb-4">
            El Plan Colectivo Clean Pack permite a las empresas cumplir con la
            <strong> Responsabilidad Extendida del Productor (REP)</strong>,
            exigida por la normativa ambiental colombiana para envases y
            empaques.
          </p>

          <p className="mb-4">
            Apoyamos el cumplimiento de resoluciones del Ministerio de Ambiente,
            evitando sanciones, multas y riesgos legales ante la autoridad
            ambiental.
          </p>

          <p>
            Nuestro plan colectivo facilita la presentación de informes, la
            trazabilidad certificada y el aprovechamiento de residuos conforme a
            la legislación vigente.
          </p>
        </section>

        {/* ===== CICLO DE VIDA ===== */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-justify">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                El Ciclo de Vida{" "}
                <span className="text-[#45C93E]">del Envase y Empaque</span>
              </h2>

              <p className="mb-4 text-gray-100">
                Cada envase o empaque pasa por producción, uso y disposición.
                Una mala gestión afecta ecosistemas y aumenta emisiones.
              </p>

              <p className="text-gray-100">
                Cerramos este ciclo mediante aprovechamiento, recolección,
                certificación y reintegración al ciclo productivo.
              </p>
            </div>

            <Image
              src={cicloImg}
              alt="Ciclo de vida del envase y empaque"
              width={800}
              height={450}
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== ¿QUÉ OFRECE? ===== */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001a8a] text-center mb-12">
            ¿Qué ofrece Clean Pack?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-lg">
            {[
              "Afiliación formal al plan colectivo.",
              "Certificación y trazabilidad real.",
              "Coordinación con aliados autorizados.",
              "Informe anual ante la ANLA.",
              "Capacitaciones sin costo.",
              "Optimización de envases y empaques.",
              "Acompañamiento continuo.",
              "Medición de Huella de Carbono.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#45C93E]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== DOLORES ===== */}
        <section className="bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
              ¿Qué dolores evita{" "}
              <span className="text-[#45C93E]">Clean Pack?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 text-lg">
              {[
                "Riesgos legales y sanciones.",
                "Altos costos individuales.",
                "Dificultad para hallar aliados certificados.",
                "Pérdida de competitividad.",
                "Problemas de trazabilidad.",
                "Falta de tiempo para capacitaciones.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <p className="text-gray-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENEFICIOS ===== */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001a8a] text-center mb-12">
            Ganancias y Beneficios
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-lg">
            {[
              "Cumplimiento legal garantizado.",
              "Reducción de costos operativos.",
              "Asesoría técnica permanente.",
              "Certificados y trazabilidad real.",
              "Mejor reputación sostenible.",
              "Capacitaciones gratuitas.",
              "Aprovechamiento incrementado.",
              "Medición profesional de huella de carbono.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#45C93E]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Preguntas Frecuentes sobre Planes Colectivos
          </h2>

          <div className="space-y-6 text-lg">
            <p>
              <strong>¿Qué es un plan colectivo de envases y empaques?</strong>
              <br />
              Es un mecanismo autorizado que permite a las empresas cumplir la
              Responsabilidad Extendida del Productor de forma conjunta.
            </p>

            <p>
              <strong>¿Es obligatorio el plan colectivo en Colombia?</strong>
              <br />
              Sí, para empresas que ponen envases y empaques en el mercado
              colombiano, según la normativa ambiental vigente.
            </p>

            <p>
              <strong>¿Qué riesgos evita Clean Pack?</strong>
              <br />
              Multas, sanciones, incumplimientos legales y problemas de
              trazabilidad.
            </p>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <ContactoBlog />

        {/* ===== BLOGS ===== */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#001a8a] mb-6">
              Conoce también:
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                {
                  title: "Importancia de la separación de residuos",
                  link: "/blog/importancia-separacion-residuos",
                },
                { title: "Planes Colectivos", link: "/blog/planes-colectivos" },
                {
                  title: "Responsabilidad Extendida del Productor",
                  link: "/blog/responsabilidad-extendida",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
                >
                  <p className="font-semibold text-lg text-gray-700">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
