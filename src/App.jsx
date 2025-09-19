import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Herosection />
      </section>
    </div>
  );
}

export default App;
