import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Rankings from "@/components/Rankings";
import ContentStyle from "@/components/ContentStyle";
import Services from "@/components/Services";
import Collaborations from "@/components/Collaborations";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import MediaAppearances from "@/components/MediaAppearances";
import RateCard from "@/components/RateCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Rankings />
        <ContentStyle />
        <Services />
        <Collaborations />
        <CaseStudies />
        <Testimonials />
        <MediaAppearances />
        <RateCard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
