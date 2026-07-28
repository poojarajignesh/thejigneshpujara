"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}

      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <X size={24} />
      </button>

      {/* Previous */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Image */}

      <div
        className="relative h-[85vh] w-[90vw] max-w-7xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].image}
          alt=""
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Next */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}