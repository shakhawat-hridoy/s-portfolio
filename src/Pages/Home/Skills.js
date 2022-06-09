import React, { useEffect, useState } from "react";
import Skill from "./Skill";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-28">
      {skills.map((skill) => (
        <Skill skill={skill}></Skill>
      ))}
    </div>
  );
};

export default Skills;
