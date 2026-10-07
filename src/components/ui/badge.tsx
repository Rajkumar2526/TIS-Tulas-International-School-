import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "red" | "gold" | "teal" | "neutral";
  className?: string;
}

export function Badge({ children, variant = "red", className = "" }: BadgeProps) {
  const variantStyles = {
    red: "bg-tis-red/10 text-tis-red border-tis-red/20 dark:bg-tis-red/20 dark:text-tis-red-300 dark:border-tis-red/30",
    gold: "bg-tis-gold/10 text-tis-gold-dark border-tis-gold/30 dark:bg-tis-gold/20 dark:text-tis-gold-light",
    teal: "bg-tis-teal/15 text-tis-teal-dark border-tis-teal/30 dark:bg-tis-teal/20 dark:text-tis-teal-light",
    neutral: "bg-neutral-100 text-neutral-700 border-neutral-200 dark:bg-white/10 dark:text-neutral-300 dark:border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
