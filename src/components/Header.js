
import React from 'react';
// import logo from './frankLogo.png'

function Header() {
    return (
        <header className='d-flex justify-content-end sticky-top'>
            {/* <img style={styles.logo}  src={logo} alt="Logo" />*/}
            <nav id="navbar-example2" className="navbar navbar-light px-3 fs-5">
                <ul className="nav nav-pills">
                    <li class="nav-item">
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
                        <a className="nav-link text-dark" href="#aboutMe">Resume</a>
                    </li>                    
                </ul>
            </nav>
            
        </header>

    );
}

export default Header;