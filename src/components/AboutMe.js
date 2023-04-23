import React from 'react';
import myPic from './franklyn.png'

const styles = {
    ownerImg: {
        height: '350px',
        width: '300px'
    },
    p: {
        fontSize: '1.4rem'
    }
}


function Aboutme() {
    return (
        <div className="row justify-content-center ">
            <div>
                <h2 id='aboutMe'>About Me</h2>
                <img className='rounded-5 col-3' style={styles.ownerImg} src={myPic} alt="Portfolio owner" />
                <div className="col-6">
                    <p style={styles.p}>Greetings! I am a full-stack web developer, and my name is Franklyn Suriel. Since I started
                        studying web development, I have been constantly fascinated by the world of web technologies.I am proficient in HTML, CSS, and JavaScript, and I have experience in using Bootstrap to create
                        responsive, mobile-first designs. I also have experience working with Web APIs and Third-Party APIs
                        to develop interactive web applications.
                    </p>
                </div>
            </div>
        </div>

    )
};

export default Aboutme;