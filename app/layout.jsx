// app/layout.jsx
import "../app/globals.css";

export const metadata = {
  title: "Kelab",
  description: "Plataforma ambiental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
