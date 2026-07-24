import { Check } from "lucide-react";

const points = [
  "18+ Years of Professional Experience",
  "Premium & Modern Design Approach",
  "Strategic Brand Thinking",
  "Reliable & On-Time Project Delivery",
];

export default function WhyChooseMe() {
  return (
    <section className="bg-white py-28">
      <div className="container-custom">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="section-label">
              Why Choose Me
            </span>

            <h2 className="section-title mt-4">
              Why Businesses
              <br />
              Choose to Work
              <br />
              With Me
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
              Great design is more than visual appeal.
              It should communicate, inspire confidence
              and help businesses grow with a consistent
              brand identity.
            </p>

          </div>

          {/* Right */}

          <div className="space-y-6">

            {points.map((point) => (

              <div
                key={point}
                className="flex items-center gap-5 border-b border-gray-200 pb-6"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f4ed]">
                  <Check
                    size={22}
                    className="text-[#C89B3C]"
                  />
                </div>

                <h3 className="text-xl font-medium">
                  {point}
                </h3>

              </div>

            ))}

          </div>

        </div>
      </div>
    </section>
  );
}