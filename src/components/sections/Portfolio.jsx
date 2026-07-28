import PortfolioHeading from "./PortfolioHeading";
import PortfolioGrid from "./PortfolioGrid";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white py-28"
    >
      <div className="container-custom">

        <PortfolioHeading />

        <PortfolioGrid />

      </div>
    </section>
  );
}