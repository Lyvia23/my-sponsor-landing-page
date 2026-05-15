import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Dans l’audiovisuel, la visibilité et la diffusion du contenu sont essentielles. MySponsor nous permet de collaborer plus facilement avec des créateurs afin de donner plus d’impact à nos productions et toucher une audience plus large de manière authentique.",
    name: "Taboula Jordan",
    role: "CEO de bildstudio",
    image:"/assets/images/JordanTaboula.jpg"
  },
  {
    id: 2,
    quote:
      "Pour une entreprise, gagner en visibilité aujourd’hui passe aussi par les créateurs de contenu. MySponsor permet de mettre en avant nos projets plus rapidement et de toucher une audience ciblée de manière plus authentique.",
    name: "Bikele Franck",
    role: "Directeur Image de T&Co Real Estate et Écrivain",
     image:"/assets/images/franckbikele.jpg"
  },
  {
    id: 3,
    quote:
      "Aujourd’hui, il ne suffit plus de créer du contenu : il faut aussi penser à de vraies solutions de monétisation pour permettre aux créateurs de vivre de leur travail. En Afrique, beaucoup de créateurs sont encore exclus ou limités par les systèmes de monétisation traditionnels. Avec MySponsor, notre objectif est de leur donner un accès plus simple aux opportunités de sponsoring et aux collaborations rémunérées.",
    name: "Tangoueta Emma",
    role: "CEO de Mysponsor",
     image:"/assets/images/tangouetaemma.png"
  },
];

export function Testimonials() {
  return (
    <section className="w-full bg-[#f75b02]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-[60px] lg:pb-20 lg:pt-[83px]">

        <header className="mb-10 max-w-[589px] text-center sm:mb-16">
          <h2 className="font-grotesk text-2xl font-bold leading-tight tracking-tight sm:text-xl lg:text-4xl xl:text-6xl">
            <span className="text-white/70">Ils ont adoré,</span>
            <br />
            <span className="text-[#ededed]">soyez le prochain</span>
          </h2>
        </header>

        {/* Grille avec blur sur les côtés */}
        <div className="relative w-full">
          {/* Glow gauche */}
          <div
            className="pointer-events-none absolute -left-[8%] top-1/2 -translate-y-1/2 h-[130%] w-[280px] rounded-full blur-[60px] sm:w-[350px] sm:blur-[80px]"
            style={{ background: "rgba(255, 180, 59, 0.7)" }}
            aria-hidden="true"
          />

          {/* Glow droit */}
          <div
            className="pointer-events-none absolute -right-[8%] top-1/2 -translate-y-1/2 h-[130%] w-[280px] rounded-full blur-[60px] sm:w-[350px] sm:blur-[80px]"
            style={{ background: "rgba(255, 180, 50, 0.7)" }}
            aria-hidden="true"
          />
          <div className="relative grid w-full grid-cols-1 gap-3 sm:gap-2.5 md:grid-cols-2 xl:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.id}
                className="rounded-[20px] bg-white p-5 sm:rounded-[27px] sm:p-[25px]"
              >
                <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:gap-5">
                   <Image
                                      src={t.image}
                                      alt={t.name}
                                      width={64}
                                      height={64}
                                      className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
                                    />
                  <p className="font-grotesk text-sm leading-snug tracking-tight text-[#7d7d7d] sm:text-base">
                    {t.quote}
                  </p>
                </div>
                <footer className="flex flex-col gap-1.5 sm:gap-2">
                  <p className="font-grotesk text-base font-bold tracking-tight text-[#242424] sm:text-lg">
                    {t.name}
                  </p>
                  <p className="font-grotesk text-xs tracking-tight text-[#242424] sm:text-sm">
                    {t.role}
                  </p>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <GradientButton variant="purple" glow>
            Essayer Maintenant – C&apos;est Gratuit
          </GradientButton>
        </div>
      </div>
    </section>
  );
}