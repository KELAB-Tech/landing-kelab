"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DiagnosticoREP() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    importa: "",
    fabrica: "",
    comercializa: "",
    reporto: "",
    volumen: "",
    sector: "",
    empresa: "",
    cargo: "",
    email: "",
    telefono: "",
  });

  const [resultado, setResultado] = useState(null);

  const totalSteps = 3;

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const evaluarRiesgo = () => {
    const aplica =
      form.importa === "si" ||
      form.fabrica === "si" ||
      form.comercializa === "si";

    if (aplica && form.reporto === "no") {
      setResultado("alto");
    } else if (aplica && form.reporto === "si") {
      setResultado("medio");
    } else {
      setResultado("bajo");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    evaluarRiesgo();
  };

  const progreso = (step / totalSteps) * 100;

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-to-br from-white via-[#f4f8ff] to-[#eef9f1]">
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#000180] mb-4">
            Diagnóstico preliminar de cumplimiento REP
          </h1>
          <p className="text-gray-600">
            Evalúe en menos de 3 minutos si su empresa presenta obligaciones
            frente a la normativa de envases y empaques en Colombia.
          </p>
        </div>

        {/* Barra progreso */}
        {!resultado && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-10">
            <div
              className="h-2 rounded-full bg-[#45C93E] transition-all duration-500"
              style={{ width: `${progreso}%` }}
            />
          </div>
        )}

        {!resultado ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 space-y-6"
          >
            {/* PASO 1 */}
            {step === 1 && (
              <>
                <Pregunta
                  label="¿Importa productos envasados?"
                  value={form.importa}
                  onChange={(v) => handleChange("importa", v)}
                />
                <Pregunta
                  label="¿Fabrica productos envasados?"
                  value={form.fabrica}
                  onChange={(v) => handleChange("fabrica", v)}
                />
                <Pregunta
                  label="¿Comercializa productos con marca propia?"
                  value={form.comercializa}
                  onChange={(v) => handleChange("comercializa", v)}
                />
              </>
            )}

            {/* PASO 2 */}
            {step === 2 && (
              <>
                <Pregunta
                  label="¿Reportó información ante autoridad ambiental 2023–2024?"
                  value={form.reporto}
                  onChange={(v) => handleChange("reporto", v)}
                />
                <input
                  type="text"
                  placeholder="Volumen anual estimado (toneladas)"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3"
                  onChange={(e) => handleChange("volumen", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Sector económico"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3"
                  onChange={(e) => handleChange("sector", e.target.value)}
                />
              </>
            )}

            {/* PASO 3 */}
            {step === 3 && (
              <>
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3"
                  required
                  onChange={(e) => handleChange("empresa", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Cargo"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3"
                  onChange={(e) => handleChange("cargo", e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Correo corporativo"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3"
                  required
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3"
                  onChange={(e) => handleChange("telefono", e.target.value)}
                />
              </>
            )}

            {/* Botones */}
            <div className="flex justify-between pt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600"
                >
                  Atrás
                </button>
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-8 py-3 rounded-lg bg-[#000180] text-white"
                >
                  Continuar
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-8 py-3 rounded-lg bg-[#45C93E] text-white"
                >
                  Ver resultado
                </button>
              )}
            </div>
          </motion.form>
        ) : (
          <Resultado tipo={resultado} />
        )}
      </div>
    </section>
  );
}

/* COMPONENTE PREGUNTA */
function Pregunta({ label, value, onChange }) {
  return (
    <div>
      <p className="mb-3 font-medium text-[#000180]">{label}</p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => onChange("si")}
          className={`px-6 py-2 rounded-lg border ${
            value === "si"
              ? "bg-[#45C93E] text-white border-[#45C93E]"
              : "border-gray-300"
          }`}
        >
          Sí
        </button>
        <button
          type="button"
          onClick={() => onChange("no")}
          className={`px-6 py-2 rounded-lg border ${
            value === "no"
              ? "bg-red-500 text-white border-red-500"
              : "border-gray-300"
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}

/* RESULTADO */
function Resultado({ tipo }) {
  const mensajes = {
    alto: {
      titulo: "Posible exposición normativa alta",
      texto:
        "Su empresa podría estar sujeta a obligaciones REP activas y presentar exposición frente a la normativa vigente. Se recomienda análisis técnico inmediato.",
    },
    medio: {
      titulo: "Nivel de cumplimiento intermedio",
      texto:
        "Su empresa presenta indicios de cumplimiento, pero se recomienda revisión documental y validación técnica.",
    },
    bajo: {
      titulo: "Baja probabilidad de obligación directa",
      texto:
        "Según la información suministrada, su empresa podría no estar sujeta a obligación directa, aunque se sugiere revisión preventiva.",
    },
  };

  return (
    <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
      <h2 className="text-2xl font-semibold text-[#000180] mb-6">
        {mensajes[tipo].titulo}
      </h2>
      <p className="text-gray-600 mb-8">{mensajes[tipo].texto}</p>
      <a
        href="/contacto"
        className="inline-block px-8 py-3 bg-[#45C93E] text-white rounded-xl font-semibold"
      >
        Solicitar análisis técnico detallado
      </a>
    </div>
  );
}
