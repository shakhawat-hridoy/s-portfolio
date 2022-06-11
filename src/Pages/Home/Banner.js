import React from "react";
import photo from "../../images/cx.jpg";

const Banner = () => {
  return (
    <div className="bg-accent p-16 flex lg:flex-row sm:flex-col-reverse justify-center items-center w-full">
      {/* Description */}
      <div className="3/4">
        <h3 className="text-5xl font-bold text-white">Shakhawat Hossain</h3>
        <h2 className="text-3xl font-bold text-slate-500">
          Front-End Developer
        </h2>
        <p className="text-slate-500">
          Self motivated learner. Looking forward to continue the journey of
          developement and aquire some knowledge about professional culture and
          environment.
        </p>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1AXEu7H-NsDwnxm08YmItO8LyjkJHj8Ix/view?usp=sharing"
        >
          <button className="btn btn-outline btn-primary  my-8">
            Get My Resume
          </button>
        </a>
      </div>

      {/* image */}
      <div className="w-1/4 flex items-center justify-center sm:mb-12">
        <div className="avatar">
          <div className="w-64 mask mask-hexagon">
            <img src={photo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
