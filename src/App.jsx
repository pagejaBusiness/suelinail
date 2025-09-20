import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Gallery from "./components/Gallery";

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
      <section id="gallery">
        <Gallery />
      </section>
    </div>
  );
}

export default App;
