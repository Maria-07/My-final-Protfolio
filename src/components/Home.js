import React from "react";
import About from "./About";
import BackTopBtn from "./BackTopBtn";
import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header page={"home"} />
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />

      <BackTopBtn />
    </div>
  );
};

export default Home;
