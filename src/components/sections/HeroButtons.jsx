import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-5">

      <a
        href="#portfolio"
        className="
          rounded-full
          bg-black
          px-9
          py-4
          font-medium
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#C89B3C]
          hover:text-black
          hover:shadow-2xl
        "
      >
        Explore Portfolio
      </a>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          border
          border-black
          px-9
          py-4
          font-medium
          transition-all
          duration-300
          hover:border-[#C89B3C]
          hover:bg-[#C89B3C]
          hover:text-black
        "
      >
        WhatsApp Me

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>

    </div>
  );
}