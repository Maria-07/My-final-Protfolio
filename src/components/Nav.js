import React from "react";

// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";
import { Link as DefaultLink } from "react-router-dom";

const Nav = ({ page }) => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer"
              key={idx}
            >
              {page === "home" ? (
                <Link
                  to={item.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="transition-all duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <DefaultLink
                  to={`/#${item.href}`}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="transition-all duration-300"
                >
                  {item.name}
                </DefaultLink>
              )}
            </li>
          );
        })}
        <li className="text-white hover:text-accent cursor-pointer">
          <DefaultLink to="/blogs" activeClass="active">
            Blogs
          </DefaultLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
