// 📄 src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Hero />
      <Benefits />
      <Services />
    </main>
  );
}