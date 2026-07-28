"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[#E8DFC9] bg-white/90 backdrop-blur-xl shadow-md"
          : "bg-white"
      }`}
    >
      <div className="container-custom flex h-28 items-center justify-between">

        {/* Logo */}

        <a href="/" className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="Jignesh Pujara"
            width={190}
            height={56}
            priority
            className="h-auto w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-14 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-[16px] font-medium text-gray-700 transition duration-300 hover:text-black"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C89B3C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}

        <a
          href="https://wa.me/919374112062"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-black px-8 py-3.5 text-[15px] font-medium text-white transition duration-300 hover:bg-[#C89B3C] hover:text-black hover:shadow-xl lg:inline-flex"
        >
          Let's Talk
        </a>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="bg-white">

          <nav className="container-custom flex flex-col py-6">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-gray-100 py-4 text-lg"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/919374112062"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-full bg-black py-4 text-center text-white transition hover:bg-[#C89B3C] hover:text-black"
            >
              Let's Talk
            </a>

          </nav>

        </div>

      </div>

    </header>
  );
}