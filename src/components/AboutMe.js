// import React and necessary files
import React from 'react';
import myPic from './pictures/franklyn.png'


const styles = {
    // style the about me pic 
    ownerImg: {
        height: '350px',
        width: '300px'
    },
    // style the paragraph font size and align
    p: {
        fontSize: '1.4rem',
        textAlign: 'justify'
    },
    aboutMe: {
        padding: '0 0 200px 0',
        background: '#006ba6'
    }
}

// create a function to render the about me section which included a picture and a paragraph. make them be side to side
function Aboutme() {
    return (
        // use bootstrap to set display flex and justify content center
        // add an about me id tag to link to the nav bar
        <div id='aboutMe' className=" row d-flex justify-content-center pt-5" style={styles.aboutMe}>
            <div>
                <h2 className='text-center'>About Me</h2>
                <div className=" d-flex flex-wrap justify-content-center p-5">
                    <img className='rounded-5 col-12 col-md-4 m-3' style={styles.ownerImg} src={myPic} alt="Portfolio owner" />
                    <p className='col-12 col-md-6 m-4' style={styles.p}>Greetings! Welcome to my portfolio, my name is Franklyn.
                        I am a full stack web developer graduated from the UPenn full stack web developer.
                        I am proficient in HTML, CSS, and JavaScript, and I have experience in using Bootstrap to create responsive, mobile-first designs.
                        I also have experience working with Web APIs and Third-Party APIs to develop interactive web applications.
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