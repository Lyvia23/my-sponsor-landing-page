import Image from "next/image";

export function StatBanner() {
  return (
    <section className="relative w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-0 lg:py-16">

    {/* Blurs décoratifs — overflow-visible pour déborder */}
    <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden="true">
      <div
          className="absolute -left-[100px] top-[40%] h-[350px] w-[150px] rounded-[235px] blur-[120px] sm:h-[450px] sm:w-[350px] sm:blur-[160px]"

        style={{ background: "#00ff8855" }}
      />
      <div
                 className="absolute -right-[100px] top-[40%] h-[350px] w-[150px] rounded-[235px] blur-[120px] sm:h-[450px] sm:w-[350px] sm:blur-[160px]"

        style={{ background: "#f3b6204f" }}
      />
    </div>
  

      <div className="relative z-10 mx-auto w-full max-w-[1204px]">
        <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#5312a4_0%,#1f073e_100%)] sm:rounded-[40px]">

          <Image
            src="/assets/images/V_bleu.png"
            alt=""
            width={519}
            height={428}
            className="pointer-events-none absolute -left-[1%] top-4 hidden h-[85%] w-auto max-w-none lg:block"
            aria-hidden="true"
          />
          <Image
            src="/assets/images/V_yellow.png"
            alt=""
            width={433}
            height={264}
            className="pointer-events-none absolute -right-[2%] -top-[27%] hidden h-[100%] w-auto max-w-none lg:block"
            aria-hidden="true"
          />

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