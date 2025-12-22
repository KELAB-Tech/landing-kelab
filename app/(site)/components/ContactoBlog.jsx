"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function ContactoBlog() {
  const router = useRouter();

  const goToContact = useCallback(() => {
    router.push("/");

    // Espera un poco para que cargue el home antes de hacer scroll
    setTimeout(() => {
      const section = document.querySelector("#contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 350); // 300–400ms funciona perfecto en Next.js
  }, [router]);

  return (
    <div className="bg-gradient-to-b from-[#000180] via-[#000169] to-[#45C93E] text-white py-14 px-6 mt-0">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
          <span className="text-white">¿Quieres más </span>
          <span className="text-[#45C93E]">información?</span>
        </h3>

        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Si deseas conocer más detalles o resolver tus dudas, contáctanos y
          nuestro equipo te acompañará en el proceso.
        </p>

        <button
          onClick={goToContact}
          className="inline-block bg-[#45C93E] hover:bg-[#3aa333] text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5"
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
}
