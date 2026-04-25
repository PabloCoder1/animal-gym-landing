// 📄 src/components/sections/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle, SectionSubtitle, Highlight } from "@/components/ui/Typography";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-zinc-100">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          {/* Mudando a cor do título para preto na seção clara */}
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
            Aprovada por <Highlight>quem treina</Highlight>
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 md:text-lg">
            Veja por que somos a academia favorita do Saboó.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block w-full break-inside-avoid rounded-3xl bg-white p-8 shadow-sm border border-zinc-200"
            >
              <div className="flex text-brand-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              
              <p className="text-zinc-700 leading-relaxed mb-6 font-medium">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-zinc-100 pt-4">
                <p className="font-heading font-black uppercase text-zinc-900">
                  {testimonial.name}
                </p>
                <p className="text-xs font-bold text-brand-500 uppercase tracking-widest mt-1">
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