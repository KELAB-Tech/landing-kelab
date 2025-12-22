import Image from "next/image";

export default function ServiciosPage() {
  const servicios = [
    {
      title: "Trámites Ambientales Para La Industria",
      slug: "tramites-ambientales",
      description:
        "Licencias, permisos y acompañamiento ambiental con más de 15 años de experiencia.",
      image: "/services/service3.webp",
    },
    {
      title: "Plan Colectivo CLEAN PACK",
      slug: "clean-pack",
      description:
        "Plan colectivo líder en gestión y valorización de residuos aprovechables.",
      image: "/services/service1.webp",
    },
    {
      title: "Co-Workers Cloud",
      slug: "co-workers-cloud",
      description:
        "La plataforma digital para la comercialización y trazabilidad de residuos aprovechables.",
      image: "/services/service4.webp",
    },
    {
      title: "Sostenibilidad y Economía Circular",
      slug: "sostenibilidad",
      description:
        "Consultoría estratégica para empresas que buscan transición sostenible.",
      image: "/services/service2.webp",
    },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-[#000180] mb-12 text-center">
        Nuestros Servicios
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {servicios.map((servicio) => (
          <a
            key={servicio.slug}
            href={`/servicios/${servicio.slug}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden block"
          >
            <Image
              src={servicio.image}
              alt={servicio.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-[#000180]">
                {servicio.title}
              </h2>

              <p className="text-gray-600 mb-4">{servicio.description}</p>

              <span className="text-[#45C93E] font-semibold">Ver más →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
