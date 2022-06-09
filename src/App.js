import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import BackTopBtn from "./components/BackTopBtn";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-white relative">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
};

export default App;
