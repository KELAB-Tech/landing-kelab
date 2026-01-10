"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Script from "next/script";

export default function PQRS() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [status, setStatus] = useState(null);
  const [radicado, setRadicado] = useState(null);

  const onSubmit = async (data) => {
    // 🔐 Validar que reCAPTCHA esté cargado
    if (typeof window === "undefined" || !window.grecaptcha) {
      console.error("❌ reCAPTCHA no cargado");
      setStatus("error");
      return;
    }

    // 🔐 Validar que el usuario marcó el captcha
    const captchaResponse = window.grecaptcha.getResponse();
    if (!captchaResponse) {
      setStatus("captcha-error");
      return;
    }

    try {
      setStatus("sending");

      const radicadoGenerado = `PQRS-${Date.now()}`;
      setRadicado(radicadoGenerado);

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_PQRS_ID,
        {
          name: data.nombre,
          email: data.email,
          tipo: data.tipo,
          asunto: data.asunto,
          message: data.mensaje,
          radicado: radicadoGenerado,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("✅ Email enviado:", result);

      setStatus("success");
      reset();
      window.grecaptcha.reset();
    } catch (error) {
      console.error("❌ Error al enviar el PQRS:", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* ✅ Script reCAPTCHA */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <section
        id="pqrs"
        className="relative bg-gradient-to-br from-[#000180] to-[#000069] text-white py-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10 items-start">
          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="text-white">PQRS en </span>
              <span className="text-[#45C93E]">R&R Kelab</span>
            </h2>
            <p className="text-gray-200 mb-10 text-lg leading-relaxed max-w-md">
              Diligencia este formulario para enviar tus Peticiones, Quejas,
              Reclamos o Sugerencias. Nuestro equipo dará respuesta en máximo 15
              días hábiles.
            </p>
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
              Formulario PQRS
            </h3>

            {/* Tipo */}
            <div>
              <label className="block font-semibold mb-1">
                Tipo de solicitud
              </label>
              <select
                {...register("tipo", { required: "Selecciona un tipo" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#45C93E]"
              >
                <option value="">Seleccione...</option>
                <option value="Petición">Petición</option>
                <option value="Queja">Queja</option>
                <option value="Reclamo">Reclamo</option>
                <option value="Sugerencia">Sugerencia</option>
              </select>
              {errors.tipo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tipo.message}
                </p>
              )}
            </div>

            {/* Nombre */}
            <div>
              <label className="block font-semibold mb-1">Nombre</label>
              <input
                type="text"
                {...register("nombre", {
                  required: "Este campo es obligatorio",
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#45C93E]"
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block font-semibold mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Ingrese un correo válido",
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#45C93E]"
              />
            </div>

            {/* Asunto */}
            <div>
              <label className="block font-semibold mb-1">Asunto</label>
              <input
                type="text"
                {...register("asunto", {
                  required: "Escribe un asunto breve",
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#45C93E]"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block font-semibold mb-1">Descripción</label>
              <textarea
                rows="4"
                {...register("mensaje", {
                  required: "Describe tu solicitud",
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#45C93E] resize-none"
              />
            </div>

            {/* Consentimiento */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("consentimiento", {
                  required: "Debes aceptar la política de datos",
                })}
              />
              <span className="text-sm">
                Acepto la política de tratamiento de datos personales
              </span>
            </div>

            {/* reCAPTCHA */}
            <div
              className="g-recaptcha"
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            ></div>

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
              {status === "sending" ? "Enviando..." : "Enviar PQRS"}
            </button>

            {/* Estados */}
            {status === "captcha-error" && (
              <p className="text-red-500 text-sm text-center">
                ⚠️ Por favor valida el reCAPTCHA
              </p>
            )}

            {status === "success" && (
              <p className="text-[#45C93E] font-medium mt-2 text-center">
                ✅ Tu PQRS fue enviada con éxito. Radicado: {radicado}
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 font-medium mt-2 text-center">
                ❌ Hubo un error al enviar tu PQRS. Intenta de nuevo.
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}
