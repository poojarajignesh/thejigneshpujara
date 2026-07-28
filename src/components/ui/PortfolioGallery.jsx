"use client";

import { useState } from "react";
import PortfolioImageCard from "./PortfolioImageCard";
import Lightbox from "./Lightbox";

export default function PortfolioGallery({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">

        {projects.map((project, index) => (
          <PortfolioImageCard
            key={project.id}
            project={project}
            onClick={() => openImage(index)}
          />
        ))}

      </div>

      <Lightbox
        images={projects}
        currentIndex={currentIndex}
        onClose={closeImage}
        onPrev={previousImage}
        onNext={nextImage}
      />
    </>
  );
}