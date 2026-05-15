import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";
import { Eye, Trophy } from "lucide-react";

const CREATORS = [
  {
    name: "Murielle Blanche",
    views: "+ 100 000 000 Likes",
    image: "https://i.pravatar.cc/150?img=47",
    rank: "#1",
    badgeBg: "bg-[#f3b620]",
    badgeText: "text-black",
  },
  {
    name: "Claudel noubissie",
    views: "+ 70 000 000 Likes",
    image: "https://i.pravatar.cc/150?img=11",
    rank: "#2",
    badgeBg: "bg-[#5312a4]",
    badgeText: "text-white",
  },
  {
    name: "Celeste victorien",
    views: "+ 67 000 000 Likes",
    image: "https://i.pravatar.cc/150?img=32",
    rank: "#3",
    badgeBg: "bg-[#9a9a9a]",
    badgeText: "text-black",
  },
  {
    name: "TIK DENGUE",
    views: "+ 60 000 000 Likes",
    image: "https://i.pravatar.cc/150?img=53",
    rank: "#4",
    badgeBg: "bg-[#d0abff]",
    badgeText: "text-black",
  },
  {
    name: "Bop Dylan ",
    views: "+ 56 000 000 Likes",
    image: "https://i.pravatar.cc/150?img=68",
    rank: "#5",
    badgeBg: "bg-[#212121]",
    badgeText: "text-white",
  },
];

export function TopCreators() {
  return (
    <section className="w-full overflow-hidden bg-[linear-gradient(211deg,#00ff88_0%,#013f22_100%)]">
      <div className="mx-auto grid min-h-auto max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-12 sm:gap-10 md:px-10 lg:grid-cols-[1fr_511px] lg:gap-10 lg:px-[99px] lg:py-[92px]">
        
        {/* Left copy */}
        <div className="flex max-w-[655px] flex-col items-center text-center lg:items-start lg:text-left">
          <p className="font-grotesk text-[36px] font-bold leading-tight tracking-tight text-white/75 sm:text-[48px] lg:text-[72px] xl:text-[96px]">
            Rejoins le #TOP
            <br />
            des créateurs
          </p>
          <GradientButton variant="orange" glow className="mt-6 sm:mt-8">
            Essayer Maintenant – C&apos;est Gratuit
          </GradientButton>
        </div>

        {/* Leaderboard card */}
        <div className="w-full rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0)_85%)] p-5 sm:rounded-[48px] sm:p-8 lg:p-10">
          <ul className="flex flex-col gap-4 sm:gap-5">
            {CREATORS.map((creator) => (
              <li key={creator.rank} className="flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex min-w-0 items-center gap-3 sm:gap-6">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    width={64}
                    height={64}
                    className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
                  />
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <h3 className="font-grotesk text-base font-bold tracking-tight text-black sm:text-lg lg:text-2xl">
                      {creator.name}
                    </h3>
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <Eye
                        className="h-3 w-3 shrink-0 text-black sm:h-4 sm:w-4"
                        aria-hidden="true"
                      />
                      <span className="whitespace-nowrap font-grotesk text-xs font-light tracking-tight text-black sm:text-sm lg:text-base">
                        {creator.views}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Badge rang */}
                <div
                  className={`flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 ${creator.badgeBg} ${creator.badgeText}`}
                >
                  <Trophy
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                    aria-hidden="true"
                  />
                  <span className="font-grotesk text-[10px] font-medium tracking-tight sm:text-xs">
                    {creator.rank}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}