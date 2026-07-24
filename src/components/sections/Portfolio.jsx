import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolioData";

export default function Portfolio() {
  const categories = Object.entries(portfolioData);

  return (
    <section id="portfolio" className="bg-[#fafafa] py-28">
      <div className="container-custom">

        <span className="section-label">
          Portfolio
        </span>

        <h2 className="section-title mt-4">
          Explore My Work
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map(([slug, item]) => (

            <Link
              key={slug}
              href={`/portfolio/${slug}`}
              className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-xl"
            >

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {item.description}
              </p>

              <div className="mt-8 flex items-center gap-2 font-medium text-[#C89B3C]">

                View Projects

                <ArrowUpRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}