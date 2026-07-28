"use client";

import { useState } from "react";

export default function PortfolioImageCard({
  project,
  onClick,
}) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        relative
        block
        w-full
        overflow-hidden
        rounded-[24px]
        border
        border-gray-200
        bg-white
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#C89B3C]
        hover:shadow-xl
      "
    >
      <div className="relative aspect-square overflow-hidden">

        <img
          src={project.image}
          alt={project.title || ""}
          loading="lazy"
          draggable={false}
          onError={() => setHidden(true)}
          className="
            h-full
            w-full
            object-contain
            bg-white
            p-4
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Hover Overlay */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-black/0
            opacity-0
            transition-all
            duration-300
            group-hover:bg-black/20
            group-hover:opacity-100
          "
        >
          <span
            className="
              rounded-full
              bg-white
              px-5
              py-2
              text-sm
              font-medium
              text-black
              shadow-lg
            "
          >
            Click to View
          </span>
        </div>

      </div>
    </button>
  );
}