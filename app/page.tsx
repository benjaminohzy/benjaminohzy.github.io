import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import AiWork from "./components/AiWork";
import Projects from "./components/Projects";
import Coaching from "./components/Coaching";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <AiWork />
        <Projects />
        <Coaching />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
