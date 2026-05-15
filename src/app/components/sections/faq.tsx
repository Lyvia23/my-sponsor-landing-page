"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "q1",
    question: "Qu’est-ce que MySponsor ?",
    answer:
      "La plateforme permet aux influenceurs, streamers, créateurs UGC et médias de trouver des opportunités rémunérées, tandis que les entreprises, studios et sponsors peuvent découvrir des profils adaptés à leur audience et lancer des campagnes rapidement",
  },
  {
    id: "q2",
    question: "Faut-il avoir beaucoup d’abonnés ?",
    answer: "Non. MySponsor valorise aussi les micro et nano influenceurs. Une audience engagée peut être plus importante qu’un grand nombre d’abonnés.",
  },
  {
    id: "q3",
    question: "Quels types de collaborations peut-on trouver ?",
    answer: "Les collaborations sur mysponsor peuvent inclure : des missions d’engagement sur les réseaux sociaux tels que  des campagnes d’acquisition ; des campagnes de likes ; des campagnes de commentaires ; des campagnes de re-publication et de partage ; des vidéos sponsorisées ; du contenu UGC et etc…",
  },
  {
    id: "q4",
    question: "Quelle est la vision de MySponsor ?",
    answer: "La vision de MySponsor est de rendre la monétisation digitale plus accessible aux créateurs, notamment en Afrique, en connectant les audiences aux opportunités de sponsoring.",
  },
  {
    id: "q5",
    question: "Comment contacter le support ?",
    answer: "Vous pouvez contacter l’équipe MySponsor directement via la plateforme ou par les moyens de contact disponibles sur le site.",
  },
  
];

export function Faq() {
  return (
    <section className="relative w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-0 lg:py-16">

      {/* Blurs décoratifs */}
      <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden="true">
        {/* Blur vert — bas gauche */}
        <div
          className="absolute -left-[100px] bottom-0 h-[300px] w-[300px] rounded-full blur-[130px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]"
          style={{ background: "#00ff8855" }}
        />
        {/* Blur orange — bas droite */}
        <div
          className="absolute -right-[100px] bottom-0 h-[300px] w-[300px] rounded-full blur-[130px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]"
          style={{ background: "#f3b6204f" }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto flex w-full max-w-[839px] flex-col items-center">
        <header className="mb-8 text-center sm:mb-10">
          <h2 className="font-grotesk text-[32px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[52px] xl:text-[64px]">
            <span className="text-white">Questions<br /></span>
            <span className="text-[#00ff88]">Fréquentes</span>
          </h2>
        </header>

        <Accordion
          type="single"
          collapsible
          defaultValue="q1"
          className="flex w-full flex-col gap-2 sm:gap-[10px]"
        >
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="group overflow-hidden rounded-[16px] border border-[#9a9a9a] bg-white/5 data-[state=open]:border-white data-[state=open]:bg-white/20 sm:rounded-[22px]"
            >
              <AccordionTrigger className="flex w-full items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-[18px] [&>svg]:hidden">
                <span className="flex-1 text-left font-grotesk text-base font-bold leading-snug tracking-tight text-white/65 group-data-[state=open]:text-white sm:text-lg xl:text-xl">
                  {item.question}
                </span>

                {/* Cercle fermé — gris avec ChevronDown */}
                <span className="flex shrink-0 items-center justify-center rounded-full bg-white/20 p-1.5 group-data-[state=open]:hidden">
                  <ChevronDown className="h-4 w-4 text-white/60 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>

                {/* Cercle ouvert — vert avec ChevronUp */}
                <span className="hidden shrink-0 items-center justify-center rounded-full bg-[#00ff88] p-1.5 group-data-[state=open]:flex">
                  <ChevronUp className="h-4 w-4 text-black sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
              </AccordionTrigger>

              {item.answer && (
                <AccordionContent className="px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
                  <p className="max-w-[630px] font-grotesk text-sm leading-snug tracking-tight text-white sm:text-base">
                    {item.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}