import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";

export function FinalCta() {
  return (
    <section className="relative w-full px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-0 lg:py-20">
      
      {/* Blurs décoratifs — overflow intentionnel vers le footer */}
      <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden="true">
        {/* Blur orange — gauche, décalé vers le bas pour toucher le footer */}
        <div
          className="absolute -left-[100px] top-[30%] h-[400px] w-[300px] rounded-[235px] blur-[140px] sm:h-[600px] sm:w-[500px] sm:blur-[200px]"
          style={{ background: "#f75b024f" }}
        />
        {/* Blur vert — droite, décalé vers le bas pour toucher le footer */}
        <div
          className="absolute -right-[100px] top-[30%] h-[400px] w-[300px] rounded-[235px] blur-[140px] sm:h-[600px] sm:w-[500px] sm:blur-[200px]"
          style={{ background: "#842ef06b" }}
        />
      </div>

      <Image
        src="/assets/images/Vector2.png"
        alt=""
        width={265}
        height={248}
        className="pointer-events-none hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-[55%] w-auto"
        aria-hidden="true"
      />

      <Image
        src="/assets/images/Vector1.png"
        alt=""
        width={279}
        height={244}
        className="pointer-events-none hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[55%] w-auto"
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-6 sm:gap-8">
        <h2 className="max-w-[589px] font-grotesk text-[32px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[52px] xl:text-[64px]">
          <span className="text-white">Prêt à trouver votre<br /></span>
          <span className="text-[#f75b02]">Prochain Sponsor ?</span>
        </h2>

        <p className="max-w-[806px] text-center font-grotesk text-base font-normal leading-relaxed tracking-tight text-[#e6e6e6] sm:text-lg lg:text-[22px]">
          Rejoignez les milliers de créateurs qui ont déjà trouvé leurs partenaires idéaux.
        </p>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 lg:gap-12">
          <GradientButton variant="green" glow className="w-full max-w-[280px] sm:w-[235px]">
            Commencer Maintenant
          </GradientButton>

          <button
            type="button"
            className="relative inline-flex h-auto w-full max-w-[280px] items-center justify-center overflow-hidden rounded-[15px] px-5 py-[15px] font-grotesk text-base font-bold tracking-tight text-white shadow-[0_0_0_10px_rgba(255,255,255,0.15)] transition-opacity hover:opacity-90 sm:w-[183px] sm:text-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[15px] before:p-0.5 before:content-[''] before:[background:linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.09)_100%)] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]"
          >
            Parler à un expert
          </button>
        </div>
      </div>
    </section>
  );
}