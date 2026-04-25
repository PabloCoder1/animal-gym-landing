// 📄 src/components/sections/Cta.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";

export function Cta() {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-500">
      {/* Elementos de fundo para dar textura visual sem poluir */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black opacity-20 blur-3xl" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl text-balance mb-6">
            Chega de adiar os seus resultados.
          </h2>
          
          <p className="text-lg text-brand-50 mb-10 md:text-xl text-balance">
            Você está a um clique de mudar sua rotina. Chame nossa equipe agora, tire suas dúvidas e venha conhecer a Animal Gym sem compromisso.
          </p>

          <a 
            href={getWhatsAppLink(WA_MESSAGES.pricing)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            {/* O botão aqui usa estilo invertido (fundo escuro) pois a seção inteira é laranja */}
            <Button size="lg" className="w-full sm:w-auto bg-zinc-950 text-white hover:bg-zinc-900 border-2 border-transparent hover:border-zinc-800 shadow-2xl shadow-zinc-950/50">
              Falar com Atendimento
            </Button>
          </a>
          <p className="mt-4 text-sm font-medium text-brand-100">
            Tempo de resposta médio: 5 minutos
          </p>
        </motion.div>
      </Container>
    </section>
  );
}