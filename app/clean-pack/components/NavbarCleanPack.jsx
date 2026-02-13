"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/utils/scrollToSection";

export default function NavbarCleanPack() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    { name: "Inicio", id: "hero" },
    { name: "Cómo funciona", id: "como-funciona" },
    { name: "Beneficios", id: "beneficios" },
    { name: "FAQ", link: "https://www.kelab.com.co/faq" },
    { name: "Sobre nosotros", link: "https://kelab.com.co/" },
  ];

  /* Scroll spy solo para los que tienen id */
  useEffect(() => {
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
      { threshold: 0.4 },
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  const handleNavigation = (id) => {
    setOpen(false);
    scrollToSection(id);
    setActive(`#${id}`);
  };

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-[#000180] shadow-md"
    >
      <div className="max-w-7xl mx-auto px-2 py-3 flex items-center justify-between">
        {/* IZQUIERDA */}
        <div className="flex items-center gap-10">
          {/* LOGO */}
          <button onClick={() => handleNavigation("hero")}>
            <div className="w-12 h-12 rounded-full bg-white overflow-hidden border-2 border-white shadow-md">
              <Image
                src="/logos/Cleanpack.svg"
                alt="Clean Pack logo"
                width={48}
                height={48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </button>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex items-center gap-2 ml-40">
            {links.map((link) => {
              const isActive = link.id && active === `#${link.id}`;

              // Si es externo
              if (link.link) {
                return (
                  <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white hover:text-[#45C93E] transition-all duration-300"
                  >
                    {link.name}
                  </a>
                );
              }

              // Si es interno
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-out ${
                    isActive
                      ? "bg-white text-[#45C93E] shadow-md"
                      : "bg-white/10 text-white hover:bg-white/20 hover:scale-[1.05]"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA DERECHO */}
        <div className="hidden md:flex items-center">
          <Link
            href="/clean-pack/diagnostico-rep"
            className="bg-white text-[#000180] px-6 py-2 rounded-full font-semibold shadow hover:scale-105 hover:bg-gray-100 transition-all duration-300"
          >
            Evaluar mi empresa
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#45C93E] shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {links.map((link) => {
                if (link.link) {
                  return (
                    <a
                      key={link.name}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 text-white py-2 px-4 rounded-full text-center font-medium hover:bg-white hover:text-[#45C93E] transition"
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.id)}
                    className="bg-white/10 text-white py-2 px-4 rounded-full font-medium hover:bg-white hover:text-[#45C93E] transition"
                  >
                    {link.name}
                  </button>
                );
              })}

              <Link
                href="/clean-pack/diagnostico-rep"
                className="bg-white text-[#45C93E] rounded-full py-2 font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                Evaluar mi empresa
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
