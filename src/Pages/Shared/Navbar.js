import React from "react";
import { Link } from "react-router-dom";
import monogram from "../../images/my monogram.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-accent text-white">
        <div className="navbar-start">
          <img className="h-12 w-20 -mr-2" src={monogram} alt="" />
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-bold -ml-8"
          >
            ossain
          </Link>
          <ul className="menu menu-horizontal">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            target="_blank"
            href="https://github.com/shakhawat-hridoy"
            className="mx-1 badge badge-primary"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shakhawat-hossain-hridoy-36b57b228"
            className="mx-1 badge badge-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
