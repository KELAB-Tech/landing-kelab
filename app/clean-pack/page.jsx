import HeroCleanPack from "./components/HeroCleanPack";
import TargetCleanPack from "./components/TargetCleanPack";
import ProblemaCleanPack from "./components/ProblemaCleanPack";
import SolucionCleanPack from "./components/SolucionCleanPack";
import ComoFuncionaCleanPack from "./components/ComoFuncionaCleanPack";
import NormativaCleanPack from "./components/NormativaCleanPack";
import BeneficiosCleanPack from "./components/BeneficiosCleanPack";
import CTACleanPack from "./components/CTACleanPack";

export default function CleanPackPage() {
  return (
    <>
      {/* HERO */}
      <section id="hero">
        <HeroCleanPack />
      </section>
      {/* Identificación */}
      <section id="identificacion">
        <TargetCleanPack />
      </section>
      {/* problema */}
      <section id="problema">
        <ProblemaCleanPack />
      </section>
      {/* solucion */}
      <section id="solucion">
        <SolucionCleanPack />
      </section>
      {/* como funciona */}
      <section id="como-funciona">
        <ComoFuncionaCleanPack />
      </section>
      {/* beneficios */}
      <section id="beneficios">
        <BeneficiosCleanPack />
      </section>

      {/* CTA */}
      <section id="cta">
        <CTACleanPack />
      </section>
    </>
  );
}
