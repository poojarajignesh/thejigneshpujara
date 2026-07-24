import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  {
    value: 18,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 500,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 100,
    suffix: "+",
    label: "Happy Clients",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-gray-200 pt-10">

      {stats.map((item) => (
        <div key={item.label}>

          <h3 className="text-5xl font-bold text-black">

            <AnimatedCounter
              end={item.value}
              suffix={item.suffix}
            />

          </h3>

          <p className="mt-3 text-sm uppercase tracking-wider text-gray-500">
            {item.label}
          </p>

        </div>
      ))}

    </div>
  );
}