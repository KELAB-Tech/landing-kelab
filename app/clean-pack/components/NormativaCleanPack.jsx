import { Scale, FileText, ShieldCheck, Landmark } from "lucide-react";

export default function ConfianzaCleanPack() {
  return (
    <section className="py-28 px-6 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado estratégico */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000180] leading-tight">
            Confianza respaldada por estructura normativa
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Clean Pack opera bajo el marco regulatorio ambiental colombiano, con
            enfoque técnico, trazabilidad documental y cumplimiento estructurado
            de la Responsabilidad Extendida del Productor (REP).
          </p>
        </div>

        {/* Grid autoridad */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Autoridad
            icon={<Scale size={28} />}
            title="Resolución 803 de 2024"
            description="Cumplimiento de metas actualizadas de aprovechamiento y lineamientos vigentes para envases y empaques."
          />

          <Autoridad
            icon={<FileText size={28} />}
            title="Resolución 1407 de 2018"
            description="Base normativa de la Responsabilidad Extendida del Productor en Colombia."
          />

          <Autoridad
            icon={<ShieldCheck size={28} />}
            title="Modelo de plan colectivo"
            description="Estructura permitida por la normativa para optimizar cumplimiento y reducir cargas individuales."
          />

          <Autoridad
            icon={<Landmark size={28} />}
            title="Soporte ante autoridades"
            description="Acompañamiento técnico frente a requerimientos de ANLA y autoridades ambientales regionales."
          />
        </div>

        {/* Bloque de refuerzo institucional */}
        <div className="mt-20 bg-white border border-gray-100 shadow-sm rounded-2xl p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#000180] mb-4">
            Estructura técnica, no improvisación
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Cada etapa del plan colectivo está diseñada para garantizar
            trazabilidad, soporte documental verificable y cumplimiento
            normativo sostenible en el tiempo.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Card autoridad */
function Autoridad({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-[#45C93E]/10 text-[#45C93E] mb-6">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-[#000180] mb-3">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
