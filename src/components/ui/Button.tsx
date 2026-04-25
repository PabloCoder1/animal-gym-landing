// 📄 src/components/ui/Button.tsx
"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    // Estilos base focados em acessibilidade e consistência
    const baseStyles = "inline-flex items-center justify-center rounded-md font-heading font-bold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25",
      outline: "border-2 border-zinc-800 bg-transparent text-zinc-100 hover:border-brand-500 hover:text-brand-500",
      ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900",
    };

    const sizes = {
      sm: "h-10 px-4 text-xs",
      md: "h-12 px-6 text-sm md:text-base",
      lg: "h-16 px-8 text-base md:text-lg", // Botões de CTA principais serão grandes e clicáveis no mobile
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";