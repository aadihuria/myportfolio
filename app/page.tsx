import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen text-[#1B2130]">
      <div className="bg-field" aria-hidden="true" />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Interests />
        <Footer />
      </div>
    </main>
  );
}
