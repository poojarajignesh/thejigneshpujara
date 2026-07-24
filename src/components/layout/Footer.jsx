import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-custom py-20">

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">

          {/* Logo & About */}

          <div>

            <Image
              src="/images/logo/logo-black.png"
              alt="Jignesh Pujara"
              width={170}
              height={45}
              className="mb-6"
            />

            <p className="max-w-md leading-8 text-gray-600">
              Professional Graphic Designer based in Ahmedabad,
              specializing in Branding, Packaging Design,
              Print Media and Social Media Creatives.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <a href="#about">
                  About
                </a>
              </li>

              <li>
                <a href="#portfolio">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-[#C89B3C]"
                />

                <span>+91 XXXXX XXXXX</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-[#C89B3C]"
                />

                <span>
                  hello@jigneshpujara.com
                </span>

              </div>

              <div className="flex flex-col gap-3 pt-4">

  <a
    href="https://facebook.com/"
    target="_blank"
    className="flex items-center gap-2 hover:text-[#C89B3C]"
  >
    Facebook
    <ArrowUpRight size={16} />
  </a>

  <a
    href="https://instagram.com/"
    target="_blank"
    className="flex items-center gap-2 hover:text-[#C89B3C]"
  >
    Instagram
    <ArrowUpRight size={16} />
  </a>

  <a
    href="https://linkedin.com/"
    target="_blank"
    className="flex items-center gap-2 hover:text-[#C89B3C]"
  >
    LinkedIn
    <ArrowUpRight size={16} />
  </a>

</div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Jignesh Pujara.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}