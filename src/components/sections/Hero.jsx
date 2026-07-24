import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-36">
      <div className="container-custom">

        <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">

          <HeroLeft />

          <HeroRight />

        </div>

      </div>
    </section>
  );
}