"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function CloudNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/co-workers-cloud" className="flex items-center gap-2">
          <Image
            src="/co-workers/co-logo.svg"
            alt="Co-Workers Cloud"
            width={34}
            height={34}
            priority
          />
          <span className="text-base font-extrabold text-[#000180]">
            Co-Workers <span className="text-[#45C93E]">Cloud</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-7">
          <NavItem href="/co-workers-cloud" label="Inicio" />

          {/* CATEGORÍAS */}
          <li
            className="relative"
            onMouseEnter={() => setOpenCategories(true)}
            onMouseLeave={() => setOpenCategories(false)}
          >
            <Link
              href="/co-workers-cloud/categorias"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#000180] transition"
            >
              Categorías
              <ChevronDown className="w-4 h-4" />
            </Link>

            <AnimatePresence>
              {openCategories && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-3 w-72 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
                >
                  <DropdownItem
                    href="/co-workers-cloud/categorias/asociaciones"
                    label="Asociaciones de reciclaje"
                    onClick={() => setOpenCategories(false)}
                  />
                  <DropdownItem
                    href="/co-workers-cloud/categorias/gestores"
                    label="Gestores ambientales"
                    onClick={() => setOpenCategories(false)}
                  />
                  <DropdownItem
                    href="/co-workers-cloud/categorias/transformadores"
                    label="Transformadores"
                    onClick={() => setOpenCategories(false)}
                  />
                  <DropdownItem
                    href="/co-workers-cloud/categorias/transportadoras"
                    label="Empresas transportadoras"
                    onClick={() => setOpenCategories(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <NavItem
            href="https://kelab.com.co/paginas/inicio"
            label="Administra tu tienda"
          />
          <NavItem href="#beneficios" label="Beneficios" />
          <NavItem href="/faq" label="FAQ" />
          <NavItem href="/blog" label="Blog" />
          <NavItem href="/" label="Conócenos" />
        </ul>

        {/* CTA */}
        <Link
          href="https://marketplace-kelab-b4si.vercel.app/"
          className="hidden lg:inline-flex items-center rounded-xl bg-[#45C93E] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#399334] transition"
        >
          Waste Store
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="lg:hidden text-[#000180]"
        >
          {openMobile ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <ul className="px-6 py-6 space-y-4 text-sm">
              <MobileLink
                href="/co-workers-cloud"
                label="Inicio"
                onClick={() => setOpenMobile(false)}
              />
              <MobileLink
                href="/co-workers-cloud/categorias/asociaciones"
                label="Asociaciones de reciclaje"
                onClick={() => setOpenMobile(false)}
              />
              <MobileLink
                href="/co-workers-cloud/categorias/gestores"
                label="Gestores ambientales"
                onClick={() => setOpenMobile(false)}
              />
              <MobileLink
                href="/co-workers-cloud/categorias/transformadores"
                label="Transformadores"
                onClick={() => setOpenMobile(false)}
              />
              <MobileLink
                href="/co-workers-cloud/categorias/transportadoras"
                label="Empresas transportadoras"
                onClick={() => setOpenMobile(false)}
              />

              <MobileLink
                href="https://kelab.com.co/paginas/inicio"
                label="Administra tu tienda"
                onClick={() => setOpenMobile(false)}
              />
              <MobileLink
                href="#beneficios"
                label="Beneficios"
                onClick={() => setOpenMobile(false)}
              />
              <MobileLink
                href="/faq"
                label="FAQ"
                onClick={() => setOpenMobile(false)}
              />
              <MobileLink
                href="/blog"
                label="Blog"
                onClick={() => setOpenMobile(false)}
              />
              <MobileLink
                href="/"
                label="Conócenos"
                onClick={() => setOpenMobile(false)}
              />

              <Link
                href="/marketplace"
                onClick={() => setOpenMobile(false)}
                className="block text-center rounded-xl bg-[#45C93E] py-2 font-semibold text-white"
              >
                Entrar a Waste Store
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------- HELPERS ---------- */

function NavItem({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm font-medium text-gray-700 hover:text-[#000180] transition"
      >
        {label}
      </Link>
    </li>
  );
}

function DropdownItem({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#f7f9fc] hover:text-[#000180] transition"
    >
      {label}
    </Link>
  );
}

function MobileLink({ href, label, onClick }) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block font-medium text-gray-700 hover:text-[#000180] transition"
      >
        {label}
      </Link>
    </li>
  );
}
