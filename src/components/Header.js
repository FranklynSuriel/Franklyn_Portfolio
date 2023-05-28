// import react
import React from 'react';
import resume from './assets/Resume.pdf'

// create a function to render the header section. 
// include my name on the top-left and a nav bar on the top-right
// use bootstrap for style and spacing
function Header() {
    return (
        <header className='d-flex justify-content-between'>
            <h3 className='p-3'>Franklyn Suriel</h3>
            <div id="navbar-example2" className="navbar navbar-light px-3 ">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#aboutMe">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#work">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#contactMe">Contact Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href={resume}>Resume</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

// export Header
export default Header;