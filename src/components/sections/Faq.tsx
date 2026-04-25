// 📄 src/components/sections/Faq.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle, SectionSubtitle, Highlight } from "@/components/ui/Typography";
import { faqs } from "@/lib/data";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-zinc-925">
      <Container className="max-w-4xl">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionTitle>Dúvidas <Highlight>Frequentes</Highlight></SectionTitle>
          <SectionSubtitle>
            Tudo o que você precisa saber antes de dar o primeiro passo.
          </SectionSubtitle>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-colors hover:border-zinc-700"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-heading font-bold text-white md:text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-4 flex-shrink-0 text-brand-500"
                  >
                    <ChevronDown className="h-6 w-6" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-zinc-800/50 p-6 pt-2 text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}