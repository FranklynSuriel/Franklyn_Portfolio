
import React from 'react';
// import logo from './frankLogo.png'

function Header() {
    return (
        <header className='d-flex justify-content-end sticky-top'>
            {/* <img style={styles.logo}  src={logo} alt="Logo" />*/}
            <nav className='mx-3 pt-5'>
                <ul className='d-flex flex-wrap list-unstyled fs-4'>
                    {/* link to About me section */}
                    <li className='mx-3'>
                        <a className='text-dark' href="#home">Home</a>
                    </li>
                    <li className='mx-3'>
                        <a className='text-dark' href="#aboutMe">About Me</a>
                    </li>
                    {/* link to Work section */}
                    <li className='mx-3'>
                        <a className='text-dark' href="#work">My Projects</a>
                    </li>
                    {/* link to Contact me section */}
                    <li className='mx-3'>
                        <a className='text-dark' href="#contactMe">Contact Me</a>
                    </li>
                    {/* link to Linkedin webpage */}
                    <li className='mx-3'>
                        <a className='text-dark' href="https://www.linkedin.com/in/franklynsuriel/">Linkedin</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;