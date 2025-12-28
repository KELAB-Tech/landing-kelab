export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://kelab.com.co";

  const routes = [
    "",
    "/blog",
    "/faq",
    "/services",
    "/services/waste-store",
    "/co-workers-cloud",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
