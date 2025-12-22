export default function sitemap() {
  const baseUrl = "https://kelab.com.co";

  const staticRoutes = ["", "/marketplace", "/faq", "/blog", "/services"];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
