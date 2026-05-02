"use client";
import { useState } from "react";
import Image from "next/image";
import { StepBadge } from "@/components/ui/step-badge";
import { AudienceToggle } from "@/components/ui/audience-toggle";
import { GradientButton } from "@/components/ui/gradient-button";

interface StepCardProps {
  number: string;
  title: string;
  illustration: { src: string; alt: string; className: string };
  glowColor?: string;
  className?: string;
  gradientDir?: string;
  bgColor?: string; 
  gradientEndColor?: string;
  variant?: "creator" | "sponsor";
}

function StepCard({
  number,
  title,
  illustration,
  glowColor = "#8a2dff6b",
  className = "",
  gradientDir = "155deg",
  bgColor = "#0d0d1a",
  gradientEndColor = "#1a0535",
  variant= "creator",
}: StepCardProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[28px] border-[8px] border-white/[0.03] ${className}`}
      style={{ backgroundColor: bgColor }} 
    >
      {/* Glow blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[120px] -translate-x-1/2 rounded-full blur-[50px] sm:h-[332px] sm:w-[200px] sm:blur-[67px]"
        style={{ background: glowColor }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-sm sm:rounded-lg"
        style={{
          background: `linear-gradient(${gradientDir}, transparent 24%, ${gradientEndColor} 94%)`,
        }}
        aria-hidden="true"
      />

      {/* Illustration */}
      <Image
        src={illustration.src}
        alt={illustration.alt}
        width={300}
        height={300}
        className={`pointer-events-none absolute ${illustration.className}`}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-50 flex min-h-[260px] flex-col justify-between p-6 sm:min-h-[374px] sm:p-8 md:p-10 lg:p-12">
        <StepBadge number={number} variant={variant} />
        <h3 className="mt-4 font-grotesk text-2xl font-bold leading-snug tracking-tight text-[#ebebeb] sm:text-3xl lg:text-4xl">
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h3>
      </div>
    </div>
  );
}

const STEPS_CREATOR = [
  {
    number: "01",
    title: "Trouvez des sponsors\npour votre niche",
    illustration: { src: "/assets/images/Search.png", alt: "Illustration recherche", className: "right-[10%] top-[10%] h-[65%] w-auto sm:h-[75%] opacity-90" },
    gradientDir: "155deg",

  },
  {
    number: "02",
    title: "Choisissez le type\nde collaborations",
    illustration: { src: "/assets/images/books.png", alt: "Types de collaborations", className: "right-[15%] top-[20%] h-[40%] w-auto sm:h-[45%] opacity-90" },
    gradientDir: "173deg",
  },
  {
    number: "03",
    title: "Créer des annonces\nde sponsoring",
    illustration: { src: "/assets/images/creation.png", alt: "Annonces", className: "right-[15%] top-[20%] h-[40%] w-auto sm:h-[45%]" },
    gradientDir: "176deg",
    glowColor: "#8a2dff4a",
  },
  {
    number: "04",
    title: "Ciblez les sponsors\nles plus actifs",
    illustration: { src: "/assets/images/target.png", alt: "Cible", className: "right-2 top-[20%] h-[40%] w-auto sm:right-[25%] sm:h-[45%]" },
    gradientDir: "149deg",
    glowColor: "#8a2dffad",
  },
];

const STEPS_SPONSOR = [
  {
    number: "01",
    title: "Recherchez des créateurs\ndans votre niche",
    illustration: { src: "/assets/images/sponsor-search.png", alt: "Illustration recherche", className: "right-[10%] top-[10%] h-[65%] w-auto sm:h-[75%] opacity-90" },
    gradientDir: "155deg",
    glowColor: "#ff6b2b6b",
    bgColor: "#1a0a00",
    gradientEndColor: "#1a0800",
    variant: "sponsor" as const,
  },
  {
    number: "02",
    title: "Identifiez les créateurs\nadaptés",
    illustration: { src: "/assets/images/sponsor-profil.png", alt: "Créateurs adaptés", className: "right-[15%] top-[20%] h-[40%] w-auto sm:h-[45%] opacity-90" },
    gradientDir: "173deg",
    glowColor: "#ff6b2b4a",
    bgColor: "#1a0a00",
    gradientEndColor: "#1a0800",
    variant: "sponsor" as const,

  },
  {
    number: "03",
    title: "Choisissez le type\nde collaboration",
    illustration: { src: "/assets/images/sponsor-books.png", alt: "Type collaboration", className: "right-[15%] top-[20%] h-[40%] w-auto sm:h-[45%]" },
    gradientDir: "176deg",
    glowColor: "#ff6b2b4a",
    bgColor: "#1a0a00",
    gradientEndColor: "#1a0800",
    variant: "sponsor" as const,

  },
  {
    number: "04",
    title: "Débutez la\ncollaboration",
    illustration: { src: "/assets/images/sponsor-target.png", alt: "Collaboration", className: "right-2 top-[20%] h-[50%] w-auto sm:right-[25%] sm:h-[60%]" },
    gradientDir: "149deg",
    glowColor: "#ff6b2bad",
    bgColor: "#1a0a00",
    gradientEndColor: "#1a0800",
    variant: "sponsor" as const,

  },
];


export function HowItWorks() {
  const [audience, setAudience] = useState<"creator" | "sponsor">("creator");
  const steps = audience === "creator" ? STEPS_CREATOR : STEPS_SPONSOR;
  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-[100px] lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <header className="mb-10 flex flex-col items-center gap-6 sm:mb-16 sm:gap-8">
          <h2 className="text-center font-grotesk text-[32px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[52px] xl:text-[64px]">
            <span className="text-[#ededed]">Comment ça </span>
            <span className="text-[#f75b02]">fonctionne</span>
            <span className="text-white"> ?</span>
          </h2>

          <AudienceToggle value={audience} onChange={setAudience} />

          <p className="max-w-[806px] text-center font-grotesk text-base font-normal leading-relaxed tracking-tight text-[#e6e6e6] sm:text-lg lg:text-[22px]">
            {audience === "creator" ? (
              <>
                Accédez directement aux sponsors les plus susceptibles de collaborer avec vous, en une
                seule plateforme lancer, gérer et développer votre business.
                <br /><br />
                Trouver de nouveaux sponsors (partenariats) en 4 étapes
              </>
            ) : (
              <>
                Accédez directement aux créateurs les plus susceptibles de collaborer avec vous, en une
                seule plateforme lancer, gérer et développer votre business.
                <br /><br />
                Trouver de nouveaux créateurs en 4 étapes
              </>
            )}
          </p>

        </header>

        {/* Step grid */}
        <div className="grid gap-1 sm:gap-2">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[1fr_1.4fr] sm:gap-2">
            <StepCard {...steps[0]} />
            <StepCard {...steps[1]} />
          </div>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-[1.4fr_1fr] sm:gap-2">
            <StepCard {...steps[2]} />
            <StepCard {...steps[3]} />
          </div>
        </div>
        {/* Overview CTA */}
        <div className="relative mt-4 overflow-hidden rounded-[24px] bg-[linear-gradient(90deg,#00ff88_0%,#00733d_100%)] sm:mt-6 sm:rounded-[40px]">

          <Image
            src="/assets/images/V_bleu.png"
            alt=""
            width={519}
            height={428}
            className="pointer-events-none absolute -left-[1%] top-1/2 -translate-y-1/2 h-[80%] w-auto max-w-none"
            aria-hidden="true"
          />

          <Image
            src="/assets/images/V_yellow.png"
            alt=""
            width={433}
            height={264}
            className="pointer-events-none absolute -right-[2%] top-1/2 -translate-y-1/2 h-[90%] w-auto max-w-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex min-h-[180px] flex-col items-center justify-center gap-5 px-6 py-8 sm:min-h-[280px] sm:gap-8 sm:px-10 lg:gap-[63px] lg:px-[100px]">
            <h3 className="text-center font-grotesk text-[24px] font-normal leading-tight tracking-tight text-white sm:text-[30px] md:text-[40px] lg:text-[64px]">
              Triplez vos résultats Marketing avec{" "}
              <strong className="font-bold">MySponsor</strong>
            </h3>
            <GradientButton variant="orange" glow>
              Tester maintenant
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
