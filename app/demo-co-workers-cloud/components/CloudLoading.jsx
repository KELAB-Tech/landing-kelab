"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CloudLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        {/* Logo con halo elegante */}
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full blur-2xl bg-[#45C93E]/30" />
          <Image
            src="/co-workers/co-logo.svg"
            alt="Co-Workers Cloud"
            width={96}
            height={96}
            priority
            className="relative z-10"
          />
        </motion.div>

        {/* Texto corporativo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm tracking-widest uppercase text-gray-600"
        >
          Centro comercial digital
        </motion.p>

        {/* Barra de carga minimal */}
        <div className="w-48 h-[3px] bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#45C93E] to-[#000180]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
