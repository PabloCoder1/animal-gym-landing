// 📄 src/components/sections/Location.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle, Highlight } from "@/components/ui/Typography";
import { businessData } from "@/lib/data";

export function Location() {
  // URL codificada para o Google Maps iframe focar na Rua Flamínio Levy, Saboó
  const mapUrl = "https://maps.google.com/maps?q=R.%20Flam%C3%ADnio%20Levy,%206%20-%20Sabo%C3%B3,%20Santos%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="localizacao" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle className="mb-8">
              Venha nos <Highlight>Visitar</Highlight>
            </SectionTitle>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">Endereço</h4>
                  <p className="text-zinc-400">{businessData.address}</p>
                  <p className="text-zinc-500 text-sm mt-1">Fácil acesso para toda a região.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-zinc-400">{businessData.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-1">Contato Rápido</h4>
                  <p className="text-zinc-400">WhatsApp: (13) 99156-0814</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-brand-500/5 relative group"
          >
            {/* Overlay para evitar o clique acidental no mapa durante o scroll mobile */}
            <div className="absolute inset-0 z-10 bg-transparent" style={{ pointerEvents: 'none' }} />
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}