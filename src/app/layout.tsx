// 📄 src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Animal Gym | A Sua Academia em Santos",
  description: "Transforme seu corpo e sua mente na Animal Gym. Musculação, Funcional e Muay Thai com ambiente acolhedor e focado nos seus resultados. Agende uma visita!",
  keywords: "academia santos, musculação santos, muay thai santos, emagrecimento, animal gym, treino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-50 font-sans antialiased selection:bg-brand-500 selection:text-white">
        <Navbar />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}