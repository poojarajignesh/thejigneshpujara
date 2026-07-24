import siteData from "../../data/site";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#fafafa] py-28"
    >
      <div className="container-custom">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="section-label">
              About
            </span>

            <h2 className="section-title mt-4">
              18 Years of
              <br />
              Creative Excellence
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
              With over{" "}
              <strong>{siteData.experience} years of experience</strong>,
              I specialize in Branding, Packaging Design,
              Print Media and Social Media Creatives,
              helping businesses build memorable brands
              through creative and strategic design solutions.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-8">

            <div className="rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-5xl font-bold">
                {siteData.experience}
              </h3>

              <p className="mt-3 text-gray-500">
                Years Experience
              </p>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-5xl font-bold">
                {siteData.projects}
              </h3>

              <p className="mt-3 text-gray-500">
                Projects Delivered
              </p>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-5xl font-bold">
                {siteData.clients}
              </h3>

              <p className="mt-3 text-gray-500">
                Happy Clients
              </p>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-5xl font-bold">
                100%
              </h3>

              <p className="mt-3 text-gray-500">
                Creative Commitment
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}