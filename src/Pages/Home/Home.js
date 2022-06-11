import React from "react";
import Projects from "../Projects/Projects";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Contact from "./Contact";
import Intro from "./Intro";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      {/* <Intro></Intro> */}
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
