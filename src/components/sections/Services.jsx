import Link from "next/link";
import { ArrowRight } from "lucide-react";
import services from "../../data/services";

export default function Services() {
  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-16">
          <span className="uppercase tracking-[4px] text-sm text-yellow-600">
            Portfolio
          </span>

          <h2 className="text-5xl mt-4">
            Explore My Work
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-black">
                  {item.title}
                </h3>

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>

              <p className="mb-8 leading-8 text-gray-600">
                {item.description}
              </p>

              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-yellow-600">
                Explore
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}