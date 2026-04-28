"use client";
import { cn } from "@/lib/utils";

type Audience = "creator" | "sponsor";

interface AudienceToggleProps {
  value: Audience;
  onChange: (v: Audience) => void;
  className?: string;
}

export function AudienceToggle({ value, onChange, className }: AudienceToggleProps) {
  const options: { id: Audience; label: string }[] = [
    { id: "creator", label: "Je suis Créateur" },
    { id: "sponsor", label: "Je suis Sponsor" },
  ];

  return (
    <nav
      aria-label="Sélection du profil"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-gradient-to-r from-white/0 to-white/10 p-1.5 sm:gap-2.5 sm:p-2.5",
        className,
      )}
    >
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn(
              "rounded-full px-3 py-2 font-grotesk text-sm leading-none tracking-tight transition-colors whitespace-nowrap sm:px-5 sm:py-4 sm:text-lg",
              active
                ? "bg-[#f75b02] font-bold text-white"
                : "bg-transparent font-medium text-white hover:bg-white/10",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </nav>
  );
}
