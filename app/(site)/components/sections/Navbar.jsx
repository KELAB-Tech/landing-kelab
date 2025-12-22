"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { name: "Inicio", id: "hero" },
    { name: "Nuestra Firma", id: "about" },
    { name: "Servicios", id: "services" },
    { name: "Clientes", id: "clients" },
    { name: "Contacto", id: "contact" },
    { name: "Equipo", path: "/equipo" },
    { name: "Blogs", path: "/blog" },
  ];

  const serviceLinks = [
    { name: "Trámites Ambientales", path: "/services/tramites-ambientales" },
    { name: "Clean Pack", path: "/services/clean-pack" },
    { name: "Co-Workers Cloud", path: "/services/co-workers-cloud" },
    { name: "Sostenibilidad", path: "/services/economia-circular" },
  ];

  /* Scroll background */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active on path change */
  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.includes("/equipo")) setActive("equipo");
      else if (pathname.includes("/blogs")) setActive("blogs");
      else setActive("");
      return;
    }
    setActive("#hero");
  }, [pathname]);

  /* Scroll after redirect */
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTo");
    if (pathname === "/" && target) {
      setTimeout(() => scrollToSection(target), 80);
      sessionStorage.removeItem("scrollTo");
    }
  }, [pathname]);

  /* Scroll spy */
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = links
      .filter((l) => l.id)
      .map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, [pathname]);

  const handleNavigation = (id) => {
    setOpen(false);
    if (pathname === "/") scrollToSection(id);
    else {
      sessionStorage.setItem("scrollTo", id);
      router.push("/");
    }
    setActive(`#${id}`);
  };

  const handleDirectNav = (path) => {
    setOpen(false);
    router.push(path);
    setActive(path.replace("/", ""));
  };

  const underlineClass = (isActive) =>
    `absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
      isActive ? "w-full bg-[#45C93E]" : "w-0 bg-[#45C93E] group-hover:w-full"
    }`;

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#000067]/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => handleNavigation("hero")}
          className="flex items-center gap-3"
        >
          <Image
            src="/navbar/logofondo.svg"
            alt="R&R Kelab logo"
            width={120}
            height={40}
            style={{ height: "40px", width: "auto" }}
            priority
          />
          <span className="font-bold text-lg text-white tracking-wide">
            R&R Kelab S.A.S
          </span>
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            if (link.path) {
              const isActive = active === link.path.replace("/", "");
              return (
                <button
                  key={link.name}
                  onClick={() => handleDirectNav(link.path)}
                  className={`relative text-sm font-medium group ${
                    isActive ? "text-[#45C93E]" : "text-white"
                  }`}
                >
                  {link.name}
                  <span className={underlineClass(isActive)} />
                </button>
              );
            }

            if (link.name === "Servicios") {
              const isActive = active === "#services";
              return (
                <div
                  key="Servicios"
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <button
                    className={`relative flex items-center gap-1 text-sm font-medium group ${
                      isActive ? "text-[#45C93E]" : "text-white"
                    }`}
                  >
                    Servicios <ChevronDown size={16} />
                    <span className={underlineClass(isActive)} />
                  </button>

                  <AnimatePresence>
                    {desktopServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-8 left-0 bg-white w-56 rounded-lg shadow-lg overflow-hidden z-40"
                      >
                        {serviceLinks.map((service) => (
                          <button
                            key={service.name}
                            onClick={() => handleDirectNav(service.path)}
                            className="block w-full text-left px-5 py-2 text-[#000180] hover:bg-[#45C93E] hover:text-white"
                          >
                            {service.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = active === `#${link.id}`;
            return (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.id)}
                className={`relative text-sm font-medium group ${
                  isActive ? "text-[#45C93E]" : "text-white"
                }`}
              >
                {link.name}
                <span className={underlineClass(isActive)} />
              </button>
            );
          })}
        </div>

        {/* CTA DESKTOP */}
        <button
          onClick={() => handleNavigation("contact")}
          className="hidden md:inline-block px-5 py-2 rounded-lg text-sm font-semibold bg-[#45C93E] text-white hover:bg-[#399334]"
        >
          Contáctanos
        </button>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-lg pb-4"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {links.map((link) => {
                if (link.path) {
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleDirectNav(link.path)}
                      className="text-[#000180] font-medium"
                    >
                      {link.name}
                    </button>
                  );
                }

                if (link.name === "Servicios") {
                  return (
                    <div key="Servicios">
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="flex w-full justify-between items-center text-[#000180] font-semibold"
                      >
                        Servicios{" "}
                        <ChevronDown
                          size={18}
                          className={`${
                            mobileServicesOpen ? "rotate-180" : ""
                          } transition`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-2 space-y-1"
                          >
                            {serviceLinks.map((service) => (
                              <button
                                key={service.name}
                                onClick={() => handleDirectNav(service.path)}
                                className="block text-left text-[#000180] hover:text-[#45C93E]"
                              >
                                {service.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.id)}
                    className="text-[#000180] font-medium"
                  >
                    {link.name}
                  </button>
                );
              })}

              <button
                onClick={() => handleNavigation("contact")}
                className="bg-[#45C93E] text-white rounded-lg py-2 font-semibold"
              >
                Contáctanos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
