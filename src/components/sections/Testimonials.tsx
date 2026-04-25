// 📄 src/components/sections/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle, SectionSubtitle, Highlight } from "@/components/ui/Typography";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-zinc-950">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <SectionTitle>O que <Highlight>nossos alunos</Highlight> dizem</SectionTitle>
          <SectionSubtitle>
            Não acredite apenas na nossa palavra. Veja a transformação real de quem escolheu treinar com a gente.
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-3xl bg-zinc-925 p-8 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-zinc-800" />
              
              <div className="flex text-brand-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              
              <p className="text-zinc-300 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <p className="font-heading font-bold text-white uppercase tracking-wide">
                  {testimonial.name}
                </p>
                <p className="text-sm text-brand-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}