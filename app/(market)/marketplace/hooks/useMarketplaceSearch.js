"use client";

import { useState, useEffect } from "react";

export function useMarketplaceSearch(data = []) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();

    const filtered = data
      .filter((item) =>
        [
          item.title,
          item.category,
          item.companyId, // por ahora id, luego nombre
          item.unit,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
      .map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        company: `Empresa ${item.companyId}`, // luego lo conectamos a companies
        image: item.image,
        href: `/marketplace/${item.slug}`, // 🔥 CLAVE
      }))
      .slice(0, 6);

    setResults(filtered);
  }, [query, data]);

  return {
    query,
    setQuery,
    results,
  };
}
