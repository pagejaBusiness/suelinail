import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <section
        id="hero"
        className="pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-20"
      >
        <Herosection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
