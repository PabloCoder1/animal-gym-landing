// 📄 src/components/WhatsAppFloatingButton.tsx
"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={getWhatsAppLink(WA_MESSAGES.default)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#1DA851] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-zinc-950 md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Falar no WhatsApp"
    >
      {/* Círculo pulsante atrás do ícone para atrair a visão periférica */}
      <div className="absolute inset-0 rounded-full animate-pulse-slow bg-[#25D366]/40" />
      <MessageCircle className="relative z-10 h-7 w-7" />
    </motion.a>
  );
}