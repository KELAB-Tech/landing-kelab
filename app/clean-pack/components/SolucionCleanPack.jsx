import { Recycle, FileCheck2, Users, ShieldCheck } from "lucide-react";

export default function SolucionCleanPack() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-[#f4f6fb]">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado estratégico */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="h-1 w-20 bg-[#000180] rounded-full mx-auto mb-8" />

          <h2 className="text-3xl md:text-4xl font-bold text-[#000180] leading-tight">
            Clean Pack: estructura colectiva para el cumplimiento REP
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Un plan colectivo diseñado para que su empresa cumpla con la
            Resolución 803 de 2024, gestione vigencias 2021–2025 y reduzca
            riesgos legales sin asumir la carga operativa de un plan individual.
          </p>
        </div>

        {/* Grid solución */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          <SolucionItem
            icon={<Users size={26} />}
            title="Modelo colectivo optimizado"
            description="Integramos múltiples empresas bajo una misma estructura técnica y operativa, optimizando costos y maximizando el cumplimiento de metas de aprovechamiento."
          />

          <SolucionItem
            icon={<Recycle size={26} />}
            title="Gestión integral del aprovechamiento"
            description="Coordinamos operadores, logística y trazabilidad para garantizar la correcta gestión de residuos de envases y empaques."
          />

          <SolucionItem
            icon={<FileCheck2 size={26} />}
            title="Soporte documental y certificación"
            description="Aseguramos el respaldo técnico y documental necesario para demostrar cumplimiento ante la autoridad ambiental."
          />

          <SolucionItem
            icon={<ShieldCheck size={26} />}
            title="Acompañamiento normativo especializado"
            description="Asesoría estratégica frente a REP, Resolución 803 de 2024 y procesos de subsanación de vigencias anteriores."
          />
        </div>

        {/* Bloque diferenciador institucional */}
        <div className="mt-24 max-w-4xl mx-auto border border-gray-200 rounded-3xl p-12 text-center bg-white shadow-sm">
          <div className="h-1 w-24 bg-[#000180] rounded-full mx-auto mb-8" />

          <h3 className="text-2xl font-semibold text-[#000180] mb-6">
            Más eficiente que un plan individual
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            Clean Pack permite cumplir metas regulatorias con menor carga
            administrativa, menor exposición jurídica y una estructura técnica
            consolidada. Una solución estratégica frente a la complejidad
            operativa del cumplimiento ambiental.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Componente tarjeta solución institucional */
function SolucionItem({ icon, title, description }) {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#000180]/5 text-[#000180] shrink-0">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#000180] mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
