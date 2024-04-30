import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.scss";
import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header-main">
      <div className="header-container">
        <nav className="header-nav">
          <h1 className="header-title" onClick={() => navigate("/")}>
            Copyright © 2023. All rights reserved
          </h1>
          <div className="footer-logos">
          <button className="banner-logo-btn" onClick={() => window.location.href=("https://www.linkedin.com/in/muhammad-lubega/")}><img className="footer-logo" src={linkedin}/></button>
           
            <button className="banner-logo-btn" onClick={() => window.location.href=("https://github.com/muhdlubega")}><img className="footer-logo" src={github}/></button>
             </div>
        </nav>
      </div>
    </header>
  );
};

export default Footer;
