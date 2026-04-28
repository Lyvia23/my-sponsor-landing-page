import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";

export function StatBanner() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0">
      <div className="mx-auto w-full max-w-[1204px]">
        {/* overflow-hidden ici pour contenir les vecteurs */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] bg-[linear-gradient(180deg,#5312a4_0%,#1f073e_100%)]">

          {/* Vecteurs décoratifs — positionnés par rapport à ce div */}
          <Image
            src="/assets/images/V_bleu.png"
            alt=""
            width={519}
            height={428}
            className="pointer-events-none hidden lg:block absolute -left-[1%] top-4 h-[85%] w-auto max-w-none"
            aria-hidden="true"
          />
          <Image
            src="/assets/images/V_yellow.png"
            alt=""
            width={433}
            height={264}
            className="pointer-events-none hidden lg:block absolute -right-[2%] -top-[27%] h-[100%] w-auto max-w-none"
            aria-hidden="true"
          />

          {/* Contenu — plus de overflow-hidden ni de rounded ici */}
          <div className="relative z-10 flex min-h-[220px] flex-col items-center justify-center gap-6 px-5 py-8 sm:min-h-[335px] sm:gap-8 sm:px-8 md:gap-[63px] md:px-[60px] md:py-[50px] lg:px-[100px]">
            <header className="flex flex-col items-center gap-3 text-center sm:gap-4 md:gap-5">
              <h2 className="font-grotesk text-[28px] font-normal leading-tight tracking-tight text-white sm:text-[40px] md:text-[64px]">
                Plus de{" "}
                <strong className="font-bold">10 000 000 FCFA</strong>
              </h2>
              <p className="font-grotesk text-sm font-normal leading-snug tracking-tight text-[#b7b7b7] sm:text-base md:text-[22px]">
                De budget de sponsoring dépensé sur Mysponsor le mois dernier.
              </p>
            </header>

            <button
              type="button"
              className="rounded-xl bg-white px-4 py-2 shadow-[4px_6px_0px_#00ff88] transition-opacity hover:opacity-90 sm:shadow-[6px_8px_0px_#00ff88]"
            >
              <span className="font-grotesk text-xs font-medium tracking-tight text-[#5312a4] sm:text-sm md:text-lg">
                Récupérer ma part de gâteau
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}