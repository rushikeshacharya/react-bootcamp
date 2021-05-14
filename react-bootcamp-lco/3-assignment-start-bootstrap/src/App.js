import React from "react";
import Navbar from "./Navbar";
import Masterhead from "./Masterhead";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Copywrite from "./Copywrite";
import Portfolio from "./Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <Masterhead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copywrite />
    </div>
  );
};

export default App;
