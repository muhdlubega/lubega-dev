import React from "react";
import { useNavigate } from "react-router-dom";
import github from '../../assets/github-logo.svg';
import linkedin from '../../assets/linkedin-logo.svg';
import "./Footer.scss";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-main">
      <div className="footer-container">
          <h1 className="footer-title" onClick={() => navigate("/")}>
            Copyright © 2023. All rights reserved
          </h1>
          <div className="footer-logos">
          <button className="footer-logo-btn" onClick={() => window.location.href=("https://www.linkedin.com/in/muhammad-lubega/")}><img className="footer-logo" src={linkedin}/></button>
           
            <button className="footer-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega")}><img className="footer-logo" src={github}/></button>
             </div>
      </div>
    </footer>
  );
};

export default Footer;
