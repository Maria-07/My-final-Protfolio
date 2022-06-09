import React from "react";

// import woman image
import WomanImg from "../assets/img/myself-hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col  items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px]">
              Hey, I'm Shanjida Rahman Maria!
            </p>
            <h1 className="text-6xl font-bold">
              I'm MERN Stack Developer. <br />
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I am obsessed with making things and more to make things better. I
              have an extraordinarily creative mind and I know how to use my
              creativity in the right ways.
            </p>
            <button className="btn btn-md bg-accent-hover hover:bg-accent hover:text-black md:btn-lg transition-all">
              <a
                href="https://drive.google.com/file/d/1dOzINt66MP807SftEGz0W3DhsUjEquHp/view?usp=sharing"
                download
              >
                My Resume
              </a>
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
