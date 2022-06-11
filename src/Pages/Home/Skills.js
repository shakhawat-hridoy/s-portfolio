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
    <div className="text-white py-24 bg-neutral px-40">
      <h2 className="text-2xl font-bold">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-36">
        {skills.map((skill) => (
          <Skill key={skill.id} skill={skill}></Skill>
        ))}
      </div>
    </div>
  );
};

export default Skills;
