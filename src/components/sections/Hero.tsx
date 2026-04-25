// 📄 src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Users, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Highlight } from "@/components/ui/Typography";
import { getWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-20">
      {/* Background de Vídeo */}
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
          poster="/hero-poster.jpg"
        >
          {/* Vídeo de exemplo focado em fitness/treino pesado. Substituir pelo vídeo real da academia depois na pasta public */}
          <source src="https://cdn.coverr.co/videos/coverr-a-man-lifting-weights-in-a-gym-5360/1080p.mp4" type="video/mp4" />
        </video>
        {/* Gradiente escuro para garantir que o texto e o CTA tenham 100% de legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Headline Forte */}
          <h1 className="font-heading text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Forje sua melhor versão na <Highlight>Animal Gym</Highlight>
          </h1>
          
          {/* Subheadline quebrando objeções e gerando pertencimento local */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl text-balance">
            Musculação, Funcional e Muay Thai no Saboó. Um ambiente feito para quem quer resultados reais, sem julgamentos e com acompanhamento de perto.
          </p>

          {/* Área de Conversão */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0">
            <a 
              href={getWhatsAppLink(WA_MESSAGES.hero)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto shadow-brand-500/30 shadow-2xl">
                Começar Minha Transformação
              </Button>
            </a>
          </div>

          {/* Prova Social Leve - Estrutura de confiança para iniciantes */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex flex-col items-center justify-center gap-3 text-sm font-medium text-zinc-400 sm:flex-row sm:gap-6"
          >
            <div className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-800/50">
              <div className="flex text-brand-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>Aprovada por centenas de alunos</span>
            </div>
            <div className="hidden h-4 w-px bg-zinc-700 sm:block" />
            <div className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-800/50">
              <Users className="h-4 w-4 text-brand-500" />
              <span>Ambiente acolhedor para iniciantes</span>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}