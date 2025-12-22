// app/blogs/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog – Gestión de Residuos | Clean Pack",
  description:
    "Explora artículos sobre sostenibilidad, separación de residuos, economía circular y normativas ambientales en Colombia.",
  keywords:
    "gestión de residuos, sostenibilidad, economía circular, Colombia, reciclaje",
  openGraph: {
    title: "Blog – Gestión de Residuos | Clean Pack",
    description:
      "Conoce más sobre separación de residuos, planes colectivos y responsabilidad extendida del productor.",
    url: "https://tusitio.com/blogs",
    type: "website",
    images: ["/og-blog.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Gestión de Residuos | Clean Pack",
    description:
      "Artículos sobre sostenibilidad, economía circular y gestión ambiental.",
    images: ["/og-blog.jpg"],
  },
};

const blogs = [
  {
    slug: "importancia-separacion-residuos",
    title: "Importancia de la separación de residuos sólidos en nuestro país",
    excerpt:
      "La separación en la fuente es clave para impulsar la economía circular y mejorar la gestión ambiental en Colombia.",
  },
  {
    slug: "planes-colectivos",
    title: "Planes Colectivos de envases y empaques en Colombia",
    excerpt:
      "Explora cómo operan los planes colectivos y su aporte al aprovechamiento responsable de los residuos.",
  },
  {
    slug: "responsabilidad-extendida",
    title: "Responsabilidad Extendida del Productor",
    excerpt:
      "Conoce las obligaciones del productor y cómo los sistemas REP fortalecen el cumplimiento normativo.",
  },
  {
    slug: "licencia-ambiental",
    title: "Licenciamiento ambiental",
    excerpt:
      "Aprende cuándo se requiere una licencia ambiental y su importancia para el desarrollo de proyectos responsables.",
  },
  {
    slug: "manejo-ambiental",
    title: "Plan de manejo ambiental",
    excerpt:
      "Descubre la función de los PMA y cómo aseguran que las actividades productivas minimicen su impacto ambiental.",
  },
  {
    slug: "plan-de-contingencia",
    title: "Plan de contingencia",
    excerpt:
      "Identifica la importancia de los planes de contingencia para prevenir, mitigar y responder ante emergencias ambientales.",
  },
  {
    slug: "tramites-permisos-ambientales",
    title: "Tramites y permisos ambientales",
    excerpt:
      "Conoce los principales trámites y permisos ambientales requeridos para operar de manera legal y sostenible.",
  },
];

export default function BlogList() {
  return (
    <div className="w-full">
      {/* BANNER */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
        <Image
          src="/blogs/bannerblog.svg"
          alt="Banner blog"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#000180] via-[#00016a77] to-[#45C93E]" />

        <h1 className="relative text-2xl md:text-5xl font-extrabold text-center px-4 z-10 text-white">
          Conoce Más Sobre Nuestros Servicios
        </h1>
      </div>

      {/* LISTA DE BLOGS */}
      <section className="bg-[#F9FAFB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#000169] mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5">{blog.excerpt}</p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-[#45C93E] font-semibold hover:underline"
                >
                  Leer más →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
