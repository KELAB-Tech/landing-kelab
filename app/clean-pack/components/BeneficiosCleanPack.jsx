import { ShieldCheck, TrendingDown, FileCheck2, Users } from "lucide-react";

export default function BeneficiosCleanPack() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-[#f4f6fb]">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="h-1 w-20 bg-[#000180] rounded-full mx-auto mb-8" />

          <h2 className="text-3xl md:text-4xl font-bold text-[#000180] leading-tight">
            Impacto estratégico para su organización
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Clean Pack transforma el cumplimiento normativo en una estructura
            eficiente, jurídicamente sólida y financieramente optimizada.
          </p>
        </div>

        {/* Grid institucional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Beneficio
            icon={<ShieldCheck size={24} />}
            title="Menor exposición jurídica"
            description="Cumplimiento estructurado con trazabilidad y respaldo técnico verificable."
          />

          <Beneficio
            icon={<FileCheck2 size={24} />}
            title="Soporte documental consolidado"
            description="Respaldo ante auditorías y autoridades ambientales en todas las vigencias aplicables."
          />

          <Beneficio
            icon={<TrendingDown size={24} />}
            title="Reducción de costos operativos"
            description="Modelo colectivo que optimiza recursos frente a esquemas individuales."
          />

          <Beneficio
            icon={<Users size={24} />}
            title="Gestión técnica especializada"
            description="Acompañamiento estratégico permanente en materia REP y cumplimiento ambiental."
          />
        </div>

        {/* Bloque de consolidación */}
        <div className="mt-24 max-w-4xl mx-auto border border-gray-200 rounded-3xl p-12 text-center bg-white shadow-sm">
          <div className="h-1 w-24 bg-[#000180] rounded-full mx-auto mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed">
            Una estructura colectiva que convierte la obligación regulatoria en
            una gestión técnica organizada, trazable y alineada con los
            objetivos estratégicos de su empresa.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Card institucional */
function Beneficio({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-2xl bg-[#000180]/5 text-[#000180] border border-gray-200 mb-6">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-[#000180] mb-3">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
