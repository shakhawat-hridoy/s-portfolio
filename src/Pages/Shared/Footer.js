import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-accent items-center text-neutral-content px-16 py-8  ">
        <div className="items-center grid-flow-col">
          <p>
            &copy; Shakhawat Hossain {new Date().getFullYear()}
            <br /> All right reserved
          </p>
        </div>

        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div>
            <p className="text-neutral-contenttext-xl text font-bold">
              More Contact Info
            </p>
            <p className="my-2">
              <span>
                <b>Phone: </b>
                +880-1521548709
              </span>
              <br />
              <span>
                <b>Email: </b>
                shakhawat.hridoy56@gmail.com
              </span>
              <br />
              <span>
                <b>Location: </b> Chittagong, Bangladesh
              </span>
            </p>
          </div>
          {/* <a></a>
          <a></a>
          <a target="_blank" href="https://www.facebook.com/shakhawat56/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
