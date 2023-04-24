import React from "react";
import githubIcon from './pictures/github-original.svg'
import linkedin from './pictures/linkedin-original.svg'
const styles = {
    icon: {
        width: '100px'
    },
    height: {
        height: '300px'
    }
}

function ContactMe() {
    return (
        <footer id="contactMe" className="row m-5" style={styles.height}>
            <h1 className="text-center" >Contact Me</h1>
            <div className=' d-flex justify-content-center'>
                <a href="https://github.com/FranklynSuriel">
                    <img src={githubIcon} alt="github icon" style={styles.icon} />
                </a>
                <a href="https://github.com/FranklynSuriel">
                    <img src={linkedin} alt="linkedin icon" style={styles.icon} />
                </a>
            </div>
        </footer>
    )
}

export default ContactMe;