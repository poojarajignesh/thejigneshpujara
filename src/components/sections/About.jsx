import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section id="about" className="bg-[#fafafa] py-28">
      <div className="container-custom">

        <div className="max-w-4xl">
          <AboutContent />
        </div>

      </div>
    </section>
  );
}