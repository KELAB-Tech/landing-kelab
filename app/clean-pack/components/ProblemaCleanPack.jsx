import { AlertTriangle, FileWarning, Scale, TrendingUp } from "lucide-react";

export default function ProblemaCleanPack() {
  return (
    <section className="py-28 px-6 bg-[#f8f9fc] relative">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="h-1 w-20 bg-[#000180] rounded-full mx-auto mb-8" />

          <h2 className="text-3xl md:text-4xl font-bold text-[#000180] leading-tight">
            El cumplimiento ambiental ya no es opcional
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            La Responsabilidad Extendida del Productor (REP) y la Resolución 803
            de 2024 exigen metas claras de aprovechamiento para envases y
            empaques. Muchas empresas aún presentan rezagos en vigencias
            2021–2025.
          </p>
        </div>

        {/* Grid de problemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProblemaItem
            icon={<Scale size={26} />}
            title="Exigencia regulatoria creciente"
            description="Las metas de aprovechamiento son progresivas y requieren estructura técnica para su cumplimiento."
          />

          <ProblemaItem
            icon={<FileWarning size={26} />}
            title="Complejidad en reportes y certificación"
            description="Demostrar cumplimiento ante la autoridad ambiental implica trazabilidad, soporte documental y gestión especializada."
          />

          <ProblemaItem
            icon={<AlertTriangle size={26} />}
            title="Riesgo de sanciones"
            description="El incumplimiento puede generar procesos administrativos y sanciones económicas significativas."
          />

          <ProblemaItem
            icon={<TrendingUp size={26} />}
            title="Costos elevados en planes individuales"
            description="Gestionar infraestructura, logística y operadores por cuenta propia incrementa los costos operativos."
          />
        </div>
      </div>
    </section>
  );
}

/* Card institucional */
function ProblemaItem({ icon, title, description }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:border-[#000180]/20">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#000180]/5 text-[#000180] mb-6">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-[#000180] mb-3">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
