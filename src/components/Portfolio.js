import React from "react";

// import components
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My latest works
          </h2>
          <p className="subtitle">
            <span className="text-accent font-medium">
              My developer skills :{" "}
            </span>
            Comfortable: HTML, CSS, JavaScript, Bootstrap, Tailwind CSS,
            DaisyUI, React Js, Firebase Authentication, Node js, Express Js,
            MongoDB, Heroku.
            <br /> <span className="text-accent font-medium">
              Familiar :
            </span>{" "}
            React Native, Next js, Google Map, JWT, Stripe, MUI. <br />
            <span className="text-accent font-medium"> Tools : </span>
            Github, Chrome Dev Tool, Firebase, Netlify, Figma
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
