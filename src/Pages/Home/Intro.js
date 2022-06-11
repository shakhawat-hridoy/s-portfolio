import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdobjdjo");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="bg-accent text-primary ">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address: </label>

        <input
          type="email"
          name="email"
          placeholder="email "
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <br />

        <label htmlFor="subject"> Email Subject: </label>
        <input
          type="text"
          name="subject"
          placeholder=" Subject"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <br />

        <label htmlFor="message"> Your Message: </label>
        <input
          type="text"
          name="message"
          placeholder=" message"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
