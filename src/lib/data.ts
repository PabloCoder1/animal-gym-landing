// 📄 src/lib/data.ts
import { Dumbbell, Flame, Shield } from "lucide-react";

export const businessData = {
  name: "Animal Gym",
  address: "R. Flamínio Levy, 6 - Saboó, Santos - SP",
  hours: "Seg-Sex: 06h às 23h | Sáb: 08h às 14h",
};

export const services = [
  {
    id: "musculacao",
    title: "Musculação",
    description: "Equipamentos modernos e treinos periodizados para você ganhar força, massa magra e transformar seu corpo, não importa se você nunca treinou antes.",
    icon: Dumbbell,
  },
  {
    id: "funcional",
    title: "Treino Funcional",
    description: "Aulas dinâmicas e intensas projetadas para queimar gordura, ganhar fôlego e melhorar seu condicionamento para os desafios do dia a dia.",
    icon: Flame,
  },
  {
    id: "muaythai",
    title: "Muay Thai",
    description: "Gaste energia, aprenda a se defender e construa uma disciplina de ferro em aulas empolgantes. Respeito e evolução para todos os níveis.",
    icon: Shield,
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Carlos M.",
    role: "Iniciante na Musculação",
    text: "Sempre tive vergonha de ir para a academia, mas o clima aqui é diferente. Os professores me acolheram desde o primeiro dia. Em 3 meses já sinto outra energia para trabalhar.",
  },
  {
    id: 2,
    name: "Juliana T.",
    role: "Aluna de Muay Thai & Funcional",
    text: "Eu não aguentava mais a rotina sedentária. O Muay Thai me devolveu a disposição e o foco. Sem contar que a galera aqui no Saboó é super receptiva, me senti em casa.",
  },
  {
    id: 3,
    name: "Roberto S.",
    role: "Foco em Hipertrofia",
    text: "Aparelhagem impecável e horário flexível. Saio do trabalho tarde e consigo treinar tranquilamente à noite sem aquela superlotação absurda de outras academias de rede.",
  }
];

export const faqs = [
  {
    question: "Nunca treinei na vida. Vou ficar perdido?",
    answer: "De jeito nenhum! Nosso time é treinado exatamente para acolher iniciantes. Você terá um treino montado para o seu nível e acompanhamento constante para executar os movimentos com total segurança."
  },
  {
    question: "Quais são os dias e horários de funcionamento?",
    answer: "Estamos abertos de Segunda a Sexta, das 06h às 23h. Aos Sábados, abrimos das 08h às 14h. Fechamos aos domingos para você e nossa equipe recarregarem as energias."
  },
  {
    question: "Preciso pagar taxa de matrícula absurda ou fidelidade?",
    answer: "Acreditamos na transparência e no resultado, não em prender alunos por contrato. Chame nossa equipe no WhatsApp para conhecer nossos planos flexíveis e sem entrelinhas."
  },
  {
    question: "Onde vocês estão localizados exatamente?",
    answer: "Ficamos na Rua Flamínio Levy, 6 - Saboó, Santos - SP. Fácil acesso e excelente localização para quem mora ou trabalha na região."
  }
];