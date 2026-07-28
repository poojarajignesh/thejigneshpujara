import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#111111] py-28 text-white">
      <div className="container-custom text-center">

        <span className="section-label">
          Contact
        </span>

        <h2 className="section-title mt-5 text-white">
          Let's Build Your
          <br />
          Brand Together.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Looking for a professional logo, branding, packaging or graphic design
          solution? Let's discuss your project.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <a
            href="https://wa.me/919374112062"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={20} />
            <span className="ml-2">WhatsApp</span>
          </a>

          <a
            href="tel:+919374112062"
            className="btn-outline border-white text-white hover:bg-white hover:text-black"
          >
            <Phone size={20} />
            <span className="ml-2">Call Me</span>
          </a>

          <a
            href="mailto:poojara.jignesh@gmail.com"
            className="btn-outline border-white text-white hover:bg-white hover:text-black"
          >
            <Mail size={20} />
            <span className="ml-2">Email</span>
          </a>

        </div>

      </div>
    </section>
  );
}