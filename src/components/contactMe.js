// import react and icons
import React from "react";
import githubIcon from './pictures/github-original.svg'
import linkedin from './pictures/linkedin-original.svg'

// set icon size and section height
const styles = {
    icon: {
        width: '100px'
    },
    height: {
        height: '300px'
    }
}

// create a function to manage contact me section
// set the title and create links to my github and linkedin
function ContactMe() {
    return (
        <footer id="contactMe" className="row p-5" style={styles.height}>
            <h1 className="text-center pb-5" >Contact Me</h1>
            <div className=' d-flex justify-content-center'>
                <a href="https://github.com/FranklynSuriel">
                    <img src={githubIcon} alt="github icon" style={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/franklynsuriel/">
                    <img src={linkedin} alt="linkedin icon" style={styles.icon} />
                </a>
            </div>
        </footer>
    )
}

// export ContactMe
export default ContactMe;