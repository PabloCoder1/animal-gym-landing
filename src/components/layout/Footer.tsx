// 📄 src/components/layout/Footer.tsx
import { Dumbbell } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { businessData } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-brand-500" />
          <span className="font-heading text-lg font-black uppercase tracking-wider text-white">
            {businessData.name}
          </span>
        </div>

        <p className="text-center text-sm text-zinc-500 md:text-left">
          &copy; {currentYear} {businessData.name}. Todos os direitos reservados.
        </p>

        <div className="text-sm text-zinc-500 text-center md:text-right">
          Desenvolvido para gerar resultados.
        </div>
      </Container>
    </footer>
  );
}