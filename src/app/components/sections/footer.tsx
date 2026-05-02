import Image from "next/image";
import Link from "next/link";

const FOOTER_GROUPS = [
  {
    title: "Plateformes",
    links: ["Créateurs", "Sponsors", "Pricing"],
  },
  {
    title: "Ressources",
    links: ["Blog", "Guide Sponsoring", "Support"],
  },
  {
    title: "Légal",
    links: ["Mentions légales", "Confidentialités", "CGU"],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-black/45 px-4 pt-8 sm:px-6 sm:pt-10 lg:px-[100px]">
      <div className="mx-auto max-w-[1440px]">
        {/* Top row */}
        <div className="flex flex-col gap-8 pb-8 sm:flex-row sm:justify-between sm:gap-12 sm:pb-10">
          <div className="flex flex-col gap-3 sm:gap-4">
            
            <Image src="/assets/images/logo.png" alt="MySponsor" width={198} height={40} className="h-[32px] w-auto sm:h-[36px] lg:h-[42px] object-contain object-left " />
            <p className="max-w-[220px] font-grotesk text-sm leading-relaxed tracking-tight text-white/30 sm:text-base">
              La plateforme #1 pour la mise en relation marques &amp; créateurs.
            </p>
          </div>

          <nav aria-label="Pied de page" className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-x-12 lg:gap-x-[121px]">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="font-grotesk text-base font-bold tracking-tight text-[#f75b02] sm:text-lg lg:text-xl">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-1 sm:mt-6 sm:gap-1.5">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="font-grotesk text-sm leading-relaxed tracking-tight text-white/60 transition-opacity hover:opacity-80 sm:text-base"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 text-center sm:py-6">
          <p className="font-grotesk text-xs tracking-tight text-white/40 sm:text-sm">
            © 2025 MySponsor. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
