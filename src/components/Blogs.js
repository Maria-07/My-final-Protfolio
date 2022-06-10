import React from "react";
import Header from "./Header";

import { blogs } from "../data";

const Blogs = () => {
  console.log(blogs);
  return (
    <>
      <Header page={"blog"} />
      <div className="bg-black">
        <div className="container mx-auto">
          <h2 className="pt-32 text-4xl font-medium text-center">Blog Part</h2>
          <article className="container p-5 mx-auto mt-16 ">
            {blogs.map((blog) => {
              return (
                <div className="blog shadow-gray-800 text-left w-full shadow-md my-8 p-5">
                  <h1 className=" text-3xl text-accent">{blog.question}</h1>
                  <p className=" text-lg my-10">
                    <span className=" font-semibold text-lg">
                      Answer : {blog.answer}
                    </span>{" "}
                  </p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </>
  );
};

export default Blogs;
