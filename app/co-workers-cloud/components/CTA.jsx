"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Mail, User, Building2, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-36 px-6 bg-gradient-to-b from-[#000000] to-[#000180] text-white overflow-hidden"
    >
      {/* Glow institucional sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(69,201,62,0.08),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Autoridad institucional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-2 text-[#45C93E] mb-6">
            <ShieldCheck size={18} />
            <span className="text-sm tracking-widest uppercase font-semibold">
              Infraestructura Digital Certificada
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Establezca una alianza estratégica
            <br className="hidden md:block" />
            con nuestra red industrial
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Nuestro equipo evaluará el perfil de su organización y le acompañará
            en el proceso de integración dentro del ecosistema empresarial
            estructurado.
          </p>
        </motion.div>

        {/* Card elegante */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl"
        >
          <form className="grid gap-6 max-w-2xl mx-auto text-left">
            {/* Nombre + Organización */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#45C93E] transition"
                />
              </div>

              <div className="relative">
                <Building2
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  type="text"
                  placeholder="Organización"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#45C93E] transition"
                />
              </div>
            </div>

            {/* Email + WhatsApp */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  type="email"
                  placeholder="Correo corporativo"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#45C93E] transition"
                />
              </div>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  type="text"
                  placeholder="WhatsApp de contacto"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#45C93E] transition"
                />
              </div>
            </div>

            {/* Tipo */}
            <select
              defaultValue=""
              className="
    w-full
    bg-white/5
    text-white
    border border-white/10
    rounded-lg
    px-4 py-3
    focus:outline-none
    focus:border-[#45C93E]
    transition
    appearance-none
  "
            >
              <option value="" disabled className="text-gray-100 bg-[#000180]">
                Tipo de organización
              </option>
              <option className="text-gray-900">
                Asociación de Recicladores
              </option>
              <option className="text-gray-900">Empresa Gestora</option>
              <option className="text-gray-900">Empresa Transformadora</option>
              <option className="text-gray-900">Entidad Aliada</option>
            </select>

            {/* Botón elegante con glow sutil */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-6 w-full bg-[#45C93E] text-black font-semibold py-4 rounded-xl shadow-lg transition"
            >
              <span className="relative z-10">
                Solicitar evaluación estratégica
              </span>

              {/* Glow leve */}
              <span className="absolute inset-0 rounded-xl bg-[#45C93E] blur-md opacity-30" />
            </motion.button>

            {/* Confianza */}
            <p className="text-xs text-white/40 text-center mt-6">
              Confidencialidad garantizada. Nuestro equipo responderá en menos
              de 24 horas hábiles.
            </p>
          </form>
        </motion.div>

        {/* Mensaje institucional inferior */}
        <div className="mt-16 text-white/40 text-sm">
          Plataforma diseñada para expansión LATAM y estándares internacionales.
        </div>
      </div>
    </section>
  );
}
