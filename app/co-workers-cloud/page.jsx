"use client";

import { useEffect, useState } from "react";
import CloudLoading from "./components/CloudLoading";
import HeroCloud from "./components/HeroCloud";
import AssociatedCompanies from "./components/AssociatedCompanies";
import CloudServices from "./components/CloudServices";
import CloudClosing from "./components/CloudClosing";
import CloudCategories from "./components/CloudCategories";

export default function CoWorkersCloudHome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <CloudLoading />;

  return (
    <section className="relative min-h-screen">
      <HeroCloud />
      <AssociatedCompanies />
      <CloudServices />
      <CloudCategories />
      <CloudClosing />
    </section>
  );
}
