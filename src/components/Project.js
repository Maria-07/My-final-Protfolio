import React from "react";
import { Link } from "react-router-dom";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <Link to={`/project/${item.id}`}>
          <img className="rounded-2xl" src={item.image} alt="" />
        </Link>
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md">
        Explore this project .{" "}
        <a className=" font-bold hover:text-accent" href={item.link}>
          Live Link
        </a>
      </p>
    </div>
  );
};

export default Project;
