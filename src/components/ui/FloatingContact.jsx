"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-8
        right-8
        z-[999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#C89B3C]
        text-white
        shadow-[0_15px_40px_rgba(200,155,60,0.35)]
        transition-all
        duration-300
        hover:scale-110
        hover:rotate-6
      "
    >
      <MessageCircle size={28} />
    </a>
  );
}