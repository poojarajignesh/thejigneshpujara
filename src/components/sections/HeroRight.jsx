import Image from "next/image";

export default function HeroRight() {
  return (
    <div className="relative flex min-h-[760px] items-center justify-center overflow-visible">

      {/* Gold Brush */}

      <div className="absolute inset-0 z-0 flex items-center justify-center -translate-y-10">

        <Image
          src="/images/elements/gold-brush.png"
          alt=""
          width={1000}
          height={1000}
          priority
          className="w-[1000px] max-w-none opacity-90"
        />

      </div>

      {/* Photo */}

      <Image
  src="/images/profile/jignesh-pujara.png"
  alt="Jignesh Pujara"
  width={620}
  height={820}
  priority
  draggable={false}
  className="
    relative
    z-10
    -translate-y-12
    lg:-translate-y-16
    w-auto
    max-h-[820px]
    object-contain
    drop-shadow-[0_60px_90px_rgba(0,0,0,0.30)]
    transition-all
    duration-500
  "
/>

    </div>
  );
}