// 📄 src/components/sections/Services.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle, SectionSubtitle, Highlight } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";
import { getWhatsAppLink, WA_MESSAGES } from "@/lib/whatsapp";

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-zinc-925">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <SectionTitle>Nossas <Highlight>Modalidades</Highlight></SectionTitle>
          <SectionSubtitle>
            Escolha o treino que mais combina com seu estilo e conte com profissionais qualificados para te apoiar.
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800 p-8 flex flex-col h-full"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                <service.icon size={32} />
              </div>
              
              <h3 className="font-heading text-2xl font-black uppercase text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <a 
                href={getWhatsAppLink(WA_MESSAGES[service.id as keyof typeof WA_MESSAGES])}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  Saber mais
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}