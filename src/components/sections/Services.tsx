// 📄 src/components/sections/Services.tsx
"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle, SectionSubtitle, Highlight } from "@/components/ui/Typography";
import { services } from "@/lib/data";
import { getWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";

function ServiceCard({ service, index }: { service: any; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // Ajusta o volume para 20% (0.2) para garantir uma experiência premium e não assustar o usuário
      videoRef.current.volume = 0.2;
      
      // 1. Tenta rodar COM áudio direto
      videoRef.current.muted = false;
      
      const playPromise = videoRef.current.play();
      
      // 2. O navegador retorna uma Promise ao tentar dar play
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // 3. Se o navegador barrar o áudio, ele cai aqui. 
          // Nós imediatamente mutamos e forçamos o play silencioso para a imagem não travar.
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      // Retorna ao mute para não vazar áudio
      videoRef.current.muted = true; 
    }
    
    // Volta o botão pro centro
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const xPos = e.clientX - rect.left - centerX;
    const yPos = e.clientY - rect.top - centerY;

    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  return (
    <motion.a
      ref={cardRef}
      href={getWhatsAppLink(WA_MESSAGES[service.id as keyof typeof WA_MESSAGES])}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-zinc-900 cursor-none"
    >
      {/* Imagem de Poster - Se der 404, não vai quebrar o layout, só vai ignorar */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
        style={{ backgroundImage: `url(${service.poster})` }}
      />

      {/* Vídeo */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        src={service.video}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />

      {/* Container do Botão Magnético */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
        <motion.div style={{ x: cursorX, y: cursorY }}>
          <div className="flex h-32 w-32 scale-50 items-center justify-center rounded-full bg-brand-500 p-4 text-white opacity-0 shadow-xl transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
            <span className="text-center font-heading text-xs font-black uppercase leading-tight tracking-widest text-balance">
              Quero <br /> Treinar
            </span>
          </div>
        </motion.div>
      </div>
      
      <div className="relative z-30 p-8 pointer-events-none">
        <h3 className="font-heading text-3xl font-black uppercase text-white drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
          {service.title}
        </h3>
      </div>
    </motion.a>
  );
}

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-zinc-950">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <SectionTitle>Nossas <Highlight>Modalidades</Highlight></SectionTitle>
          <SectionSubtitle>Escolha seu desafio e comece hoje mesmo.</SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[700px]">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}