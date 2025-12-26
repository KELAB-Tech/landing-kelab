// app/co-workers-cloud/layout.jsx
import CloudNavbar from "./components/CloudNavbar";
import CloudFooter from "./components/CloudFooter";

export const metadata = {
  title: "Co-Workers Cloud",
  description: "Centro comercial digital para la economía circular",
};

export default function CoWorkersCloudLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CloudNavbar />
      <main className="flex-1">{children}</main>
      <CloudFooter />
    </div>
  );
}
