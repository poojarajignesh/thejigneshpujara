import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f8f8f8] py-28"
    >
      <div className="container-custom">

        <div className="mb-16">

          <span className="uppercase tracking-[4px] text-sm text-yellow-600">
            Contact
          </span>

          <h2 className="mt-4 text-5xl">
            Let's Build Something Great
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have a project in mind? Whether it's branding,
            packaging, social media or print design,
            let's create something impactful together.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex gap-5">

              <Mail className="text-yellow-600" />

              <div>

                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-gray-600">
                  poojara.jignesh@gmail.com
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <Phone className="text-yellow-600" />

              <div>

                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="text-gray-600">
                  +91 93741 12062
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <MapPin className="text-yellow-600" />

              <div>

                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-gray-600">
                  Ahmedabad, Gujarat, India
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <button
              className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-white transition hover:bg-yellow-600"
            >
              Send Message

              <ArrowRight size={18} />

            </button>

          </form>

        </div>

      </div>
    </section>
  );
}