import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="container-custom py-20">

        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

          {/* Left */}

          <div>

            <h2 className="text-5xl font-bold tracking-wide leading-none">
              Jignesh{" "}
              <span className="text-[#C89B3C]">
                Pujara
              </span>
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-gray-400">
              Professional Graphic Designer based in Ahmedabad,
              specializing in Logo Design, Packaging Design,
              Brand Identity, Print Design and Social Media Creatives.
            </p>

          </div>

          {/* Right */}

          <div className="lg:justify-self-end">

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-8 space-y-5">

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

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium">

              <a
                href="https://www.facebook.com/thejigneshpujara"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#C89B3C]"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/thejigneshpujara"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#C89B3C]"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/thejigneshpujara/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#C89B3C]"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-sm text-gray-500 md:flex-row">

          <p>
            © {year} Jignesh Pujara. All rights reserved.
          </p>

          <p>
            Designed & Developed by <span className="text-[#C89B3C]">Graphilory</span>
          </p>

        </div>

      </div>

    </footer>
  );
}