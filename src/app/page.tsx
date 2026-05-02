import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { HeroScreenshot } from "@/components/sections/hero-screenshot";
import { PartnersBanner } from "@/components/sections/partners-banner";
import { Situations } from "@/components/sections/situations";
import { StatBanner } from "@/components/sections/stat-banner";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { TopCreators } from "@/components/sections/top-creators";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#0d011d] text-white">

      <div className="relative z-10 flex flex-col ">
        <Navbar />
        <Hero />
        <HeroScreenshot />
        <PartnersBanner />
        <Situations />
        <StatBanner />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <TopCreators />
        <FinalCta />
        <Footer />
      </div>
    </main>
  );
}
