import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="px-28 py-24 bg-neutral">
      {/* section header  */}

      <h2 className="font-bold text-2xl text-center text-white  py-4 ">
        Contact Me
      </h2>

      <div
        className="
      mt-8  text-center flex justify-center justify-between items-center"
      >
        <div className="w-1/2 lg:mx-12 hidden lg:block">
          <img src="https://www.devum.com/hubfs/contact-us.svg" alt="" />
        </div>

        <div className="lg:w-1/2 lg:mx-12">
          <form
            action="https://formsubmit.co/551eab1b16c484228fba728bdffadc6d"
            method="POST"
            target="_blank"
          >
            {/* name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered input-primary w-full   my-1"
            />

            {/* email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input input-bordered input-primary w-full   my-1"
            />

            {/* subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="input input-bordered input-primary w-full  my-1"
            />

            {/* message */}
            <input
              type="text"
              name="message"
              placeholder="Type Your Message Here"
              required
              className="input input-bordered input-primary w-full   my-1"
            />
            <br />

            {/* send button */}
            <div className="text-center">
              <input
                type="submit"
                value="Send"
                className="input input-bordered btn-primary w-1/4   my-1"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
