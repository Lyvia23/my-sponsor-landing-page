import Image from "next/image";

export function HeroScreenshot() {
  return (
    <div className="relative mx-auto mt-2 w-full max-w-[1440px] px-4 sm:mt-4 sm:px-6 lg:px-[124px]">
      <Image
        src="/assets/images/fille.jpg"
        alt="Aperçu de MySponsor"
        width={1191}
        height={747}
        className="w-full rounded-[16px] border-[6px] border-white/60 object-cover sm:rounded-[24px] sm:border-[10px] lg:rounded-[30px] lg:border-[15px]"
        priority
      />
    </div>
  );
}
