import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header-main">
      <div className="header-container">
        <nav className="header-nav">
          <h1 className="header-title" onClick={() => navigate("/")}>
            Lubega.dev
          </h1>
          <div className="header-nav">
            <div className="header-title" onClick={() => navigate("/about")}>About</div>
            <div className="header-title" onClick={() => navigate("/projects")}>Project</div>
            <div className="header-title" onClick={() => navigate("/skills")}>Skills</div>
            <div className="header-title" onClick={() => navigate("/contact")}>Contact</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
