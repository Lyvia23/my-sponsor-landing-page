import Image from "next/image";

const BLURS = [
  { top: "369px", left: "-199px", color: "#f75b024f", rotate: false, hide: false },
  { top: "2538px", left: "1208px", color: "#f3b62059", rotate: true, hide: true },
  { top: "449px", left: "1168px", color: "#842ef06b", rotate: false, hide: true },
  { top: "2538px", left: "-199px", color: "#00ff8866", rotate: true, hide: false },
];

const VECTORS = [
  { src: "/assets/images/Vector2.png", className: "absolute top-[289px] left-0 h-[248px] w-[265px]" },
  { src: "/assets/images/Vector1.png", className: "absolute top-[245px] left-[1161px] h-[244px] w-[279px]" },
];

export function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {BLURS.map((blur, i) => (
        <div
          key={i}
          className={`absolute h-[300px] w-[250px] rounded-[235px/282px] blur-[120px] sm:h-[564px] sm:w-[470px] sm:blur-[175px] ${blur.hide ? "hidden lg:block" : ""}`}
          style={{
            top: blur.top,
            left: blur.left,
            background: blur.color,
            transform: blur.rotate ? "rotate(180deg)" : undefined,
          }}
        />
      ))}
      {VECTORS.map((v) => (
        <Image
          key={v.src}
          src={v.src}
          alt=""
          fill={false}
          width={280}
          height={250}
          className={`hidden lg:block ${v.className}`}
        />
      ))}
    </div>
  );
}
