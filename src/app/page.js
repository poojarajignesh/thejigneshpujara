import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import WhyChooseMe from "../components/sections/WhyChooseMe";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}