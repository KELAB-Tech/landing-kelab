export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://kelab.com.co";

  const routes = [
    // Home
    "",

    // Páginas generales
    "/equipo",
    "/faq",
    "/services",
    "/co-workers-cloud",

    // Servicios
    "/services/clean-pack",
    "/services/co-workers-cloud",
    "/services/economia-circular",
    "/services/waste-store",

    // Blog
    "/blog",
    "/blog/importancia-separacion-residuos",
    "/blog/planes-colectivos",
    "/blog/responsabilidad-extendida",
    "/blog/licencia-ambiental",
    "/blog/manejo-ambiental",
    "/blog/plan-de-contingencia",
    "/blog/tramites-permisos-ambientales",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
