// import react and icons
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"
import { validateEmail } from "../utils/helpers";
import githubIcon from './pictures/github-original.svg'
import linkedin from './pictures/linkedin-original.svg'


// set icon size and section height
const styles = {
    icon: {
        width: '100px'
    },
    height: {
        height: '200px'
    }
}

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

        emailjs.sendForm(
            'service_bhy996m',
            'template_vxsdzf9',
            form.current,
            '6Pa3MRGA0UbxP5RKe'
        )
            .then((result) => {
                console.log(result.text);
                setEmail("");
                setFullName("");
                setMessage("");
            }, (error) => {
                console.log(error.text);
            });
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
            setMessage(inputValue)
        }

        if (inputValue.trim() === "") {
            setErrorMessage(`${inputType} is required`)
        } else {
            setErrorMessage('')
        }
    };

    // create a function to manage contact me section
    // set the title and create links to my github and linkedin
    return (
        <div id="contactMe">
            <h1 className="text-center pb-5" >Contact Me</h1>
            <div className="container mb-3">
                <div className="d-flex justify-content-center"  >
                    <form ref={form} onSubmit={sendEmail} className="form mb-5 w-25">
                        <input
                            value={fullName}
                            name="fullName"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            type="text"
                            placeholder="Your Name"
                            className="form-control mb-3"
                        />
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            type="email"
                            placeholder="Your Email"
                            className="form-control mb-3"
                        />
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            onBlur={handleInputChange}
                            type="textarea"
                            placeholder="Message"
                            className="form-control mb-3"
                        />
                        <button className="btn btn-primary" type="submit" >
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
                <div className=' d-flex justify-content-center'>
                    <a href="https://github.com/FranklynSuriel">
                        <img src={githubIcon} alt="github icon" style={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/franklynsuriel/">
                        <img src={linkedin} alt="linkedin icon" style={styles.icon} />
                    </a>
                </div>
            </footer>
        </div>
    )
}

// export ContactMe
export default ContactMe;