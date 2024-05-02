import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header-main">
      <div className="header-container">
          <h1 className="header-title" onClick={() => navigate("/")}>
            Lubega.dev
          </h1>
          <div className="header-nav">
            <div className="header-title" onClick={() => navigate("/about")}>About</div>
            <div className="header-title" onClick={() => navigate("/projects")}>Project</div>
            <div className="header-title" onClick={() => navigate("/skills")}>Skills</div>
            <div className="header-title" onClick={() => navigate("/contact")}>Contact</div>
          </div>
      </div>
    </header>
  );
};

export default Header;
