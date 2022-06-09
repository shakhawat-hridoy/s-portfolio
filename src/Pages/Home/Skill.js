import React from "react";

const Skill = ({ skill }) => {
  return (
    <div>
      <div class="card shadow-xl text-white min-h-full">
        <figure class="px-10 pt-10">
          <div class="w-24 mask mask-squircle">
            <i className={skill.iconClass}></i>
            {/* <img src={skill.img} /> */}
          </div>
          {/* <img src={skill.img} alt="Shoes" class="rounded-xl" /> */}
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{skill.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Skill;
