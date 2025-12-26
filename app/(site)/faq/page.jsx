import FaqClient from "@/app/(site)/components/FaqClient";

export const metadata = {
  title: "Preguntas Frecuentes | Waste Store | Clean Pack",
  description:
    "Resuelve todas tus dudas sobre la tienda virtual Waste Store: productos, envíos, devoluciones, pagos y más, de manera clara y rápida.",
  keywords: [
    "FAQ",
    "preguntas frecuentes",
    "tienda virtual",
    "Waste Store",
    "productos",
    "envíos",
    "devoluciones",
    "pagos",
    "Clean Pack",
  ],
  openGraph: {
    title: "Preguntas Frecuentes | Waste Store | Clean Pack",
    description:
      "Encuentra respuestas a las preguntas más comunes sobre Waste Store: productos, envíos, devoluciones y pagos de manera rápida y clara.",
    url: "https://kelab.com.co/faq",
    type: "website",
    images: [
      {
        url: "https://kelab.com.co/static/images/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "Preguntas frecuentes Waste Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes | Waste Store | Clean Pack",
    description:
      "Resuelve tus dudas sobre productos, envíos, devoluciones y pagos en la tienda virtual Waste Store.",
    images: ["https://kelab.com.co/static/images/og-faq.jpg"],
  },
  alternates: {
    canonical: "https://kelab.com.co/faq",
  },
  // Extras para SEO avanzado
  robots: "index, follow",
  authors: [{ name: "Clean Pack", url: "https://kelab.com.co" }],
  publisher: "Clean Pack",
  category: "FAQ, Tienda Virtual, Waste Store",
};
export default function FAQPage() {
  return <FaqClient />;
}
