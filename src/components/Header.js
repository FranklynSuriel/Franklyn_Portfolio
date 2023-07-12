// import react
import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Nav/Burger";
import '../styles/Navbar.css'

const Nav = styled.nav`
  width: 100%;
  height: 65px;

  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 5px;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    .logo {
      font-size: 1.3rem;
    }
  }
`;

// create a function to render the header section.
// include my name on the top-left and a nav bar on the top-right
// use bootstrap for style and spacing
function Header() {
  const [fix, setFix] = useState(false);

  function fixedHeader() {
    if (window.scrollY > 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", fixedHeader);

  return (
    <header className={fix ? "fixed shadow" : "navbar"}>
      <Nav>
        <div className="logo">Franklyn Suriel</div>
        <Burger />
      </Nav>
    </header>
  );
}

// export Header
export default Header;
