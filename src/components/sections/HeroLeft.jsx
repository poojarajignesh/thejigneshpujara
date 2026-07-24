import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroLeft() {
  return (
    <div>

      <p className="mb-5 text-sm uppercase tracking-[6px] text-gray-500">
        Graphic Designer • Ahmedabad
      </p>

      <h1 className="font-heading mb-8 text-6xl font-bold leading-[0.9] lg:text-7xl">
        Jignesh
        <br />
        <span className="text-[#C89B3C]">
          Pujara
        </span>
      </h1>

      <p className="max-w-xl text-lg leading-9 text-gray-600">
        With <strong>18+ years of experience</strong>,
        I help businesses build premium brands through logo design,
        packaging, branding, print media and social media creatives.
      </p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
}