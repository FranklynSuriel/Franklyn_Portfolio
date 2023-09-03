// import React and necessary files
import React from 'react';
import myPic from './pictures/franklyn.png'
import '../styles/aboutMe.css'


// create a function to render the about me section which included a picture and a paragraph. make them be side to side
function Aboutme() {
    return (
        // use bootstrap to set display flex and justify content center
        // add an about me id tag to link to the nav bar
        <div id='aboutMe' className="row" >
                <h2 className='text-center'>About Me</h2>
            <div>
                <div className=" d-flex flex-wrap justify-content-center pt-4">
                    <img id='ownerImg'  src={myPic} alt="Portfolio owner" />
                    <p >Greetings! Welcome to my portfolio, my name is Franklyn.
                        I am a full stack web developer graduated from the UPenn full stack web developer.<br/><br/>
                        I am proficient in HTML, CSS, and JavaScript, and I have experience in using Bootstrap to create responsive, mobile-first designs.
                        I also have experience working with Web APIs and Third-Party APIs to develop interactive web applications.<br/><br/>
                        Strengths in teamwork, creativity, time management and building projects from ideation to completion,
                        ensuring a smooth and impactful user journey.
                    </p>
                </div>
            </div>
        </div>
    )
};

// export Aboutme
export default Aboutme;