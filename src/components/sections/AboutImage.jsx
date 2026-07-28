import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">

      {/* Gold Glow */}

      <div className="absolute top-12 h-[420px] w-[420px] rounded-full bg-[#C89B3C]/10 blur-[120px]" />

      {/* Photo */}

      <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-4 shadow-xl">

        <Image
          src="/images/profile/jignesh-pujara.png"
          alt="Jignesh Pujara"
          width={500}
          height={700}
          priority={false}
          className="h-auto w-full max-w-[470px] object-contain"
        />

        {/* Experience Badge */}

        <div className="absolute -left-8 bottom-10 rounded-2xl bg-black px-6 py-5 text-white shadow-2xl">

          <h3 className="text-4xl font-bold text-[#C89B3C]">
            18+
          </h3>

          <p className="mt-1 text-sm uppercase tracking-[3px]">
            Years Experience
          </p>

        </div>

      </div>

    </div>
  );
}