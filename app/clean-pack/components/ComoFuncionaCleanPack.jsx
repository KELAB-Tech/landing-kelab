import Image from "next/image";

export default function ComoFuncionaCleanPack() {
  const pasos = [
    {
      number: "01",
      image: "/cleanpack/beneficios/Afiliacion.jpg",
      title: "Afiliación y diagnóstico",
      description:
        "Formalizamos la vinculación al plan colectivo y evaluamos el alcance de sus obligaciones REP.",
    },
    {
      number: "02",
      image: "/cleanpack/beneficios/tecnica.jpg",
      title: "Caracterización técnica",
      description:
        "Analizamos los envases y empaques puestos en el mercado para definir metas de cumplimiento.",
    },
    {
      number: "03",
      image: "/cleanpack/beneficios/operativa.jpg",
      title: "Ejecución operativa",
      description:
        "Coordinamos la gestión, recolección y aprovechamiento mediante aliados autorizados.",
    },
    {
      number: "04",
      image: "/cleanpack/beneficios/certificacion.jpg",
      title: "Certificación y soporte",
      description:
        "Emitimos soporte documental y acompañamiento ante la autoridad ambiental.",
    },
  ];

  return (
    <section className="py-28 px-6 bg-[#f5f7fb]">
      <div className="max-w-7xl mx-auto">
        {/* ENCABEZADO */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm tracking-widest text-gray-400 mb-4">
            // CLEAN PACK
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#000180] leading-tight">
            ¿Cómo funciona el Plan Colectivo?
          </h2>

          <div className="w-16 h-1 bg-[#000180] mx-auto mt-6 rounded-full" />
        </div>

        {/* PASOS */}
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {pasos.map((paso, index) => (
            <div key={index} className="relative">
              {/* Imagen circular */}
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 rounded-full bg-white shadow-xl" />

                <Image
                  src={paso.image}
                  alt={paso.title}
                  fill
                  className="rounded-full object-cover p-3"
                />

                {/* Número flotante */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                  <div className="relative flex items-center justify-center w-16 h-16">
                    <div className="absolute w-16 h-16 bg-[#000180]/20 rounded-full animate-ping" />
                    <div className="relative w-14 h-14 bg-[#000180] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {paso.number}
                    </div>
                  </div>
                </div>
              </div>

              {/* Texto */}
              <h3 className="mt-10 text-lg font-semibold text-[#000180]">
                {paso.title}
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {paso.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
