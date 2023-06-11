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
            <div className="header-title">Home</div>
            <div className="header-title">Resume</div>
            <div className="header-title">Skills</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
