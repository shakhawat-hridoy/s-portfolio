import React from "react";
import Projects from "../Projects/Projects";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Intro from "./Intro";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Intro></Intro> */}
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;
