import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">

      <div className="container-custom py-20">

        <div className="grid gap-16 lg:grid-cols-[1.3fr_.7fr]">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-bold">
              Jignesh
              <span className="text-[#C89B3C]"> Pujara</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-400">
              Professional Graphic Designer based in Ahmedabad,
              specializing in Logo Design, Packaging Design,
              Brand Identity, Print Design and Social Media Creatives.
            </p>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <a
                href="tel:+919374112062"
                className="flex items-center gap-3 text-gray-300 transition hover:text-[#C89B3C]"
              >
                <Phone size={18} />
                +91 93741 12062
              </a>

              <a
                href="mailto:poojara.jignesh@gmail.com"
                className="flex items-center gap-3 text-gray-300 transition hover:text-[#C89B3C]"
              >
                <Mail size={18} />
                poojara.jignesh@gmail.com
              </a>

            </div>

            <div className="mt-8 flex gap-5">

              <Link
                href="https://www.facebook.com/thejigneshpujara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#C89B3C] hover:bg-[#C89B3C] hover:text-black"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://www.instagram.com/thejigneshpujara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#C89B3C] hover:bg-[#C89B3C] hover:text-black"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/thejigneshpujara"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#C89B3C] hover:bg-[#C89B3C] hover:text-black"
              >
                <FaLinkedinIn size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-500 md:flex-row">

          <p>
            © {year} Jignesh Pujara. All rights reserved.
          </p>

          <p>
            Designed & Developed by Graphilory
          </p>

        </div>

      </div>

    </footer>
  );
}