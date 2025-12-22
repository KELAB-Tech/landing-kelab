// app/(market)/marketplace/layout.jsx
import NavbarMarketplace from "./components/NavbarMarketplace";
import FooterMarketplace from "./components/FooterMarketplace";
import EcoAssistant from "./components/EcoAssistant";

export default function MarketplaceLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <NavbarMarketplace />
      <main className="flex-grow">{children}</main>
      <EcoAssistant />
      <FooterMarketplace />
    </div>
  );
}
