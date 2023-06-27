// import react
import React from 'react';
import styled from 'styled-components';
import Burger from './Nav/Burger'

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo{
        padding:15px;
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        .logo {
            font-size: 1.3rem
        }
    }
    
`

// create a function to render the header section. 
// include my name on the top-left and a nav bar on the top-right
// use bootstrap for style and spacing
function Header() {
    return (
        <header className='fixed-top bg-secondary z-3'>
        <Nav>
            <div className='logo'>
                Franklyn Suriel
            </div>
            <Burger />
        </Nav>
        </header>
    );
}

// export Header
export default Header;