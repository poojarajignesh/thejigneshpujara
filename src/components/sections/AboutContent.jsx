import { Check } from "lucide-react";

const specialties = [
  "Logo Design",
  "Packaging Design",
  "Brand Identity",
  "Social Media Design",
  "Print Design",
  "Advertisement Design",
];

export default function AboutContent() {
  return (
    <div>

      <span className="section-label">
  Services
</span>

<h2 className="section-title mt-4">
  Creative Design
  <br />
  Solutions.
</h2>

      

      <div className="mt-10 grid gap-4 sm:grid-cols-2">

        {specialties.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C89B3C]/10">
              <Check
                size={16}
                className="text-[#C89B3C]"
              />
            </div>

            <span>{item}</span>

          </div>
        ))}

      </div>

      <div className="mt-12 flex gap-8">

        <div>

          <h3 className="text-4xl font-bold">
            18+
          </h3>

          <p className="text-gray-500">
            Years Experience
          </p>

        </div>

        <div>

          <h3 className="text-4xl font-bold">
            500+
          </h3>

          <p className="text-gray-500">
            Projects
          </p>

        </div>

        <div>

          <h3 className="text-4xl font-bold">
            100+
          </h3>

          <p className="text-gray-500">
            Happy Clients
          </p>

        </div>

      </div>

    </div>
  );
}