"use client";

import { useTheme } from "@/hooks/use-theme";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Avoid hydration mismatch by rendering a stable placeholder until client mounted
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={`h-10 w-10 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 opacity-60 ${className}`}
        disabled
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative h-10 w-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
        isDark
          ? "border-tis-gold/40 bg-tis-surface-cardDark text-tis-gold hover:border-tis-gold"
          : "border-neutral-200 bg-white text-tis-charcoal hover:border-tis-red/40 hover:bg-neutral-50 shadow-sm"
      } ${className}`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-amber-500 fill-amber-500/20" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-tis-gold fill-tis-gold/20" />
      </motion.div>
    </button>
  );
}
