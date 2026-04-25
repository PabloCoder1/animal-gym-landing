// 📄 src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para detectar o scroll e adicionar um fundo translúcido (glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 shadow-lg backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Dumbbell className="h-8 w-8 text-brand-500 transition-transform group-hover:rotate-12 group-hover:scale-110" />
          <span className="font-heading text-xl font-black uppercase tracking-wider text-white">
            Animal Gym
          </span>
        </a>

        {/* Links - Visíveis apenas no Desktop para não poluir a tela no celular */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Rápido */}
        <div className="flex items-center gap-4">
          <a
            href={getWhatsAppLink(WA_MESSAGES.default)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Botão menor no mobile, tamanho padrão no desktop */}
            <Button size="sm" className="md:h-12 md:px-6 md:text-base">
              Agendar Visita
            </Button>
          </a>
        </div>
      </Container>
    </motion.header>
  );
}