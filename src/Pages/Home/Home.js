import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Intro from "./Intro";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Intro></Intro>
      <Skills></Skills>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
