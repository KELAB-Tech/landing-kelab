"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/app/(market)/marketplace/store/cartStore";

/* ================== MENSAJES ================== */
const ecoMessages = {
  idle: "¡Hola! Soy ECO 🐿️ ¿Listo para reciclar?",
  empty: "Agrega materiales y genera impacto ♻️",
  cart: (items) => `¡Buen trabajo! Llevas ${items} material(es) 🌍`,
  impact: (kg) => `¡Increíble! Estás evitando ${kg.toFixed(1)} kg de CO₂ 💚`,
  celebration: "🎉 ¡Gracias! Tu compra ayudó al planeta 🐿️🌱",
};

export default function EcoAssistant() {
  const totalItems = useCartStore((s) => s.getTotalItems());
  const ecoImpact = useCartStore((s) => s.getEcoImpact());
  const ecoCelebration = useCartStore((s) => s.ecoCelebration);

  const [message, setMessage] = useState(ecoMessages.idle);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (ecoCelebration) {
      setMessage(ecoMessages.celebration);
      return;
    }

    if (totalItems === 0) {
      setMessage(ecoMessages.empty);
      return;
    }

    if (ecoImpact > 0) {
      setMessage(ecoMessages.impact(ecoImpact));
      return;
    }

    setMessage(ecoMessages.cart(totalItems));
  }, [totalItems, ecoImpact, ecoCelebration]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* ECO */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <Image
          src={
            ecoCelebration
              ? "/marketplace/mascota/eco-celebracion.png"
              : "/marketplace/mascota/eco1.png"
          }
          alt="ECO asistente ecológico"
          width={90}
          height={90}
          priority
        />
      </motion.div>

      {/* Globo */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="absolute bottom-24 right-0 bg-white border shadow-xl rounded-2xl px-4 py-3 w-64 text-sm"
          >
            <p className="text-gray-700">{message}</p>

            {ecoImpact > 0 && (
              <p className="mt-2 text-xs text-[#45C93E] font-semibold">
                🌱 Impacto ambiental positivo
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
