import portfolioData from "@/data/portfolioData";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid() {
  const categories = Object.entries(portfolioData);

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {categories.map(([slug, item], index) => (
        <div
          key={slug}
          className="animate-fade-up"
          style={{
            animationDelay: `${index * 120}ms`,
            animationFillMode: "both",
          }}
        >
          <PortfolioCard
            slug={slug}
            title={item.title}
            description={item.description}
            cover={item.cover}
            projects={item.projects}
          />
        </div>
      ))}
    </div>
  );
}