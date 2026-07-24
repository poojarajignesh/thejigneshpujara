"use client";

import { useState } from "react";

export default function PortfolioImageCard({ project }) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative aspect-square overflow-hidden">

        <img
          src={project.image}
          alt=""
          loading="lazy"
          draggable={false}
          onError={() => setHidden(true)}
          className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        

        {/* Border */}

        <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent transition duration-500 group-hover:border-[#C89B3C]" />

        

      </div>

    </div>
  );
}