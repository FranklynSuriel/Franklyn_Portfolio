// import react and icons
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";
import githubIcon from "./pictures/github-original.svg";
import linkedin from "./pictures/linkedin-original.svg";
import mail from "./pictures/mail.svg";

// set icon size and section height
const styles = {
  icon: {
    width: "60px",
  },
  height: {
    height: "200px",
  },
  contactMe: {
    background: "#FE9000",
  },
};

function ContactMe() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !fullName || !message) {
      setErrorMessage("Email, name, or message is not valid");
      return;
    }

    emailjs
      .sendForm(
        "service_bhy996m",
        "template_vxsdzf9",
        form.current,
        "6Pa3MRGA0UbxP5RKe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setFullName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "fullName") {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (inputValue.trim() === "") {
      setErrorMessage(`${inputType} is required`);
    } else {
      setErrorMessage("");
    }
  };

  // create a function to manage contact me section
  // set the title and create links to my github and linkedin
  return (
    <div id="contactMe" style={styles.contactMe} className="row">
      <h1 className="text-center pt-5">Contact Me</h1>
      <h6 className="text-center pb-5">fsuriel@gmail.com</h6>
      <div className="container mb-3">
        <div className="d-flex justify-content-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form mb-5 col-7 col-md-5 col-lg-6 col-xl-3 col-xxl-3 "
          >
            <input
              value={fullName}
              name="fullName"
              onChange={handleInputChange}
              onBlur={handleInputChange}
              type="text"
              placeholder="Your Name"
              className="form-control mb-3"
              id="inputName"
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleInputChange}
              type="email"
              placeholder="Your Email"
              className="form-control mb-3"
              id="inputEmail"
            />
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleInputChange}
              type="textarea"
              placeholder="Message"
              className="form-control mb-3"
              id="inputMessage"
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
      <footer className="row p-4 mt-5" style={styles.height}>
        <div className=" d-flex justify-content-center">
          <a href="https://github.com/FranklynSuriel">
            <img src={githubIcon} alt="github icon" style={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/franklynsuriel/">
            <img src={linkedin} alt="linkedin icon" style={styles.icon} />
          </a>
          <a href="mailto:fsuriel@gmail.com">
            <img src={mail} alt="email icon" style={styles.icon} />
          </a>
        </div>
        <h6 className="text-center my-5">Made with ❤️ by Franklyn</h6>
      </footer>
    </div>
  );
}

// export ContactMe
export default ContactMe;
