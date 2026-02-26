"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "caracteristica", label: "Características" },
  { id: "beneficios", label: "Beneficios" },
  { id: "cta", label: "Contacto" },
  { id: "faq", label: "FAQ" },
  { href: "/", label: "Sobre Nosotros" },
];

export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = active;

      for (const section of sections) {
        if (!section.id) continue;
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
          break;
        }
      }

      if (current !== active) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#00214A]/5 shadow-sm"
          : "bg-white/10 backdrop-blur-md",
      )}
    >
      <div
        className={clsx(
          "max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500",
          scrolled ? "h-16" : "h-20",
        )}
      >
        {/* LOGO */}
        <Link
          href="/co-workers-cloud"
          className="flex items-center gap-3 group"
        >
          <Image
            src="/co-workers/co-logo.svg"
            alt="CoWorkersCloud Logo"
            width={50}
            height={36}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />

          <span className="text-2xl font-bold bg-gradient-to-r from-[#00214A] via-[#3F5AF5] to-[#45C93E] bg-[length:200%] bg-clip-text text-transparent animate-gradientSlow">
            CoWorkersCloud
          </span>
        </Link>

        {/* NAV LINKS DESKTOP */}
        <div className="hidden md:flex relative items-center gap-1 bg-white/70 backdrop-blur-xl border border-[#00214A]/10 shadow-sm px-2 py-1.5 rounded-full">
          {sections.map((item) =>
            item.id ? (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={clsx(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300",
                  active === item.id
                    ? "text-[#00214A]"
                    : "text-[#00214A]/60 hover:text-[#00214A]",
                )}
              >
                {active === item.id && (
                  <motion.div
                    layoutId="pill"
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 bg-[#3F5AF5]/15 border border-[#3F5AF5]/20 rounded-full z-0"
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-[#00214A]/60 hover:text-[#00214A]"
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        {/* CTA DESKTOP */}
        <motion.a
          href="en-desarrollo"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.25 }}
          className="hidden md:block px-6 py-2 rounded-full bg-[#45C93E] hover:bg-[#3fb437] text-white font-semibold shadow-[0_4px_14px_rgba(69,201,62,0.25)] transition-all duration-300"
        >
          Comenzar gratis
        </motion.a>

        {/* HAMBURGUESA MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#00214A]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#00214A]/10 px-6 py-6 space-y-4 shadow-lg"
          >
            {sections.map((item) =>
              item.id ? (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-[#00214A] font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-[#00214A] font-medium"
                >
                  {item.label}
                </a>
              ),
            )}

            <a
              href="en-desarrollo"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-full bg-[#45C93E] text-white font-semibold"
            >
              Comenzar gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
