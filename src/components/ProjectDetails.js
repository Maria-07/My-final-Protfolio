import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data";
import Header from "./Header";
import { FiGithub } from "react-icons/fi";

const ProjectDetails = () => {
  const { id } = useParams();
  // const [project, setProject] = useState({});
  const my = projectsData.find((element) => element.id === id);
  console.log(my);
  return (
    <>
      {" "}
      <Header page={"project"} />
      <div className="bg-black">
        <div className="container mx-auto">
          <h2 className="pt-32 mb-8 text-4xl font-medium text-center">
            project
          </h2>
          <div>
            <div className="flex flex-wrap gap-5 py-16 ">
              <img className=" h-72" src={my.img1} alt="" />
              <img className=" h-72" src={my.img2} alt="" />
              <img className=" h-72" src={my.img3} alt="" />
              <div>
                <p className="py-3 px-8 text-xl  font-medium text-accent border-2 ml-56 mt-32 hover:bg-accent-hover hover:text-white">
                  {" "}
                  <a href={my.link}>Preview</a>
                </p>
              </div>
            </div>
            <hr />
            <div>
              <h2 className="text-accent py-3 font-medium text-3xl">
                {my.name}
              </h2>
              <div className="pb-16">
                <h1 className=" text-lg my-2">Description: </h1>
                <p>{my.description}</p>
              </div>
              <div className="pb-5">
                <h1 className=" text-lg my-2">Technology Used: </h1>
                <p className=" text-lg text-accent">{my.tools}</p>
              </div>

              <div className="pb-20">
                <p>
                  <a
                    className=" text-lg font-semibold hover:shadow-md hover:bg-accent-hover hover:text-accent bg-accent text-black py-2 px-7"
                    href={my.clink}
                  >
                    Code
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
