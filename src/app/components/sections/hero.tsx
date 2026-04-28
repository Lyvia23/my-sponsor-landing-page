"use client";
import { useState } from "react";
import { AudienceToggle } from "@/components/ui/audience-toggle";
import { GradientButton } from "@/components/ui/gradient-button";

export function Hero() {
  const [audience, setAudience] = useState<"creator" | "sponsor">("creator");

  return (
    <section className="relative w-full px-4 pb-10 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:pb-20 lg:pt-10">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 sm:gap-9">
        <AudienceToggle value={audience} onChange={setAudience} />

        {/* Badge */}
        <div className="flex items-center gap-2 rounded-full border border-[#00ff88] bg-[#00ff88]/15 px-4 py-1.5 font-grotesk text-xs font-bold tracking-tight text-[#00ff88] sm:px-[22px] sm:py-[7px] sm:text-[15px]">
          Monétise ton audience
        </div>

        {/* Headline */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="max-w-4xl text-center font-grotesk text-[36px] font-normal leading-[0.9] sm:text-[48px] lg:text-[64px] xl:text-[84px]">
            <span className="font-bold tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-3.5px] text-white">Trouve des </span>
            <span className="font-modak tracking-[-0.6px] sm:tracking-[-1px] lg:tracking-[-1.4px] text-[#f3b620]">sponsors</span>
            <br />
            <span className="font-bold text-white/75">prêts à te payer</span>
          </h1>
        </div>

        {/* Description + CTA */}
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <p className="max-w-[672px] text-center font-grotesk text-base font-normal leading-relaxed tracking-tight text-white sm:text-lg lg:text-[22px]">
            Trouvez des sponsors et multiplie tes revenus grâce à ton métier de créateur de
            contenu sans perdre du temps.
          </p>

          <div className="rounded-[5px] border border-dashed border-[#9747ff] p-4 sm:p-[30px]">
            <GradientButton variant="orange" glow>
              Essayer Maintenant – C&apos;est Gratuit
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
