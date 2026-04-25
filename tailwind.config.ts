// 📄 tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF5722", // Laranja/Vermelho vibrante - energia pura para o CTA
          50: "#FFF0EB",
          100: "#FFD9CC",
          200: "#FFBBA3",
          300: "#FF9470",
          400: "#FF7342",
          500: "#FF5722", // CTA Principal
          600: "#E54512", // Hover do CTA
          700: "#B8320A",
          800: "#8F2A0B",
          900: "#75260D",
          950: "#401004",
        },
        zinc: {
          925: "#121214", // Fundo customizado premium, quebra a dureza do preto absoluto
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;