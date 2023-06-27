import React from "react";
import resume from '../assets/Resume.pdf';
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;


  a {
    padding: 18px 10px;
  }

    @media (max-width: 768px) {

      flex-flow: column nowrap;
      background-color: #0D2538;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 150px;
      padding-top: 3.5rem;
      transition: transform 0.6s easy-in-out;
      
      a {
        color: #fff;
      }
    }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={ open } >
      <li className="nav-item">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li>
        <a className="nav-link" href="#aboutMe">About Me</a>
      </li>
      <li >
        <a className="nav-link" href="#work">Portfolio</a>
      </li>
      <li >
        <a className="nav-link" href="#contactMe">Contact Me</a>
      </li>
      <li >
        <a className="nav-link" href={resume}>Resume</a>
      </li>
    </Ul >
  )
}

export default RightNav