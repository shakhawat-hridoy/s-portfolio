import React, { useEffect, useState } from "react";
import perfumo from "../../images/perfumo full ss.png";
import photographer from "../../images/photographer full ss.png";
import watch from "../../images/watch-review full ss.png";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("Projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <h2 className="text-white text-2xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            perfumo={photographer}
          ></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
