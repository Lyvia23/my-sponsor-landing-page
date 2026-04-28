"use client";

import Image from "next/image";

const PARTNERS = [
  { src: "/assets/images/tecno.png", alt: "Tecno", bg: "#1a1a2e" },
  { src: "/assets/images/yango.png", alt: "Yango", bg: "#e8001c" },
  { src: "/assets/images/orange.png", alt: "Orange", bg: "#ff6600" },
  { src: "/assets/images/mtn.png", alt: "MTN", bg: "#ffcc00" },
  { src: "/assets/images/kiro.png", alt: "Kiro o Game", bg: "#1a1a2e" },
  { src: "/assets/images/1xbet.png", alt: "1xBet", bg: "#1a3c6e" },
  { src: "/assets/images/itel.png", alt: "Itel", bg: "#e8001c" },
  { src: "/assets/images/blue.png", alt: "Blue", bg: "#0057b8" },
];

export function PartnersBanner() {
  return (
    <section className="w-full py-10 text-center">
      <p className="mx-auto max-w-[581px] font-grotesk text-[22px] font-bold leading-snug tracking-tight text-white">
        Plus de 10K Sponsors actifs sur MySponsor
      </p>

      {/* Wrapper — prend toute la largeur viewport */}
      <div className="relative mt-8 w-full overflow-hidden">

        {/* Fondu gauche */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[80px] sm:w-[200px]"
          style={{
            background: "linear-gradient(to right, #0d011d 0%, transparent 100%)",
          }}
        />

        {/* Fondu droit */}
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[80px] sm:w-[200px]"
          style={{
            background: "linear-gradient(to left, #0d011d 0%, transparent 100%)",
          }}
        />

        {/* Track animé */}
        <div
          className="flex gap-4 py-4 sm:gap-8"
          style={{
            width: "max-content",
            animation: "marquee 25s linear infinite",
          }}
        >
          {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div
              key={i}
              className="flex h-[64px] w-[64px] shrink-0 overflow-hidden rounded-full sm:h-[90px] sm:w-[90px]"
              style={{ backgroundColor: partner.bg }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={90}
                height={90}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}