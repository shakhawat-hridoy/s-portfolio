import React from "react";

const Project = ({ project }) => {
  console.log(project.img);
  return (
    <div>
      <div class="card  text-white shadow-xl min-h-full">
        <figure>
          <img className="p-4 lg:max-w-sm " src={project?.img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="text-2xl font-bold">{project.name}</h2>

          <p className="text-primary text-xl ">{project.description}</p>
          <div className="ml-8 my-4">
            <ul>
              <li>{project.points.point1}</li>
              <li>{project.points.point2}</li>
              <li>{project.points.point3}</li>
            </ul>
          </div>

          <div>
            <p>Technologies Used:</p>
            <div className="ml-12 my-2">
              {project.technologies.map((technology) => (
                <div class="badge badge-info badge-outline mx-1">
                  <small className="text-white">{technology}</small>
                </div>
              ))}
            </div>
          </div>

          <div class="card-actions justify-end">
            {/* universal  */}
            <a
              target="_blank"
              class="btn btn-primary btn-xs sbtn-sm"
              href={project.live_link}
            >
              Live
            </a>

            {/* conditional */}
            {project.type === "full" ? (
              <>
                <a
                  target="_blank"
                  class="btn btn-primary btn-xs sbtn-sm"
                  href={project.git_client}
                >
                  Git-Client
                </a>
                <a
                  target="_blank"
                  class="btn btn-primary btn-xs sbtn-sm"
                  href={project.git_server}
                >
                  Git-Server
                </a>
              </>
            ) : (
              <a
                target="_blank"
                class="btn btn-primary btn-xs sbtn-sm"
                href={project.git_link}
              >
                Github
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
