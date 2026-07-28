import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import FloatingContact from "../components/ui/FloatingContact";

export default function Home() {
  return (
    <>
      <Navbar />

<Hero />

<Portfolio />

<About />

<Contact />

<Footer />

<FloatingContact />
    </>
  );
}