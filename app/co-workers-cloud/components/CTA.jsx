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

    // 🔑 Web3Forms key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY);

    // 🔐 Obtener token de reCAPTCHA
    const token = window.grecaptcha.getResponse();

    if (!token) {
      setResult("⚠️ Por favor valida el reCAPTCHA.");
      setLoading(false);
      return;
    }

    formData.append("g-recaptcha-response", token);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Mensaje enviado correctamente.");
        form.reset();
        window.grecaptcha.reset(); // 🔄 reset captcha
      } else {
        console.error(data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("❌ Error de conexión.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* ✅ Cargar script correctamente */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <section className="relative py-36 px-6 bg-gradient-to-b from-[#000000] to-[#000180] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Establezca una alianza estratégica
          </h2>

          <div className="mt-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl">
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
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="nombre"
                  type="text"
                  placeholder="Nombre completo"
                  required
                  className="input"
                />
                <input
                  name="organizacion"
                  type="text"
                  placeholder="Organización"
                  required
                  className="input"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="email"
                  type="email"
                  placeholder="Correo corporativo"
                  required
                  className="input"
                />
                <input
                  name="whatsapp"
                  type="text"
                  placeholder="WhatsApp de contacto"
                  required
                  className="input"
                />
              </div>

              <select name="tipo" required className="input">
                <option value="">Tipo de organización</option>
                <option>Asociación de Recicladores</option>
                <option>Empresa Gestora</option>
                <option>Empresa Transformadora</option>
                <option>Entidad Aliada</option>
              </select>

              {/* 🔐 reCAPTCHA */}
              <div className="flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                ></div>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-[#45C93E] text-black font-semibold py-4 rounded-xl disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Solicitar evaluación estratégica"}
              </motion.button>

              {result && <p className="text-sm text-center mt-4">{result}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
