import NavbarCleanPack from "./components/NavbarCleanPack";
import Footer from "@/app/(site)/components/sections/Footer";
import SocialBar from "@/app/(site)/components/SocialBar";

export const metadata = {
  title: "Clean Pack | Plan colectivo de envases y empaques",
  description:
    "Clean Pack es un plan colectivo para empresas que gestionan envases y empaques de forma legal y sostenible en Colombia.",
};

export default function CleanPackLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavbarCleanPack />
      <SocialBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
