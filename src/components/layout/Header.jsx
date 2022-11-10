import React, { useState } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import BurguerButton from "./BurguerButton";
import Logo from "../../assets/Logo.png";

const Header = ({ favsNumber }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };

  return (
    <header className="components">
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
        <div className="favs">☆{favsNumber}</div>
      </div>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <h3>LOGIN</h3>
      </div>
      <Navbar
        className="navbar"
        favsNumber={favsNumber}
        clicked={clicked}
        handleClick={handleClick}
      />
    </header>
  );
};

export default Header;
