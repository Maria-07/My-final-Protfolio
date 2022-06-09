import React from "react";
import { Link } from "react-router-dom";

// import img
import Image from "../assets/img/professional.png";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Shanjida Rahman Maria
              </h2>
              <p className="mb-4 text-accent">
                MERN STACK DEVELOPER || FRONT END DEVELOPER || FULL STACK
                DEVELOPER || REACT DEVELOPER
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am currently developing myself as a MERN Stack Developer. I
                feel comfortable working with React. My ultimate goal is to
                establish myself as an expert developer in this software field.
                I'm looking for a perfect platform to hone my skills in
                development.
                <br /> <br /> I am obsessed with making things better. I have an
                extraordinarily creative mind and I know how to use my
                creativity in the right ways. I'm very passionate about my work
                and try hard to fulfill my duties sincerely.
              </p>
            </div>
            <button className="btn btn-md bg-accent text-primary hover:text-accent hover:bg-secondary-hover transition-all">
              <a href="mailto:maria.shanjida07@gmail.com">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
