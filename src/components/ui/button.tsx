import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "teal" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tis-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "min-h-[2.5rem] px-4 text-xs rounded-lg gap-1.5",
      md: "min-h-[3rem] px-5 text-sm rounded-xl gap-2",
      lg: "min-h-[3.5rem] px-7 text-base rounded-xl gap-2.5 font-semibold",
    };

    const variantStyles = {
      primary:
        "bg-tis-red text-white hover:bg-tis-red-600 shadow-md shadow-tis-red/25 hover:shadow-lg hover:shadow-tis-red/35 dark:shadow-tis-red/40",
      secondary:
        "bg-white text-tis-charcoal hover:bg-neutral-100 border border-neutral-200 dark:bg-tis-surface-cardDark dark:text-white dark:border-white/10 dark:hover:bg-white/10 shadow-sm",
      gold:
        "bg-tis-gold text-white hover:bg-tis-gold-dark shadow-md shadow-tis-gold/25 hover:shadow-lg hover:shadow-tis-gold/35",
      teal:
        "bg-tis-teal text-tis-charcoal font-semibold hover:bg-tis-teal-dark hover:text-white shadow-md shadow-tis-teal/20",
      outline:
        "bg-transparent border-2 border-tis-red text-tis-red hover:bg-tis-red hover:text-white dark:border-tis-gold dark:text-tis-gold dark:hover:bg-tis-gold dark:hover:text-tis-charcoal",
      ghost:
        "bg-transparent text-tis-charcoal hover:bg-neutral-100 dark:text-white dark:hover:bg-white/10",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
