// 📄 src/lib/whatsapp.ts

// O número deve incluir o código do país (55 para Brasil) e o DDD (13) sem formatação
export const WHATSAPP_NUMBER = "5513991560814";

export const getWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Mensagens pré-definidas para usarmos nos CTAs específicos da página
export const WA_MESSAGES = {
  default: "Olá! Gostaria de saber mais sobre a Animal Gym. Vim pelo site e quero conhecer os planos.",
  hero: "Fala, equipe Animal Gym! Vi o site e quero dar o primeiro passo. Como funcionam os planos?",
  musculacao: "Olá! Tenho interesse em focar na Musculação. Podem me passar mais detalhes?",
  funcional: "Oi! Vi no site sobre as aulas de Funcional e quero saber os horários disponíveis.",
  muaythai: "Fala! Quero gastar energia e aprender Muay Thai. Como funciona a grade de horários?",
  pricing: "Olá! Quero agendar uma visita e fazer minha matrícula na Animal Gym. Qual o próximo passo?",
};  