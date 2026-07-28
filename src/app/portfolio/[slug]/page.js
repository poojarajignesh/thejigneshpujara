import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";

import portfolioData from "@/data/portfolioData";
import PortfolioGallery from "@/components/ui/PortfolioGallery";

export default async function PortfolioCategory({ params }) {
  const { slug } = await params;

  const category = portfolioData[slug];

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="border-b border-gray-100 pt-40 pb-20">

        <div className="container-custom">

          <Link
            href="/#portfolio"
            className="mb-10 inline-flex items-center gap-2 text-gray-500 transition hover:text-[#C89B3C]"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <div className="section-label mt-6">
  Portfolio
</div>

          <h1 className="mt-5 text-5xl font-bold lg:text-6xl">
            {category.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-600">
            {category.description}
          </p>

          {/* CTA */}

          <a
            href="https://wa.me/919374112062"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-white transition duration-300 hover:bg-[#C89B3C] hover:text-black"
          >
            <MessageCircle size={20} />
            Need a Similar Design? Let's Talk
          </a>

        </div>

      </section>

      {/* Gallery */}

      <section className="py-20">

        <div className="container-custom">

          {category.projects.length === 0 ? (

            <div className="rounded-3xl border border-dashed border-gray-300 py-28 text-center">

              <h2 className="text-3xl font-semibold">
                Portfolio Coming Soon
              </h2>

              <p className="mt-4 text-gray-500">
                I'm currently updating this category with my latest work.
              </p>

            </div>

          ) : (

           <PortfolioGallery projects={category.projects} />

          )}

        </div>

      </section>

    </main>
  );
}