import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="mt-24" />
      <footer className="footer items-center p-4 text-neutral-content mt-24">
        <div className="items-center grid-flow-col">
          <p>
            {" "}
            &copy; Shakhawat Hossain - All right reserved{" "}
            {new Date().getFullYear()}
          </p>
        </div>

        {/* form section  */}
        {/* contact me  */}
        <div className="flex justify-center items-center">
          <div>
            <h2 className="font-bold text-center my-4 ">Contact Me</h2>
            <form
              action="https://formsubmit.co/551eab1b16c484228fba728bdffadc6d"
              method="POST"
            >
              {/* name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                class="input input-bordered input-primary w-full max-w-xs my-1"
              />

              {/* email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                class="input input-bordered input-primary w-full max-w-xs my-1"
              />

              {/* subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                class="input input-bordered input-primary w-full max-w-xs my-1"
              />

              {/* message */}
              <input
                type="text"
                name="message"
                placeholder="Type Your Message Here"
                class="input input-bordered input-primary w-full max-w-xs my-1"
              />
              <br />

              {/* send button */}
              <input
                type="submit"
                value="Send"
                class="input input-bordered btn-primary w-1/4 max-w-xs my-1"
              />
            </form>
          </div>
        </div>

        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
