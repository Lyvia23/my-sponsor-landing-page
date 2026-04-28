"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

const NAV_LINKS = ["Sponsors", "Créateurs", "Pricing", "Boutique", "Se connecter"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/[0.02] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:gap-8 lg:px-[100px] lg:py-[30px]">
          <Link href="/" aria-label="MySponsor — Accueil" className="shrink-0">
            <Image
              src="/assets/images/logo.png"
              alt="MySponsor"
              width={208}
              height={42}
              className="h-[32px] w-auto sm:h-[36px] lg:h-[42px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden items-center gap-5 lg:flex lg:gap-10">
            {NAV_LINKS.map((item) => (
              <Link
                key={item}
                href="#"
                className="whitespace-nowrap font-grotesk text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-70 lg:text-lg"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#"
              className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#842ef0] px-4 py-3 font-grotesk text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-90 sm:px-5 sm:py-[15px] sm:text-lg"
            >
              Essayer gratuitement
              <ArrowRight className="h-[15px] w-[21px]" />
            </Link>
          </nav>

          {/* Mobile: CTA + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
           

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white"
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
                <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" />
                <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — plein écran */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#0d0118] lg:hidden">
          
          {/* Header du drawer */}
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/assets/images/logo.png"
                alt="MySponsor"
                width={208}
                height={42}
                className="h-[32px] w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Liens de navigation — centrés */}
          <nav aria-label="Menu mobile" className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="font-grotesk text-xl font-medium tracking-tight text-white transition-opacity hover:opacity-70"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Bas du drawer : toggles audience + CTA */}
          <div className="flex flex-col items-center gap-4 px-6 pb-10">
           
            {/* CTA */}
            <Link
              href="#"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#842ef0] px-5 py-4 font-grotesk text-base font-medium tracking-tight text-white transition-opacity hover:opacity-90"
            >
              Essayer gratuitement
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}