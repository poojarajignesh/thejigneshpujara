import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioCard({
  slug,
  title,
  cover,
}) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="
        group
        block
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#C89B3C]
        hover:shadow-2xl
      "
    >
      {/* Cover */}

      <div className="relative aspect-[4/3] overflow-hidden">

        <Image
          src={cover}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      </div>

      {/* Content */}

      <div className="p-7">

        <div className="flex items-center justify-between">

          <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-[#C89B3C]">
            {title}
          </h3>

          <ArrowUpRight
            size={20}
            className="
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-[#C89B3C]
            "
          />

        </div>

        <div className="mt-7 flex items-center justify-end">

  <div className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-all duration-300 group-hover:text-[#C89B3C]">

    <span>View Portfolio</span>

    <ArrowUpRight
      size={18}
      className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />

  </div>

</div>

      </div>

    </Link>
  );
}