import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Strategy from "./components/Strategy";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Strategy />
      <Project />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
