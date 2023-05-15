// import react
import React from 'react';
import resume from './assets/Profile.pdf'
import styled from 'styled-components'

const navigation = styled.nav`
/* Common styles */
  font-size: 4.4rem;

  /* Media query for screens with max-width of 768px */
  @media (max-width: 768px) {
    /* Custom styles for small screens */
    font-size: 3rem;
  }
`;

// create a function to render the header section. 
// include my name on the top-left and a nav bar on the top-right
// use bootstrap for style and spacing
function Header() {
    return (
        <header className='d-flex justify-content-between'>
            <h3 className='pt-3'>Franklyn Suriel</h3>
            <navigation id="navbar-example2" className="navbar navbar-light px-3 ">
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
                        <a className="nav-link text-dark" href={resume}>Resume</a>
                    </li>
                </ul>
            </navigation>
        </header>
    );
}

// export Header
export default Header;