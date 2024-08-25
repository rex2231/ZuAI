import React from "react";
import Logo from "../img/logo.png";
import { FaHeart} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
        <img src={Logo} alt="logo" />
        <p className="footer-text">
          Made with <FaHeart style={{ color: "red" }} /> 
        </p>
    </footer>
  );
}

export default Footer;
