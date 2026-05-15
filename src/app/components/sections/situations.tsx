"use client";
import { useState } from "react";
import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronDown, ChevronUp } from "lucide-react";

const SITUATIONS = [
  {
    id: 0,
    title: "Trop de vidéos non sponsorisées = des opportunités manquées",
    description:
      "Utilisez nos outils de recherche avancés pour trouver rapidement des sponsors dans votre secteur. Filtrez par langue, secteur d'activité, public cible et bien plus encore. (Monétisez plus de contenus plus rapidement. Identifiez en quelques clics des sponsors parfaitement alignés avec votre audience et augmentez vos chances de partenariats rémunérés.)",
  },
  {
    id: 1,
    title: "Vous attendez passivement que des sponsors vous contactent.",
    description: "Prenez le contrôle de vos collaborations. Accédez à des sponsors réellement actifs et initiez des discussions au moment qui vous convient.",
  },
  {
    id: 2,
    title: "Perdre du temps avec des sponsors désintéressés",
    description: "Discuter uniquement avec des sponsors éprouver et vérifier qui ont déjà collaborer avec d'autres créateurs comme vous ) ( Collaborez uniquement avec des marques sérieuses. Échangez avec des sponsors déjà engagés dans l’influence marketing et maximisez vos chances de conclure des partenariats concrets.",
  },
  {
    id: 3,
    title: "Manque de visibilité sur le marché du sponsoring",
    description: "Soyez visible parmi les influenceurs ouvert à la collaboration parmi un vaste marché ) ( Augmentez votre visibilité auprès des marques. Positionnez votre profil devant des sponsors ouverts à la collaboration et multipliez les opportunités de partenariats.)",
  },
];

export function Situations() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full px-4 py-6 sm:px-6 lg:px-[74px]">
      <div
        className="relative overflow-hidden rounded-[20px] sm:rounded-[28px]"
        style={{
          backgroundImage: "url('/assets/images/rectangle.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* Contenu */}
        <div className="relative z-10 grid grid-cols-1 gap-6 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[287px_1fr] lg:gap-10 lg:px-14 lg:py-16">

          {/* Colonne gauche : titre + CTA */}
          <div className="flex flex-col gap-6">
            <header>
              <div className="font-grotesk text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
                Si tu te reconnais dans{" "}
                <span className="text-[#f75b02]">ces situations,</span>
                <br />
                voici les solutions
              </div>
            </header>

            {/* CTA card */}
            <div className="relative overflow-hidden rounded-[24px] bg-[#00ff88] sm:rounded-[32px]">
              <Image
                src="/assets/images/Vector1.png"
                alt=""
                fill
                className="object-cover object-right"
                aria-hidden="true"
              />
              <div className="relative z-10 flex min-h-[180px] flex-col items-start justify-between px-5 pb-5 pt-8 sm:min-h-[221px] sm:px-6 sm:pb-6 sm:pt-10">
                <h3 className="max-w-[214px] font-grotesk text-[18px] font-bold leading-snug tracking-tight text-black sm:text-[22px]">
                  Trouve ton prochain sponsor en trois clics
                </h3>
                <GradientButton
                  variant="purple"
                  className="w-full max-w-[253px] rounded-[15px]"
                >
                  Essayer Maintenant
                </GradientButton>
              </div>
            </div>
          </div>

          {/* Colonne droite : cards situations */}
          <ul className="flex flex-col gap-[10px]">
            {SITUATIONS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActive(item.id)}
                    className={`w-full rounded-[16px] border text-left transition-colors sm:rounded-[22px] ${isActive
                        ? "border-white bg-white/20"
                        : "border-[#9a9a9a] bg-white/5 hover:bg-white/10"
                      }`}
                  >
                    <div className="flex items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
                      <div className="min-w-0 flex-1">
                        <h3
                          className={`font-grotesk text-base font-bold leading-snug tracking-tight sm:text-lg lg:text-xl ${isActive ? "text-white" : "text-white/65"
                            }`}
                        >
                          {item.title}
                        </h3>
                        {isActive && item.description && (
                          <p className="mt-3 max-w-[630px] font-grotesk text-sm leading-snug tracking-tight text-white sm:mt-5 sm:text-base">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Chevron circulaire */}
                      {isActive ? (
                        <span className="flex shrink-0 items-center justify-center rounded-full bg-[#00ff88] p-1.5">
                          <ChevronUp className="h-4 w-4 text-black sm:h-5 sm:w-5" aria-hidden="true" />
                        </span>
                      ) : (
                        <span className="flex shrink-0 items-center justify-center rounded-full bg-white/20 p-1.5">
                          <ChevronDown className="h-4 w-4 text-white/60 sm:h-5 sm:w-5" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}