import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "orange" | "green" | "purple";
  glow?: boolean;
}

const variants = {
  orange:
    "bg-[linear-gradient(180deg,#ff7627_0%,#d04c00_100%)] before:[background:linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.09)_100%)]",
  green:
    "bg-[linear-gradient(180deg,#00ff88_0%,#006d3a_100%)] before:[background:linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.09)_100%)]",
  purple:
    "bg-[linear-gradient(180deg,#5312a4_0%,#852ef0_100%)] before:[background:linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.09)_100%)]",
};

export function GradientButton({
  variant = "orange",
  glow = false,
  className,
  children,
  ...props
}: GradientButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "relative inline-flex h-auto items-center justify-center overflow-hidden rounded-[12px] px-4 py-3 text-white transition-opacity hover:opacity-90 sm:rounded-[15px] sm:px-5 sm:py-[15px]",
        "before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[12px] before:p-0.5 before:content-[''] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] sm:before:rounded-[15px]",
        glow && "shadow-[0_0_0_6px_rgba(255,255,255,0.1)] sm:shadow-[0_0_0_10px_rgba(255,255,255,0.1)]",
        variants[variant],
        className,
      )}
    >
      <span className="relative z-[2] font-grotesk text-sm font-bold leading-snug tracking-tight whitespace-nowrap sm:text-lg">
        {children}
      </span>
    </button>
  );
}
