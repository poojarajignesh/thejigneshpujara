"use client";

import Image from "next/image";
import { ArrowRight, Mouse } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-36">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-20 overflow-hidden">

        <div className="absolute -left-56 top-20 h-[520px] w-[520px] rounded-full bg-[#C89B3C]/10 blur-[180px]" />

        <div className="absolute -right-44 bottom-0 h-[620px] w-[620px] rounded-full bg-[#C89B3C]/10 blur-[180px]" />

      </div>

      <div className="container-custom">

        <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}

          <div>

            <p className="mb-5 text-sm uppercase tracking-[6px] text-gray-500">
              Graphic Designer • Ahmedabad
            </p>

            <h1 className="mb-8 font-heading text-6xl font-bold leading-[0.9] lg:text-7xl">

              Jignesh

              <br />

              <span className="text-[#C89B3C]">
                Pujara
              </span>

            </h1>

            <p className="max-w-xl text-lg leading-9 text-gray-600">

              With

              <span className="font-semibold text-black">
                {" "}18+ years of experience{" "}
              </span>

              I help businesses build premium brands through creative logo design,
              packaging, branding, print media and social media creatives that
              leave a lasting impression.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#portfolio"
                className="rounded-full bg-black px-9 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C89B3C] hover:shadow-xl"
              >
                Explore Portfolio
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full border border-black px-9 py-4 font-medium transition-all duration-300 hover:border-[#C89B3C] hover:bg-[#C89B3C] hover:text-black"
              >

                WhatsApp Me

                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />

              </a>

            </div>

            {/* Stats */}

            <div className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-gray-200 pt-10">

              <div>

                <h3 className="text-5xl font-bold text-black">

                  <AnimatedCounter
                    end={18}
                    suffix="+"
                  />

                </h3>

                <p className="mt-3 text-sm uppercase tracking-wider text-gray-500">
                  Years Experience
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-black">

                  <AnimatedCounter
                    end={500}
                    suffix="+"
                  />

                </h3>

                <p className="mt-3 text-sm uppercase tracking-wider text-gray-500">
                  Projects
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-black">

                  <AnimatedCounter
                    end={100}
                    suffix="+"
                  />

                </h3>

                <p className="mt-3 text-sm uppercase tracking-wider text-gray-500">
                  Happy Clients
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex items-end justify-end min-h-[760px]">
            {/* Gold Brush */}

            <Image
              src="/images/elements/gold-brush.png"
              alt=""
              width={900}
              height={900}
              priority={false}
              draggable={false}
              className="
                absolute
                right-[-120px]
                top-2
                w-[760px]
                max-w-none
                rotate-[-4deg]
                opacity-90
                -z-10
                pointer-events-none
                select-none
              "
            />

            {/* Soft Glow */}

            <div
              className="
                absolute
                right-10
                top-24
                -z-20
                h-[480px]
                w-[480px]
                rounded-full
                bg-[#C89B3C]/15
                blur-[140px]
              "
            />

            {/* Small Light */}

            <div
              className="
                absolute
                right-36
                top-12
                h-5
                w-5
                rounded-full
                bg-[#E6C56A]
                blur-md
                opacity-70
              "
            />

            {/* Photo */}

            <Image
              src="/images/profile/jignesh-pujara.png"
              alt="Jignesh Pujara"
              width={560}
              height={760}
              priority
              draggable={false}
              className="
                relative
                z-10
                h-auto
                w-auto
                max-h-[760px]
                object-contain
                drop-shadow-[0_60px_90px_rgba(0,0,0,0.30)]
                transition-all
                duration-500
              "
            />