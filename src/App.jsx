import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Experience />
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
