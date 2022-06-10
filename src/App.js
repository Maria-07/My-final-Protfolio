import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProjectDetails from "./components/ProjectDetails";

// import components
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white relative">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/project/:id"
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
