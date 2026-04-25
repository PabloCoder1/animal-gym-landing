// 📄 src/components/sections/Benefits.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle, SectionSubtitle, Highlight } from "@/components/ui/Typography";

const benefits = [
  { title: "Resultados Reais", desc: "Planos de treino focados no seu objetivo, seja emagrecer ou ganhar massa." },
  { title: "Clima Familiar", desc: "Aqui você não é só mais um número. Ambiente acolhedor e sem julgamentos." },
  { title: "Localização Fácil", desc: "No coração do Saboó, com fácil acesso para quem mora ou trabalha em Santos." },
  { title: "Acompanhamento", desc: "Instrutores prontos para te guiar, garantindo segurança e evolução constante." },
];

export function Benefits() {
  return (
    <section className="py-20 bg-zinc-950">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <SectionTitle>Muito mais que uma <Highlight>Academia</Highlight></SectionTitle>
          <SectionSubtitle>
            Projetamos um espaço onde você se sente bem para treinar, evoluir e alcançar a sua melhor versão no seu próprio ritmo.
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-925 border border-zinc-800/50 hover:border-brand-500/50 transition-colors group"
            >
              <CheckCircle2 className="h-8 w-8 text-brand-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}