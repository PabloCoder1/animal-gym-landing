// 📄 src/components/ui/Typography.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: TypographyProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`font-heading text-3xl font-black uppercase tracking-tight text-white md:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function SectionSubtitle({ children, className = "" }: TypographyProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className={`mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg ${className}`}
    >
      {children}
    </motion.p>
  );
}

// Componente utilitário para colorir palavras-chave com a cor da marca (Laranja)
export function Highlight({ children, className = "" }: TypographyProps) {
  return (
    <span className={`text-brand-500 ${className}`}>
      {children}
    </span>
  );
}