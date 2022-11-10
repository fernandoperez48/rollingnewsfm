import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar({ clicked, handleClick }) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <NavContainer className={`${sticky ? "sticky" : ""} `}>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link onClick={handleClick} to="/">
            Home
          </Link>
          <Link onClick={handleClick} to="/features">
            Features
          </Link>
          <Link onClick={handleClick} to="/contact">
            Contact
          </Link>
          <Link onClick={handleClick} to="/about-us">
            About Us
          </Link>
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: var(--letters-color);
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: white;
      margin-top: 1rem;
      font-size: 2rem;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #333;
  top: -700px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
