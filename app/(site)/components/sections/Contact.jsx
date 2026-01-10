"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Script from "next/script";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [status, setStatus] = useState(null);
  const [captchaError, setCaptchaError] = useState(null);

  const onSubmit = async (data) => {
    try {
      setCaptchaError(null);

      // ✅ Validar reCAPTCHA antes de enviar
      if (!window.grecaptcha) {
        setCaptchaError("reCAPTCHA no cargó correctamente.");
        return;
      }

      const token = window.grecaptcha.getResponse();
      if (!token) {
        setCaptchaError("Por favor confirma que no eres un robot.");
        return;
      }

      setStatus("sending");

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: data.nombre,
          email: data.email,
          message: data.mensaje,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      reset();
      window.grecaptcha.reset();
    } catch (error) {
      console.error("❌ Error al enviar el correo:", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* ✅ Script reCAPTCHA (NO afecta estilos) */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <section
        id="contact"
        className="relative bg-gradient-to-br from-[#000180] to-[#000069] text-white py-24 overflow-hidden"
      >
        {/* Fondos */}
        <div className="absolute inset-0 will-change-transform">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#45C93E]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#45C93E]/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10 items-start">
          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="text-white">Conéctate con </span>
              <span className="text-[#45C93E]">R&R Kelab</span>
            </h2>

            <p className="text-gray-200 mb-10 text-lg leading-relaxed max-w-md">
              ¿Tienes un proyecto, idea o desafío en innovación, sostenibilidad
              o gestión ambiental? Nuestro equipo está listo para acompañarte.
            </p>

            <ul className="space-y-5 text-gray-100">
              <li className="flex flex-col">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#45C93E]" />
                  <span className="font-semibold">Línea Aguas:</span>
                </div>
                <span className="ml-8 text-gray-300">300 401 4299</span>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#45C93E]" />
                  <span className="font-semibold">Línea Residuos:</span>
                </div>
                <span className="ml-8 text-gray-300">
                  318 665 9462 — 313 671 5765
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#45C93E]" />
                <span className="text-lg">ambiental@kelab.com.co</span>
              </li>
            </ul>
          </motion.div>

          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 space-y-6 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-[#000180] mb-4 text-center">
              Envíanos un mensaje
            </h3>

            {/* Inputs */}
            <div>
              <label className="block font-semibold mb-1">Nombre</label>
              <input
                type="text"
                {...register("nombre", {
                  required: "Este campo es obligatorio",
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base md:text-lg focus:ring-2 focus:ring-[#45C93E] outline-none"
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nombre.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Ingrese un correo válido",
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base md:text-lg focus:ring-2 focus:ring-[#45C93E] outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">Mensaje</label>
              <textarea
                rows="4"
                {...register("mensaje", {
                  required: "Cuéntanos brevemente tu necesidad",
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base md:text-lg focus:ring-2 focus:ring-[#45C93E] outline-none resize-none"
              />
              {errors.mensaje && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mensaje.message}
                </p>
              )}
            </div>

            {/* ✅ reCAPTCHA (sin tocar estilos) */}
            <div
              className="g-recaptcha"
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            />

            {captchaError && (
              <p className="text-red-500 text-sm text-center">{captchaError}</p>
            )}

            {/* Botón */}
            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full min-h-[48px] py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                status === "sending"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#45C93E] hover:bg-[#399334] text-white"
              }`}
            >
              <Send className="w-5 h-5" />
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {/* Estado */}
            {status === "success" && (
              <p className="text-[#45C93E] font-medium mt-2 text-center">
                ✅ Tu mensaje fue enviado con éxito.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-medium mt-2 text-center">
                ❌ Hubo un error al enviar el mensaje. Intenta de nuevo.
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}
