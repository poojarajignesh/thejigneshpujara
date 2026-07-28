export default function Services() {
  const services = [
    {
      title: "Logo Design",
      desc: "Professional logo designs that build a memorable brand identity.",
    },
    {
      title: "Packaging Design",
      desc: "Creative packaging that increases product value and shelf impact.",
    },
    {
      title: "Brand Identity",
      desc: "Complete branding systems for modern businesses.",
    },
    {
      title: "Social Media",
      desc: "Creative social media posts for business growth.",
    },
    {
      title: "Print Design",
      desc: "Brochures, catalogues, stationery and marketing materials.",
    },
    {
      title: "Advertisement",
      desc: "Outdoor advertising, newspaper ads and campaign creatives.",
    },
  ];

  return (
    <section id="services" className="py-28 bg-[#fafafa]">
      <div className="container-custom">

        <span className="section-label">
          Services
        </span>

        <h2 className="section-title mt-4">
          What I Can
          <br />
          Design For You.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}