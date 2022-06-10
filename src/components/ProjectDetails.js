import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data";

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div>
      This is project details {id}
      {projectsData.map((p) => p.name)}
    </div>
  );
};

export default ProjectDetails;
