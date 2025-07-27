import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CustomCursor from "./components/CustomCursor";
import AutoScrollManager from "./components/AutoScrollManager";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative cursor-none">
      <CustomCursor />
      <AutoScrollManager />

      <main className="bg-black text-white font-sans scroll-smooth">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
