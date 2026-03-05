"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Script from "next/script";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const form = e.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensaje enviado correctamente.");
      form.reset();
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } else {
      setResult("Hubo un error. Verifique el reCAPTCHA.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* ✅ Script reCAPTCHA correctamente montado */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <section
        id="cta"
        className="relative py-36 px-6 bg-gradient-to-b from-[#000000] to-[#000180] text-white overflow-hidden"
      >
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Establezca una alianza estratégica
            </h2>
          </motion.div>

          <motion.div className="mt-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl">
            <form
              onSubmit={handleSubmit}
              className="grid gap-6 max-w-2xl mx-auto text-left"
            >
              {/* Hidden config */}
              <input
                type="hidden"
                name="subject"
                value="Nueva alianza estratégica"
              />
              <input
                type="hidden"
                name="from_name"
                value="Plataforma Industrial LATAM"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              {/* Nombre + Organización */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="nombre"
                  type="text"
                  placeholder="Nombre completo"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#45C93E]"
                />

                <input
                  name="organizacion"
                  type="text"
                  placeholder="Organización"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#45C93E]"
                />
              </div>

              {/* Email + WhatsApp */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="email"
                  type="email"
                  placeholder="Correo corporativo"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#45C93E]"
                />

                <input
                  name="whatsapp"
                  type="text"
                  placeholder="WhatsApp de contacto"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#45C93E]"
                />
              </div>

              <select
                name="tipo"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#45C93E]"
              >
                <option value="">Tipo de organización</option>
                <option>Asociación de Recicladores</option>
                <option>Empresa Gestora</option>
                <option>Empresa Transformadora</option>
                <option>Entidad Aliada</option>
              </select>

              {/* ✅ reCAPTCHA widget */}
              <div className="flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey={
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                  }
                ></div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-[#45C93E] text-black font-semibold py-4 rounded-xl shadow-lg disabled:opacity-50"
              >
                {loading
                  ? "Enviando..."
                  : "Solicitar evaluación estratégica"}
              </motion.button>

              {result && (
                <p className="text-sm text-center text-[#45C93E] mt-4">
                  {result}
                </p>
              )}
            </form>
          </motion.div>

          <div className="mt-16 text-white/40 text-sm">
            Plataforma diseñada para expansión LATAM y estándares internacionales.
          </div>
        </div>
      </section>
    </>
  );
}