import React from "react";
import About from "./About";
import BackTopBtn from "./BackTopBtn";
import Brands from "./Brands";
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
      <Header />
      <Hero />
      <Skills />
      {/* <Brands /> */}
      <About />

      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default Home;
