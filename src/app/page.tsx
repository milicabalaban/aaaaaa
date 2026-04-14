import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story index={0} anchorId="story" />
        <About />
        <Story index={1} />
        <Services />
        <CaseStudies />
        <Story index={2} />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
