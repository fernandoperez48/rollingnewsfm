import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import Facebook from "../../assets/Facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="components">
      <div container-footer1>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <a href="https://www.elcohetealaluna.com/terminos-y-condiciones/">
            Terminos y condiciones
          </a>
        </div>
        <div>
          <a href="https://www.elcohetealaluna.com/politica-de-privacidad/">
            Politica de Privacidad
          </a>
        </div>
        <div className="social-media">
          <img src={Facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      <div className="copyright">
        <span>
          Copyright © 2022 - Rolling News. Todos los derechos reservados -
          Registro de propiedad en trámite
        </span>
      </div>
    </footer>
  );
};

export default Footer;
