import React from "react";

const Skill = ({ skill }) => {
  return (
    <div>
      <div className="card  shadow-xl min-h-full">
        <figure className="px-10 pt-10">
          <div className="w-16 mask mask-squircle">
            <img src={skill.img} />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{skill.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Skill;
