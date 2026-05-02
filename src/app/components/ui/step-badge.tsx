import { cn } from "@/lib/utils";

interface StepBadgeProps {
  number: string;
  className?: string;
  variant?: "creator" | "sponsor";
}

export function StepBadge({ number, className, variant = "creator" }: StepBadgeProps) {
  return (
    <div
      className={cn(
        "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] sm:h-[62px] sm:w-[62px] sm:rounded-[20px]",
        variant === "creator"
          ? "bg-[linear-gradient(47deg,#5312a4_0%,#a257ff_100%)] shadow-[0_0_60px_#842ef0] sm:shadow-[0_0_127px_#842ef0]"
          : "bg-[linear-gradient(47deg,#a63200_0%,#ff6b2b_100%)] shadow-[0_0_60px_#f75b02] sm:shadow-[0_0_127px_#f75b02]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[14px] before:p-px before:content-[''] sm:before:rounded-[20px]",
        "before:[background:linear-gradient(180deg,rgba(255,255,255,0.19)_0%,rgba(255,255,255,0.02)_100%)]",
        "before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        "before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]",
        className,
      )}
    >
      <span className="relative z-10 font-grotesk text-lg font-bold tracking-tight text-white sm:text-2xl">
        {number}
      </span>
    </div>
  );
}