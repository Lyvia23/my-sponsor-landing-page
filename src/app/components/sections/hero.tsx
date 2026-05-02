"use client";
import { useState } from "react";
import Image from "next/image";
import { AudienceToggle } from "@/components/ui/audience-toggle";
import { GradientButton } from "@/components/ui/gradient-button";

export function Hero() {
  const [audience, setAudience] = useState<"creator" | "sponsor">("creator");

  return (
    <section className="relative w-full  px-2 pb-8 pt-2 sm:px-4 sm:pb-12 sm:pt-4 lg:pb-16 lg:pt-6">

      {/* Blurs décoratifs — contenus dans la section */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -left-[100px] top-[30%] h-[350px] w-[250px] rounded-[235px] blur-[120px] sm:h-[450px] sm:w-[350px] sm:blur-[160px]"
          style={{ background: "#f75b024f" }}
        />
        <div
          className="absolute -right-[100px] top-[30%] h-[350px] w-[250px] rounded-[235px] blur-[120px] sm:h-[450px] sm:w-[350px] sm:blur-[160px]"
          style={{ background: "#842ef06b" }}
        />
      </div>

      <Image
        src="/assets/images/Vector2.png"
        alt=""
        width={225}
        height={218}
        className="pointer-events-none absolute left-0 top-[25%] hidden h-[25%] w-auto lg:block"
        aria-hidden="true"
      />
      <Image
        src="/assets/images/Vector1.png"
        alt=""
        width={279}
        height={244}
        className="pointer-events-none absolute right-0 top-[25%] hidden h-[25%] w-auto lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 sm:gap-9">
        <AudienceToggle value={audience} onChange={setAudience} />

        {audience === "creator" ? (
          <div className="flex items-center gap-2 rounded-full border border-[#00ff88] bg-[#00ff88]/15 px-4 py-1.5 font-grotesk text-xs font-bold tracking-tight text-[#00ff88] sm:px-[22px] sm:py-[7px] sm:text-[15px]">
            🤑 Monétise ton audience
          </div>
        ) : (
          <div className="flex items-center gap-2 rounded-full border border-[#f75b02] bg-[#f75b02]/15 px-4 py-1.5 font-grotesk text-xs font-bold tracking-tight text-[#f75b02] sm:px-[22px] sm:py-[7px] sm:text-[15px]">
            🚀 Boostez votre visibilité
          </div>
        )}

        {audience === "creator" ? (
          <h1 className="max-w-4xl text-center font-grotesk text-[36px] font-normal leading-[0.9] sm:text-[48px] lg:text-[64px] xl:text-[84px]">
            <span className="font-bold tracking-[-1.5px] text-white sm:tracking-[-2px] lg:tracking-[-3.5px]">Trouve des </span>
            <span className="font-modak tracking-[-0.6px] text-[#f3b620] sm:tracking-[-1px] lg:tracking-[-1.4px]">sponsors</span>
            <br />
            <span className="font-bold text-white/75">prêts à te payer</span>
          </h1>
        ) : (
          <h1 className="max-w-4xl text-center font-grotesk text-[36px] font-normal leading-[0.9] sm:text-[48px] lg:text-[64px] xl:text-[84px]">
            <span className="font-bold tracking-[-1.5px] text-white sm:tracking-[-2px] lg:tracking-[-3.5px]">Trouvez les </span>
            <span className="font-modak tracking-[-0.6px] text-[#00ff88] sm:tracking-[-1px] lg:tracking-[-1.4px]">créateurs</span>
            <br />
            <span className="font-bold text-white/75">parfaits</span>
          </h1>
        )}

        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <p className="max-w-[672px] text-center font-grotesk text-base font-normal leading-relaxed tracking-tight text-white sm:text-lg lg:text-[22px]">
            {audience === "creator"
              ? "Trouvez des sponsors et multiplie tes revenus grâce à ton métier de créateur de contenu sans perdre du temps."
              : "Vous êtes une entreprise ou un particulier ? Trouvez les créateurs qui vous correspondent pour toutes vos campagnes marketing."}
          </p>

          <div className="rounded-[5px] border border-dashed border-[#9747ff] p-4 sm:p-[30px]">
            <GradientButton variant="orange" glow>
              {audience === "creator"
                ? "Essayer Maintenant – C'est Gratuit"
                : "Trouvez des créateurs - C'est Gratuit"}
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}