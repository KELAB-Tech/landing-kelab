import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import SocialBar from "./components/SocialBar";

export const metadata = {
  title: "Kelab",
  description: "Plataforma ambiental",
};

export default function LandingLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <SocialBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
