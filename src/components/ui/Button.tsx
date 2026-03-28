import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

const base = "inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200";

const styles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dim",
  secondary: "border border-accent text-accent hover:bg-[var(--accent-glow)]",
};

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}